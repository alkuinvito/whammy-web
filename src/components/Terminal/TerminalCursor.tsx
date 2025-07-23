interface TerminalCursorProps {
  isFocused: boolean;
}

function TerminalCursor({ isFocused }: TerminalCursorProps) {
  return <span className={isFocused ? "animate-blink" : ""}>_</span>;
}

export default TerminalCursor;
