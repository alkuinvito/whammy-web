interface TerminalCursorProps {
  isFocused: boolean;
}

function TerminalCursor({ isFocused }: TerminalCursorProps) {
  if (isFocused) {
    return <span className="animate-blink">_</span>;
  }

  return <span>_</span>;
}

export default TerminalCursor;
