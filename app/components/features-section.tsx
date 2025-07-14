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
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
          What you can build
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Start with production-ready templates for the most common AI use cases
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
          >
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}