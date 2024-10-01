import Link from "next/link";

interface EmailTemplateProps {
  confirmationLink: string;
}

export const EmailTemplate_reset_password: React.FC<
  Readonly<EmailTemplateProps>
> = ({ confirmationLink }) => (
  <div>
    <h1>hi, click here to reset your password </h1>
    <a href={confirmationLink}>Click here to reset your password</a>
  </div>
);
