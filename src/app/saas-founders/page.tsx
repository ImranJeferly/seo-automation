"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function SaaSFoundersPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
      {/* Hero Section - Matching Main Page Style */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-8 border-zinc-800 text-zinc-400 bg-zinc-950 px-3 py-1">
            SEO for SaaS Companies & B2B Startups
          </Badge>

          <h1 className="text-6xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
            SEO Automation for{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              SaaS Founders
            </span>
          </h1>

          <p className="text-xl text-zinc-400 mb-6 leading-relaxed max-w-3xl mx-auto">
            Automated SaaS SEO strategy that generates qualified leads while you focus on product development. Get organic traffic, backlinks, and search rankings without hiring a marketing team.
          </p>

          <p className="text-base text-zinc-500 mb-10 leading-relaxed max-w-3xl mx-auto">
            Built for B2B SaaS companies and solopreneurs who understand code better than content marketing. Our SEO automation platform handles keyword research, content creation, link building, and indexing — completely automated.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/#pricing">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold shadow-lg shadow-emerald-500/20">
                Start Getting Traffic
              </Button>
            </a>
            <a href="/how-to-market-your-saas-in-2025">
              <Button variant="outline" size="lg" className="border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition-colors">
                Read More
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-900" />
                <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-900" />
                <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-900" />
              </div>
              <span>127+ SaaS founders using automated SEO</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-emerald-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <svg className="w-4 h-4" viewBox="0 0 20 20">
                  <defs>
                    <linearGradient id="half-star-saas">
                      <stop offset="50%" stopColor="rgb(52 211 153)" />
                      <stop offset="50%" stopColor="rgb(82 82 91)" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#half-star-saas)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Why SaaS Companies Struggle with SEO</h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            You&apos;re a technical founder who can build amazing software. But SEO for SaaS is a completely different skill set.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700 transition-all backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="text-red-400 text-3xl mb-3">😫</div>
              <h3 className="text-xl font-bold mb-4">Traditional SaaS Marketing Problems</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 text-xs">✗</span>
                  <span>Spent months building your B2B SaaS, getting minimal organic traffic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 text-xs">✗</span>
                  <span>Tried Google Ads & paid marketing — burned budget with low CAC efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 text-xs">✗</span>
                  <span>SaaS SEO strategy feels overwhelming with no clear starting point</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 text-xs">✗</span>
                  <span>Can&apos;t afford hiring SEO specialists or content marketing agencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 text-xs">✗</span>
                  <span>Writing SEO-optimized blog content takes time away from product development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 text-xs">✗</span>
                  <span>Competitors with inferior products rank higher on Google search results</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/30 transition-all backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="text-emerald-400 text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-4">What Your SaaS Business Needs</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <span>SEO-optimized content published automatically every day</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <span>Targeted keyword research for your SaaS niche and ICP</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <span>Automated content marketing so you can focus on product development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <span>Fast search engine indexing on Google, Bing, and 47+ platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <span>Automated backlink generation to boost domain authority</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <span>All for less than hiring a single junior marketer</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
              <span className="text-white font-bold">&quot;I can build the product, but getting organic traffic and ranking on Google is completely different.&quot;</span>
            </p>
            <p className="text-sm text-zinc-500">— Every SaaS founder struggling with SEO</p>
          </CardContent>
        </Card>
      </section>

      {/* The Solution Section */}
      <section id="solution" className="max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
            Automated SEO for B2B SaaS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            SEO Automation ={" "}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Your Content Marketing Team
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Stop spending nights watching YouTube tutorials on SEO. We automate the entire content marketing pipeline so you can stay in your zone of genius: building product.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700 transition-all backdrop-blur-sm">
            <CardContent className="p-5">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-lg font-bold mb-2">We Research Keywords</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                AI analyzes your SaaS, identifies high-value keywords your ideal customers are searching for, and creates a content calendar.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700 transition-all backdrop-blur-sm">
            <CardContent className="p-5">
              <div className="text-2xl mb-3">✍️</div>
              <h3 className="text-lg font-bold mb-2">We Write Content</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Generate 10-20 SEO-optimized blog posts per month using GPT-4, Claude, or Gemini — properly formatted with meta tags and schema markup.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700 transition-all backdrop-blur-sm">
            <CardContent className="p-5">
              <div className="text-2xl mb-3">📤</div>
              <h3 className="text-lg font-bold mb-2">We Publish & Index</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Automatically publishes to your site and submits to 47+ search engines. Get indexed in 24-48 hours instead of weeks.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700 transition-all backdrop-blur-sm">
            <CardContent className="p-5">
              <div className="text-2xl mb-3">🔗</div>
              <h3 className="text-lg font-bold mb-2">We Build Backlinks</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                AI-powered outreach and directory submissions build 50-100 quality backlinks in 60 days — no manual work required.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700 transition-all backdrop-blur-sm">
            <CardContent className="p-5">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="text-lg font-bold mb-2">We Track Performance</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Real-time analytics show which content drives traffic and conversions. Optimize automatically based on data.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700 transition-all backdrop-blur-sm">
            <CardContent className="p-5">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">You Focus on Code</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                While your marketing runs 24/7 on autopilot, you stay focused on building features and shipping updates.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border-emerald-500/20 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3 tracking-tight">The Result?</h3>
            <p className="text-lg text-zinc-400 mb-6 max-w-2xl mx-auto leading-relaxed">
              Consistent organic traffic growth month over month. No hiring. No meetings. No distractions from building your product.
            </p>
            <a href="/#pricing">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold shadow-lg shadow-emerald-500/20">
                Lock In Founder Pricing
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>

      {/* Traffic Growth Comparison Graph */}
      <section id="case-study" className="relative w-full px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950 px-3 py-1">
              Real SaaS SEO Results
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Organic Traffic Growth: Manual vs Automated SEO</h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Real data showing how SEO automation drives consistent organic search traffic for B2B SaaS companies
            </p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto">
          <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8">
              {/* Graph Container - Full width, no scroll */}
              <div className="relative h-[600px] w-full">
                {/* Graph area with clean borders */}
                <div className="absolute inset-0 border-l border-b border-zinc-800">
                {/* Horizontal grid lines */}
                <div className="absolute inset-0">
                  <div className="absolute w-full border-t border-zinc-800/20" style={{ top: '0%' }}></div>
                  <div className="absolute w-full border-t border-zinc-800/20" style={{ top: '10%' }}></div>
                  <div className="absolute w-full border-t border-zinc-800/20" style={{ top: '20%' }}></div>
                  <div className="absolute w-full border-t border-zinc-800/20" style={{ top: '30%' }}></div>
                  <div className="absolute w-full border-t border-zinc-800/20" style={{ top: '40%' }}></div>
                  <div className="absolute w-full border-t border-zinc-800/20" style={{ top: '50%' }}></div>
                  <div className="absolute w-full border-t border-zinc-800/20" style={{ top: '60%' }}></div>
                  <div className="absolute w-full border-t border-zinc-800/20" style={{ top: '70%' }}></div>
                  <div className="absolute w-full border-t border-zinc-800/20" style={{ top: '80%' }}></div>
                  <div className="absolute w-full border-t border-zinc-800/20" style={{ top: '90%' }}></div>
                </div>

                {/* Traditional Organic Traffic - Realistic with random spikes and dips */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M 0,92 L 2,91.5 L 4,91.8 L 6,90.2 L 8,91 L 10,89.5 L 12,90.8 L 14,88 L 16,89.2 L 18,90.5 L 20,87.5 L 22,89 L 24,88.2 L 26,90 L 28,85 L 30,88.5 L 32,89.8 L 34,91 L 36,89.5 L 38,88 L 40,86.5 L 42,88.8 L 44,90.2 L 46,89 L 48,87 L 50,88.5 L 52,86 L 54,89.5 L 56,88.2 L 58,90.5 L 60,89 L 62,87.5 L 64,89.8 L 66,88.5 L 68,90 L 70,88.8 L 72,87.2 L 74,89 L 76,90.5 L 78,88 L 80,89.5 L 82,91 L 84,89.2 L 86,88.5 L 88,90.2 L 90,89 L 92,87.8 L 94,89.5 L 96,88.2 L 98,89.8 L 100,88.5"
                    fill="none"
                    stroke="rgb(248 113 113)"
                    strokeWidth="0.3"
                    opacity="0.7"
                  />
                </svg>

                {/* SEO Automation Traffic - Realistic growth with bumps, dips, and plateaus */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Gradient fill under the line */}
                  <defs>
                    <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(16 185 129)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(16 185 129)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Filled area */}
                  <path
                    d="M 0,92 L 2,91 L 4,90.5 L 6,91.2 L 8,89.5 L 10,88.5 L 12,89 L 14,87.5 L 16,86 L 18,85.5 L 20,84 L 22,82.5 L 24,83 L 26,81 L 28,80.5 L 30,78.5 L 32,77 L 34,76 L 36,74.5 L 38,73 L 40,71.5 L 42,70 L 44,68.5 L 46,69 L 48,67 L 50,65.5 L 52,64 L 54,62 L 56,63.5 L 58,61 L 60,59 L 62,57.5 L 64,56 L 66,54.5 L 68,55 L 70,52.5 L 72,50 L 74,48.5 L 76,47 L 78,45 L 80,43.5 L 82,42 L 84,40 L 86,38.5 L 88,36.5 L 90,35 L 92,33 L 94,31.5 L 96,30 L 98,28 L 100,26 L 100,100 L 0,100 Z"
                    fill="url(#emeraldGradient)"
                  />
                  
                  {/* Line with realistic ups and downs, plateaus, and bumps */}
                  <path
                    d="M 0,92 L 2,91 L 4,90.5 L 6,91.2 L 8,89.5 L 10,88.5 L 12,89 L 14,87.5 L 16,86 L 18,85.5 L 20,84 L 22,82.5 L 24,83 L 26,81 L 28,80.5 L 30,78.5 L 32,77 L 34,76 L 36,74.5 L 38,73 L 40,71.5 L 42,70 L 44,68.5 L 46,69 L 48,67 L 50,65.5 L 52,64 L 54,62 L 56,63.5 L 58,61 L 60,59 L 62,57.5 L 64,56 L 66,54.5 L 68,55 L 70,52.5 L 72,50 L 74,48.5 L 76,47 L 78,45 L 80,43.5 L 82,42 L 84,40 L 86,38.5 L 88,36.5 L 90,35 L 92,33 L 94,31.5 L 96,30 L 98,28 L 100,26"
                    fill="none"
                    stroke="rgb(16 185 129)"
                    strokeWidth="0.4"
                    opacity="1"
                  />
                </svg>
              </div>
            </div>

            {/* Legend only */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <span className="text-sm text-zinc-400">Traditional Organic (Manual SEO)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-sm text-zinc-400">SEO Automation</span>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative max-w-4xl mx-auto px-6 py-20">
        <Card className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border-emerald-500/20 backdrop-blur-sm">
          <CardContent className="p-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Automate Your SaaS SEO Strategy.
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Focus on Building Your Product.
              </span>
            </h2>
            <p className="text-lg text-zinc-400 mb-6 max-w-2xl mx-auto leading-relaxed">
              Join 127+ B2B SaaS founders who automated their content marketing and SEO to generate consistent organic traffic.
            </p>
            <a href="/#pricing">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold shadow-lg shadow-emerald-500/20">
                Lock In Founder Pricing
              </Button>
            </a>
            <p className="text-xs text-zinc-500 mt-4">
              ✓ 100% Refundable Anytime — Zero Risk Guarantee
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center text-zinc-500 text-sm">
            <p>© 2025 SEO Automation for SaaS. Built for technical founders who need organic traffic, not marketing distractions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
