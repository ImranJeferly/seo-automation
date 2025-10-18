import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Content Generation | GPT-4, Claude, Gemini SEO Writer | SEO Automation",
  description: "AI-powered SEO content generation with GPT-4, Claude 3.5, and Gemini Pro. Generate blog posts, product descriptions, meta tags, and SEO-optimized articles in seconds. Multi-language support with 95+ languages, automatic keyword integration, tone customization, plagiarism-free content, and bulk generation. Built-in SEO scoring, competitor analysis, and content optimization for search engines. 10x faster than manual writing with enterprise-grade AI models.",
  keywords: [
    "ai content generation",
    "ai seo writer",
    "gpt-4 content writer",
    "claude ai writing",
    "gemini pro content",
    "ai blog post generator",
    "seo content automation",
    "ai article writer",
    "automated content creation",
    "ai copywriting tool",
    "seo content generator",
    "ai meta description generator",
    "bulk content generation",
    "multi-language ai writer",
    "ai content optimization",
    "gpt-4 turbo writing",
    "claude 3.5 sonnet",
    "gemini 1.5 pro",
    "ai seo optimization",
    "content generation api",
    "automated blog writing",
    "ai product descriptions",
    "seo keyword integration",
    "ai content strategy",
    "plagiarism-free ai content",
    "ai writing assistant",
    "enterprise ai writing",
    "ai content at scale",
    "seo article generator",
    "ai content workflow",
    "openai content generation",
    "anthropic claude writer",
    "google gemini writing",
    "ai content marketing",
    "automated seo writing",
  ],
  openGraph: {
    title: "AI Content Generation | GPT-4, Claude, Gemini SEO Writer | SEO Automation",
    description: "Generate SEO-optimized content with GPT-4, Claude 3.5, and Gemini Pro. Blog posts, articles, meta tags in seconds. 95+ languages, bulk generation, plagiarism-free. 10x faster than manual writing with built-in SEO scoring.",
    url: "https://seoautomation.com/features/ai-content-generation",
    siteName: "SEO Automation",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AI Content Generation with GPT-4, Claude, and Gemini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Generation | GPT-4, Claude, Gemini SEO Writer",
    description: "AI-powered SEO content with GPT-4, Claude 3.5, Gemini Pro. Generate blog posts, articles, meta tags. 95+ languages, bulk generation, SEO scoring. 10x faster than manual writing.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://seoautomation.com/features/ai-content-generation",
  },
};

export default function AIContentGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
