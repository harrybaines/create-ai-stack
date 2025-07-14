"use client";

import { ArrowRight, BookOpen, Brain, Check, Code, Copy, Database, Github, Sparkles, Terminal, Zap } from "lucide-react";
import { useState } from "react";

function CopyableCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card/80 border border-border/60 rounded-xl p-6 space-y-4 shadow-sm">
      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <Terminal className="w-4 h-4" />
        <span>Terminal</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 font-mono text-sm">
          <span className="text-primary">$</span>
          <span className="text-foreground">{command}</span>
        </div>
        <button
          onClick={handleCopy}
          className="opacity-100 transition-all duration-200 p-2 hover:bg-background/80 rounded-lg hover:scale-110"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_70%)] pointer-events-none" />

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 xl:py-32 3xl:py-60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>AI-powered development</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
              Build AI apps{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                fast
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-12 leading-relaxed">
              Create AI Stack is a CLI tool that helps you scaffold and build AI applications
              with best practices, modern tooling, and production-ready templates.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-foreground" />
                <span>Multiple templates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-foreground" />
                <span>TypeScript ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-foreground" />
                <span>Production configs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-foreground" />
                <span>Best practices</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-foreground" />
                <span>Zero config setup</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-foreground" />
                <span>Modern tooling</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-foreground text-background px-5 py-2.5 rounded-lg font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                <BookOpen className="w-4 h-4" />
                View Docs
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-border px-5 py-2.5 rounded-lg font-medium text-foreground hover:bg-muted/50 hover:border-border/80 transition-all duration-300 flex items-center gap-2 group">
                <Github className="w-4 h-4" />
                View on GitHub
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="relative">
                <CopyableCommand command="npx create-ai-stack my-app" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            What you can build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with production-ready templates for the most common AI use cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "Chat Applications",
              description: "Build conversational AI apps with streaming responses, message history, and multi-model support."
            },
            {
              icon: Database,
              title: "RAG Systems",
              description: "Retrieval-Augmented Generation apps with vector databases, document processing, and semantic search."
            },
            {
              icon: Sparkles,
              title: "AI Agents",
              description: "Autonomous agents with tool calling, multi-step reasoning, and workflow automation."
            },
            {
              icon: Code,
              title: "API Services",
              description: "RESTful and GraphQL APIs with authentication, rate limiting, and OpenAPI documentation."
            },
            {
              icon: Zap,
              title: "Full-Stack Apps",
              description: "Complete web applications with React, Next.js, database integration, and deployment configs."
            },
            {
              icon: Terminal,
              title: "CLI Tools",
              description: "Command-line interfaces for AI tasks, data processing, and automation workflows."
            }
          ].map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-6 h-full hover:bg-card/60 hover:border-border/80 transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
            Get started in{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              seconds
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your template, customize your setup, and start building immediately.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card/80 border border-border/60 rounded-xl p-8 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Terminal className="w-4 h-4" />
                <span>Terminal</span>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-primary">$</span>
                  <span className="text-foreground">npx create-ai-stack my-app</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">$</span>
                  <span className="text-foreground">cd my-app</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">$</span>
                  <span className="text-foreground">npm run dev</span>
                </div>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Server running on localhost:3000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
