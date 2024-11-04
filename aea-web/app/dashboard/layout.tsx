import DashboardNav from "@/components/navigation/dashboard-nav";

import { auth } from "@/server/auth";
import { Database, PenSquare, Settings } from "lucide-react";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  const userLinks = [
    
    {
      label: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={16} />,
    },
  ] as const;

  const adminLinks =
    session?.user.role === "admin"
      ? [
          {
            label: "Create Article",
            path: "/dashboard/add-article",
            icon: <PenSquare size={16} />,
          },
          {
            label: "Existing Articles",
            path: "/dashboard/articles",
            icon: <Database size={16} />,
          },
        ]
      : [];

  const allLinks = [...adminLinks, ...userLinks];

  return (

 <div className="md:flex">
  <div className="md:flex-grow md:px-12 md:mx-auto md:max-w-6xl">
    <DashboardNav allLinks={allLinks} />
    <div className="md:p-20">{children}</div>
  </div>
</div>

  );
}
