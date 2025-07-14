import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image src="/logo.png" alt="create-ai-stack" width={40} height={40} />
            <span className="font-semibold text-lg">create-ai-stack</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">
              Examples
            </a>
            <a href="https:" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
