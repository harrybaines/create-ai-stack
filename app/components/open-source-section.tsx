"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function OpenSourceSection() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-32">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
          Built in the open
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Fully open source and community-driven. Contribute, customize, and make it your own.
          Join developers worldwide building the future of AI tooling together.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 group mx-auto">
            <Github className="w-4 h-4" />
            Star on GitHub
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}