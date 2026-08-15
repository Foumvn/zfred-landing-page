"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { TerminalSquare, Copy, Check } from "lucide-react"
import { ParticleTextEffect } from "./particle-text-effect"
import { TerminalDemo } from "./terminal-demo"

const INSTALL_CMD = "npm install -g zfred-request"

export function HeroSection() {
  const [copied, setCopied] = useState(false)

  const copyInstall = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* presse-papiers indisponible */
    }
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-between">
      <div className="relative flex-1 min-h-[50vh]">
        <ParticleTextEffect words={["ZFRED", "REQUEST", "SQL", "TERMINAL"]} />
      </div>

      <div className="container mx-auto text-center relative z-10 pb-10 sm:pb-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-brand mb-4">
            SQL en langage naturel, depuis votre terminal
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
            Posez vos questions.{" "}
            <span className="text-muted-foreground">Recevez du SQL, exécuté sur votre base.</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            En français, anglais, espagnol ou chinois : Zfred-Request traduit votre question en
            requête SQL et l&apos;exécute sur votre base de données — PostgreSQL, MySQL ou SQLite —
            sans quitter le terminal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={copyInstall}
              className="bg-primary text-primary-foreground hover:bg-primary/90 group font-mono"
            >
              <TerminalSquare />
              {INSTALL_CMD}
              {copied ? (
                <Check className="ml-1 h-3.5 w-3.5 text-primary-foreground/60 group-hover:text-primary-foreground" />
              ) : (
                <Copy className="ml-1 h-3.5 w-3.5 text-primary-foreground/60 group-hover:text-primary-foreground" />
              )}
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent bg-transparent">
              <a href="#how-it-works">Voir un exemple</a>
            </Button>
          </div>
        </div>

        <TerminalDemo />
      </div>
    </section>
  )
}
