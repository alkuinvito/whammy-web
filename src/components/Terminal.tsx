import { twMerge } from "tailwind-merge";

interface TerminalProps {
  className?: string;
  defaultMessage?: string;
  prefix?: string;
}

function Terminal({ className, defaultMessage, prefix }: TerminalProps) {
  prefix = (prefix || "$") + " ";

  return (
    <div className={twMerge("", className)}>
      {defaultMessage && <span>{defaultMessage}</span>}
      <span>{prefix}</span>
    </div>
  );
}

export default Terminal;
