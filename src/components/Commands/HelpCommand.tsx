import type { CommandParamsProps } from "./CommandHandler";

function HelpCommand({ params }: CommandParamsProps) {
  if (params && params.length > 0) {
    const arg1 = params.shift();
    if (params.length != 0) {
      return `Invalid args: ${params.shift}. Type \`help\` for command list.`;
    }

    switch (arg1) {
      case "clear":
        return `Clear the buffer

USAGE
  clear`;
      case "greet":
        return `Show welcome banner

USAGE
  greet`;
      case "help":
        return `Print command list (or specific command usage)

USAGE
  help [command]`;
      case "social":
        return `List available socials to reach

USAGE
  social`;
      default:
        return `Invalid args: ${arg1}. Type \`help\` for command list.`;
    }
  }

  return `Whammy is a personal portfolio built using Vite.js

CORE COMMANDS
  clear             Clear the buffer
  greet             Show welcome banner
  help [command]    Print command list (or specific command usage)
  social            List available socials to reach
`;
}

export default HelpCommand;
