'use server'


import getBaseURL from "@/lib/base-url"
import {Resend} from 'resend'

import { EmailTemplate_confirm_Email } from "@/components/auth/confirmation-email-template";
import { EmailTemplate_reset_password } from "@/components/auth/reset-password-email-template";
import { stringify } from "querystring";
import { EmailTemplate_token_Email } from "@/components/auth/token-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = getBaseURL();











export const sendVerificationEmail = async (email: string, token: string) =>{
    const confirmLink = 
    `${domain}/auth/new-verification?token=${token}`


    console.log("email: " + email)
    console.log("link:"+ confirmLink)
    
  const { data, error } = await resend.emails.send({
    from: 'AEA <login@aeapolimi.it>',
    to: email,
    subject: 'REGISTRAZIONE',
    react: EmailTemplate_confirm_Email({ confirmationLink: confirmLink }),  // Pass the correct confirmation link

  });

  if (error) {
    return console.log(error);
  }

  if (data) {
    return console.log(data);
  }



}







export const sendPasswordResetEmail = async (email: string, token: string) =>{
    const confirmLink = 
    `${domain}/auth/new-password?token=${token}`


    console.log("email: " + email)
    console.log("link:"+ confirmLink)
    
  const { data, error } = await resend.emails.send({
    from: 'AEA <login@aeapolimi.it>',
    to: email,
    subject: 'RESETTA LA PASSWORD',
    react: EmailTemplate_reset_password({ confirmationLink: confirmLink }),  // Pass the correct confirmation link

  });

  if (error) {
    return console.log(error);
  }

  if (data) {
    return console.log(data);
  }



}




export const sendTwoFactorTokenByEmail = async (email: string, token: string) =>{
    const Token = `${token}`


    
  const { data, error } = await resend.emails.send({
    from: 'AEA <login@aeapolimi.it>',
    to: email,
    subject: 'your two factor token',
    react: EmailTemplate_token_Email({ token: Token }),  // Pass the correct confirmation link

  });

  if (error) {
    return console.log(error);
  }

  if (data) {
    return console.log(data);
  }



}

