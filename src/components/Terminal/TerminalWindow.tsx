import { useRef, useState, useEffect, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import TerminalCursor from "./TerminalCursor";
import TerminalInput from "./TerminalInput";
import TerminalEntry from "./TerminalEntry";
import CommandHandler from "../Commands/CommandHandler";

interface TerminalWindowProps {
  className?: string;
  defaultMessage?: ReactNode;
  prefix?: string;
}

function TerminalWindow({
  className,
  defaultMessage,
  prefix = "$ ",
}: TerminalWindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const cmdRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const [isFocused, setIsFocused] = useState(true);
  const [content, setContent] = useState<ReactNode[]>([defaultMessage]);

  const handleClick = (e: HTMLElement) => {
    if (e.tagName === "A" && windowRef.current?.contains(e)) {
      setTimeout(() => {
        (windowRef.current as HTMLDivElement).focus();
      }, 0);
    }
  };

  const handleSubmit = (input: string) => {
    const withPrefix = prefix + input;
    const result = CommandHandler({ cmd: input, onClick: handleClick });
    if (!result) {
      setContent((prev) => [...(prev ?? []), withPrefix]);
      return;
    }

    if (result === "clear") {
      setContent([]);
      return;
    }

    setContent((prev) => [...(prev ?? []), withPrefix, result]);
  };

  const scrollToBottom = () => {
    if (cmdRef.current) {
      cmdRef.current.scrollTop = cmdRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        windowRef.current &&
        !windowRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!cmdRef.current) return;

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
      ref={windowRef}
      tabIndex={0}
      className={twMerge(
        "flex flex-col h-screen sm:h-auto drop-shadow-xl",
        className,
      )}
      onClick={() => setIsFocused(true)}
    >
      <div className="w-screen sm:max-w-[780px] h-8 py-1 px-2 bg-surface-0 sm:rounded-t-lg">
        <div className="flex gap-2 h-6 fixed items-center">
          <div className="size-3 rounded-full bg-red"></div>
          <div className="size-3 rounded-full bg-yellow"></div>
          <div className="size-3 rounded-full bg-green"></div>
        </div>
        <span className="block w-full text-center select-none">whammy</span>
      </div>
      <div
        ref={cmdRef}
        className="grow block w-screen sm:max-w-[780px] h-full sm:h-[calc(100vh-32px)] box-border sm:max-h-[540px] p-2 bg-base sm:rounded-b-lg overflow-y-auto no-scrollbar cursor-text"
      >
        <ul ref={ulRef}>
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
              onKeyDown={scrollToBottom}
            />
            <TerminalCursor isFocused={isFocused} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TerminalWindow;
