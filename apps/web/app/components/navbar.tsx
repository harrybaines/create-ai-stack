import { config } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-0.5">
            <Image src="/logo.png" alt="create-ai-stack" width={40} height={40} />
            <span className="font-normal text-lg">create-ai-stack</span>
          </Link>
          <div className="flex items-center gap-8">
            <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">
              Examples
            </a>
            <a href={config.github.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
