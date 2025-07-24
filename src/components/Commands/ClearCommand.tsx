import type { CommandParamsProps } from "./CommandHandler";

function ClearCommand({ params }: CommandParamsProps) {
  if (params) {
    const args = params.shift();
    if (args) {
      return `Invalid args: ${args}. Type \`help clear\` for usage`;
    }
  }

  return "clear";
}

export default ClearCommand;
