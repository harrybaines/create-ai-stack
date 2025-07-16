"use client";

import { config } from "@/lib/config";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Check, Github, GithubIcon, Terminal } from "lucide-react";
import CopyableCommand from "./copyable-command";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-20 xl:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="max-w-2xl">
          <motion.div
            className="inline-flex items-center gap-2 border border-border bg-background/50 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 hover:bg-background/80 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Terminal className="w-4 h-4" />
            <span>CLI coming soon!</span>
          </motion.div>
          <motion.h1
            className="text-6xl lg:text-8xl font-bold tracking-tight text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Complete AI Stack in Seconds
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            create-ai-stack is a CLI tool that helps you scaffold AI applications
            with best practices, modern tooling, and production-ready templates.
          </motion.p>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          >
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
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          >
            <Button asChild variant={'outline'} size={'lg'} className="group">
              <Link href={config.github.url} target="_blank">
                <GithubIcon className="w-4 h-4" />
                View on GitHub
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <CopyableCommand command="npx create-ai-stack my-app" />
        </motion.div>
      </div>
    </div>
  );
}
