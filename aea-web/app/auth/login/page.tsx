"use client";

import { LoginForm } from "@/components/auth/login-form"
import { Button } from "@/components/ui/button"

export default function Login() {
    return (
        <div className="max-w-full md:max-w-3xl items-center justify-center mx-auto !border-none pt-8 px-4">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6 text-center md:text-left md:whitespace-nowrap">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 m-0">
                    For the moment to log in
                </h1>
                
                <div className="flex justify-center mt-2 md:mt-0">
                    <a
                      href="https://live.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 flex items-center justify-center gap-2">
                            <span className="text-lg">CLICK HERE</span>
                        </Button>
                    </a>
                </div>
            </div>

            {/*<LoginForm/>*/}
        </div>
    );
}
