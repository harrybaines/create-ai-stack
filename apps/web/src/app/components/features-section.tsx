"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Zap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Chat Applications",
      description: "Build conversational AI apps with streaming responses, message history, and multi-model support."
    },
    {
      icon: Sparkles,
      title: "AI Agents",
      description: "Autonomous agents with tool calling, multi-step reasoning, and workflow automation."
    },
    {
      icon: Zap,
      title: "Full-Stack Apps",
      description: "Complete web applications with React, Next.js, database integration, and deployment configs."
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-6 py-32">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
          What you can build
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Start with production-ready templates for the most common AI use cases.
          Save thousands of hours and convert your visitors into customers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
          >
            <div className="border border-border/60 rounded-2xl p-8 h-full">
              <div className="mb-6">
                <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Placeholder gray boxes */}
              <div className="space-y-3">
                <div className="h-4 bg-muted/30 rounded-lg"></div>
                <div className="h-4 bg-muted/30 rounded-lg w-4/5"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-muted/40 rounded"></div>
                  <div className="h-6 w-16 bg-muted/40 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}