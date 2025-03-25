"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
export default function Welcome() {
  

  const iban = "IT51K0569601620000010602X50";
  const beneficiary = "Nome Beneficiario";

  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = async (text: string, item: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };


  


  return (
    <div className="overflow-x-hidden">
<div className="md:flex">
  <div className="md:flex-grow md:px-12 md:mx-auto md:max-w-6xl">
    <div className="min-h-screen bg-white px-4 flex flex-col items-center justify-center">
      {/* Mobile Arlo Image (small, above the header) */}
      <div className="md:hidden flex justify-center mt-4">
        <img
          src="/arlo/arloHome.png"
          alt="Arlo"
          className="w-24 object-cover"
        />
      </div>

      {/* Title Row with extra bottom margin on desktop */}
      <div className="text-center mb-4 md:mb-10">
        <h1 className="text-6xl font-bold text-black mb-2">Welcome!</h1>
        <p className="text-lg text-gray-600">
          Vuoi diventare parte di AEA? Ecco come:
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
        {/* Desktop Arlo Image (shown on md and up) */}
        <div className="hidden md:flex justify-center">
          <img
            src="/arlo/arloHome.png"
            alt="Arlo"
            className="w-1/2 object-cover"
          />
        </div>

        {/* Timeline Steps (shifted right on mobile for centering) */}
        <div className="relative pb-5 translate-x-6 md:translate-x-0">
          {/* Mobile Vertical Line */}
          <div className="absolute left-0 w-px bg-black top-5 bottom-[calc(1.25rem+10px)] md:hidden"></div>
          {/* Desktop Vertical Line */}
          <div className="absolute left-0 w-px bg-black top-5 md:bottom-[calc(1.25rem+10px)] hidden md:block"></div>

          {/* Timeline Steps Container */}
          <div className="flex flex-col gap-10 relative pl-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute left-[-4.25rem] top-0 flex items-center justify-center bg-white border border-black w-10 h-10">
                1
              </div>
              <h3 className="text-lg font-semibold">Compila il form</h3>
              <p className="text-gray-500 text-sm">
                Servono le credenziali PoliMi
              </p>
              <Link
  href="https://forms.office.com/Pages/ResponsePage.aspx?id=z6hZgX372UeNMEsbTqkLe9x_hjbou89No8FZoHcG94VUQ0laTlg1TzVaOUU2V0laOEs2U1MzMllMQiQlQCN0PWcu"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="py-1 mt-2 text-center bg-orange-500">
    <div className="flex items-center justify-center">
      <div className="text-lg">Compila</div>
    </div>
  </Button>
</Link>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute left-[-4.25rem] top-0 flex items-center justify-center bg-white border border-black w-10 h-10">
                2
              </div>
              <h3 className="text-lg font-semibold">Paga la quota di 10€</h3>
              <p className="text-gray-500 text-sm">
                Sul seguente iban IT51K0569601620000010602X50, la causale deve essere “quota associativa [NOME COGNOME], Beneficiario: Automation Engineering Association
              </p>
             
              <Button
        onClick={() => handleCopy(iban, "iban")}
        className="py-1 mt-2 text-center bg-orange-500"
      >
        <div className="flex items-center justify-center gap-2">
          {copiedItem === "iban" ? <Check size={18} /> : <Copy size={18} />}
          <span className="text-lg">
            {copiedItem === "iban" ? "Copiato!" : "Clicca per copiare l'IBAN"}
          </span>
        </div>
      </Button>
    

             
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute left-[-4.25rem] top-0 flex items-center justify-center bg-white border border-black w-10 h-10">
                3
              </div>
              <h3 className="text-lg font-semibold">Sei un associato!</h3>
              <p className="text-gray-500 text-sm">Benvenuto!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

    </div>
    </div>
  );


}