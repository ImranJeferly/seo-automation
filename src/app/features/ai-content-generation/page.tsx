import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "AI Content Generation | SEO Automation for SaaS",
  description: "GPT-4o powered engine creates blog posts that pass AI detection. Trained on 10,000+ top-ranking articles for authentic, SEO-optimized content.",
  keywords: [
    "ai content generation",
    "gpt-4o content writer",
    "ai blog writer",
    "automated content creation",
    "ai detection proof",
    "seo content generator",
    "ai copywriting tool",
    "automated blog writing",
  ],
  openGraph: {
    title: "AI Content Generation | SEO Automation",
    description: "GPT-4o powered engine creates blog posts that pass AI detection. Trained on 10,000+ top-ranking articles.",
    url: "https://seoautomation.com/features/ai-content-generation",
    siteName: "SEO Automation",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AI Content Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Generation | SEO Automation",
    description: "GPT-4o powered engine creates blog posts that pass AI detection.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://seoautomation.com/features/ai-content-generation",
  },
};

export default function AIContentGenerationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              AI Content Generation
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              GPT-4o powered engine creates blog posts that pass AI detection. Trained on 10,000+ top-ranking articles.
            </p>
          </div>

          {/* Main Feature Card */}
          <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm mb-12">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Write Like a Human, Scale Like a Machine</h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                Our AI content generation engine is specifically trained on thousands of top-ranking articles to understand 
                what makes content perform well in search engines. Unlike generic AI writers, our system produces content 
                that passes AI detection tools while maintaining the quality and depth that readers and search engines expect.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Natural Language Processing</h3>
                  <p className="text-zinc-400">
                    Advanced NLP algorithms ensure your content reads naturally, avoiding the robotic patterns that trigger AI detectors.
                  </p>
                </div>
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Context-Aware Writing</h3>
                  <p className="text-zinc-400">
                    Understands your niche, brand voice, and target audience to create perfectly tailored content every time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Topic Research</h3>
                <p className="text-zinc-400">
                  Automatically researches trending topics in your niche and generates content briefs based on competitor analysis.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-semibold mb-3">Multiple Formats</h3>
                <p className="text-zinc-400">
                  Generate blog posts, how-to guides, listicles, comparison articles, and case studies — all optimized for SEO.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                <p className="text-zinc-400">
                  Our AI model is regularly updated with the latest SEO best practices and ranking factors.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/#pricing">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                Start Generating Content
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/6 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-white/60">
          <span>© 2025 SEO Automation for SaaS. Built for technical founders who need organic traffic, not marketing distractions.</span>
        </div>
      </footer>
    </div>
  );
}
