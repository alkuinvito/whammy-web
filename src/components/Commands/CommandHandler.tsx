import WelcomeCommand from "./WelcomeCommand";
import { parseCommand } from "../../lib/utils";
import ClearCommand from "./ClearCommand";
import HelpCommand from "./HelpCommand";
import SocialCommand from "./SocialCommand";

export interface CommandParamsProps {
  params: string[];
  onClick?: (e: HTMLElement) => void;
}

interface CommandHandlerProps {
  cmd: string;
  onClick?: (e: HTMLElement) => void;
}

function CommandHandler({ cmd, onClick }: CommandHandlerProps) {
  const parsed = parseCommand(cmd);
  const command = parsed.shift();

  switch (command) {
    case "":
      return;
    case "clear":
      return ClearCommand({ params: parsed });
    case "greet":
      return WelcomeCommand({ params: parsed });
    case "help":
      return HelpCommand({ params: parsed });
    case "social":
      return SocialCommand({ params: parsed, onClick });
    default:
      return `Invalid command: ${command}. Type \`help\` for command list`;
  }
}

export default CommandHandler;
