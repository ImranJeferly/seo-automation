import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Platform Indexing | SEO Automation for SaaS",
  description:
    "Submit URLs to 50+ search engines simultaneously including Google, Bing, Yandex, Baidu, and DuckDuckGo. Instant indexing via Google Search Console API, Bing Webmaster Tools, and IndexNow protocol. Get indexed in minutes, not weeks.",
  keywords: [
    "multi platform indexing",
    "google search console api",
    "bing webmaster tools",
    "indexnow protocol",
    "fast indexing",
    "search engine submission",
    "url indexing automation",
    "instant indexing",
    "google indexing api",
    "bing url submission api",
    "yandex webmaster",
    "baidu search submission",
    "duckduckgo indexing",
    "international search engines",
    "regional search engine submission",
    "seo automation",
    "automated url submission",
    "search engine crawler",
    "indexing status tracking",
    "bulk url submission",
  ],
  openGraph: {
    title: "Multi-Platform Indexing | Instant Search Engine Submission",
    description:
      "Submit to 50+ search engines instantly. Google, Bing, Yandex, Baidu, and more. Get indexed in minutes with direct API integration.",
    url: "https://seoautomation.com/features/multi-platform-indexing",
    siteName: "SEO Automation",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Multi-Platform Indexing - 50+ Search Engines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Platform Indexing | SEO Automation",
    description:
      "Submit URLs to 50+ search engines simultaneously. Get indexed in minutes, not weeks.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://seoautomation.com/features/multi-platform-indexing",
  },
};

export default function MultiPlatformIndexingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
