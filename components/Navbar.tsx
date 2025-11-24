import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Bhanit Gaurav
                </Link>
                <div className="hidden md:flex gap-6">
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
                    <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
                    <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="#articles" className="hover:text-primary transition-colors">Articles</Link>
                    <Link href="#education" className="hover:text-primary transition-colors">Education</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
