"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

// Define interface for Article
interface Article {
    title: string;
    description: string;
    link: string;
    date: string;
}

export default function Articles() {
    const { articles } = portfolioData as { articles: Article[] };

    if (!articles || articles.length === 0) return null;

    return (
        <section id="articles" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Thoughts and insights on mobile development and technology.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {articles.map((article, index) => (
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
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                                    {article.date}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                <Link href={article.link} target="_blank" className="flex items-center gap-2">
                                    {article.title}
                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </h3>

                            <p className="text-muted-foreground mb-4">
                                {article.description}
                            </p>

                            <Link
                                href={article.link}
                                target="_blank"
                                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                            >
                                Read on Medium
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
