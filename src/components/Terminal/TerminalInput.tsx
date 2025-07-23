import { useState, useEffect } from "react";

interface TerminalInputProps {
  prefix?: string;
  isFocused: boolean;
  onSubmit: (input: string) => void;
}

function TerminalInput({
  prefix = "$ ",
  isFocused,
  onSubmit,
}: TerminalInputProps) {
  const [inputBuf, setInputBuf] = useState("");

  const handleSubmit = () => {
    onSubmit(prefix + inputBuf);
    setInputBuf("");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isFocused) {
        if (event.key.length === 1) {
          setInputBuf((prev) => prev + event.key);
        } else if (event.key === "Backspace") {
          setInputBuf((prev) => prev.slice(0, -1));
        } else if (event.key === "Enter") {
          handleSubmit();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isFocused, inputBuf]);

  return (
    <>
      <span className="wrap-anywhere break-all whitespace-pre-wrap">
        {prefix}
        {inputBuf}
      </span>
    </>
  );
}

export default TerminalInput;
