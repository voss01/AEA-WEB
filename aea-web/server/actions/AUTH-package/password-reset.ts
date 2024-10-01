'use sever'


import { ResetSchema } from "@/types/AUTH-package/reset-schema"


import { createSafeActionClient } from "next-safe-action";
import { db } from "../..";
import { eq } from "drizzle-orm";
import { passwordResetTokens, users } from "../../schema";
import { generateEmailVerifiactionToken, generatePasswordResetToken } from "./tokens";
import { sendPasswordResetEmail } from "./email";
const action = createSafeActionClient();

export const reset = action.schema(ResetSchema).action(
    async ({ parsedInput: { email } }) => {


    const existingUser = await db.query.users.findFirst({where: eq(users.email, email),

})



if(!existingUser){
    return{ error: "user not foud" }
}


const passwordResetToken = await generatePasswordResetToken(email)

if(!passwordResetToken){
    return{ error: "Token not generated"}
}
await sendPasswordResetEmail(passwordResetToken[0].email, passwordResetToken[0].token

)


return {success: "Reset Email Sent"}





})




