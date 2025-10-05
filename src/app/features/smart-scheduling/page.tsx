import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Smart Scheduling | SEO Automation for SaaS",
  description: "Analyzes traffic patterns and publishes content at optimal times. Set daily, weekly, or custom schedules for maximum visibility.",
  keywords: [
    "content scheduling",
    "smart publishing",
    "optimal posting times",
    "automated scheduling",
    "traffic pattern analysis",
    "content calendar automation",
    "best time to publish",
    "seo content scheduling",
  ],
};

export default function SmartSchedulingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Smart Scheduling
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Analyzes traffic patterns and publishes content at optimal times. Set daily, weekly, or custom schedules.
            </p>
          </div>

          {/* Main Feature Card */}
          <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm mb-12">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Publish When Your Audience is Most Active</h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                Timing matters in content marketing. Our smart scheduling system analyzes your historical traffic patterns, 
                audience behavior, and industry trends to determine the optimal publishing times. Set it once and let the AI 
                handle the rest — your content will always go live when it has the highest chance of engagement.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Traffic Pattern Analysis</h3>
                  <p className="text-zinc-400">
                    Machine learning analyzes when your audience is most active and schedules content for maximum initial engagement.
                  </p>
                </div>
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Flexible Scheduling</h3>
                  <p className="text-zinc-400">
                    Choose from daily, weekly, or custom schedules. Set frequency, time zones, and blackout periods.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🕐</div>
                <h3 className="text-xl font-semibold mb-3">Optimal Timing</h3>
                <p className="text-zinc-400">
                  AI determines the best publishing times based on your analytics data and industry benchmarks.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-semibold mb-3">Content Calendar</h3>
                <p className="text-zinc-400">
                  Visual calendar showing scheduled posts, published content, and upcoming articles at a glance.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-3">Auto-Republish</h3>
                <p className="text-zinc-400">
                  Automatically update and republish evergreen content to maintain freshness and rankings.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/#pricing">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                Start Smart Scheduling
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
