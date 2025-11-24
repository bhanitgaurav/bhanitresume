"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, Send, Twitter, MessageCircle, BookOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Define interface for personalInfo
interface PersonalInfo {
    name: string;
    role: string;
    location: string;
    phone: string;
    email: string;
    website: string;
    linkedin: string;
    github: string;
    medium?: string;
    twitter?: string;
    whatsapp?: string;
    summary: string;
}

export default function Contact() {
    const { personalInfo } = portfolioData as { personalInfo: PersonalInfo };
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xrgovvgl", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formState.name,
                    _replyto: formState.email,
                    message: formState.message
                })
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormState({ name: "", email: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or want to discuss mobile development? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="text-lg text-muted-foreground">
                            <p className="mb-6">
                                I&apos;m currently available for freelance projects and full-time opportunities.
                                Feel free to reach out via email or connect with me on social media.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Link
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Email</div>
                                    <div className="font-medium text-foreground">{personalInfo.email}</div>
                                </div>
                            </Link>

                            <Link
                                href={personalInfo.linkedin}
                                target="_blank"
                                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                                    <div className="font-medium text-foreground">Connect on LinkedIn</div>
                                </div>
                            </Link>

                            <Link
                                href={personalInfo.github}
                                target="_blank"
                                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <Github className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">GitHub</div>
                                    <div className="font-medium text-foreground">View Projects</div>
                                </div>
                            </Link>

                            {personalInfo.twitter && (
                                <Link
                                    href={personalInfo.twitter}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                                >
                                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                        <Twitter className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">Twitter</div>
                                        <div className="font-medium text-foreground">Follow me</div>
                                    </div>
                                </Link>
                            )}

                            {personalInfo.medium && (
                                <Link
                                    href={personalInfo.medium}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                                >
                                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">Medium</div>
                                        <div className="font-medium text-foreground">Read my articles</div>
                                    </div>
                                </Link>
                            )}

                            {personalInfo.whatsapp && (
                                <Link
                                    href={personalInfo.whatsapp}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                                >
                                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">WhatsApp</div>
                                        <div className="font-medium text-foreground">Chat with me</div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-8 rounded-2xl bg-card border border-border/50"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="Your Name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="your@email.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="How can I help you?"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            {submitStatus === "success" && (
                                <p className="text-green-500 text-center text-sm font-medium">
                                    Message sent successfully! I'll get back to you soon.
                                </p>
                            )}
                            {submitStatus === "error" && (
                                <p className="text-red-500 text-center text-sm font-medium">
                                    Something went wrong. Please try again later.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
