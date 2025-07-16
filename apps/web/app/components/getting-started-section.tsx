"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function GettingStartedSection() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-32">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
          Get started in seconds
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose your template, customize your setup, and start building immediately.
        </p>
      </motion.div>

      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <div className="bg-card/80 border border-border/60 rounded-xl p-8 shadow-xs">
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
                <span className="text-foreground">bun dev</span>
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
      </motion.div>
    </div>
  );
}
