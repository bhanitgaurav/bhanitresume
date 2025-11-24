"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Award, GraduationCap } from "lucide-react";

export default function Education() {
    const { education, certifications } = portfolioData;

    return (
        <section id="education" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My academic background and professional certifications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* Education Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>

                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                            >
                                <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                                <div className="text-primary font-medium mb-2">{edu.institution}</div>
                                <div className="text-sm text-muted-foreground mb-2">{edu.period}</div>
                                <p className="text-sm text-muted-foreground">{edu.details}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Certifications</h3>
                        </div>

                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                                >
                                    <div className="mt-1 min-w-[8px] h-[8px] rounded-full bg-primary" />
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {cert}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
