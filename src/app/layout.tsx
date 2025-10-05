import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEO Automation — AI Content Generator & Auto-Indexing for Next.js | Generate 10x Traffic",
  description:
    "Automate SEO content creation for Next.js sites. AI generates blog posts, auto-publishes, and submits to 50+ search engines. Pre-order $49 (was $299). Scale organic traffic without writers.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "seo automation",
    "automated content generation",
    "ai blog writer",
    "auto blogging nextjs",
    "search engine indexing automation",
    "content marketing automation",
    "seo tools",
    "google indexing api",
    "bulk content creation",
    "nextjs seo library",
    "automated seo",
    "ai seo writer",
    "content at scale",
    "programmatic seo",
    "seo software",
  ],
  authors: [{ name: "SEO Automation" }],
  openGraph: {
    title: "SEO Automation — Generate 10x More Traffic with AI Content & Auto-Indexing",
    description:
      "The first Next.js library that auto-generates SEO-optimized blog posts, publishes, and indexes across 50+ platforms. Pre-order $49 — save $250.",
    siteName: "SEO Automation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Automation — AI Content Generator for Next.js",
    description:
      "Generate blog posts, publish, and index automatically. Pre-order early access — $49 lifetime.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://seoautomation.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
