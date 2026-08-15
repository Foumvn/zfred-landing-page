"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Qu'est-ce que Zfred-Request ?",
    answer:
      "Zfred-Request est un package npm installable en ligne de commande qui traduit vos questions en langage naturel en requêtes SQL, puis les exécute sur votre base de données — PostgreSQL, MySQL ou SQLite — directement depuis le terminal. Le tout sans interface graphique.",
  },
  {
    question: "Faut-il savoir écrire du SQL ?",
    answer:
      "Non, c'est précisément le but. Vous posez votre question en français (ou dans n'importe quelle autre langue) et l'outil génère le SQL pour vous. Le SQL généré est toujours affiché avant exécution, afin que vous puissiez le vérifier.",
  },
  {
    question: "Mes données sont-elles en sécurité ?",
    answer:
      "Oui, par conception. Le mode lecture seule est actif par défaut : toute requête de modification (INSERT, UPDATE, DELETE…) est bloquée sans l'option --write. Vos identifiants sont stockés hors du dépôt de code, dans votre répertoire de configuration local, et le SQL généré est toujours affiché avant d'être exécuté.",
  },
  {
    question: "Quelles langues sont supportées ?",
    answer:
      "Français, anglais, espagnol, chinois et toute autre langue supportée par le modèle IA. Aucune configuration n'est nécessaire : vous écrivez votre question dans la langue de votre choix.",
  },
  {
    question: "Quelles bases de données sont supportées ?",
    answer:
      "PostgreSQL, MySQL et SQLite. Une seule configuration via zfred init : l'outil détecte le moteur, teste la connexion, puis analyse automatiquement le schéma (tables, colonnes, types et exemples de valeurs).",
  },
  {
    question: "Comment installer et commencer ?",
    answer:
      "Trois étapes : npm install -g zfred-request, puis zfred init pour configurer l'accès à votre base (connexion testée et schéma enregistré), puis zfred \"votre question en langage naturel\". Le résultat s'affiche immédiatement sous forme de tableau.",
  },
  {
    question: "Puis-je l'utiliser dans mes propres projets ?",
    answer:
      "Oui. En plus de la CLI, Zfred-Request s'importe comme bibliothèque Node.js : translate() pour la traduction seule, query() pour la traduction et l'exécution. La configuration enregistrée via zfred init est réutilisée automatiquement.",
  },
  {
    question: "Puis-je faire des écritures dans la base ?",
    answer:
      "Oui, mais uniquement de manière explicite. Par défaut tout est en lecture seule ; passez l'option --write pour autoriser les requêtes de modification (INSERT, UPDATE, DELETE). Le SQL est affiché avant chaque exécution.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Questions fréquentes
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tout ce qu'il faut savoir avant d'interroger votre base en langage naturel.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border/20 rounded-lg bg-card/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-foreground/5 transition-colors rounded-lg"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
