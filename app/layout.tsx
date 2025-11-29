import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bhanit.com"),
  title: "Bhanit - Mobile App Developer | Bhanit Gaurav",
  description: "Portfolio of Bhanit (Bhanit Gaurav), a Senior Mobile App Developer specializing in Android (Kotlin), Flutter (Dart), and KMP. View projects, skills, and experience.",
  keywords: ["bhanit", "bhanit gaurav", "bhanit android", "bhanit flutter", "bhanit kotlin", "mobile developer", "android developer", "flutter developer"],
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
    google: "googled8eb3188e4363998",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.bhanit.com/#website",
      "url": "https://www.bhanit.com",
      "name": "Bhanit Gaurav Portfolio",
      "description": "Portfolio of Bhanit Gaurav, a Senior Mobile App Developer.",
      "publisher": {
        "@id": "https://www.bhanit.com/#person"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.bhanit.com/#profile",
      "url": "https://www.bhanit.com",
      "name": "Bhanit Gaurav",
      "isPartOf": {
        "@id": "https://www.bhanit.com/#website"
      },
      "mainEntity": {
        "@id": "https://www.bhanit.com/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.bhanit.com/#person",
      "name": "Bhanit Gaurav",
      "url": "https://www.bhanit.com",
      "sameAs": [
        "https://www.linkedin.com/in/bhanitgaurav/",
        "https://github.com/bhanitgaurav",
        "https://twitter.com/BhanitGaurav",
        "https://medium.com/@bhanitgaurav",
        "https://www.facebook.com/bhanit.gaurav",
        "https://www.instagram.com/bhanitgaurav/"
      ],
      "jobTitle": "Senior Mobile App Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Fundly.ai"
      },
      "description": "Senior Mobile App Developer specializing in Android (Kotlin), Flutter (Dart), and KMP. Expert in building high-performance mobile applications.",
      "image": [
        "https://www.bhanit.com/profile.jpeg",
        "https://www.bhanit.com/profile2.jpeg",
        "https://www.bhanit.com/profile3.jpeg"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "email": "bhanit.gaurav@gmail.com",
      "knowsLanguage": ["English", "Hindi"],
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "IMS Noida",
          "sameAs": "https://imsnoida.in/"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Dr. APJ Abdul Kalam Technical University"
        }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Android Internship",
          "recognizedBy": {
            "@type": "Organization",
            "name": "N.I.E.L.I.T."
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Flutter & Dart The Complete Guide",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Udemy"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "C Training",
          "recognizedBy": {
            "@type": "Organization",
            "name": "IIT Bombay"
          }
        }
      ],
      "knowsAbout": [
        "Android Development",
        "Flutter Development",
        "Kotlin Multiplatform",
        "Jetpack Compose",
        "Mobile App Architecture",
        "Clean Architecture",
        "MVVM",
        "Dart",
        "Kotlin",
        "Java",
        "Firebase",
        "CI/CD",
        "Google Play Store Deployment",
        "App Store Deployment"
      ]
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Fundly",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Android, iOS",
          "description": "A fintech mobile application built for pharma retailers and distributors."
        },
        {
          "@type": "SoftwareApplication",
          "name": "TapTheGrey",
          "applicationCategory": "GameApplication",
          "operatingSystem": "Android",
          "description": "An engaging and fast-paced static game.",
          "url": "https://www.bhanit.com/tapthegrey"
        },
        {
          "@type": "SoftwareApplication",
          "name": "AthanCare App",
          "applicationCategory": "MedicalApplication",
          "operatingSystem": "Android",
          "description": "Standalone doctor application built with modern Android technologies."
        }
      ]
    }
  ]
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
