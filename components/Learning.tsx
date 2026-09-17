import { ArrowUpRight } from "lucide-react"
import Reveal from "./Reveal"

export default function Learning() {
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
          <a href="#contact">
            LinkedIn
            <ArrowUpRight size={16} />
          </a>

          <a href="#contact">
            GitHub
            <ArrowUpRight size={16} />
          </a>

          <a href="#contact">
            X
            <ArrowUpRight size={16} />
          </a>
        </div>
      </Reveal>
    </section>
  )
}