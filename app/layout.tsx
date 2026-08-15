import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Zfred-Request — SQL en langage naturel, dans votre terminal",
  description:
    "Posez vos questions en français, anglais, espagnol, chinois… Zfred-Request les traduit en SQL et exécute sur votre base (PostgreSQL, MySQL, SQLite), directement depuis le terminal.",
  keywords: ["sql", "nlp", "ai", "database", "cli", "zfred"],
  openGraph: {
    title: "Zfred-Request — SQL en langage naturel, dans votre terminal",
    description:
      "Traduit vos questions en requêtes SQL et les exécute sur votre base de données, depuis le terminal.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
