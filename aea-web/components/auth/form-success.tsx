import { AlertCircle } from "lucide-react";

export const FormSuccess = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <div className="bg-teal-400/25 flex text-xs font-medium items-center my-4 gap-2 text-secondary-foreground p-3">
      <AlertCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
