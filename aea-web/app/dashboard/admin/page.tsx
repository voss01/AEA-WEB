import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getOutlookInbox, getUserOneDriveData } from "@/lib/microsoft-graph";
import { logoutUser } from "@/lib/auth-actions";
import { Button } from "@/components/ui/button";
import {
  Mail,
  FolderKanban,
  Folder,
  FileText,
  PlusCircle,
  Edit3,
  X,
  LogOut,
  ExternalLink,
} from "lucide-react";

interface OutlookEmail {
  id: string;
  subject: string;
  bodyPreview: string;
  receivedDateTime: string;
  isRead: boolean;
  webLink?: string;
  from?: {
    emailAddress?: {
      name?: string;
      address?: string;
    };
  };
}

interface OneDriveItem {
  id: string;
  name: string;
  webUrl: string;
  lastModifiedDateTime?: string;
  folder?: { childCount?: number };
  file?: { mimeType?: string };
  sourceType?: string;
}

export default async function AdminPersonalAreaPage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/");
  }

  if (session.user.role !== "admin") {
    redirect("/dashboard");
  }

  const [emails, oneDriveData]: [
    OutlookEmail[],
    { items: OneDriveItem[]; driveWebUrl: string }
  ] = await Promise.all([
    getOutlookInbox().catch(() => []),
    getUserOneDriveData().catch(() => ({
      items: [],
      driveWebUrl: "https://www.office.com/launch/onedrive",
    })),
  ]);

  const oneDriveItems = oneDriveData.items;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header className="w-full bg-white border-b border-gray-200 px-3 sm:px-6 py-3 sm:py-4 flex flex-nowrap items-center justify-between gap-2 sticky top-0 z-40 shadow-sm">
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/logos/aea-logo.png"
            alt="AEA Polimi Logo"
            width={150}
            height={150}
            className="w-16 sm:w-24 h-auto object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          <span className="text-xs sm:text-lg md:text-xl font-black tracking-wider uppercase text-gray-900 truncate">
            ADMIN PERSONAL AREA
          </span>

          <form action={logoutUser} className="shrink-0">
            <Button
              type="submit"
              size="sm"
              className="h-8 sm:h-9 px-3 sm:px-4 flex items-center gap-1.5 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline text-xs sm:text-sm">Logout</span>
            </Button>
          </form>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 uppercase">
            WELCOME BACK {session.user.name || "ADMIN"}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          {/* COLONNA 1: OUTLOOK INBOX */}
          <section className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden h-[500px] lg:h-[650px]">
            <div className="px-5 py-4 border-b border-gray-100 bg-blue-50/50 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-blue-600" />
                <h2 className="font-bold text-gray-800">Outlook Inbox</h2>
              </div>
              <a
                href="https://outlook.office.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-md hover:bg-blue-50 transition-colors shadow-2xs"
              >
                <span>View all</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-gray-100 p-2">
              {emails.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
                  <Mail className="w-10 h-10 mb-2 opacity-40" />
                  <p className="text-sm font-medium">Nessuna email trovata</p>
                  <p className="text-xs mt-1">
                    Controlla che il permesso Mail.Read sia attivo su Azure.
                  </p>
                </div>
              ) : (
                emails.map((email) => (
                  <a
                    key={email.id}
                    href={email.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-3.5 rounded-lg transition-colors hover:bg-gray-50 group ${
                      !email.isRead ? "bg-blue-50/30" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span
                        className={`text-xs truncate ${
                          !email.isRead
                            ? "font-bold text-gray-900"
                            : "font-medium text-gray-600"
                        }`}
                      >
                        {email.from?.emailAddress?.name ||
                          email.from?.emailAddress?.address ||
                          "Mittente sconosciuto"}
                      </span>
                      <span className="text-[11px] text-gray-400 shrink-0">
                        {new Date(email.receivedDateTime).toLocaleDateString(
                          "it-IT",
                          { day: "2-digit", month: "short" }
                        )}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-1 mb-1">
                      <p
                        className={`text-sm truncate ${
                          !email.isRead
                            ? "font-semibold text-gray-900 group-hover:text-blue-600"
                            : "text-gray-700 group-hover:text-blue-600"
                        } transition-colors`}
                      >
                        {email.subject || "(Nessun oggetto)"}
                      </p>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <p className="text-xs text-gray-500 line-clamp-2">
                      {email.bodyPreview}
                    </p>
                  </a>
                ))
              )}
            </div>
          </section>

          {/* COLONNA 2: ONEDRIVE & GRUPPI */}
          <section className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden h-[500px] lg:h-[650px]">
            <div className="px-5 py-4 border-b border-gray-100 bg-teal-50/50 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FolderKanban className="w-5 h-5 text-teal-600" />
                <h2 className="font-bold text-gray-800">OneDrive</h2>
              </div>
              <a
                href={oneDriveData.driveWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-teal-600 bg-white border border-teal-200 rounded-md hover:bg-teal-50 transition-colors shadow-2xs"
              >
                <span>View all</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-gray-100 p-2">
              {oneDriveItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
                  <FolderKanban className="w-10 h-10 mb-2 opacity-40" />
                  <p className="text-sm font-medium">
                    Nessuna cartella o file trovato
                  </p>
                  <p className="text-xs mt-1">
                    Controlla che i permessi Files.Read.All e GroupMember.Read.All siano attivi su Azure.
                  </p>
                </div>
              ) : (
                oneDriveItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 p-3.5 rounded-lg hover:bg-teal-50/40 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {item.folder ? (
                        <Folder className="w-5 h-5 text-teal-600 shrink-0 fill-teal-50" />
                      ) : (
                        <FileText className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-gray-900 group-hover:text-teal-700 transition-colors truncate">
                          {item.name || "Elemento senza nome"}
                        </h3>
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          {item.sourceType ? `${item.sourceType} • ` : ""}
                          {item.folder
                            ? `Cartella${
                                typeof item.folder.childCount === "number"
                                  ? ` (${item.folder.childCount} elementi)`
                                  : ""
                              }`
                            : "File"}
                          {item.lastModifiedDateTime &&
                            ` • ${new Date(
                              item.lastModifiedDateTime
                            ).toLocaleDateString("it-IT", {
                              day: "2-digit",
                              month: "short",
                            })}`}
                        </p>
                      </div>
                    </div>

                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))
              )}
            </div>
          </section>

          {/* COLONNA 3: GESTIONE BLOG */}
          <section className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden h-auto lg:h-[650px]">
            <div className="px-5 py-4 border-b border-gray-100 bg-gray-100/70">
              <h2 className="font-bold text-gray-800">Gestione Blog</h2>
            </div>

            <div className="flex-1 p-6 flex flex-col justify-center gap-4">
              <Button
                type="button"
                size="lg"
                className="w-full h-14 sm:h-16 text-base font-semibold flex items-center justify-start px-6 gap-4 bg-[#f97316] hover:bg-[#ea580c] text-white shadow-sm"
              >
                <PlusCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span>Aggiungi articolo</span>
              </Button>

              <Button
                type="button"
                size="lg"
                className="w-full h-14 sm:h-16 text-base font-semibold flex items-center justify-start px-6 gap-4 bg-[#f97316] hover:bg-[#ea580c] text-white shadow-sm"
              >
                <Edit3 className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span>Modifica articolo</span>
              </Button>

              <Button
                type="button"
                size="lg"
                className="w-full h-14 sm:h-16 text-base font-semibold flex items-center justify-start px-6 gap-4 bg-[#f97316] hover:bg-[#ea580c] text-white shadow-sm"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span>Elimina articolo</span>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}