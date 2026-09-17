"use client"

import Reveal from "./Reveal"
import { stack } from "../data/portfolio"

export default function TechStack() {
  return (
    <section className="section-pad stack-section">
      <Reveal>
        <p className="eyebrow">Tools I use</p>
        <h2>A stack that stays out of the way.</h2>
      </Reveal>

      <div className="stack-list">
        {Object.entries(stack).map(
          ([category, items], index) => (
            <Reveal
              key={category}
              delay={index * 0.05}
            >
              <div className="stack-row">
                <strong>{category}</strong>

                <div className="stack-items">
                  {items.map(([item, mark]) => (
                    <span
                      className="chip tech-chip"
                      key={item}
                    >
                      <span
                        className="tech-mark"
                        aria-hidden="true"
                      >
                        {mark}
                      </span>

                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        )}
      </div>
    </section>
  )
}