import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
  title: string;
  className?: string;
}

const BackgroundShineButton: FC<IProps> = ({ title, className }) => {
  return (
    <button
      type={"submit"}
      className={cn(
        "inline-flex animate-shine items-center justify-center rounded-md border border-[var(--primary-color)] bg-[linear-gradient(110deg,#3CA2FA1A,45%,#3CA2FA4D,55%,#3CA2FA1A)] bg-[length:200%_100%] px-4 py-3 font-bold text-[var(--primary-color)] transition-colors capitalize",
        className,
      )}
    >
      {title}
    </button>
  );
};

export default BackgroundShineButton;
