import type { ReactNode } from "react";

interface TerminalEntryProps {
  content: ReactNode;
}

function TerminalEntry({ content }: TerminalEntryProps) {
  return (
    <span className="w-full wrap-anywhere break-all whitespace-pre-wrap">
      {content}
    </span>
  );
}

export default TerminalEntry;
