"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react"

import Reveal from "./Reveal"
import { projects } from "../data/portfolio"

export default function Projects() {
  return (
    <section
      className="section-pad projects"
      id="work"
    >
      <Reveal>
        <p className="eyebrow">Selected work</p>
        <h2>Things I&apos;ve built.</h2>
      </Reveal>

      {/* Featured Project */}
      <Reveal className="featured-project">
        <div className="project-visual featured-visual">
          <span>RESUMATCH / PRODUCT VIEW</span>

          <div className="visual-window">
            <div className="visual-bar" />

            <div className="visual-columns">
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>

        <div className="featured-info">
          <div>
            <p className="project-kicker">
              Featured project
            </p>

            <h3>ResuMatch</h3>

            <p className="project-lede">
              AI-powered resume analysis that helps people
              understand how their experience maps to an
              opportunity.
            </p>
          </div>

          <div className="project-details">
            <div>
              <strong>Problem</strong>
              <p>
                Resumes are often reviewed without clear,
                useful feedback. ResuMatch makes the gaps
                easier to see.
              </p>
            </div>

            <div>
              <strong>Built</strong>
              <p>
                Resume parsing, analysis flows, and a focused
                interface for turning feedback into action.
              </p>
            </div>

            <div>
              <strong>Engineering</strong>
              <p>
                Designed around reliable APIs, structured
                data, and AI outputs that stay understandable.
              </p>
            </div>
          </div>

          <div className="project-footer">
            <div className="chips">
              <span>Spring Boot</span>
              <span>React</span>
              <span>PostgreSQL</span>
              <span>AI</span>
              <span>Docker</span>
            </div>

            <div className="button-row">
              <a
                className="text-link"
                href="#contact"
              >
                View Project
                <ExternalLink size={15} />
              </a>

              <a
                className="text-link"
                href="#contact"
              >
                GitHub
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Other Projects */}
      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.08}
          >
            <motion.article
              className="small-project"
              whileHover={{ y: -4 }}
            >
              <div className="project-visual small-visual">
                <span>
                  PROJECT / 0{index + 2}
                </span>
              </div>

              <div className="small-project-copy">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="small-project-bottom">
                  <span className="chip">
                    {project.stack}
                  </span>

                  <a
                    href="#contact"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}