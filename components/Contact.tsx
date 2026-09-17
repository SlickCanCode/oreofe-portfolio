import { ArrowUpRight } from "lucide-react"
import Reveal from "./Reveal"

export default function Contact() {
  return (
    <section
      className="dark-section contact section-pad"
      id="contact"
    >
      <Reveal>
        <p className="eyebrow">Get in touch</p>

        <h2>Have a problem worth building?</h2>

        <div className="contact-layout">
          <form
            className="contact-form"
            action="mailto:hello@oreofe.dev"
            method="post"
            encType="text/plain"
          >
            <label>
              Name

              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email

              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Message

              <textarea
                name="message"
                rows={5}
                placeholder="Tell me what you're building..."
                required
              />
            </label>

            <button
              className="contact-submit"
              type="submit"
            >
              Send message
              <ArrowUpRight size={19} />
            </button>
          </form>

          <div className="contact-aside">
            <p>
              Tell me what you&apos;re working through, what&apos;s
              not working, or what you&apos;re curious about.
            </p>

            <div className="contact-links">
              <a href="mailto:hello@oreofe.dev">
                Email
              </a>

              <a href="#contact">LinkedIn</a>
              <a href="#contact">GitHub</a>
              <a href="#contact">X</a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}