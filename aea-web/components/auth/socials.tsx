'use client'

import { FcGoogle } from "react-icons/fc";

import {Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"


export default function Socials(){
    return(
        <div className="flex flex-col items-center w-full gap-4">
            <Button variant={"outline"} className="flex gap-4 w-full" onClick={()=> signIn('google',{rerdirect:false, callbackUrl:"/"})}>
                Sign in with google
                <FcGoogle className="w-5 h-5"/>
            </Button>
        </div>
    )
}