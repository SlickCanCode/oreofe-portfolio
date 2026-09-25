"use client"

import Reveal from "./Reveal"
import { principles } from "../data/portfolio"

export default function Thinking() {
  return (
    <section
      className="dark-section thinking section-pad"
      id="thinking"
    >
      <div
        className="code-texture"
        aria-hidden="true"
      >
        <span>
          const resilience = designForFailure(input)
        </span>

        <span>
          {"await system.observe({ healthy: true })"}
        </span>

        <span>
          return product.keepChanging()
        </span>
      </div>

      <Reveal>
        <p className="eyebrow">How I think</p>

        <h2>
    I build digital solutions that help businesses and individuals thrive online.
        </h2>
      </Reveal>

      <div className="principles-grid">
        {principles.map(([title, body], index) => (
          <Reveal
            key={title}
            delay={index * 0.06}
          >
            <div className="principle">
              <span className="principle-mark">
                {index === 0
                  ? "Working rule"
                  : index === 1
                    ? "Safety check"
                    : index === 2
                      ? "Long view"
                      : "Core question"}
              </span>

              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}