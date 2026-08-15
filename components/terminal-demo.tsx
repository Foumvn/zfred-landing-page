export function TerminalDemo() {
  const rows = [
    { nom: "Sarah", note: "18" },
    { nom: "Karim", note: "16" },
    { nom: "Leïla", note: "15" },
    { nom: "Yann", note: "14" },
    { nom: "Moussa", note: "13" },
  ]

  return (
    <div className="relative mx-auto max-w-3xl rounded-xl border border-white/15 bg-black shadow-2xl shadow-black/60 overflow-hidden text-left">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-gray-400 font-mono">zfred — ~/projets/ecole</span>
      </div>

      <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed">
        <p className="text-white">
          <span className="text-emerald-400">$</span> zfred{" "}
          <span className="text-gray-300">"les 5 meilleures notes"</span>
        </p>

        <p className="mt-4 text-gray-500">SQL généré :</p>
        <pre className="mt-1 text-emerald-300 whitespace-pre-wrap">{`SELECT nom, note
FROM etudiants
ORDER BY note DESC
LIMIT 5;`}</pre>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="text-gray-400">
                <th className="border border-white/15 px-3 py-1.5 font-medium">nom</th>
                <th className="border border-white/15 px-3 py-1.5 font-medium">note</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.nom} className="text-white">
                  <td className="border border-white/15 px-3 py-1.5">{row.nom}</td>
                  <td className="border border-white/15 px-3 py-1.5">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-gray-600">— 5 lignes récupérées en 0,3s</p>
      </div>
    </div>
  )
}
