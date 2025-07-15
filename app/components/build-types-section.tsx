"use client";

import { motion } from "framer-motion";

export default function BuildTypesSection() {
  const buildTypes = [
    {
      number: "01",
      title: "Chat Applications",
      description: "Conversational AI apps with streaming responses, message history, and multi-model support. From simple chatbots to complex customer support systems that understand context and provide intelligent responses."
    },
    {
      number: "02",
      title: "AI-Powered Websites",
      description: "Full-stack web applications with integrated AI features. Landing pages, dashboards, and admin panels with intelligent data processing, automated insights, and seamless user experiences."
    },
    {
      number: "03",
      title: "Intelligent Workflows",
      description: "Autonomous agents and workflow automation systems. AI-driven processes that handle complex tasks, make decisions, and integrate with existing tools to streamline your business operations."
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-6 py-32">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 border border-border bg-background/50 backdrop-blur-sm text-muted-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
          How it works
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
          What you can build
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          CLI tool with production-ready templates for full-stack AI applications. Get started quickly with TypeScript, modern tooling, and customizable configurations.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
      >
        {buildTypes.map((type, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
          >
            <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-6 h-full hover:bg-card/60 hover:border-border/80 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <div className="text-2xl font-bold text-muted-foreground/40 mb-4">
                  {type.number}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {type.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </div>

              {/* Visual placeholder elements matching the screenshot */}
              <div className="space-y-3">
                {index === 0 && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 bg-muted/60 rounded-lg"></div>
                      <div className="h-16 bg-muted/60 rounded-lg"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-12 bg-muted/40 rounded-lg"></div>
                      <div className="h-12 bg-muted/40 rounded-lg"></div>
                    </div>
                  </>
                )}
                {index === 1 && (
                  <>
                    <div className="space-y-2">
                      <div className="h-3 bg-muted/60 rounded-full w-4/5"></div>
                      <div className="h-3 bg-muted/60 rounded-full w-3/5"></div>
                      <div className="h-3 bg-muted/40 rounded-full w-2/5"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="h-8 bg-muted/60 rounded-lg"></div>
                      <div className="h-8 bg-muted/60 rounded-lg"></div>
                    </div>
                  </>
                )}
                {index === 2 && (
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 bg-muted/60 rounded-full"></div>
                    <div className="h-16 bg-muted/60 rounded-full"></div>
                    <div className="h-16 bg-muted/60 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}