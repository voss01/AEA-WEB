import { auth } from "@/auth";
export async function getOutlookInbox() {
  const session = await auth();
  
  if (!session?.accessToken) {
    console.error("ERRORE: Token di accesso mancante nella sessione utente.");
    return [];
  }

  try {
    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/messages?$top=10&$select=id,subject,bodyPreview,receivedDateTime,isRead,webLink,from",
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("ERRORE MICROSOFT GRAPH OUTLOOK:", errorData);
      return [];
    }

    const data = await response.json();
    return data.value || [];
  } catch (error) {
    console.error("ERRORE DI RETE CHIAMANDO OUTLOOK:", error);
    return [];
  }
}

export async function getUserOneDriveData() {
  const session = await auth();

  if (!session?.accessToken) {
    return { items: [], driveWebUrl: "https://www.office.com/launch/onedrive" };
  }

  const headers = {
    Authorization: `Bearer ${session.accessToken}`,
  };

  try {
    const [driveInfoRes, rootRes, sharedRes, groupsRes] = await Promise.all([
      fetch("https://graph.microsoft.com/v1.0/me/drive?$select=webUrl", { headers }),
      fetch("https://graph.microsoft.com/v1.0/me/drive/root/children?$select=id,name,webUrl,folder,file,lastModifiedDateTime", { headers }),
      fetch("https://graph.microsoft.com/v1.0/me/drive/sharedWithMe?$select=id,name,webUrl,folder,file,lastModifiedDateTime", { headers }),
      fetch("https://graph.microsoft.com/v1.0/me/memberOf/microsoft.graph.group?$select=id,displayName", { headers }),
    ]);

    let driveWebUrl = "https://www.office.com/launch/onedrive";
    if (driveInfoRes.ok) {
      const driveInfo = await driveInfoRes.json();
      if (driveInfo.webUrl) driveWebUrl = driveInfo.webUrl;
    }

    const combinedItems: any[] = [];
    const seenIds = new Set<string>();

    if (rootRes.ok) {
      const rootData = await rootRes.json();
      for (const item of rootData.value || []) {
        if (!seenIds.has(item.id)) {
          seenIds.add(item.id);
          combinedItems.push({ ...item, sourceType: "Personale" });
        }
      }
    }

    if (sharedRes.ok) {
      const sharedData = await sharedRes.json();
      for (const item of sharedData.value || []) {
        if (!seenIds.has(item.id)) {
          seenIds.add(item.id);
          combinedItems.push({ ...item, sourceType: "Condiviso" });
        }
      }
    }

    if (groupsRes.ok) {
      const groupsData = await groupsRes.json();
      const groupPromises = (groupsData.value || []).map(async (group: any) => {
        const gDriveRes = await fetch(
          `https://graph.microsoft.com/v1.0/groups/${group.id}/drive?$select=id,webUrl,lastModifiedDateTime`,
          { headers }
        );
        if (gDriveRes.ok) {
          const gDrive = await gDriveRes.json();
          return {
            id: gDrive.id || group.id,
            name: group.displayName,
            webUrl: gDrive.webUrl,
            lastModifiedDateTime: gDrive.lastModifiedDateTime,
            folder: {}, // Lo trattiamo visivamente come cartella/gruppo
            sourceType: "Gruppo",
          };
        }
        return null;
      });

      const groupDrives = await Promise.all(groupPromises);
      for (const gItem of groupDrives) {
        if (gItem && !seenIds.has(gItem.id)) {
          seenIds.add(gItem.id);
          combinedItems.push(gItem);
        }
      }
    }

    return { items: combinedItems, driveWebUrl };
  } catch (error) {
    console.error("ERRORE DI RETE CHIAMANDO ONEDRIVE:", error);
    return { items: [], driveWebUrl: "https://www.office.com/launch/onedrive" };
  }
}