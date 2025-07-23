import { twMerge } from "tailwind-merge";
import TerminalCursor from "./TerminalCursor";
import { useRef, useState, useEffect } from "react";

interface TerminalWindowProps {
  className?: string;
  defaultMessage?: string;
  prefix?: string;
}

function TerminalWindow({
  className,
  defaultMessage,
  prefix,
}: TerminalWindowProps) {
  prefix = (prefix || "$") + " ";

  const ref = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className={twMerge(
        "w-screen sm:max-w-[720px] h-screen sm:max-h-[480px] p-2 border-2 border-neutral-500 rounded-lg",
        className
      )}
      onClick={() => setIsFocused(true)}
    >
      {defaultMessage && <span>{defaultMessage}</span>}
      <span>{prefix}</span>
      <TerminalCursor isFocused={isFocused} />
    </div>
  );
}

export default TerminalWindow;
