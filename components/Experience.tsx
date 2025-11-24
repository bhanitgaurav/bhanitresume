"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    const { workHistory } = portfolioData;

    return (
        <section id="experience" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Work History</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and contributions to various organizations.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {workHistory.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2" />

                            <div className={`md:flex items-start justify-between gap-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                {/* Timeline Dot (Desktop) */}
                                <div className="hidden md:block absolute left-[50%] top-8 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10 ring-4 ring-background" />

                                {/* Content Card */}
                                <div className="md:w-[45%] p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
                                    <div className="flex flex-col gap-2 mb-4">
                                        <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                                        <div className="flex items-center gap-2 text-primary font-medium">
                                            <Briefcase className="w-4 h-4" />
                                            <span>{job.company}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                <span>{job.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-4 list-disc list-inside text-muted-foreground text-sm">
                                        {job.responsibilities.slice(0, 4).map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                                        {job.techStack.slice(0, 5).map((tech) => (
                                            <span key={tech} className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
                                                {tech}
                                            </span>
                                        ))}
                                        {job.techStack.length > 5 && (
                                            <span className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
                                                +{job.techStack.length - 5} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Empty Space for Timeline Balance */}
                                <div className="md:w-[45%]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
