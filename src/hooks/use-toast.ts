
import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
  duration?: number;
};

export const toast = ({ title, description, action, variant, duration = 5000 }: ToastProps) => {
  sonnerToast(title, {
    description,
    action,
    duration,
  });
};

export function useToast() {
  return {
    toast,
  };
}
