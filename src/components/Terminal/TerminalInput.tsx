import { useState, useEffect } from "react";

interface TerminalInputProps {
  prefix?: string;
  isFocused: boolean;
}

function TerminalInput({ prefix = "$ ", isFocused }: TerminalInputProps) {
  const [inputBuf, setInputBuf] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isFocused && event.key.length === 1) {
        setInputBuf((prev) => prev + event.key);
      } else if (isFocused && event.key === "Backspace") {
        setInputBuf((prev) => prev.slice(0, -1));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isFocused]);

  return (
    <>
      <span className="wrap-anywhere break-all">
        {prefix}
        {inputBuf}
      </span>
    </>
  );
}

export default TerminalInput;
