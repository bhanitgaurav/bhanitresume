import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhanit Gaurav - Mobile App Developer | Android & Flutter",
  description: "Portfolio of Bhanit Gaurav, a Senior Mobile App Developer specializing in Android (Kotlin), Flutter (Dart), and KMP. View projects, skills, and experience.",
  keywords: ["bhanit", "bhanitgaurav", "bhanit android", "bhanit flutter", "bhanit kotlin", "mobile developer", "android developer", "flutter developer"],
  authors: [{ name: "Bhanit Gaurav", url: "https://bhanit.com" }],
  creator: "Bhanit Gaurav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhanit.com",
    title: "Bhanit Gaurav - Mobile App Developer",
    description: "Senior Mobile App Developer specializing in Android and Flutter.",
    siteName: "Bhanit Gaurav Portfolio",
  },
  alternates: {
    canonical: "https://www.bhanit.com",
    languages: {
      "en-US": "https://www.bhanit.com",
    },
  },
  verification: {
    google: "google-site-verification-code", // Placeholder for actual code
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bhanit Gaurav",
  url: "https://www.bhanit.com",
  sameAs: [
    "https://www.linkedin.com/in/bhanitgaurav/",
    "https://github.com/bhanitgaurav",
    "https://twitter.com/BhanitGaurav",
    "https://medium.com/@bhanitgaurav",
    "https://www.facebook.com/bhanit.gaurav",
    "https://www.instagram.com/bhanitgaurav/",
  ],
  jobTitle: "Senior Mobile App Developer",
  worksFor: {
    "@type": "Organization",
    name: "Fundly.ai",
  },
  description: "Senior Mobile App Developer specializing in Android (Kotlin), Flutter (Dart), and KMP.",
  image: "https://www.bhanit.com/icon", // Assuming icon is available
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.className} bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
