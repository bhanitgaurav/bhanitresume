"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FileJson, ExternalLink } from "lucide-react";
import Link from "next/link";

// Define interface for Tool
interface Tool {
    name: string;
    description: string;
    link: string;
    icon: string;
}

const iconMap: { [key: string]: any } = {
    FileJson: FileJson,
};

export default function Tools() {
    const { onlineTools } = portfolioData as { onlineTools: Tool[] };

    if (!onlineTools || onlineTools.length === 0) return null;

    return (
        <section id="tools" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Online Tools</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Useful tools and utilities built for developers.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {onlineTools.map((tool, index) => {
                        const Icon = iconMap[tool.icon] || FileJson;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <Link
                                        href={tool.link}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1"
                                    >
                                        Try Now <ExternalLink className="w-3 h-3" />
                                    </Link>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {tool.name}
                                </h3>

                                <p className="text-muted-foreground mb-4">
                                    {tool.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
