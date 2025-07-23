import { useRef, useState, useEffect, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import TerminalCursor from "./TerminalCursor";
import TerminalInput from "./TerminalInput";
import TerminalEntry from "./TerminalEntry";

interface TerminalWindowProps {
  className?: string;
  defaultMessage?: ReactNode;
  prefix?: string;
}

function TerminalWindow({
  className,
  defaultMessage,
  prefix,
}: TerminalWindowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const [isFocused, setIsFocused] = useState(true);
  const [content, setContent] = useState<string[]>();

  const handleSubmit = (input: string) => {
    setContent((prev) => [...(prev ?? []), input]);
  };

  const scrollToBottom = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    scrollToBottom();

    if (!ulRef.current) return;
    const resizeObserver = new ResizeObserver(scrollToBottom);
    resizeObserver.observe(ulRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [content]);

  return (
    <div
      ref={ref}
      className={twMerge(
        "block w-screen sm:max-w-[800px] h-screen sm:max-h-[560px] p-2 border-2 border-neutral-500 rounded-lg overflow-y-auto no-scrollbar",
        className
      )}
      onClick={() => setIsFocused(true)}
    >
      <ul ref={ulRef}>
        {defaultMessage && (
          <li>
            <TerminalEntry content={defaultMessage} />
          </li>
        )}
        {content &&
          content.map((entry, i) => (
            <li key={"ct" + i.toString()}>
              <TerminalEntry content={entry} />
            </li>
          ))}
        <li>
          <TerminalInput
            isFocused={isFocused}
            prefix={prefix}
            onSubmit={handleSubmit}
          />
          <TerminalCursor isFocused={isFocused} />
        </li>
      </ul>
    </div>
  );
}

export default TerminalWindow;
