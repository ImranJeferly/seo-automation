import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Scheduling | AI-Powered Content Publishing Times | SEO Automation",
  description:
    "AI-powered smart scheduling analyzes traffic patterns, audience behavior, and engagement data to automatically publish content at optimal times. 45% higher engagement guaranteed. Schedule blog posts, articles, and content 12 months in advance with automatic timezone optimization, A/B testing, and real-time performance tracking. Perfect for SaaS startups, content publishers, marketing agencies, and e-commerce brands.",
  keywords: [
    "content scheduling automation",
    "smart publishing times",
    "optimal posting times",
    "automated content scheduling",
    "AI content scheduler",
    "traffic pattern analysis",
    "content calendar automation",
    "best time to publish blog posts",
    "seo content scheduling",
    "automated content publishing",
    "publish time optimization",
    "engagement optimization",
    "content queue management",
    "timezone aware scheduling",
    "bulk content scheduling",
    "social media scheduling",
    "blog post scheduler",
    "content marketing automation",
    "publishing workflow automation",
    "audience engagement optimization",
    "multi-timezone content scheduling",
    "A/B testing publish times",
    "content republishing automation",
    "evergreen content management",
    "editorial calendar software",
    "content distribution timing",
    "automated blog publishing",
    "schedule WordPress posts",
    "cms content scheduler",
    "saas content automation",
  ],
  openGraph: {
    title: "Smart Scheduling | AI-Powered Optimal Publishing Times",
    description:
      "Let AI determine the best time to publish based on your traffic patterns. 45% higher engagement with automated smart scheduling. Schedule content 12 months in advance.",
    url: "https://seoautomation.com/features/smart-scheduling",
    siteName: "SEO Automation",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Smart Scheduling - AI-Powered Content Publishing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Scheduling | AI Content Publishing Optimization",
    description:
      "Publish content at optimal times for maximum engagement. AI-powered scheduling with 45% higher engagement rates, timezone optimization, and bulk scheduling up to 12 months.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://seoautomation.com/features/smart-scheduling",
  },
};

export default function SmartSchedulingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
