import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Next.js Native Integration | Zero-Config SEO Library | SEO Automation",
  description: "Native Next.js SEO library for App Router and Pages Router. Zero-configuration integration with SSR, SSG, ISR support. Automatic sitemap generation, Metadata API enhancement, OpenGraph tags, structured data automation, and TypeScript definitions. 4.2KB bundle size, <2ms performance impact, works with Next.js 13, 14, and 15. Built-in route discovery, robots.txt generation, and server component optimization.",
  keywords: [
    "nextjs seo",
    "nextjs seo library",
    "next.js app router seo",
    "next.js pages router",
    "nextjs metadata api",
    "nextjs sitemap generation",
    "nextjs ssr seo",
    "nextjs ssg optimization",
    "nextjs isr seo",
    "nextjs zero config",
    "nextjs typescript seo",
    "nextjs server components seo",
    "next.js 13 seo",
    "next.js 14 seo",
    "next.js 15 seo",
    "nextjs seo automation",
    "nextjs robots.txt",
    "nextjs structured data",
    "nextjs opengraph",
    "nextjs performance optimization",
    "nextjs seo plugin",
    "nextjs seo package",
    "react seo library",
    "vercel seo optimization",
    "nextjs dynamic routes seo",
    "nextjs static export seo",
    "nextjs incremental static regeneration",
    "nextjs seo best practices",
    "nextjs json-ld",
    "nextjs schema org",
    "nextjs canonical urls",
    "nextjs meta tags",
    "nextjs head management",
    "nextjs seo middleware",
    "nextjs route handlers seo",
  ],
  openGraph: {
    title: "Next.js Native Integration | Zero-Config SEO Library | SEO Automation",
    description: "Native Next.js SEO library with zero configuration. Works with App Router and Pages Router, SSR/SSG/ISR support, automatic sitemap generation, 4.2KB bundle size, <2ms performance impact. Full TypeScript support with IntelliSense.",
    url: "https://seoautomation.com/features/nextjs-native",
    siteName: "SEO Automation",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Next.js Native SEO Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Native Integration | Zero-Config SEO Library",
    description: "Native Next.js SEO library. Zero config, App Router + Pages Router support, SSR/SSG/ISR compatible, 4.2KB bundle, <2ms impact. Full TypeScript, automatic sitemap generation, metadata API integration.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://seoautomation.com/features/nextjs-native",
  },
};

export default function NextJSNativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
