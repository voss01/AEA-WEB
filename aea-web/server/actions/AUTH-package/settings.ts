'use server'


import { SettingsSchema } from "@/types/AUTH-package/settings-schema";
import { createSafeActionClient } from "next-safe-action"
import { db } from "../..";
import { auth } from "../../auth";

import { eq } from "drizzle-orm";
import { users } from "../../schema";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";



const action = createSafeActionClient()


export const settings = action.schema(SettingsSchema).action(
    async (values) => {
    const user = await auth()
    if(!user){
        return {error: "user not found"}
    }

    const dbUser = await db.query.users.findFirst({
        where: eq(users.id, user.user.id),
    })


    if(!dbUser){
        return {error: "user not found"}
    }

    if(user.user.isOAuth){
        values.parsedInput.email = undefined
        values.parsedInput.password = undefined
        values.parsedInput.newPassword = undefined
        values.parsedInput.isTwoFactorEnabled = undefined
    }


    if(values.parsedInput.password && values.parsedInput.newPassword &&  dbUser.password){
        const passswordMatch = await bcrypt.compare(values.parsedInput.password, dbUser.password)
        if(!passswordMatch){
            return {error: "password is incorrect"}
        }   

        const samePassword = await bcrypt.compare(values.parsedInput.newPassword, dbUser.password)
        if(!passswordMatch){
            return {error: "New password is the same as the old one"}
        } 

        const hashedPassword = await bcrypt.hash(values.parsedInput.newPassword, 10)
        values.parsedInput.password = hashedPassword
        values.parsedInput.newPassword = undefined

    }


        const updatedUser = await db.update(users).set({
            twoFactorEnabled: values.parsedInput.isTwoFactorEnabled,
            name: values.parsedInput.name,
            email: values.parsedInput.email,
            password: values.parsedInput.password,
            image: values.parsedInput.image,
        }).where(eq(users.id, user.user.id))
        revalidatePath("/dashboard/settings")
        revalidatePath("/")
        console.log(updatedUser)
        return {success: "user updated"}
       
})