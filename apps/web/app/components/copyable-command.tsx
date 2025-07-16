"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";

interface CopyableCommandProps {
  command: string;
}

export default function CopyableCommand({ command }: CopyableCommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="bg-card/80 border border-border/40 rounded-xl p-6 space-y-4 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
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
        <Button onClick={handleCopy} variant="outline" size="icon" className="size-8">
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>
    </motion.div>
  );
}
