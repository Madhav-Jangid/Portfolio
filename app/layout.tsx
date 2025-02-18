import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import MainLayout from "@/components/SiteMap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madhav Jangid | Software Engineer | SDE | Next.js Dev",
  description:
    "Portfolio of Madhav Jangid, a Software Engineer (SDE) specializing in Next.js, React, and full-stack development. Based in Punjab, India.",
  icons: {
    icon: "/assets/images/MJ_Logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Madhav Jangid | Software Engineer | SDE | Next.js Dev" />
        <meta name="description" content="Portfolio of Madhav Jangid, a Software Engineer (SDE) specializing in Next.js, React, and full-stack development. Based in Punjab, India." />
        <meta name="author" content="Madhav Jangid" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="
Madhav Jangid, madhav jangid, Jangid Madhav, MadhavJangid, madhavjangid, jangid madhav, jangid, Madhav, madhav, 
Software Engineer, Software Developer, SDE in Punjab, SDE in Bathinda, SDE in Rampura Phul, SDE in India, 
Software Engineer in Punjab, Software Engineer in Bathinda, Software Engineer in Rampura Phul, Software Engineer in India, 
Full-stack Developer, Web Developer, Developer in Punjab, Developer in Bathinda, Developer in Rampura Phul, Developer in India, 
Entrepreneur in Punjab, Startup Founder, Business Enthusiast, Problem Solver, Coding Mentor, 
Madhav Jangid Portfolio, Madhav Jangid Website, Personal Website of Madhav Jangid, 
CodeMilitia, CodeMilitia Website, CodeMilitia Project, Code Militia by Madhav Jangid, 
ChillChat, ChillChat App, ChillChat Project, Chat Application by Madhav Jangid, 
TwitBird, TwitBird App, TwitBird Project, Twitter Clone by Madhav Jangid, 
Lifefly, Lifefly Drone, Lifefly Medical Drone, Lifefly Project, Lifefly by Madhav Jangid, 
AI Email Sender, AI Email Automation, AI Email Personalization, AI Email Project, 
BroCode, BroCode Programming Language, BroCode by Madhav Jangid, Custom Programming Language, 
Museum Chatbot, Smart Ticket Booking Chatbot, Chatbot Project, Madhav Jangid Chatbot, 
Alumni Portal, Alumni Network Platform, Alumni Management System, Madhav Jangid Alumni Project
" />


        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://madhavjangid.vercel.app" />
        <meta property="og:title" content="Madhav Jangid | Software Engineer | SDE | Next.js Dev" />
        <meta property="og:description" content="Portfolio of Madhav Jangid, a Software Engineer (SDE) specializing in Next.js, React, and full-stack development. Based in Punjab, India." />
        <meta property="og:image" content="https://madhavjangid.vercel.app/og-image.png" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://madhavjangid.vercel.app" />
        <meta property="twitter:title" content="Madhav Jangid | Software Engineer | SDE | Next.js Dev" />
        <meta property="twitter:description" content="Portfolio of Madhav Jangid, a Software Engineer (SDE) specializing in Next.js, React, and full-stack development. Based in Punjab, India." />
        <meta property="twitter:image" content="https://madhavjangid.vercel.app/og-image.png" />

        {/* Schema Markup for Search Engines */}
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
  );
}
