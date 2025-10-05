import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Analytics & Reporting | SEO Automation for SaaS",
  description: "Track rankings, impressions, clicks, and indexing status. Export reports for clients or stakeholders. Real-time SEO analytics.",
  keywords: [
    "seo analytics",
    "ranking tracker",
    "search analytics",
    "seo reporting",
    "indexing status",
    "traffic analytics",
    "seo dashboard",
    "automated seo reports",
  ],
};

export default function AnalyticsReportingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Analytics & Reporting
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Track rankings, impressions, clicks, and indexing status. Export reports for clients or stakeholders.
            </p>
          </div>

          {/* Main Feature Card */}
          <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm mb-12">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Measure What Matters</h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                Understanding your SEO performance shouldn&apos;t require piecing together data from multiple tools. Our analytics 
                dashboard gives you everything in one place — rankings, traffic, indexing status, and more. Track progress 
                over time and prove ROI with exportable reports.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Real-Time Data</h3>
                  <p className="text-zinc-400">
                    Live tracking of keyword rankings, organic traffic, impressions, and clicks from Google Search Console.
                  </p>
                </div>
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Custom Reports</h3>
                  <p className="text-zinc-400">
                    Generate branded PDF reports with charts, metrics, and insights. Perfect for stakeholders and clients.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Ranking Tracker</h3>
                <p className="text-zinc-400">
                  Monitor keyword positions daily. See which pages are climbing and which need optimization.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">Indexing Status</h3>
                <p className="text-zinc-400">
                  See which pages are indexed, which are pending, and identify any crawl errors or issues.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3">Traffic Insights</h3>
                <p className="text-zinc-400">
                  Understand which content drives the most traffic and conversions. Optimize your strategy accordingly.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/#pricing">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                Start Tracking Performance
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
