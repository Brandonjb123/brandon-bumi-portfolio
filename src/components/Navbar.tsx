export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-mono text-neon-cyan text-lg font-bold">BJB</span>
        <div className="flex gap-6 text-sm font-mono text-white/70">
          <a href="#about" className="hover:text-neon-cyan transition-colors">About</a>
          <a href="#tech" className="hover:text-neon-cyan transition-colors">Stack</a>
          <a href="#projects" className="hover:text-neon-cyan transition-colors">Projects</a>
          <a href="#certs" className="hover:text-neon-cyan transition-colors">Certs</a>
          <a href="#contact" className="hover:text-neon-cyan transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}