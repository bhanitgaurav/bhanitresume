
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown, Github, Linkedin, Mail, Twitter, MessageCircle, BookOpen, FileText } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Define an extended type for personalInfo to include new fields without changing the data file structure immediately if not typed
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
    resume?: string;
    summary: string;
}

const images = ["/profile.jpeg", "/profile2.jpeg", "/profile3.jpeg"];

function ProfileImageSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt={`Bhanit Gaurav - Profile Picture ${index + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        objectPosition: index === 1 ? "90% center" : index === 2 ? "5% center" : "center center"
                    }}
                />
            </AnimatePresence>
        </div>
    );
}


export default function Hero() {
    const { personalInfo } = portfolioData as { personalInfo: PersonalInfo };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 z-0" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                    animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-8 relative w-32 h-32 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-lg opacity-50 animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-xl">
                            <ProfileImageSlider />
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">Hello, I&apos;m</h2>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {personalInfo.name}
                    </h1>
                    <h3 className="text-2xl md:text-4xl text-muted-foreground mb-8">
                        {personalInfo.role}
                    </h3>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
                        {personalInfo.summary.split(".")[0]}.
                    </p>

                    <div className="flex justify-center gap-6 mb-12">
                        <Link href={personalInfo.github} target="_blank" className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300">
                            <Github className="w-6 h-6" />
                        </Link>
                        <Link href={personalInfo.linkedin} target="_blank" className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300">
                            <Linkedin className="w-6 h-6" />
                        </Link>
                        {personalInfo.twitter && (
                            <Link href={personalInfo.twitter} target="_blank" className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                <Twitter className="w-6 h-6" />
                            </Link>
                        )}
                        {personalInfo.medium && (
                            <Link href={personalInfo.medium} target="_blank" className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                <BookOpen className="w-6 h-6" />
                            </Link>
                        )}
                        {personalInfo.whatsapp && (
                            <Link href={personalInfo.whatsapp} target="_blank" className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                <MessageCircle className="w-6 h-6" />
                            </Link>
                        )}
                        <Link href={`mailto:${personalInfo.email} `} className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300">
                            <Mail className="w-6 h-6" />
                        </Link>
                    </div>

                    {personalInfo.resume && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-12"
                        >
                            <Link
                                href={personalInfo.resume}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105"
                            >
                                <FileText className="w-4 h-4" />
                                <span>Download Resume</span>
                            </Link>
                        </motion.div>
                    )}

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Link href="#about" className="inline-flex flex-col items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                            <span>Scroll Down</span>
                            <ArrowDown className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
