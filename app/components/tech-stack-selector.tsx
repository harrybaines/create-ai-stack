"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";

export default function TechStackSelector() {
  const [selectedTech, setSelectedTech] = useState<Set<string>>(new Set());

  const toggleTech = (techId: string) => {
    const newSelected = new Set(selectedTech);
    if (newSelected.has(techId)) {
      newSelected.delete(techId);
    } else {
      newSelected.add(techId);
    }
    setSelectedTech(newSelected);
  };

  const techCategories = [
    {
      name: "Frontend",
      items: [
        { id: "nextjs", name: "Next.js" },
        { id: "typescript", name: "TypeScript" },
        { id: "tailwind", name: "Tailwind CSS" },
        { id: "framer", name: "Framer Motion" },
        { id: "reactquery", name: "React Query" },
        { id: "vite", name: "Vite" }
      ]
    },
    {
      name: "Backend",
      items: [
        { id: "nodejs", name: "Node.js" },
        { id: "express", name: "Express.js" },
        { id: "fastapi", name: "FastAPI" },
        { id: "trpc", name: "tRPC" },
        { id: "supabase", name: "Supabase" },
        { id: "prisma", name: "Prisma" }
      ]
    },
    {
      name: "Database",
      items: [
        { id: "postgresql", name: "PostgreSQL" },
        { id: "redis", name: "Redis" },
        { id: "planetscale", name: "PlanetScale" },
        { id: "neon", name: "Neon" },
        { id: "sqlite", name: "SQLite" },
        { id: "drizzle", name: "Drizzle ORM" }
      ]
    },
    {
      name: "AI",
      items: [
        { id: "openai", name: "OpenAI" },
        { id: "anthropic", name: "Anthropic" },
        { id: "langchain", name: "LangChain" },
        { id: "pinecone", name: "Pinecone" },
        { id: "weaviate", name: "Weaviate" },
        { id: "huggingface", name: "Hugging Face" },
        { id: "llamaindex", name: "LlamaIndex" },
        { id: "vercelai", name: "Vercel AI SDK" }
      ]
    }
  ];

  // Get selected tech names for display
  const selectedTechNames = Array.from(selectedTech).map(techId => {
    for (const category of techCategories) {
      const tech = category.items.find(item => item.id === techId);
      if (tech) return tech.name;
    }
    return techId;
  });

  return (
    <div className="relative max-w-6xl mx-auto px-6 py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          Choose your{" "}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            tech stack
          </span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Select the technologies you want to include in your AI application.
        </p>
      </motion.div>

      <motion.div
        className="space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
      >
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.1, ease: "easeOut" }}
          >
            <h3 className="text-xs font-mono font-medium text-muted-foreground/70 uppercase tracking-wider mb-4">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {category.items.map((tech) => {
                const isSelected = selectedTech.has(tech.id);
                return (
                  <button
                    key={tech.id}
                    onClick={() => toggleTech(tech.id)}
                    className={`
                       group relative overflow-hidden bg-background border rounded-xl px-4 py-3.5 text-sm font-medium
                       transition-all duration-300 text-left shadow-sm hover:shadow-md
                       focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50
                       ${isSelected
                        ? 'border-primary/40 bg-primary/5 text-primary shadow-md scale-[1.02]'
                        : 'border-border/50 text-foreground hover:border-border hover:bg-card/50 hover:scale-[1.01]'
                      }
                     `}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <span className="truncate font-medium">{tech.name}</span>
                      <div className={`
                        flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-200
                        ${isSelected
                          ? 'border-primary bg-primary scale-100'
                          : 'border-muted-foreground/30 group-hover:border-muted-foreground/50 scale-90'
                        }
                      `}>
                        {isSelected && (
                          <Check className="w-3 h-3 text-primary-foreground" />
                        )}
                      </div>
                    </div>
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedTech.size > 0 && (
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-mono font-medium text-foreground uppercase tracking-wider">
                  Selected ({selectedTech.size})
                </span>
              </div>
              <button
                onClick={() => setSelectedTech(new Set())}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-wider"
              >
                Clear all
              </button>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {selectedTechNames.map((techName, index) => (
                <motion.div
                  key={index}
                  className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm text-primary border border-primary/30 rounded-lg px-3 py-1.5 text-xs font-medium shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="font-medium">{techName}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const techId = Array.from(selectedTech)[index];
                      toggleTech(techId);
                    }}
                    className="ml-1 hover:bg-primary/20 rounded-full p-1 transition-all duration-200 hover:scale-110"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}