"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero section-pad" id="top">
      <div className="hero-copy">
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 15 }
          }
          animate={
            reduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          transition={{ duration: 0.6 }}
        >
          <h1>
            I build software that solves{" "}
            <em>real problems.</em>
          </h1>

          <p className="hero-intro">
            I&apos;m Oreofe, a full-stack software developer focused on
            AI-powered applications, backend systems,
            automations and web products.
          </p>

          <div className="button-row">
            <a
              className="button button-dark"
              href="#work"
            >
              View my work
              <ArrowUpRight size={17} />
            </a>

            <a className="text-link" href="#contact">
              Let&apos;s talk
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-portrait"
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 15 }
        }
        animate={
          reduceMotion
            ? undefined
            : { opacity: 1, y: 0 }
        }
        transition={{
          duration: 0.7,
          delay: 0.14,
        }}
      >
        <div className="portrait-ring" />

        <div className="portrait-placeholder overflow-hidden">
          <Image
            src="/profile-photo.png"
            alt=""
            width={500}
            height={500}
            className="object-center"
          />
        </div>

        <div className="portrait-badge">
          Hello, I&apos;m Oreofe Emmanuel
        </div>
      </motion.div>
    </section>
  )
}