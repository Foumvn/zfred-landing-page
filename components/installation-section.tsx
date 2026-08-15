"use client"

import { motion } from "motion/react"
import { Button } from "./ui/button"
import { Copy, TerminalSquare, BookOpen, PackageCheck } from "lucide-react"
import { useState } from "react"

const INSTALL_CMD = "npm install -g zfred-request"

const libraryCode = `import { translate, query } from "zfred-request";

// Traduction seule
const sql = await translate("combien d'utilisateurs par ville ?");

// Traduction + exécution (lecture seule)
const { sql, rows } = await query("les 5 meilleures notes");

// Autoriser les écritures
await query("mets à jour la note de Jean à 18", { write: true });`

export function InstallationSection() {
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

  const copyLibrary = async () => {
    try {
      await navigator.clipboard.writeText(libraryCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* presse-papiers indisponible */
    }
  }

  return (
    <section id="installation" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Installation
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Publié sur npm, open source sous licence MIT. Comptez une minute entre l'installation
            et votre première requête.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="bg-card border border-border/20 rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">En terminal</h3>
            <div className="bg-black border border-white/10 rounded-lg mb-6">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <span className="text-xs text-gray-400 font-mono">terminal</span>
                <button
                  onClick={copyInstall}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-foreground transition-colors"
                  aria-label="Copier la commande d'installation"
                >
                  <Copy className="h-3.5 w-3.5" />
                  {copied ? "Copié !" : "Copier"}
                </button>
              </div>
              <pre className="p-4 font-mono text-sm text-white overflow-x-auto">
                <span className="text-emerald-400">$</span> {INSTALL_CMD}
              </pre>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <PackageCheck className="h-5 w-5 text-brand flex-shrink-0" />
                <span>
                  Message de bienvenue à l'installation avec l'identité visuelle de l'outil.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TerminalSquare className="h-5 w-5 text-brand flex-shrink-0" />
                <span>
                  Puis <code className="text-foreground">zfred init</code> pour configurer votre base
                  en quelques questions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-brand flex-shrink-0" />
                <span>Fonctionne sur Linux, macOS et Windows via Node.js.</span>
              </li>
            </ul>
            <Button size="lg" onClick={copyInstall} className="w-full mt-8 bg-white text-black hover:bg-white/90 group">
              Copier la commande
              <Copy className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            className="bg-card border border-border/20 rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Comme bibliothèque Node.js</h3>
            <div className="bg-black border border-white/10 rounded-lg mb-6">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <span className="text-xs text-gray-400 font-mono">script.mjs</span>
                <button
                  onClick={copyLibrary}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-foreground transition-colors"
                  aria-label="Copier l'exemple de code"
                >
                  <Copy className="h-3.5 w-3.5" />
                  {copied ? "Copié !" : "Copier"}
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-white overflow-x-auto">{libraryCode}</pre>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <TerminalSquare className="h-5 w-5 text-brand flex-shrink-0" />
                <span>
                  <code className="text-foreground">translate()</code> : langage naturel → SQL.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TerminalSquare className="h-5 w-5 text-brand flex-shrink-0" />
                <span>
                  <code className="text-foreground">query()</code> : traduction + exécution en
                  lecture seule.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TerminalSquare className="h-5 w-5 text-brand flex-shrink-0" />
                <span>
                  La configuration enregistrée via <code className="text-foreground">zfred init</code>{" "}
                  est réutilisée automatiquement.
                </span>
              </li>
            </ul>
            <Button size="lg" onClick={copyLibrary} className="w-full mt-8 bg-white text-black hover:bg-white/90 group">
              Copier le code
              <Copy className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
