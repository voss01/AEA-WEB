import { useState, useEffect } from "react";
import { auth } from '@/server/auth'; // O la tua funzione di autenticazione
import { Session } from "next-auth";  // Assicurati di importare il tipo corretto

const useAuth = () => {
  // Lo stato ora accetta sia `null` che un oggetto `Session`
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const userSession = await auth();
      setSession(userSession); // Imposta lo stato con la sessione ottenuta
    };

    fetchSession();
  }, []);

  return session; // Ritorna la sessione (può essere `null` o `Session`)
};

export default useAuth;
