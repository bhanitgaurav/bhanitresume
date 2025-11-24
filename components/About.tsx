"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { User } from "lucide-react";

export default function About() {
    const { personalInfo } = portfolioData;

    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                            <User className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold">About Me</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                {personalInfo.summary}
                            </p>
                            <p>
                                Based in {personalInfo.location}, I specialize in building high-performance mobile applications using modern technologies like Jetpack Compose and Flutter. My focus is always on delivering clean, efficient code and exceptional user experiences.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-card border border-border/50">
                                <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Details</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex flex-col">
                                        <span className="font-medium text-foreground">Email</span>
                                        <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">{personalInfo.email}</a>
                                    </li>
                                    <li className="flex flex-col">
                                        <span className="font-medium text-foreground">Phone</span>
                                        <span>{personalInfo.phone}</span>
                                    </li>
                                    <li className="flex flex-col">
                                        <span className="font-medium text-foreground">Location</span>
                                        <span>{personalInfo.location}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
