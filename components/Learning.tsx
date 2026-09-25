import Reveal from "./Reveal"
import { FaLinkedin, FaGithub, FaXTwitter, FaTiktok } from "react-icons/fa6"


export default function Learning() {
  const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/@slickcancode", Icon: FaTiktok },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oreofe-adelanwa-4aa04b368/", Icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/SlickCanCode", Icon: FaGithub },
  { label: "X", href: "https://x.com/oreofeadelanwa", Icon: FaXTwitter },
]

  return (
    <section className="section-pad learning">
      <Reveal>
        <p className="eyebrow">Beyond the code</p>

        <h2>Still building. Still learning.</h2>

        <p className="learning-copy">
          I&apos;m documenting the process, the decisions,
          and the things I&apos;m still figuring out. Find me
          where I share the work.
        </p>

      <div className="social-row">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon size={16} aria-hidden="true" />
            {label}
            
          </a>
        ))}
      </div>

      </Reveal>
    </section>
  )
}