import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { logoutUser } from "@/lib/auth-actions";
import { Button } from "@/components/ui/button";
import { LogOut, Construction } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();

  // 1. Se non è loggato, rimanda alla home/login
  if (!session || !session.user) {
    redirect("/");
  }

  // 2. Se è ADMIN, lo mandiamo direttamente alla sua area dedicata
  if (session.user.role === "admin") {
    redirect("/dashboard/admin");
  }

  // 3. Se ha dominio OK ma NON è admin, mostra questa pagina (futura Member Personal Area)
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
            AREA PERSONALE SOCIO
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

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12 flex flex-col items-center justify-center">
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 sm:p-12 max-w-lg w-full text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6 text-amber-600">
            <Construction className="w-8 h-8" />
          </div>

          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-100 rounded-full">
            In Sviluppo
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mb-2">
            PAGINA IN AGGIORNAMENTO
          </h1>

          <p className="text-sm text-gray-600 mb-6">
            Ciao{" "}
            <span className="font-semibold text-gray-900">
              {session.user.name || session.user.email}
            </span>
            , il tuo account con dominio autorizzato è stato verificato con
            successo. La tua area personale dedicata è attualmente in fase di
            allestimento.
          </p>

          <div className="w-full border-t border-gray-100 pt-6 mt-2">
            <div className="text-xs text-gray-400">
              Accesso effettuato come utente standard
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}