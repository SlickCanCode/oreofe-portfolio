"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"


import { capabilities } from "../data/portfolio"
import Reveal from "./Reveal"

export default function Capabilities() {
  return (
    <>
      <section className="personal-line section-pad">
        <p>
          I utilize available tools maximally, to solve user and business problems.
        </p>
      </section>

      <section
        className="section-pad capabilities"
        id="about"
      >
        <Reveal>
          <p className="eyebrow">What I work on</p>
          <h2>Things I like building.</h2>
        </Reveal>

        <div className="capability-grid">
{capabilities.map((capability, index) => {
  const Icon = capability.icon;

  return (
    <Reveal
      key={capability.title}
      delay={index * 0.06}
    >
      <motion.article
        className={
          index === 0
            ? "capability-card capability-featured"
            : "capability-card"
        }
        whileHover={{ y: -3 }}
      >
        <Icon className="capability-icon w-15 h-15 text-[#35b878]" strokeWidth={1.5}/>

        <div className="capability-heading">
          <h3>{capability.title}</h3>


        </div>

        <p>{capability.description}</p>
      </motion.article>
    </Reveal>
  );
})}
        </div>
      </section>
    </>
  )
}