"use client"

import { useState } from "react"
import { ArrowUpRight, Loader2, Check } from "lucide-react"
import Reveal from "./Reveal"
import { Mail } from "lucide-react"
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6"

type Status = "idle" | "loading" | "success" | "error"

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string
    )
    formData.append("subject", "New message from portfolio contact form")
    formData.append("from_name", "Portfolio Contact Form")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })

      const result = await res.json()

      if (result.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="dark-section contact section-pad" id="contact">
      <Reveal>
        <p className="eyebrow">Get in touch</p>

        <h2>Have a problem worth solving?</h2>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
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

            {/* honeypot: hidden from real users, catches basic bots */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden-field"
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              className="contact-submit"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  Sending
                  <Loader2 size={19} className="spin" />
                </>
              ) : status === "success" ? (
                <>
                  Sent
                  <Check size={19} />
                </>
              ) : (
                <>
                  Send message
                  <ArrowUpRight size={19} />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="form-status form-status--success">
                Thanks, I&apos;ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="form-status form-status--error">
                Something went wrong. Try again, or email me directly.
              </p>
            )}
          </form>

          <div className="contact-aside">
            <p>
              Tell me what you&apos;re working through, what&apos;s not
              working, or what you&apos;re curious about.
            </p>

          <div className="contact-links">
            <a href="mailto:oreofeadelanwa3@gmail.com">
              <Mail size={16} aria-hidden="true" />
              Email
            </a>

            <a href="https://www.linkedin.com/in/oreofe-adelanwa-4aa04b368/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>

            <a href="https://github.com/SlickCanCode" target="_blank" rel="noopener noreferrer">
              <FaGithub size={16} aria-hidden="true" />
              GitHub
            </a>

            <a href="https://x.com/oreofeadelanwa" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={16} aria-hidden="true" />
              X
            </a>
          </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}