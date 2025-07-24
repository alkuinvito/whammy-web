import type { CommandParamsProps } from "./CommandHandler";

function HelpCommand({ params }: CommandParamsProps) {
  if (params && params.length > 0) {
    const arg1 = params.shift();
    if (params.length != 0) {
      return `Invalid args: ${params.shift()}. Type \`help\` for command list.`;
    }

    switch (arg1) {
      case "clear":
        return (
          <>
            <span>Clear the buffer</span>
            <br />
            <br />
            <span>USAGE</span>
            <br />
            <span>{`  clear`}</span>
            <br />
            <br />
          </>
        );
      case "greet":
        return (
          <>
            <span>Show welcome banner</span>
            <br />
            <br />
            <span>USAGE</span>
            <br />
            <span>{`  greet`}</span>
            <br />
            <br />
          </>
        );
      case "help":
        return (
          <>
            <span>Print command list (or specific command usage)</span>
            <br />
            <br />
            <span>USAGE</span>
            <br />
            <span>{`  help [command]`}</span>
            <br />
            <br />
          </>
        );
      case "social":
        return (
          <>
            <span>List available socials to reach</span>
            <br />
            <br />
            <span>USAGE</span>
            <br />
            <span>{`  social`}</span>
            <br />
            <br />
          </>
        );
      default:
        return `Invalid args: ${arg1}. Type \`help\` for command list.`;
    }
  }

  return (
    <>
      <span>Whammy is a personal portfolio built using Vite.js</span>
      <br />
      <br />
      <span>CORE COMMANDS</span>
      <br />
      <span>{`  clear             Clear the buffer`}</span>
      <br />
      <span>{`  greet             Show welcome banner`}</span>
      <br />
      <span>{`  help [command]    Print command list (or specific command usage)`}</span>
      <br />
      <span>{`  social            List available socials to reach`}</span>
      <br />
      <br />
    </>
  );
}

export default HelpCommand;
