import Link from "next/link";

interface EmailTemplateProps {
  confirmationLink: string;
}

export const EmailTemplate_confirm_Email: React.FC<Readonly<EmailTemplateProps>> = ({
  confirmationLink,
}) => (
  <div>
    <h1>Welcome, click here to confirm the registation </h1><a href={confirmationLink}>Click here to register</a>
  </div>
);
