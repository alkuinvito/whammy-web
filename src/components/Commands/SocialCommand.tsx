import type { CommandParamsProps } from "./CommandHandler";

function SocialCommand({ params, onClick }: CommandParamsProps) {
  if (params) {
    const args = params.shift();
    if (args) {
      return `Invalid args: ${args}. Type \`help social\` for usage`;
    }
  }

  return (
    <>
      <span>The sage unrolls a weathered scroll and speaks:</span>
      <br />
      <br />
      <span>
        {"+ "}
        <a
          href="https://github.com/alkuinvito"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (onClick) {
              onClick(e.currentTarget);
            }
          }}
        >
          Github
        </a>
      </span>
      <br />
      <span>
        {"+ "}
        <a
          href="https://linkedin.com/in/alkuin-vito-fidei"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (onClick) {
              onClick(e.currentTarget);
            }
          }}
        >
          LinkedIn
        </a>
      </span>
      <br />
      <span>
        {"+ "}
        <a
          href="https://instagram.com/alkuinvito"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (onClick) {
              onClick(e.currentTarget);
            }
          }}
        >
          Instagram
        </a>
      </span>
      <br />
    </>
  );
}

export default SocialCommand;
