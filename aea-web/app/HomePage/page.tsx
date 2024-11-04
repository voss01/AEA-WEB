

import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="py-8 text-center bg-white">
        <h1 className="text-5xl font-bold text-orange-500">Automation</h1>
        <h1 className="text-5xl font-bold text-black">Engineering</h1>
        <h1 className="text-5xl font-bold text-black">Association</h1>
        <p className="mt-4 text-lg text-gray-600">Innovation and robotics for students by students</p>
        <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white">Join us →</Button>
      </header>

      {/* Navigation Section */}
      <section className="flex justify-center space-x-8 py-10 bg-gray-100">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">Aziende</span>
          <p className="text-center text-gray-600">Visita in aziende e workshop</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">Progetti</span>
          <p className="text-center text-gray-600">Applica ciò che hai imparato a lezione</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">Progetti</span>
          <p className="text-center text-gray-600">Scopri dove puoi trovarci</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">Viaggi</span>
          <p className="text-center text-gray-600">Viaggi in tutto il mondo</p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="flex justify-center">
          <Image
            src="/path-to-your-image.jpg" // Replace with your actual image path
            alt="Group photo"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

