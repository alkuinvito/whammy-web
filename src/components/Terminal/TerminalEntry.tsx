interface TerminalEntryProps {
  content: string;
}

function TerminalEntry({ content }: TerminalEntryProps) {
  return <span className="w-full wrap-anywhere break-all">{content}</span>;
}

export default TerminalEntry;
