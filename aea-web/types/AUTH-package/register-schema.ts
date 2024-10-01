import * as z from 'zod'
export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8,{
        message: "Password must be at least 8 carachters long"
    }),
    name: z.string().min(4, "Please add a name with at least 4 characters"),

})