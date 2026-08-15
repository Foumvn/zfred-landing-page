"use client"

import { motion } from "motion/react"

const steps = [
  {
    number: "01",
    title: "Installer",
    command: "npm install -g zfred-request",
    description: "Un paquet npm unique, installable en une ligne. Un message de bienvenue s'affiche avec l'identité visuelle de l'outil.",
  },
  {
    number: "02",
    title: "Configurer",
    command: "zfred init",
    description: "Un questionnaire interactif : moteur (PostgreSQL, MySQL, SQLite), hôte, accès. La connexion est testée et le schéma de votre base est analysé et enregistré.",
  },
  {
    number: "03",
    title: "Interroger",
    command: 'zfred "les 5 meilleures notes"',
    description: "Le SQL généré s'affiche, puis la requête est exécutée immédiatement. Lecture seule par défaut, résultats affichés en tableau.",
  },
]

const examples = [
  'zfred "sélectionne tous les utilisateurs ayant une note supérieure à 13"',
  'zfred "select all users with a grade above 13"',
  'zfred "selecciona todos los usuarios con una nota superior a 13"',
  'zfred "找出成绩高于13的所有用户"',
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-background">
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
            Opérationnel en trois commandes
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Aucune interface, aucun framework. Juste votre terminal et votre base de données.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative bg-card border border-border/20 rounded-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <span className="text-5xl font-bold text-foreground/10">{step.number}</span>
              <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
              <pre className="text-sm text-emerald-300 bg-black border border-white/10 rounded-lg px-4 py-3 mb-4 overflow-x-auto">
                {step.command}
              </pre>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-6xl mx-auto bg-muted border border-border rounded-lg p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-muted-foreground text-sm mb-4">La même question, dans n'importe quelle langue :</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {examples.map((example) => (
              <pre key={example} className="text-xs sm:text-sm text-foreground/80 font-mono truncate">
                {example}
              </pre>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
