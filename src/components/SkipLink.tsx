export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-neon-cyan focus:border focus:border-neon-cyan focus:rounded font-mono text-sm"
    >
      Skip to main content
    </a>
  )
}