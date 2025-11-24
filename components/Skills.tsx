"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2, Database, Layout, Server, Settings, Smartphone, Terminal, TestTube } from "lucide-react";

const iconMap: Record<string, any> = {
    languages: Code2,
    networking: Server,
    architecture: Layout,
    diState: Database,
    analytics: Settings,
    tools: Terminal,
    testing: TestTube,
    frameworks: Smartphone,
    uiUx: Layout,
    deployment: Settings,
};

const formatCategoryName = (key: string) => {
    const labels: Record<string, string> = {
        diState: "DI & State Management",
        uiUx: "UI/UX & Performance",
    };
    return labels[key] || key.replace(/([A-Z])/g, " $1").trim();
};

export default function Skills() {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and tools I use to build exceptional applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, items], index) => {
                        const Icon = iconMap[category] || Code2;
                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-semibold capitalize text-lg">
                                        {formatCategoryName(category)}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-xs rounded-full bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
