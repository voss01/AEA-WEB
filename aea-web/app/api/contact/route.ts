import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
first_name: z.string().trim().min(1, "Nome obbligatorio"),
last_name: z.string().trim().min(1, "Cognome obbligatorio"),
email: z.string().trim().email("Email non valida"),
company_name: z.string().trim().min(1, "Nome azienda obbligatorio"),
help: z.enum([
"Conoscici",
"Workshop",
"Visita in azienda",
"Partnership",
"Altro",
]),
info: z.string(),
terms: z.boolean(),
});

export async function POST(request: Request) {
try {
const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  console.error("RESEND_API_KEY non configurata");

  return NextResponse.json(
    { success: false, error: "Configurazione email mancante" },
    { status: 500 }
  );
}

const body = await request.json();
const validation = contactSchema.safeParse(body);

if (!validation.success) {
  return NextResponse.json(
    {
      success: false,
      error: "Dati del modulo non validi",
      details: validation.error.flatten(),
    },
    { status: 400 }
  );
}

const {
  first_name,
  last_name,
  email,
  company_name,
  help,
  info,
  terms,
} = validation.data;

const testoEmail = [
  "NUOVA RICHIESTA DI CONTATTO DAL SITO WEB",
  "",
  "DATI DEL CONTATTO",
  "",
  "Nome: " + first_name,
  "Cognome: " + last_name,
  "Email: " + email,
  "Azienda: " + company_name,
  "",
  "TIPO DI RICHIESTA",
  help,
  "",
  "MESSAGGIO",
  info || "Nessun messaggio inserito",
  "",
  "CONSENSO",
  terms ? "Accettato" : "Non accettato",
  "",
  "Email generata automaticamente dal sito web.",
].join("\n");

const resend = new Resend(apiKey);

const { data, error } = await resend.emails.send({
  from: "Sito Web <noreply@aeapolimi.it>",
  to: ["massimiliano.menzolini@aeapolimi.it", "giacomo.monaco@aeapolimi.it"], //indirizzi mail a cui arriva la risposta del form
  replyTo: email,
  subject: "RICHIESTA CONTATTA DA AZIENDA",
  text: testoEmail,
});

if (error) {
  console.error("Errore Resend:", error);

  return NextResponse.json(
    {
      success: false,
      error: "Errore durante l'invio dell'email",
    },
    { status: 500 }
  );
}

return NextResponse.json(
  {
    success: true,
    message: "Richiesta inviata correttamente!",
    id: data?.id,
  },
  { status: 200 }
);

} catch (error) {
console.error("Errore API:", error);

return NextResponse.json(
  {
    success: false,
    error: "Errore interno del server",
  },
  { status: 500 }
);

}
}