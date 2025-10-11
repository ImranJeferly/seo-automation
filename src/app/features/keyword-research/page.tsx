"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function KeywordResearchPage() {
  const [activeTab, setActiveTab] = useState<'ahrefs' | 'semrush' | 'builtin'>('ahrefs');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Keyword Research & Analytics Tool - SEO Automation",
          "applicationCategory": "BusinessApplication",
          "description": "Advanced keyword research tool with Ahrefs, SEMrush, and Moz integration. Automated competitor analysis, keyword difficulty scoring, search volume tracking, SERP analysis, and content brief generation. Built-in website crawler analyzes your site structure, identifies content gaps, and discovers ranking opportunities with real-time keyword analytics.",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "197",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "173"
          },
          "featureList": [
            "Ahrefs API integration for enterprise keyword data",
            "SEMrush keyword analytics and competitor tracking",
            "Moz Domain Authority and keyword difficulty analysis",
            "Built-in keyword research engine with 8B+ keywords",
            "Website crawler for content gap analysis",
            "SERP analysis and competitor ranking tracking",
            "Automated content brief generation",
            "LSI keyword discovery and semantic analysis",
            "Search volume forecasting and trend detection",
            "Keyword clustering and topic modeling",
            "Competitor backlink analysis",
            "Real-time ranking position tracking"
          ]
        }`}
      </script>

      <script type="application/ld+json" suppressHydrationWarning>
        {`{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does the keyword research tool find high-opportunity keywords?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our AI analyzes multiple factors: search volume (monthly searches), keyword difficulty (0-100 scale based on competitor strength), current rankings (where you already rank), traffic potential (estimated monthly visitors), and competition level. The system scores each keyword based on difficulty vs opportunity ratio, prioritizing keywords where you have the best chance of ranking in top 10 positions."
              }
            },
            {
              "@type": "Question",
              "name": "What keyword analytics tools do you integrate with?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We integrate with Ahrefs (keyword difficulty, search volume, SERP analysis), SEMrush (keyword analytics, competitor research, position tracking), Moz (Domain Authority, keyword difficulty), and Google Search Console (actual search queries driving traffic). You can also use our built-in research engine with 8 billion+ keywords from Google, Bing, Amazon, and YouTube without external subscriptions."
              }
            },
            {
              "@type": "Question",
              "name": "Does the website crawler analyze my existing content?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our crawler scans your entire website to identify: existing rankings and current positions, content gaps where competitors rank but you don't, thin content pages needing expansion, cannibalization issues (multiple pages targeting same keyword), internal linking opportunities, and orphan pages with no inbound links. The crawler runs automatically every 7 days to track changes."
              }
            },
            {
              "@type": "Question",
              "name": "Can I track competitor keywords and rankings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Enter up to 10 competitor domains and the system tracks: all keywords they rank for in top 20 positions, ranking changes over time, new keywords they're targeting, lost rankings and dropped keywords, estimated traffic by keyword, and backlink profiles. Get alerts when competitors rank for new valuable keywords or when they lose rankings you can capture."
              }
            },
            {
              "@type": "Question",
              "name": "What are content briefs and how are they generated?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Content briefs are AI-generated outlines for targeting specific keywords. Each brief includes: primary keyword and search intent, recommended word count (based on top-ranking content), H2/H3 heading suggestions, LSI keywords and related terms to include, questions people ask about the topic, competitor content analysis, and target difficulty score. Briefs help writers create comprehensively optimized content that ranks."
              }
            },
            {
              "@type": "Question",
              "name": "How often is keyword data updated?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Keyword data freshness depends on the source: Ahrefs updates monthly with fresh crawl data, SEMrush provides daily keyword position tracking, Google Search Console data syncs every 48 hours, our built-in engine updates weekly with new search volume trends. Ranking position tracking happens daily for your tracked keywords. You can manually trigger on-demand updates for any keyword anytime."
              }
            }
          ]
        }`}
      </script>

      <Navbar />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
      <main className="flex-1 relative mt-16">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
              🔍 Enterprise Keyword Analytics
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Keyword Research
              </span>
              <br />
              <span className="text-white">Find Rankings You Can Win</span>
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              Advanced keyword analytics tool with Ahrefs, SEMrush, and Moz integration. Automated 
              competitor analysis, website crawler for content gaps, and AI-generated content briefs. 
              Discover high-opportunity keywords with low competition and high traffic potential.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">8B+</div>
                <div className="text-sm text-zinc-500">Keywords Tracked</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">10x</div>
                <div className="text-sm text-zinc-500">Faster Research</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-sm text-zinc-500">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-100">
                  Start Researching
                </Button>
              </Link>
              <Link href="#integrations">
                <Button size="lg" variant="outline" className="border-zinc-800 hover:bg-zinc-900">
                  View Integrations
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 text-sm text-zinc-500 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-black"
                    />
                  ))}
                </div>
                <span>173+ SEO teams</span>
              </div>
              <div className="h-4 w-px bg-zinc-800" />
              <div>8 billion keywords</div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-y border-zinc-900 bg-zinc-950/50">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">847K+</div>
                <div className="text-sm text-zinc-500">Keywords Researched</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">12.4K</div>
                <div className="text-sm text-zinc-500">Content Briefs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">85%</div>
                <div className="text-sm text-zinc-500">Rank Top 10</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">173+</div>
                <div className="text-sm text-zinc-500">Active Users</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tool Integrations */}
        <div className="container mx-auto px-6 py-24" id="integrations">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🔌 Data Sources
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Enterprise Keyword Analytics Integration
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Connect your existing SEO tools or use our built-in research engine with 
                8 billion+ keywords from Google, Bing, Amazon, and YouTube.
              </p>
            </div>

            {/* Integration Tabs */}
            <div className="flex justify-center gap-2 flex-wrap">
              <button
                onClick={() => setActiveTab('ahrefs')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'ahrefs'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                Ahrefs API
              </button>
              <button
                onClick={() => setActiveTab('semrush')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'semrush'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                SEMrush
              </button>
              <button
                onClick={() => setActiveTab('builtin')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'builtin'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                Built-in Engine
              </button>
            </div>

            {/* Tab Content */}
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-12">
                {activeTab === 'ahrefs' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl">
                        📊
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Ahrefs API Integration</h3>
                        <p className="text-zinc-500">Enterprise-grade SEO data</p>
                      </div>
                    </div>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      Connect your Ahrefs account to access their industry-leading keyword database 
                      with 19.2 billion keywords, backlink analysis from 35 trillion links, and SERP 
                      data updated every 15 minutes. Perfect for agencies and SEO professionals who 
                      need the most accurate keyword difficulty scores.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white">Data Available:</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>Keyword difficulty (0-100 scale based on backlinks)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>Global and country-specific search volumes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>Click-through rate estimates and traffic potential</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>SERP features (featured snippets, PAA, etc.)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>Parent topic clustering and keyword grouping</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white">Best For:</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Competitive link analysis and gap research</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Content marketing teams needing reliable data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Agencies managing multiple client campaigns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Advanced SERP analysis and ranking tracking</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'semrush' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl">
                        📈
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">SEMrush Integration</h3>
                        <p className="text-zinc-500">Comprehensive competitor analytics</p>
                      </div>
                    </div>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      Integrate SEMrush for detailed competitor keyword analysis, position tracking 
                      across 130+ countries, and advertising intelligence. Access 24 billion keywords, 
                      competitor domain analytics, and real-time SERP volatility data for informed 
                      strategy decisions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white">Data Available:</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>Keyword difficulty and competition density</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>Competitor organic and paid keyword overlap</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>Position tracking with daily rank updates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>Topic research and content analyzer</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>Keyword magic tool with 24B+ suggestions</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white">Best For:</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Deep competitor research and gap analysis</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Daily ranking position monitoring</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>International SEO (130+ countries)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>PPC keyword research and ad intelligence</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'builtin' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl">
                        🚀
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Built-in Research Engine</h3>
                        <p className="text-zinc-500">No external subscriptions needed</p>
                      </div>
                    </div>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      Use our proprietary keyword research engine with 8 billion+ keywords from 
                      Google, Bing, Amazon, and YouTube. No Ahrefs or SEMrush subscription required. 
                      Perfect for startups and small teams who want powerful keyword research without 
                      enterprise tool costs ($99-399/month saved).
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white">Data Available:</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>8B+ keywords from Google, Bing, Amazon, YouTube</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>Search volume estimates updated weekly</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>AI-powered difficulty scoring (0-100)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>LSI keywords and semantic variations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span>Question keywords and People Also Ask data</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white">Best For:</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Startups without enterprise SEO budgets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Solo founders and small content teams</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Testing keyword strategies before scaling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Comprehensive research without tool juggling</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Website Crawler Technology */}
        <div className="container mx-auto px-6 py-24 bg-zinc-950/50">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🕷️ Crawler Technology
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Automated Website Analysis
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Our intelligent crawler scans your entire website to identify ranking opportunities, 
                content gaps, and optimization issues—automatically analyzing thousands of pages 
                to surface actionable keyword insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    🔎
                  </div>
                  <h3 className="text-2xl font-bold text-white">On-Page Keyword Extraction</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    The crawler analyzes every page element: title tags (60 character optimization), 
                    meta descriptions (155 characters), H1-H6 heading hierarchy, body content with 
                    TF-IDF analysis, image alt text, and internal anchor text. Natural language 
                    processing identifies primary and secondary keywords with density scoring.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Semantic HTML parsing extracts structured content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Schema.org markup detection for rich snippets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Keyword density calculation avoids over-optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>LSI term identification for semantic relevance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    🗺️
                  </div>
                  <h3 className="text-2xl font-bold text-white">Content Gap Analysis</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Compares your site structure against top-ranking competitors to identify missing 
                    topics and keyword opportunities. The system crawls up to 10 competitor domains 
                    simultaneously, mapping their content architecture to reveal gaps where you're 
                    not competing for valuable search traffic.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Identifies keywords competitors rank for (you don't)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Thin content detection (pages under 300 words)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Orphan page discovery (no internal links)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Cannibalization warnings (multiple pages, same keyword)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    🔗
                  </div>
                  <h3 className="text-2xl font-bold text-white">Internal Linking Intelligence</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Maps your site's internal link graph to identify authority distribution and 
                    anchor text optimization opportunities. The crawler follows every internal link, 
                    building a complete topology that reveals which pages have strong internal 
                    linking and which are isolated.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>PageRank-style authority flow visualization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Anchor text analysis for keyword relevance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Broken internal link detection and fixing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Suggests contextual links between related content</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    ⚙️
                  </div>
                  <h3 className="text-2xl font-bold text-white">Crawler Configuration</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Customizable crawl settings respect your server resources while maximizing 
                    data collection. Set crawl depth limits, concurrent request thresholds, and 
                    scheduling preferences. The crawler identifies itself properly and respects 
                    robots.txt directives.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Automatic crawl scheduling (daily/weekly/monthly)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Rate limiting prevents server overload</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>JavaScript rendering for React/Vue/Angular apps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span>Incremental crawls detect only changed pages</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Technical Details */}
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-white mb-8">How the Crawler Works</h3>
                <div className="space-y-6 text-zinc-300">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">1. Discovery Phase</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      The crawler starts with your sitemap.xml and homepage, then follows every 
                      internal link to discover all accessible pages. It respects robots.txt 
                      disallow rules and nofollow directives. The system identifies the site 
                      architecture, detecting blog posts, category pages, product pages, and 
                      static content based on URL patterns and HTML structure.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">2. Content Extraction</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      For each page, the crawler extracts: title tags, meta descriptions, all 
                      heading tags (H1-H6), body text content, image alt attributes, link anchor 
                      text, canonical URLs, and schema.org structured data. TF-IDF analysis 
                      identifies the most important keywords on each page based on term frequency 
                      and inverse document frequency across your entire site.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">3. Keyword Mapping</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      The system maps discovered keywords to specific pages, creating a matrix 
                      of which pages target which terms. This reveals keyword cannibalization 
                      (multiple pages competing for the same keyword) and opportunities for 
                      consolidation. The crawler also identifies pages with no clear keyword 
                      focus that need optimization.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">4. Competitive Comparison</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      After crawling your site, the system crawls competitor domains (up to 10) 
                      using the same methodology. It compares keyword coverage, content depth 
                      (word count), topical authority, and SERP feature optimization. The gap 
                      analysis highlights keywords where competitors have content but you don't, 
                      representing immediate opportunities for new content creation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Competitive Analysis Features */}
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🎯 Competitive Intelligence
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Outrank Your Competition
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Deep competitor keyword analysis reveals exactly what's working for others in 
                your niche. Track competitor rankings, discover their content strategies, and 
                identify weaknesses you can exploit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    📊
                  </div>
                  <h3 className="text-2xl font-bold text-white">Keyword Gap Analysis</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Compare up to 5 domains simultaneously to identify keyword gaps—terms your 
                    competitors rank for but you don't. The system prioritizes gaps based on 
                    search volume, difficulty, and relevance to your business. Export gap reports 
                    with recommended content priorities.
                  </p>
                  <div className="pt-4 space-y-2 text-sm">
                    <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                      <span className="text-zinc-400">Keywords you're missing</span>
                      <span className="text-emerald-400 font-semibold">847</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                      <span className="text-zinc-400">High-value opportunities</span>
                      <span className="text-emerald-400 font-semibold">142</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                      <span className="text-zinc-400">Est. monthly traffic gain</span>
                      <span className="text-emerald-400 font-semibold">24.7K</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    📈
                  </div>
                  <h3 className="text-2xl font-bold text-white">SERP Position Tracking</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Monitor your rankings and competitor positions for target keywords daily. 
                    Track SERP features (featured snippets, People Also Ask, knowledge panels) 
                    and get alerts when competitors move. Historical data shows ranking volatility 
                    and identifies opportunities when competitors drop.
                  </p>
                  <div className="pt-4 space-y-2 text-sm">
                    <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                      <span className="text-zinc-400">Your avg position</span>
                      <span className="text-emerald-400 font-semibold">#8.4</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                      <span className="text-zinc-400">Competitor avg</span>
                      <span className="text-zinc-400 font-semibold">#5.2</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                      <span className="text-zinc-400">Gap to close</span>
                      <span className="text-amber-400 font-semibold">-3.2</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    🔗
                  </div>
                  <h3 className="text-2xl font-bold text-white">Backlink Keyword Analysis</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Analyze the anchor text of competitor backlinks to discover keywords they're 
                    building authority around. Identify their link-building strategies and find 
                    sites that link to competitors but not you. Export target lists for outreach 
                    campaigns with prioritized opportunities.
                  </p>
                  <ul className="pt-4 space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">✓</span>
                      <span>Anchor text keyword extraction from backlinks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">✓</span>
                      <span>Identify sites linking to competitors (not you)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">✓</span>
                      <span>Domain Authority scoring for link prospects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">✓</span>
                      <span>Toxic link detection to avoid penalties</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    📑
                  </div>
                  <h3 className="text-2xl font-bold text-white">Content Strategy Insights</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    See which content types work best in your niche. The system analyzes 
                    top-ranking pages for word count, multimedia usage, heading structure, and 
                    readability. Discover whether listicles, guides, or comparison articles 
                    perform better for specific keyword types.
                  </p>
                  <ul className="pt-4 space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">✓</span>
                      <span>Average word count for top 10 results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">✓</span>
                      <span>Content format analysis (list, guide, comparison)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">✓</span>
                      <span>Multimedia usage (images, videos, infographics)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 flex-shrink-0">✓</span>
                      <span>Readability scores and grade-level recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Search Intent & LSI Keywords */}
        <div className="container mx-auto px-6 py-24 bg-zinc-950/50">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🧠 AI-Powered Analysis
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Search Intent & Semantic Keywords
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Modern SEO isn't just about exact-match keywords. Our NLP engine understands 
                search intent and discovers LSI keywords that help you rank for topic clusters, 
                not just isolated terms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Search Intent Classification</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Our AI analyzes keyword phrasing and SERP features to classify search intent 
                    into four categories. Understanding intent ensures your content matches what 
                    searchers actually want, improving rankings and engagement.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">📚</span>
                        <span className="font-semibold text-white">Informational</span>
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">65%</Badge>
                      </div>
                      <p className="text-sm text-zinc-400">
                        User wants to learn something. Keywords: "how to", "what is", "guide", 
                        "tutorial". Content type: blog posts, guides, explainers.
                      </p>
                    </div>
                    <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">🧭</span>
                        <span className="font-semibold text-white">Navigational</span>
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">10%</Badge>
                      </div>
                      <p className="text-sm text-zinc-400">
                        User seeks specific website/page. Keywords: brand names, login pages. 
                        Content type: homepage, product pages, brand pages.
                      </p>
                    </div>
                    <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">💰</span>
                        <span className="font-semibold text-white">Transactional</span>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">15%</Badge>
                      </div>
                      <p className="text-sm text-zinc-400">
                        User ready to buy/convert. Keywords: "buy", "discount", "deal", "coupon". 
                        Content type: product pages, checkout, pricing.
                      </p>
                    </div>
                    <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">🔍</span>
                        <span className="font-semibold text-white">Commercial Investigation</span>
                        <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">10%</Badge>
                      </div>
                      <p className="text-sm text-zinc-400">
                        User researching before purchase. Keywords: "best", "vs", "review", 
                        "comparison". Content type: reviews, comparisons, roundups.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">LSI Keyword Discovery</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Latent Semantic Indexing (LSI) keywords are terms semantically related to 
                    your target keyword. Google uses LSI to understand content context and topic 
                    comprehensiveness. Including LSI terms improves topical authority and rankings.
                  </p>
                  <Card className="bg-zinc-900/30 border-zinc-800">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <span className="text-sm text-zinc-500">Primary Keyword:</span>
                        <div className="text-lg font-semibold text-white mt-1">
                          "keyword research tool"
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-sm text-zinc-500">LSI Keywords Discovered:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {[
                            'seo keyword research',
                            'keyword analysis',
                            'search volume',
                            'keyword difficulty',
                            'competitor keywords',
                            'long-tail keywords',
                            'keyword suggestions',
                            'serp analysis',
                            'keyword planner',
                            'search terms',
                            'keyword metrics',
                            'organic keywords'
                          ].map((keyword) => (
                            <span
                              key={keyword}
                              className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-zinc-500 mt-4">
                        These semantically related terms should appear naturally throughout your 
                        content to signal topical comprehensiveness to search engines.
                      </p>
                    </CardContent>
                  </Card>
                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-start gap-2 text-zinc-400">
                      <span className="text-emerald-400 flex-shrink-0">→</span>
                      <span>
                        <strong className="text-white">Topic Modeling:</strong> AI groups related 
                        keywords into topic clusters for pillar content strategy
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-zinc-400">
                      <span className="text-emerald-400 flex-shrink-0">→</span>
                      <span>
                        <strong className="text-white">Entity Recognition:</strong> Identifies 
                        named entities (people, places, products) relevant to your niche
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-zinc-400">
                      <span className="text-emerald-400 flex-shrink-0">→</span>
                      <span>
                        <strong className="text-white">Co-Occurrence Analysis:</strong> Finds 
                        terms that frequently appear together in top-ranking content
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Brief Generation */}
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                📝 Automated Briefs
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                AI-Generated Content Briefs
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Stop starting from blank pages. Every keyword research session generates detailed 
                content briefs with everything writers need to create comprehensive, SEO-optimized 
                articles that rank.
              </p>
            </div>

            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">What's in a Content Brief</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-400 font-semibold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Target Keyword & Intent</h4>
                          <p className="text-sm text-zinc-400">
                            Primary keyword with search volume, difficulty score, and classified 
                            intent (informational, transactional, etc.)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-400 font-semibold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Recommended Word Count</h4>
                          <p className="text-sm text-zinc-400">
                            Target length based on average word count of top 10 ranking articles 
                            (typically 1,800-3,500 words)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-400 font-semibold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Heading Structure</h4>
                          <p className="text-sm text-zinc-400">
                            Suggested H2 and H3 headings based on topics covered in top-ranking 
                            competitor content
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-400 font-semibold text-sm">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">LSI & Secondary Keywords</h4>
                          <p className="text-sm text-zinc-400">
                            15-25 semantically related terms to include naturally throughout the 
                            content for topical depth
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-400 font-semibold text-sm">5</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Questions to Answer</h4>
                          <p className="text-sm text-zinc-400">
                            People Also Ask questions from Google SERP plus related questions 
                            from Reddit, Quora, forums
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-400 font-semibold text-sm">6</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Competitor Analysis</h4>
                          <p className="text-sm text-zinc-400">
                            Breakdown of top 3-5 ranking articles: their structure, word count, 
                            topics covered, strengths/weaknesses
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-lg">
                      <div className="text-xs text-emerald-400 mb-2">EXAMPLE BRIEF</div>
                      <div className="space-y-4 text-sm">
                        <div>
                          <span className="text-zinc-500">Target Keyword:</span>
                          <div className="text-white font-semibold">best project management software</div>
                        </div>
                        <div>
                          <span className="text-zinc-500">Search Volume:</span>
                          <span className="text-white ml-2">14,800/month</span>
                        </div>
                        <div>
                          <span className="text-zinc-500">Difficulty:</span>
                          <span className="text-amber-400 ml-2">62/100 (Medium-Hard)</span>
                        </div>
                        <div>
                          <span className="text-zinc-500">Intent:</span>
                          <span className="text-blue-400 ml-2">Commercial Investigation</span>
                        </div>
                        <div>
                          <span className="text-zinc-500">Recommended Length:</span>
                          <span className="text-white ml-2">2,400-2,800 words</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block mb-2">Suggested Headings:</span>
                          <div className="space-y-1 text-zinc-400 pl-4">
                            <div>H2: What is Project Management Software?</div>
                            <div>H2: Top 10 Project Management Tools 2025</div>
                            <div className="pl-4">H3: Asana - Best for Teams</div>
                            <div className="pl-4">H3: Monday.com - Most Visual</div>
                            <div className="pl-4">H3: ClickUp - Most Features</div>
                            <div>H2: How to Choose PM Software</div>
                            <div>H2: Pricing Comparison Table</div>
                            <div>H2: FAQs</div>
                          </div>
                        </div>
                        <div>
                          <span className="text-zinc-500 block mb-2">LSI Keywords:</span>
                          <div className="flex flex-wrap gap-1">
                            {['task management', 'team collaboration', 'agile software', 'kanban board'].map((k) => (
                              <span key={k} className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded">
                                {k}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-zinc-400 space-y-2">
                      <p className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>Export briefs as PDF, Notion, Google Docs, or Markdown</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>Share with writers via link (no account needed)</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>Track brief completion status in dashboard</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-6 py-24 bg-zinc-950/50">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                ❓ FAQ
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
                  <span className="font-semibold text-zinc-100">
                    How does the keyword research tool find high-opportunity keywords?
                  </span>
                  <svg
                    className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-sm text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p>
                    Our AI analyzes multiple factors: search volume (monthly searches), keyword 
                    difficulty (0-100 scale based on competitor strength), current rankings (where 
                    you already rank), traffic potential (estimated monthly visitors), and competition 
                    level. The system scores each keyword based on difficulty vs opportunity ratio, 
                    prioritizing keywords where you have the best chance of ranking in top 10 
                    positions. High-opportunity keywords typically have 1,000+ monthly searches, 
                    difficulty under 40, and weak competitor content you can outrank.
                  </p>
                </div>
              </details>

              <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
                  <span className="font-semibold text-zinc-100">
                    What keyword analytics tools do you integrate with?
                  </span>
                  <svg
                    className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-sm text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p>
                    We integrate with Ahrefs (keyword difficulty, search volume, SERP analysis, 
                    19.2B keywords), SEMrush (keyword analytics, competitor research, position 
                    tracking, 24B keywords), Moz (Domain Authority, keyword difficulty, SERP 
                    features), and Google Search Console (actual search queries driving traffic). 
                    You can also use our built-in research engine with 8 billion+ keywords from 
                    Google, Bing, Amazon, and YouTube without external subscriptions. Connect 
                    multiple tools simultaneously to cross-reference data for maximum accuracy.
                  </p>
                </div>
              </details>

              <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
                  <span className="font-semibold text-zinc-100">
                    Does the website crawler analyze my existing content?
                  </span>
                  <svg
                    className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-sm text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p>
                    Yes. Our crawler scans your entire website to identify: existing rankings and 
                    current positions for all pages, content gaps where competitors rank but you 
                    don't, thin content pages under 300 words needing expansion, cannibalization 
                    issues (multiple pages targeting same keyword), internal linking opportunities 
                    to boost page authority, and orphan pages with no inbound links. The crawler 
                    runs automatically every 7 days to track changes, or you can trigger on-demand 
                    crawls anytime. It respects robots.txt and includes JavaScript rendering for 
                    React/Vue/Angular sites.
                  </p>
                </div>
              </details>

              <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
                  <span className="font-semibold text-zinc-100">
                    Can I track competitor keywords and rankings?
                  </span>
                  <svg
                    className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-sm text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p>
                    Absolutely. Enter up to 10 competitor domains and the system tracks: all 
                    keywords they rank for in top 20 positions, ranking changes over time with 
                    historical data, new keywords they're targeting each month, lost rankings and 
                    dropped keywords you can capture, estimated traffic by keyword based on position, 
                    and backlink profiles with anchor text analysis. Get email/Slack alerts when 
                    competitors rank for new valuable keywords or when they lose rankings—these are 
                    immediate opportunities to create better content and steal their traffic.
                  </p>
                </div>
              </details>

              <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
                  <span className="font-semibold text-zinc-100">
                    What are content briefs and how are they generated?
                  </span>
                  <svg
                    className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-sm text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p>
                    Content briefs are AI-generated outlines for targeting specific keywords. Each 
                    brief includes: primary keyword and search intent classification, recommended 
                    word count (based on top-ranking content average), H2/H3 heading suggestions 
                    from competitor analysis, LSI keywords and related terms to include naturally, 
                    questions people ask about the topic (from PAA, Reddit, Quora), competitor 
                    content analysis showing what's already ranking, and target difficulty score. 
                    Briefs help writers create comprehensively optimized content that ranks without 
                    extensive SEO knowledge. Export as PDF, Notion, Google Docs, or Markdown.
                  </p>
                </div>
              </details>

              <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
                  <span className="font-semibold text-zinc-100">
                    How often is keyword data updated?
                  </span>
                  <svg
                    className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-sm text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p>
                    Keyword data freshness depends on the source: Ahrefs updates monthly with fresh 
                    crawl data (15-minute SERP updates for tracked keywords), SEMrush provides daily 
                    keyword position tracking and weekly database updates, Google Search Console 
                    data syncs every 48 hours with actual search query performance, Moz updates 
                    Domain Authority scores monthly, and our built-in engine updates weekly with new 
                    search volume trends. Ranking position tracking happens daily for your tracked 
                    keywords. You can manually trigger on-demand updates for any keyword anytime—
                    useful when monitoring competitive SERPs or seasonal trends.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-bold text-white">
              Ready to Find Your Next Ranking Opportunity?
            </h2>
            <p className="text-xl text-zinc-400">
              Join 173+ SEO teams using our keyword research tool to discover high-opportunity 
              keywords, analyze competitors, and generate content briefs automatically.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Link href="/signup">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/#pricing">
                <Button size="lg" variant="outline" className="border-zinc-800 hover:bg-zinc-900">
                  View Pricing
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-zinc-500 pt-8">
              <div>✓ No credit card required</div>
              <div className="h-4 w-px bg-zinc-800" />
              <div>✓ 14-day free trial</div>
              <div className="h-4 w-px bg-zinc-800" />
              <div>✓ Cancel anytime</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-900 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-zinc-500">
          <span>© 2025 SEO Automation for SaaS. Built for technical founders who need organic traffic, not marketing distractions.</span>
        </div>
      </footer>
    </div>
  );
}
