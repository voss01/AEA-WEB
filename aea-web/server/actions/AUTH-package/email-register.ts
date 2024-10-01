"use server"
import { LoginSchema } from '@/types/AUTH-package/login-schema';
import { createSafeActionClient } from "next-safe-action";
import {db}from "../.."
import {eq} from "drizzle-orm"
import {users } from "../../schema"

import bcrypt from 'bcrypt'
import { RegisterSchema } from '@/types/AUTH-package/register-schema';
import { generateEmailVerifiactionToken } from './tokens';
import { sendVerificationEmail } from './email';

 const action = createSafeActionClient();

export const emailRegister = action.schema(RegisterSchema).action(
    async ({ parsedInput: { email, name, password } }) => {

      //hashing the pw
       const hashedPasswod = await bcrypt.hash(password, 10)
       console.log(hashedPasswod)

       //check existing user
       const existingUser = await db.query.users.findFirst({
        where: eq(users.email, email),
       })



       if(existingUser){
        if(!existingUser.emailVerified){
            const verificationToken= await generateEmailVerifiactionToken(email);
            await sendVerificationEmail(verificationToken[0].email, verificationToken[0].token);

            return {success: 'email confirmation sent'}
        }
     return {error:"Email already in use"}

       }

       await db.insert(users).values({email, name, password: hashedPasswod})
       const verificationToken = await generateEmailVerifiactionToken(email)
      await sendVerificationEmail(verificationToken[0].email, verificationToken[0].token);

       return {success: 'email confirmation sent'}

}
)