"use client";

import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";

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
          Join us to build the future of AI tooling together!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <Button asChild size={'lg'}>
            <Link href={config.github.url} target="_blank">
              <Github className="w-4 h-4" />
              Star on GitHub
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
