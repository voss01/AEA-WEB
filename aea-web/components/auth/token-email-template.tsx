import Link from "next/link";

interface EmailTemplateProps {
  token: String;
}

export const EmailTemplate_token_Email: React.FC<Readonly<EmailTemplateProps>> = ({
  token,
}) => (
  <div>
    <h1>This is your token </h1>
    <p>{token}</p>
  </div>
);
