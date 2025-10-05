import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Multi-Platform Indexing | SEO Automation for SaaS",
  description: "Submit URLs to 50+ search engines simultaneously. Google Search Console, Bing Webmaster, IndexNow protocol for instant indexing.",
  keywords: [
    "multi platform indexing",
    "google search console api",
    "bing webmaster tools",
    "indexnow protocol",
    "fast indexing",
    "search engine submission",
    "url indexing automation",
    "instant indexing",
  ],
};

export default function MultiPlatformIndexingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Multi-Platform Indexing
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Submit URLs to 50+ search engines simultaneously. Google Search Console, Bing Webmaster, IndexNow protocol.
            </p>
          </div>

          {/* Main Feature Card */}
          <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm mb-12">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Get Indexed in Minutes, Not Weeks</h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                Don&apos;t wait for search engines to discover your content. Our multi-platform indexing system automatically 
                submits your new pages to all major search engines the moment they&apos;re published. Get traffic faster with 
                instant indexing across Google, Bing, Yandex, and 50+ other platforms.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Instant Submission</h3>
                  <p className="text-zinc-400">
                    Automatically submits URLs via Google Search Console API, Bing Webmaster, and IndexNow within seconds of publishing.
                  </p>
                </div>
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Global Coverage</h3>
                  <p className="text-zinc-400">
                    Reaches search engines worldwide including Yandex, Baidu, DuckDuckGo, and regional engines for maximum visibility.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold mb-3">API Integration</h3>
                <p className="text-zinc-400">
                  Direct integration with Google Search Console API and Bing URL Submission API for priority indexing.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">IndexNow Protocol</h3>
                <p className="text-zinc-400">
                  Leverages IndexNow for instant notification to Bing, Yandex, Seznam, and other participating search engines.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Indexing Status</h3>
                <p className="text-zinc-400">
                  Real-time tracking of indexing status across all platforms. See when your content goes live in search results.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/#pricing">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                Start Fast Indexing
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
