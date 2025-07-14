import { Github, Terminal, Twitter } from "lucide-react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const sansFont = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create AI Stack - Build AI Apps Quickly",
  description: "A CLI tool to build AI applications quickly and efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansFont.variable} font-[family-name:var(--font-sans)] antialiased`}
      >
        {/* Navbar */}
        <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                <span className="font-semibold text-lg">create-ai-stack</span>
              </div>
              <div className="flex items-center gap-8">
                <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Docs
                </a>
                <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">
                  Examples
                </a>
                <a href="#github" className="text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  <span className="font-semibold">create-ai-stack</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Build AI applications quickly with production-ready templates.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Documentation</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Quick Start
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Templates
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Configuration
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Examples</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Chat App
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                    RAG System
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                    AI Agent
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Community</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
              <p>© 2024 create-ai-stack. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
