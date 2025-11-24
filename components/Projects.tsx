"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, Layers, Smartphone, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Project {
    name: string;
    description: string;
    platform: string;
    techStack: string[];
    details: string[];
    link?: string;
}

export default function Projects() {
    const { projects } = portfolioData as { projects: Project[] };

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A showcase of mobile applications and solutions I&apos;ve developed.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col h-full p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    {project.platform.toLowerCase().includes("android") ? (
                                        <Smartphone className="w-6 h-6" />
                                    ) : (
                                        <Layers className="w-6 h-6" />
                                    )}
                                </div>
                                <div className="px-3 py-1 text-xs font-medium rounded-full bg-background border border-border text-muted-foreground">
                                    {project.platform}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                {project.link ? (
                                    <Link href={project.link} target="_blank" className="flex items-center gap-2 hover:underline">
                                        {project.name}
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                ) : (
                                    project.name
                                )}
                            </h3>

                            <p className="text-muted-foreground mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 3).map((tech) => (
                                        <span key={tech} className="px-2 py-1 text-xs rounded bg-background text-muted-foreground border border-border/50">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="px-2 py-1 text-xs rounded bg-background text-muted-foreground border border-border/50">
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="pt-4 border-t border-border/50">
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {project.details.slice(0, 2).map((detail, i) => (
                                            <li key={i} className="line-clamp-2">• {detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
