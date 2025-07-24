import type { CommandParamsProps } from "./CommandHandler";

function WelcomeCommand({ params }: CommandParamsProps) {
  if (params) {
    const args = params.shift();
    if (args) {
      return `Invalid args: ${args}. Type \`help greet\` for usage`;
    }
  }

  return (
    <>
      {`:::       ::: :::    :::     :::     ::::    ::::  ::::    ::::  :::   ::: :::
:+:       :+: :+:    :+:   :+: :+:   +:+:+: :+:+:+ +:+:+: :+:+:+ :+:   :+: :+:
+:+       +:+ +:+    +:+  +:+   +:+  +:+ +:+:+ +:+ +:+ +:+:+ +:+  +:+ +:+  +:+
+#+  +:+  +#+ +#++:++#++ +#++:++#++: +#+  +:+  +#+ +#+  +:+  +#+   +#++:   +#+
+#+ +#+#+ +#+ +#+    +#+ +#+     +#+ +#+       +#+ +#+       +#+    +#+    +#+
 #+#+# #+#+#  #+#    #+# #+#     #+# #+#       #+# #+#       #+#    #+#
  ###   ###   ###    ### ###     ### ###       ### ###       ###    ###    ###

"Ah, a new adventurer approaches...`}
      <br />
      <br />
      <span>
        My name is <span className="text-mauve">Alkuin Vito</span>, a{" "}
        <span className="text-blue">full-stack developer</span> forged in the
        <br />
        depths of the back-end and tempered in the fires of the front-end.
      </span>
      <br />
      <br />
      Type <span className="text-peach">`help`</span> to begin your quest."
      <br />
      <br />
    </>
  );
}

export default WelcomeCommand;
