import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Keyword Research | SEO Automation for SaaS",
  description: "Connects to Ahrefs, SEMrush, or built-in research. Identifies high-opportunity topics and generates content briefs automatically.",
  keywords: [
    "keyword research",
    "ahrefs integration",
    "semrush api",
    "keyword analysis",
    "topic research",
    "content briefs",
    "seo keyword tool",
    "automated keyword research",
  ],
};

export default function KeywordResearchPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Keyword Research
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Connects to Ahrefs, SEMrush, or built-in research. Identifies high-opportunity topics and generates content briefs.
            </p>
          </div>

          {/* Main Feature Card */}
          <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm mb-12">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Find What Your Audience is Searching For</h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                Stop guessing what to write about. Our keyword research system integrates with industry-leading tools like 
                Ahrefs and SEMrush, or uses our built-in research engine to discover high-opportunity keywords. Automatically 
                generates content briefs with search volume, difficulty scores, and related topics.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">API Integrations</h3>
                  <p className="text-zinc-400">
                    Connect your Ahrefs or SEMrush account for enterprise-grade keyword data and competitor analysis.
                  </p>
                </div>
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Opportunity Scoring</h3>
                  <p className="text-zinc-400">
                    AI analyzes difficulty, volume, and competition to identify keywords you can actually rank for.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">Competitor Analysis</h3>
                <p className="text-zinc-400">
                  See what keywords your competitors rank for and identify content gaps you can exploit.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-3">Content Briefs</h3>
                <p className="text-zinc-400">
                  Auto-generates detailed content briefs with target keywords, related terms, and recommended structure.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3">Trend Detection</h3>
                <p className="text-zinc-400">
                  Identifies trending topics and seasonal opportunities before your competitors discover them.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/#pricing">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                Start Keyword Research
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
