import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://seoautomation.com'),
  title: {
    default: "SEO Automation — AI Content Generator & Auto-Indexing for Next.js | Generate 10x Traffic",
    template: "%s | SEO Automation"
  },
  description:
    "Automate SEO content creation for Next.js sites. AI generates blog posts, auto-publishes, and submits to 50+ search engines. Pre-order $49 (was $299). Scale organic traffic without writers.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
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
  authors: [{ name: "SEO Automation", url: "https://seoautomation.com" }],
  creator: "SEO Automation",
  publisher: "SEO Automation",
  openGraph: {
    title: "SEO Automation — Generate 10x More Traffic with AI Content & Auto-Indexing",
    description:
      "The first Next.js library that auto-generates SEO-optimized blog posts, publishes, and indexes across 50+ platforms. Pre-order $49 — save $250.",
    url: "https://seoautomation.com",
    siteName: "SEO Automation",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SEO Automation - AI Content Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Automation — AI Content Generator for Next.js",
    description:
      "Generate blog posts, publish, and index automatically. Pre-order early access — $49 lifetime.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SEO Automation',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '49.00',
      priceCurrency: 'USD',
    },
    description: 'AI-powered SEO content generation and auto-indexing for Next.js sites',
    operatingSystem: 'Any',
    author: {
      '@type': 'Organization',
      name: 'SEO Automation',
      url: 'https://seoautomation.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
    },
  }

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
