import * as z from "zod"


export const LoginSchema = z.object({
    //old: no email refinement
    //email: z.string().email({
    //    message:"invalid email address",
    //}),

    //new: email refinement
    email: z
    .string()
    .email({
        message: "invalid email address",
    })
    .refine((email) => {
        const domain = email.split("@")[1];
        return domain == "aeapolimi.it";
    },{
        message: "Use your @aeapolimi.it email",
    }),

    password: z.string().min(1, {
        message: "Password is required",
    }),
    code: z.optional(z.string()),
})