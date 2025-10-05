import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "SEO-First Structure | SEO Automation for SaaS",
  description: "Proper H1-H6 hierarchy, optimized meta titles/descriptions, Open Graph tags, and JSON-LD structured data automatically generated for every page.",
  keywords: [
    "seo structure",
    "h1 h6 hierarchy",
    "meta tags optimization",
    "open graph tags",
    "json-ld structured data",
    "seo best practices",
    "technical seo",
    "on-page seo automation",
  ],
};

export default function SEOFirstStructurePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              SEO-First Structure
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Proper H1-H6 hierarchy, optimized meta titles/descriptions, Open Graph tags, and JSON-LD structured data automatically.
            </p>
          </div>

          {/* Main Feature Card */}
          <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm mb-12">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Perfect Technical SEO, Every Time</h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                Technical SEO can make or break your rankings. Our system automatically implements every on-page SEO 
                best practice, ensuring your content is perfectly structured for search engines from day one. No manual 
                work required — just publish and rank.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Semantic HTML Structure</h3>
                  <p className="text-zinc-400">
                    Proper heading hierarchy (H1-H6) that helps search engines understand your content architecture.
                  </p>
                </div>
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Rich Snippets Ready</h3>
                  <p className="text-zinc-400">
                    JSON-LD structured data for articles, FAQs, breadcrumbs, and more to enhance your search appearance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-3">Meta Tags</h3>
                <p className="text-zinc-400">
                  Automatically generates optimized title tags (50-60 chars) and meta descriptions (150-160 chars) for maximum CTR.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold mb-3">Open Graph Tags</h3>
                <p className="text-zinc-400">
                  Perfect social media previews with og:title, og:description, og:image, and Twitter Card tags.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold mb-3">Schema Markup</h3>
                <p className="text-zinc-400">
                  JSON-LD structured data for better SERP features including rich snippets, knowledge panels, and more.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/#pricing">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                Get Perfect SEO Structure
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
