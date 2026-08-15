import { ZfredLogo } from "./zfred-logo"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <ZfredLogo className="mb-4" />
            <p className="text-muted-foreground mb-4 max-w-md">
              Outil d&apos;abstraction des requêtes SQL par langage naturel. Installez, posez vos
              questions, recevez du SQL — directement dans votre terminal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Produit</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-foreground transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="#installation" className="hover:text-foreground transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Technologie</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Node.js · ES modules</li>
              <li>PostgreSQL · MySQL · SQLite</li>
              <li>Traduction par Mistral AI</li>
              <li>Licence MIT</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 Zfred — FredTech. Zfred-Request v1.0.0, tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
