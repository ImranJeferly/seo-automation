import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SEO-First Structure | Technical SEO Automation | HTML5 & Schema.org | SEO Automation",
  description: "Enterprise-grade technical SEO automation with proper H1-H6 hierarchy, semantic HTML5 structure, optimized meta tags, Open Graph protocol, Twitter Cards, and JSON-LD structured data. Automatic Schema.org markup generation, canonical URLs, breadcrumb navigation, and rich snippets support. Built-in technical SEO validation, accessibility compliance (WCAG 2.1), mobile-first architecture, and Core Web Vitals optimization. Zero configuration needed—perfect structure on every page automatically.",
  keywords: [
    "seo-first structure",
    "technical seo automation",
    "html5 seo structure",
    "semantic html seo",
    "h1-h6 hierarchy",
    "meta tags optimization",
    "open graph protocol",
    "twitter card tags",
    "json-ld structured data",
    "schema.org markup",
    "canonical urls",
    "breadcrumb navigation",
    "rich snippets seo",
    "semantic seo",
    "technical seo framework",
    "seo html structure",
    "structured data automation",
    "schema markup generator",
    "technical seo audit",
    "seo architecture",
    "html semantics",
    "meta description optimization",
    "og tags generator",
    "twitter meta tags",
    "structured data testing",
    "google rich results",
    "seo best practices",
    "technical on-page seo",
    "seo code structure",
    "accessibility seo",
    "wcag compliance",
    "mobile-first seo",
    "core web vitals",
    "page speed optimization",
    "seo automation framework",
  ],
  openGraph: {
    title: "SEO-First Structure | Technical SEO Automation | HTML5 & Schema.org",
    description: "Enterprise technical SEO with H1-H6 hierarchy, semantic HTML5, meta tags, Open Graph, Twitter Cards, and JSON-LD structured data. Automatic Schema.org markup, canonical URLs, rich snippets. Zero configuration—perfect structure automatically.",
    url: "https://seoautomation.com/features/seo-first-structure",
    siteName: "SEO Automation",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SEO-First Structure with HTML5 and Schema.org",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO-First Structure | Technical SEO Automation",
    description: "Enterprise technical SEO automation. H1-H6 hierarchy, semantic HTML5, meta tags, Open Graph, Twitter Cards, JSON-LD structured data, Schema.org markup, canonical URLs. Zero config—perfect structure automatically.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://seoautomation.com/features/seo-first-structure",
  },
};

export default function SEOFirstStructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
