export function ZfredLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/zfred-logo.png"
      alt="Zfred-Request"
      className={`h-9 w-auto object-contain ${className}`}
      draggable={false}
    />
  )
}
