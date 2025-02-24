import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import MainLayout from "@/components/SiteMap";
import { AppProvider } from "./context/AppProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const iconConfig = {
  favicon: {
    default: "/favicon.ico",
    svg: "/favicon.svg",
    png96: "/favicon-96x96.png",
  },

  appIcons: {
    default: "/icon.png",
    svg: "/icon.svg",
    appleTouch: "/apple-touch-icon.png",
    webAppManifest: {
      small: "/web-app-manifest-192x192.png",
      large: "/web-app-manifest-512x512.png"
    }
  },

  manifest: "/site.webmanifest"
};

export const updatedMetadata = {
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icon.svg",
        color: "#ff6b6b",
      },
    ],
  },
};

export const metadata: Metadata = {
  // 🔹 Comprehensive Title Optimization
  title: {
    default: "Madhav Jangid | Software Engineer | Madhav Jangid Portfolio | SDE | Full-stack Developer",
    template: "%s | Madhav Jangid"
  },
  icons: updatedMetadata.icons,



  // 🔹 Enhanced Description with Target Keywords
  description: "Madhav Jangid – Software Engineer (SDE) specializing in AI, Next.js, React, and full-stack development. Passionate about open-source, NLP, and scalable web applications.",

  // 🔹 Expanded Keyword Strategy
  keywords: [
    // 🎯 **Personal Branding & Career Keywords**
    "madhav",
    "Madhav Jangid",
    "madhav jangid",
    "madhav jangid",
    "madhav jangid site",
    "madhav jangid website",
    "madhav jangid portfolio",
    "madhav jangid personal site",
    "madhav jangid personal site portfolio",
    "madhav jangid personal portfolio site",
    "madhav jangid github",
    "madhav jangid webdeveloper",
    "madhav jangid coder",
    "madhav jangid programmer",
    "madhav jangid programmer",
    "madhav jangid bathinda",
    "madhav rampura phul",
    "Madhv Jangid developer from Rampura phul",
    "Madhv Jangid developer from Bathinda",
    "Madhv Jangid developer from Punjab",
    "Madhav Jangid portfolio",
    "Madhav Jangid software engineer",
    "Madhav Jangid developer",
    "Madhav Jangid SDE",
    "Madhav Jangid Next.js",
    "Madhav Jangid AI developer",
    "Madhav Jangid full-stack developer",
    "Madhav Jangid open-source contributor",

    // 💻 **Technical Skills & Tech Stack Keywords**
    "Next.js developer",
    "React developer",
    "MERN stack developer",
    "AI-powered applications",
    "TypeScript developer",
    "GraphQL API",
    "MongoDB expert",
    "Web3 development",
    "NLP engineer",
    "serverless architecture",
    "REST API development",
    "Socket.io real-time apps",
    "cloud computing with Vercel",
    "scalable full-stack apps",

    // 🔥 **BroCode-Specific Keywords**
    "brocode programming language",
    "hindi programming language",
    "programming in hindi",
    "brocode coding",
    "vernacular coding education",
    "localized coding environment",
    "toy programming language",
    "learn coding in hindi",
    "multilingual programming",
    "software development in hindi",
    "coding without english barrier",

    // 📈 **Startup, Projects & Business**
    "CodeMilitia project",
    "AI email automation",
    "ChillChat app",
    "TwitBird project",
    "Baba Farid School of Entrepreneurship",
    "BFSoE startup ecosystem",
    "Indian tech startup",
    "startup business model",
    "software product development",

    // 🏆 **SEO & General Ranking Boost Keywords**
    "best full-stack developer portfolio",
    "hire Next.js developer",
    "freelance software engineer",
    "top AI developers in India",
    "best programming languages 2024",
    "cutting-edge web development trends"
  ],




  // 🔹 Advanced Metadata Optimization
  applicationName: "Madhav Jangid Portfolio",
  authors: [
    { name: "Madhav Jangid", url: "https://madhavjangid.vercel.app" }
  ],

  // 🔹 Open Graph Metadata (Better Social Sharing)
  openGraph: {
    title: "Madhav Jangid – AI & Next.js Developer | Portfolio",
    description: "Madhav Jangid – Software Engineer specializing in AI, Next.js, React, and scalable full-stack development.",
    url: "https://madhavjangid.vercel.app",
    siteName: "Madhav Jangid Portfolio",
    type: "website",
    locale: "en_US",
    alternateLocale: ["hi_IN", "en_IN"],
    images: [
      {
        url: "/portfolio-banner.png",
        width: 1200,
        height: 630,
        alt: "Madhav Jangid - Software Engineer Portfolio",
        type: "image/png"
      }
    ]
  },

  // 🔹 Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    site: "https://madhavjangid.vercel.app",
    creator: "Madhav Jangid",
    title: "Madhav Jangid | Software Engineer | AI & Next.js Dev",
    description: "AI-powered full-stack developer building scalable applications in Next.js, TypeScript, and more.",
    images: ["/portfolio-banner.png"]
  },
  // 🔹 Verification & Indexing
  verification: {
    google: "8S8stYpk2GffzqAgV1CGZeN6B5u6XgXUJ7AXu1r0Iog",
    yandex: "yandex-verification-token",
    yahoo: "yahoo-site-verification"
  },

  // 🔹 Robots.txt Optimization
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  // 🔹 Canonical & Alternate Links
  alternates: {
    canonical: "https://madhavjangid.vercel.app",
    languages: {
      "hi-IN": "https://madhavjangid.vercel.app",
      "en-US": "https://madhavjangid.vercel.app"
    }
  },

  // 🔹 Viewport & Web App Configurations
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  },

  // 🔹 Structured Data Hints
  category: "Software Engineering, AI, Web Development, Developer, Programmers, Coder, Full Stack Developer",
  classification: "Educational Software, Full-Stack Development",

  // 🔹 Enhanced Website Discoverability
  other: {
    "msapplication-TileColor": "#ff6b6b",
    "mobile-web-app-capable": "yes",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <html lang="en">
        <Head>
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="apple-mobile-web-app-title" content="Madhav's Portfolio" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Madhav Jangid",
              "jobTitle": "Software Engineer",
              "url": "https://madhavjangid.vercel.app",
              "sameAs": [
                "https://github.com/Madhav-Jangid",
                "https://linkedin.com/in/madhav-jangid",
                "https://x.com/MadhavJangid_",
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Punjab",
                "addressRegion": "Bathinda",
                "addressCountry": "India",
              }
            })}
          </script>
        </Head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <MainLayout>{children}</MainLayout>
          <Analytics />
        </body>
      </html>
    </AppProvider>
  );
}
