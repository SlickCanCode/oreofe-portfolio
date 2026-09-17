"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

import { navItems } from "../data/portfolio"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-nav">
      <a
        className="wordmark"
        href="#top"
        aria-label="Oreofe home"
      >
        oreofe.
      </a>

      <nav
        className={menuOpen ? "nav-links is-open" : "nav-links"}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <ThemeToggle />

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>
    </header>
  )
}