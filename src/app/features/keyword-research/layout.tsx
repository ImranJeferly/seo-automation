import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Keyword Research | AI-Powered SEO Keyword Analytics Tools | SEO Automation",
  description: "Advanced keyword research tool with Ahrefs, SEMrush, and Moz integration. Website crawler analyzes content gaps, competitor keywords, search intent, LSI keywords, and SERP analysis. AI-generated content briefs with keyword difficulty scoring, search volume tracking, and automated position monitoring. Find high-opportunity keywords with low competition and 85% success rate.",
  keywords: [
    "keyword research tool",
    "keyword analytics",
    "seo keyword research",
    "ahrefs integration",
    "semrush api",
    "keyword difficulty",
    "search volume analysis",
    "competitor keyword analysis",
    "website crawler",
    "content gap analysis",
    "keyword research automation",
    "lsi keywords",
    "search intent detection",
    "keyword clustering",
    "serp analysis",
    "content brief generator",
    "keyword tracking",
    "organic keyword research",
    "competitor analysis tool",
    "keyword opportunity finder",
    "long-tail keywords",
    "keyword suggestions",
    "keyword planner",
    "keyword research api",
    "automated keyword research",
    "backlink keyword analysis",
    "keyword research software",
    "seo keyword tool",
    "keyword metrics",
    "keyword research for seo",
    "topic research tool",
    "keyword analytics tool",
    "on-page keyword analysis",
    "keyword research agency",
    "enterprise keyword research",
    "google keyword research",
  ],
  openGraph: {
    title: "Keyword Research | AI-Powered SEO Keyword Analytics Tools | SEO Automation",
    description: "Find high-opportunity keywords with Ahrefs, SEMrush, and Moz integration. Website crawler analyzes content gaps, 8B+ keywords, 85% success rate. AI-generated content briefs with search intent detection, LSI keywords, and automated competitor analysis.",
    url: "https://seoautomation.com/features/keyword-research",
    siteName: "SEO Automation",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Keyword Research - AI-Powered SEO Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyword Research | AI-Powered SEO Keyword Analytics Tools",
    description: "Advanced keyword research with Ahrefs/SEMrush integration, website crawler for content gaps, and AI-generated content briefs. 8B+ keywords, 85% success rate, automated competitor analysis.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://seoautomation.com/features/keyword-research",
  },
};

export default function KeywordResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
