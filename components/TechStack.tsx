"use client"

import Reveal from "./Reveal"
import { stack } from "../data/portfolio"

export default function TechStack() {
  return (
    <section className="section-pad stack-section">
      <Reveal>
        <p className="eyebrow">Tools I use</p>
        <h2>The stack behind what I build.</h2>
      </Reveal>

      <div className="stack-list">
        {Object.entries(stack).map(([category, items], index) => (
          <Reveal key={category} delay={index * 0.05}>
            <div className="stack-row">
              <strong>{category}</strong>

              <div className="stack-items">
                {items.map(({ name, Icon }) => (
                  <span className="chip tech-chip" key={name}>
                    <Icon aria-hidden="true" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}