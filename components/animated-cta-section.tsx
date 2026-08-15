"use client"

import { useRef, useState } from "react"
import { Button } from "./ui/button"
import { Copy, BookOpen, TerminalSquare } from "lucide-react"
import { BackgroundPaths } from "./ui/floating-paths"

const INSTALL_CMD = "npm install -g zfred-request"

export function AnimatedCTASection() {
  const contentRef = useRef<HTMLDivElement>(null)
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
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <BackgroundPaths />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto">
        <div
          className="rounded-2xl p-12 text-center animate-fade-in-up"
          ref={contentRef}
          style={{ animationDelay: "0.3s" }}
        >
          <h2
            className="text-4xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up"
            style={{ fontFamily: "var(--font-playfair)", animationDelay: "0.5s" }}
          >
            Prêt à interroger votre base en langage naturel ?
          </h2>
          <p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            Un paquet npm, une commande d'installation, et votre base de données vous répond — en
            français, comme en toute autre langue.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <Button size="lg" onClick={copyInstall} className="bg-white text-black hover:bg-white/90 group font-mono">
              <TerminalSquare />
              {INSTALL_CMD}
              <Copy className="h-4 w-4 text-black/50 group-hover:text-black" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <BookOpen className="h-4 w-4" />
              <a href="#installation">Voir la documentation</a>
            </Button>
          </div>
          {copied && (
            <p className="mt-4 text-sm text-emerald-400 animate-fade-in-up">Commande copiée dans le presse-papiers.</p>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(24px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
