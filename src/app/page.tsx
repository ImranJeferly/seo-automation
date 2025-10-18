"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [email, setEmail] = useState("");
  const [copiedStep1, setCopiedStep1] = useState(false);
  const [copiedStep2, setCopiedStep2] = useState(false);

  const handleCopyStep1 = () => {
    navigator.clipboard.writeText('npm install @seo-automation/next');
    setCopiedStep1(true);
    setTimeout(() => setCopiedStep1(false), 2000);
  };

  const handleCopyStep2 = () => {
    navigator.clipboard.writeText(`import { SEOAutomation } from '@seo-automation/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SEOAutomation
          apiKey={process.env.OPENAI_API_KEY}
          autoGenerate={true}
          autoIndex={true}
        >
          {children}
        </SEOAutomation>
      </body>
    </html>
  )
}`);
    setCopiedStep2(true);
    setTimeout(() => setCopiedStep2(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      <script type="application/ld+json" suppressHydrationWarning>
        {`{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "SEO Automation - Automated Content Generation & Indexing",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Automate SEO content creation, blog generation, publishing, and multi-platform indexing. Scale organic traffic with AI-powered SEO automation for Next.js websites.",
          "brand": { "@type": "Brand", "name": "SEO Automation" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "49",
            "highPrice": "399",
            "availability": "https://schema.org/PreOrder",
            "priceValidUntil": "2025-12-31"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5"
          }
        }`}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {`{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does SEO automation improve content quality and rankings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEO Automation uses AI-powered templates trained on high-ranking content patterns. Each post includes optimized meta tags, structured data, internal linking, and keyword density analysis. You maintain full editorial control with draft review before publishing."
              }
            },
            {
              "@type": "Question",
              "name": "Which platforms and search engines does SEO Automation index to?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We support Google Search Console, Bing Webmaster Tools, IndexNow protocol, and integrate with third-party indexing APIs for faster discovery. Submit to 50+ search engines and aggregators automatically."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use SEO Automation with my existing Next.js website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. SEO Automation is a Next.js library that integrates into your existing codebase. Works with App Router, Pages Router, static exports, and all major hosting platforms including Vercel, Netlify, and AWS."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to see SEO results with automated content?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most sites see indexing within 24-48 hours with our fast-track submission. Organic traffic improvements typically appear within 2-4 weeks as search engines crawl and rank new content. Results vary by competition and domain authority."
              }
            }
          ]
        }`}
      </script>

      <main className="flex-1 relative mt-16">{/* Add top margin for fixed navbar */}
        {/* Hero Section */}
        <section className="relative max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-8 border-zinc-800 text-zinc-400 bg-zinc-950">
              Limited Time: 60% Off Founder Pricing
            </Badge>

            <h1 className="text-6xl sm:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Automate Your SEO sigma
              </span>
              <br />
              10x Your Traffic
            </h1>

            <p className="text-xl text-zinc-400 mb-6 leading-relaxed max-w-3xl mx-auto">
              The first Next.js library that automatically creates blog pages, writes SEO-optimized posts, publishes content, and submits to 50+ search engines — completely on autopilot.
            </p>

            <p className="text-base text-zinc-500 mb-10 leading-relaxed max-w-3xl mx-auto">
              Stop paying $5,000+/month for content teams. SEO Automation analyzes your website, identifies content gaps, generates perfectly optimized articles, and gets them indexed fast. Turn your site into a 24/7 organic traffic machine without hiring writers, SEO consultants, or manual indexing.
            </p>

            <div className="space-y-4 mb-12 max-w-2xl mx-auto">
              <div className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <div>
                  <span className="text-white font-medium text-sm">AI-Powered Content Engine</span>
                  <p className="text-zinc-500 text-sm mt-1">Generates blog posts optimized for your target keywords with proper heading structure, meta tags, and schema markup</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <div>
                  <span className="text-white font-medium text-sm">Multi-Platform Indexing</span>
                  <p className="text-zinc-500 text-sm mt-1">Submits new content to Google, Bing, Yandex, and 47+ other search engines automatically (24-48 hour indexing vs 1-2 weeks manual)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <div>
                  <span className="text-white font-medium text-sm">Automated Backlink Generation</span>
                  <p className="text-zinc-500 text-sm mt-1">Builds 50-100 quality backlinks in 60 days through AI-powered outreach and directory submissions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <div>
                  <span className="text-white font-medium text-sm">Smart Scheduling & Publishing</span>
                  <p className="text-zinc-500 text-sm mt-1">Set it and forget it — automatically publishes new content at optimal times based on your audience analytics</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#pricing">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold shadow-lg shadow-emerald-500/20">
                  Lock In Founder Price
                </Button>
              </a>
              <a href="#demo">
                <Button variant="outline" size="lg" className="border-zinc-800 hover:bg-zinc-900">
                  Watch Demo
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
                <span>127+ founders pre-ordered</span>
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
                      <linearGradient id="half-star">
                        <stop offset="50%" stopColor="rgb(52 211 153)" />
                        <stop offset="50%" stopColor="rgb(82 82 91)" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#half-star)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="border-y border-zinc-900 bg-zinc-950/50 py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="text-4xl font-bold mb-2">10,247</div>
              <div className="text-sm text-zinc-500">Articles Auto-Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3.2M+</div>
              <div className="text-sm text-zinc-500">Monthly Organic Visits</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm text-zinc-500">Search Engines & Platforms</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24-48h</div>
              <div className="text-sm text-zinc-500">Average Indexing Time</div>
            </div>
          </div>
        </section>

        {/* How It Works - Main Selling Point */}
        <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              How It Works
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">
              Six Steps to SEO Domination
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              From zero to ranking in search engines — completely automated. Here&apos;s exactly how it generates traffic while you sleep.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 items-start">
              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all group">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                        <span className="text-xl font-bold">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">Site Analysis & Content Gap Discovery</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        Crawls your website and analyzes your niche. Identifies high-value keywords your competitors rank for but you don&apos;t, finds content gaps, and discovers trending topics.
                      </p>
                      <ul className="space-y-2 text-xs text-zinc-500">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">→</span>
                          <span>Scans existing pages and identifies missing topics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">→</span>
                          <span>Analyzes search volume for 10,000+ keywords</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="hidden lg:block bg-zinc-950 border border-zinc-800 rounded-lg p-4 h-full">
                <div className="text-xs text-zinc-500 mb-3 font-mono">Content Gap Analysis</div>
                <div className="space-y-2">
                  <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-zinc-300">&quot;best react hooks 2024&quot;</span>
                      <span className="text-xs text-emerald-400">Vol: 12K</span>
                    </div>
                    <div className="text-xs text-zinc-500">Difficulty: Low • Gap Found</div>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-zinc-300">&quot;next.js optimization&quot;</span>
                      <span className="text-xs text-emerald-400">Vol: 8.5K</span>
                    </div>
                    <div className="text-xs text-zinc-500">Difficulty: Medium • Gap Found</div>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-zinc-300">&quot;typescript patterns&quot;</span>
                      <span className="text-xs text-emerald-400">Vol: 6.2K</span>
                    </div>
                    <div className="text-xs text-zinc-500">Difficulty: Low • Gap Found</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 items-start">
              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all group">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                        <span className="text-xl font-bold">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">AI Content Generation (Your LLM Choice)</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        Using any AI model you prefer (GPT-4, Claude, Gemini), writes comprehensive articles optimized for your target keywords with proper heading structure and natural keyword placement.
                      </p>
                      <ul className="space-y-2 text-xs text-zinc-500">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">→</span>
                          <span>1,500-3,000 words per article with H1-H6 hierarchy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">→</span>
                          <span>Works with OpenAI, Anthropic, Google, and custom models</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="hidden lg:block bg-zinc-950 border border-zinc-800 rounded-lg p-4 h-full">
                <div className="text-xs text-zinc-500 mb-3 font-mono">Article Preview</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-bold text-zinc-300 mb-1">Best React Hooks 2024</div>
                    <div className="text-xs text-zinc-500 leading-relaxed">
                      React Hooks revolutionized how we write components...
                    </div>
                  </div>
                  <div className="border-t border-zinc-800 pt-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-xs text-zinc-400">2,847 words</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-xs text-zinc-400">SEO Score: 94/100</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-xs text-zinc-400">Readability: High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 items-start">
              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all group">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                        <span className="text-xl font-bold">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">SEO Optimization & Schema Markup</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        Automatically enhanced with meta tags, Open Graph images, Twitter Cards, and JSON-LD structured data. Ensures search engines understand your content and display rich snippets.
                      </p>
                      <ul className="space-y-2 text-xs text-zinc-500">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">→</span>
                          <span>Auto-generated meta title and description</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">→</span>
                          <span>Article, FAQ, and Breadcrumb JSON-LD schemas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="hidden lg:block bg-zinc-950 border border-zinc-800 rounded-lg p-4 h-full">
                <div className="text-xs text-zinc-500 mb-3 font-mono">Meta Tags & Schema</div>
                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <div className="text-zinc-600 mb-1">&lt;title&gt;</div>
                    <div className="text-zinc-400 pl-2">Best React Hooks 2024</div>
                  </div>
                  <div>
                    <div className="text-zinc-600 mb-1">&lt;meta description&gt;</div>
                    <div className="text-zinc-400 pl-2 leading-relaxed">Discover the most powerful...</div>
                  </div>
                  <div>
                    <div className="text-zinc-600 mb-1">&lt;script type=&quot;application/ld+json&quot;&gt;</div>
                    <div className="text-zinc-400 pl-2">{`{ "@type": "Article" }`}</div>
                  </div>
                  <div className="pt-2 border-t border-zinc-800">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-zinc-400">All tags optimized</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 items-start">
              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all group">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                        <span className="text-xl font-bold">4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">Multi-Platform Indexing</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        Instantly submits your URLs to 50+ search engines including Google Search Console, Bing Webmaster, and IndexNow protocol. Slashes indexing time from weeks to 24-48 hours.
                      </p>
                      <ul className="space-y-2 text-xs text-zinc-500">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">→</span>
                          <span>Google Search Console API integration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">→</span>
                          <span>Bing, Yandex, Baidu, and 47 other platforms</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="hidden lg:block bg-zinc-950 border border-zinc-800 rounded-lg p-4 h-full">
                <div className="text-xs text-zinc-500 mb-3 font-mono">Indexing Status</div>
                <div className="space-y-2">
                  <div className="bg-zinc-900 border border-zinc-800 rounded p-2 flex items-center justify-between">
                    <span className="text-xs text-zinc-300">Google Search</span>
                    <span className="text-xs text-emerald-400 font-medium">✓ Indexed</span>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded p-2 flex items-center justify-between">
                    <span className="text-xs text-zinc-300">Bing Webmaster</span>
                    <span className="text-xs text-emerald-400 font-medium">✓ Indexed</span>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded p-2 flex items-center justify-between">
                    <span className="text-xs text-zinc-300">Yandex</span>
                    <span className="text-xs text-zinc-400 font-medium">⟳ Processing</span>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded p-2 flex items-center justify-between">
                    <span className="text-xs text-zinc-300">DuckDuckGo</span>
                    <span className="text-xs text-zinc-600 font-medium">○ Pending</span>
                  </div>
                  <div className="text-xs text-zinc-500 mt-3 text-center">
                    + 46 more platforms
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 items-start">
              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all group">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                        <span className="text-xl font-bold">5</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">Traffic Growth & Analytics</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        Watch your organic traffic explode as content gets indexed and ranked. Tracks impressions, clicks, rankings, and conversions for every article with weekly reports.
                      </p>
                      <ul className="space-y-2 text-xs text-zinc-500">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">→</span>
                          <span>Real-time rank tracking for all target keywords</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">→</span>
                          <span>Traffic attribution by article</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="hidden lg:block bg-zinc-950 border border-zinc-800 rounded-lg p-4 h-full">
                <div className="text-xs text-zinc-500 mb-3 font-mono">Traffic Dashboard</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400 mb-1">+487%</div>
                    <div className="text-xs text-zinc-500">Organic traffic (90 days)</div>
                  </div>
                  <div className="h-24 flex items-end gap-1">
                    <div className="flex-1 bg-zinc-800 rounded-t" style={{height: '30%'}}></div>
                    <div className="flex-1 bg-zinc-700 rounded-t" style={{height: '45%'}}></div>
                    <div className="flex-1 bg-zinc-600 rounded-t" style={{height: '60%'}}></div>
                    <div className="flex-1 bg-zinc-500 rounded-t" style={{height: '75%'}}></div>
                    <div className="flex-1 bg-emerald-500 rounded-t" style={{height: '100%'}}></div>
                  </div>
                  <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
                    3.2M monthly visits • 127 articles
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 items-start">
              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all group">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                        <span className="text-xl font-bold">6</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">Backlink Analytics & Auto-Generation</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        Analyzes your backlink profile, identifies toxic links, and automatically generates high-quality backlinks through strategic content distribution and guest post outreach.
                      </p>
                      <ul className="space-y-2 text-xs text-zinc-500">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">→</span>
                          <span>Monitors backlink health: new, lost, toxic links</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">→</span>
                          <span>Auto-submits to 200+ authority directories</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="hidden lg:block bg-zinc-950 border border-zinc-800 rounded-lg p-4 h-full">
                <div className="text-xs text-zinc-500 mb-3 font-mono">Backlink Monitor</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-lg font-bold text-zinc-300">847</div>
                      <div className="text-xs text-zinc-500">Total Backlinks</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-emerald-400">DA 58</div>
                      <div className="text-xs text-zinc-500">Domain Authority</div>
                    </div>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-zinc-300">techcrunch.com</span>
                      <span className="text-xs text-emerald-400">DA 93</span>
                    </div>
                    <div className="text-xs text-zinc-500">Added 2 days ago</div>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-zinc-300">medium.com</span>
                      <span className="text-xs text-emerald-400">DA 96</span>
                    </div>
                    <div className="text-xs text-zinc-500">Added 5 days ago</div>
                  </div>
                  <div className="text-xs text-zinc-400 pt-2 border-t border-zinc-800">
                    ⟳ 23 outreach emails sent
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Choose Your LLM Section */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
                Total Flexibility
              </Badge>
              <h3 className="text-4xl font-bold mb-4 tracking-tight">
                Choose Your LLM & API Key
              </h3>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Use any AI model you prefer. SEO Automation works with all major providers — you bring your own API key and control your costs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* OpenAI */}
              <Card className="bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Image 
                      src="/chatgpt.png" 
                      alt="OpenAI ChatGPT" 
                      width={48} 
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-2">OpenAI</h4>
                  <p className="text-sm text-zinc-400 mb-3">GPT-4, GPT-4o, GPT-3.5 Turbo</p>
                  <div className="text-xs text-zinc-500">
                    Industry leader • Best for quality
                  </div>
                </CardContent>
              </Card>

              {/* Anthropic Claude */}
              <Card className="bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Image 
                      src="/claude.png" 
                      alt="Anthropic Claude" 
                      width={48} 
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Anthropic</h4>
                  <p className="text-sm text-zinc-400 mb-3">Claude 3.5 Sonnet, Opus, Haiku</p>
                  <div className="text-xs text-zinc-500">
                    Long context • Best for research
                  </div>
                </CardContent>
              </Card>

              {/* Google Gemini */}
              <Card className="bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Image 
                      src="/gemini.png" 
                      alt="Google Gemini" 
                      width={48} 
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Google</h4>
                  <p className="text-sm text-zinc-400 mb-3">Gemini Pro, Gemini Ultra</p>
                  <div className="text-xs text-zinc-500">
                    Multimodal • Fast inference
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <Card className="bg-zinc-900/30 border-zinc-800 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">The Result? Unstoppable SEO Growth on Autopilot</h3>
                <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  While you sleep, SEO Automation discovers opportunities, generates content, optimizes for search, submits to engines, and drives traffic. All without hiring writers, SEO consultants, or wasting hours on manual work.
                </p>
                <a href="#pricing">
                  <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
                    Start Automating SEO
                  </Button>
                </a>
                <p className="text-sm text-zinc-500 mt-4">Join 127+ founders who pre-ordered • 30-day guarantee</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SaaS Builder CTA Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <Card className="bg-black border-emerald-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent"></div>
            <CardContent className="relative p-12 md:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <Badge variant="outline" className="mb-6 border-emerald-500/50 text-emerald-400 bg-emerald-500/10">
                  For SaaS Founders
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Built a SaaS Product But{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                    Struggling with Marketing?
                  </span>
                </h2>
                <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                  You spent months building the perfect product. Now you need traffic. 
                  <span className="text-white font-semibold"> SEO Automation handles your entire content marketing strategy</span> — 
                  from keyword research to publishing — while you focus on building features.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-black border border-zinc-800 rounded-lg p-6">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">$0</div>
                    <p className="text-sm text-zinc-400">Extra marketing hires needed</p>
                  </div>
                  <div className="bg-black border border-zinc-800 rounded-lg p-6">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                    <p className="text-sm text-zinc-400">Content generation & publishing</p>
                  </div>
                  <div className="bg-black border border-zinc-800 rounded-lg p-6">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">10x</div>
                    <p className="text-sm text-zinc-400">More content than competitors</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/saas-founders">
                    <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold shadow-lg shadow-emerald-500/20">
                      See How We Can Help
                    </Button>
                  </a>
                  <a href="#roi">
                    <Button variant="outline" size="lg" className="border-zinc-700 hover:bg-zinc-900">
                      Calculate Your ROI
                    </Button>
                  </a>
                </div>

                <p className="text-sm text-zinc-500 mt-6">
                  Join 127+ SaaS founders already automating their SEO
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Problem/Solution Section */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Stop Losing Traffic to Competitors Who Publish 10x Faster</h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              The SEO game has changed. Sites publishing consistent, optimized content dominate search results. Manual content creation can&apos;t keep up — but automation can.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900/20 border-red-900/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <span className="text-red-400">Without SEO Automation</span>
                </h3>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                    <span>Spend $3,000-$10,000/month on content writers and SEO agencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                    <span>Wait weeks for a single blog post to be written, edited, and published</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                    <span>Manually submit URLs to search consoles and pray they get indexed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                    <span>Inconsistent publishing schedule destroys your SEO momentum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                    <span>Miss content opportunities while competitors rank for your keywords</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/20 border-emerald-900/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <span className="text-emerald-400">With SEO Automation</span>
                </h3>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span>One-time payment of $197-$1,297 — no monthly retainers or per-post fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span>Generate 10-50 optimized blog posts per week automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span>Auto-submit to Google, Bing, and 50+ platforms for instant indexing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span>Consistent daily/weekly publishing builds unstoppable SEO authority</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span>Dominate your niche before competitors even start writing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Code Demo Section */}
        <section id="demo" className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              Quick Setup
            </Badge>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Setup in 2 Minutes</h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Install the package, wrap your app, and you&apos;re done. That&apos;s it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Step 1: Install</h3>
                <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      <span className="text-xs text-zinc-500 font-mono ml-3">Terminal</span>
                    </div>
                    <button 
                      onClick={handleCopyStep1}
                      className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors relative group"
                    >
                      {copiedStep1 ? (
                        <>
                          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                            Copied to clipboard!
                          </span>
                        </>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-600 font-mono text-sm select-none">$</span>
                      <code className="text-sm text-emerald-400 font-mono">
                        npm install @seo-automation/next
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Step 2: Wrap your app</h3>
                <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      <span className="text-xs text-zinc-500 font-mono ml-3">app/layout.tsx</span>
                    </div>
                    <button 
                      onClick={handleCopyStep2}
                      className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors relative group"
                    >
                      {copiedStep2 ? (
                        <>
                          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                            Copied to clipboard!
                          </span>
                        </>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="p-4">
                    <pre className="text-sm font-mono overflow-x-auto" style={{lineHeight: '1.6'}}>
<span className="text-pink-400">import</span> <span className="text-zinc-400">{'{'}</span> <span className="text-blue-400">SEOAutomation</span> <span className="text-zinc-400">{'}'}</span> <span className="text-pink-400">from</span> <span className="text-emerald-400">&apos;@seo-automation/next&apos;</span>
{'\n'}
<span className="text-pink-400">export default</span> <span className="text-pink-400">function</span> <span className="text-yellow-300">RootLayout</span><span className="text-zinc-400">(</span><span className="text-zinc-400">{'{'}</span> <span className="text-orange-300">children</span> <span className="text-zinc-400">{'}'}</span><span className="text-zinc-400">)</span> <span className="text-zinc-400">{'{'}</span>
{'\n  '}<span className="text-pink-400">return</span> <span className="text-zinc-400">(</span>
{'\n    '}<span className="text-gray-500">&lt;</span><span className="text-green-400">html</span><span className="text-gray-500">&gt;</span>
{'\n      '}<span className="text-gray-500">&lt;</span><span className="text-green-400">body</span><span className="text-gray-500">&gt;</span>
{'\n        '}<span className="text-gray-500">&lt;</span><span className="text-blue-400">SEOAutomation</span>
{'\n          '}<span className="text-purple-400">apiKey</span><span className="text-zinc-400">=</span><span className="text-zinc-400">{'{'}</span><span className="text-orange-300">process</span><span className="text-zinc-400">.</span><span className="text-orange-300">env</span><span className="text-zinc-400">.</span><span className="text-orange-300">OPENAI_API_KEY</span><span className="text-zinc-400">{'}'}</span>
{'\n          '}<span className="text-purple-400">autoGenerate</span><span className="text-zinc-400">=</span><span className="text-zinc-400">{'{'}</span><span className="text-orange-300">true</span><span className="text-zinc-400">{'}'}</span>
{'\n          '}<span className="text-purple-400">autoIndex</span><span className="text-zinc-400">=</span><span className="text-zinc-400">{'{'}</span><span className="text-orange-300">true</span><span className="text-zinc-400">{'}'}</span>
{'\n        '}<span className="text-gray-500">&gt;</span>
{'\n          '}<span className="text-zinc-400">{'{'}</span><span className="text-orange-300">children</span><span className="text-zinc-400">{'}'}</span>
{'\n        '}<span className="text-gray-500">&lt;/</span><span className="text-blue-400">SEOAutomation</span><span className="text-gray-500">&gt;</span>
{'\n      '}<span className="text-gray-500">&lt;/</span><span className="text-green-400">body</span><span className="text-gray-500">&gt;</span>
{'\n    '}<span className="text-gray-500">&lt;/</span><span className="text-green-400">html</span><span className="text-gray-500">&gt;</span>
{'\n  '}<span className="text-zinc-400">)</span>
{'\n'}<span className="text-zinc-400">{'}'}</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">

                    <h3 className="text-xl font-semibold">What Happens Automatically</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                        <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-400 text-sm leading-relaxed">Analyzes your site structure and identifies content gaps</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                        <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-400 text-sm leading-relaxed">Generates SEO-optimized blog posts (1,500-3,000 words)</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                        <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-400 text-sm leading-relaxed">Adds meta tags, Open Graph, and JSON-LD schema</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                        <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-400 text-sm leading-relaxed">Creates optimized URL slugs and sitemaps</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                        <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-400 text-sm leading-relaxed">Publishes content on your schedule</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                        <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-400 text-sm leading-relaxed">Submits to Google, Bing, and 50+ search engines</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                        <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-400 text-sm leading-relaxed">Tracks rankings and sends you weekly reports</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="text-center">
                <a href="#pricing">
                  <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Get Started
                  </Button>
                </a>
                <p className="text-xs text-zinc-500 mt-3">
                  Works with Next.js 13+ • App Router & Pages Router
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              Complete Feature Set
            </Badge>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Everything You Need to Dominate SEO in 2025</h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Built by SEO experts and Next.js developers who scaled multiple sites to 1M+ monthly visitors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            <Link href="/features/ai-content-generation" className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🤖</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">AI Content Generation</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                GPT-4o powered engine creates blog posts that pass AI detection. Trained on 10,000+ top-ranking articles.
              </p>
            </Link>

            <Link href="/features/seo-first-structure" className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📊</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">SEO-First Structure</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Proper H1-H6 hierarchy, optimized meta titles/descriptions, Open Graph tags, and JSON-LD structured data automatically.
              </p>
            </Link>

            <Link href="/features/multi-platform-indexing" className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🚀</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">Multi-Platform Indexing</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Submit URLs to 50+ search engines simultaneously. Google Search Console, Bing Webmaster, IndexNow protocol.
              </p>
            </Link>

            <Link href="/features/smart-scheduling" className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚡</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">
                  Smart Scheduling
                  <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 rounded-full">PRO</span>
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Analyzes traffic patterns and publishes content at optimal times. Set daily, weekly, or custom schedules.
              </p>
            </Link>

            <Link href="/features/keyword-research" className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔍</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">
                  Keyword Research
                  <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 rounded-full">PRO</span>
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Connects to Ahrefs, SEMrush, or built-in research. Identifies high-opportunity topics and generates content briefs.
              </p>
            </Link>

            <Link href="/features/nextjs-native" className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💎</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">Next.js Native</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Works with App Router, Pages Router, static exports, ISR, and SSG. Zero config required — just npm install.
              </p>
            </Link>

            <Link href="/features/content-review" className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📝</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">Content Review</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Preview drafts before publishing. Edit AI-generated content, adjust tone, or approve with one click.
              </p>
            </Link>

            <Link href="/features/analytics-reporting" className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📈</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">
                  Analytics & Reporting
                  <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 rounded-full">PRO</span>
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Track rankings, impressions, clicks, and indexing status. Export reports for clients or stakeholders.
              </p>
            </Link>

            <Link href="/features/privacy-first" className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔒</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">Privacy-First</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                No external branding. Your API keys stay secure. GDPR compliant with no data retention.
              </p>
            </Link>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section id="roi" className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              ROI Calculator
            </Badge>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Calculate Your ROI</h2>
            <p className="text-lg text-zinc-400">See how much you&apos;ll save vs traditional content creation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Traditional Agency */}
            <Card className="bg-zinc-900/30 border-zinc-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1 bg-red-500/10 border-l border-b border-red-500/20 text-xs text-red-400 font-medium">
                Traditional
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-zinc-100">Content Agency</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-800 rounded-lg">
                    <div>
                      <div className="text-sm text-zinc-400">20 blog posts/month</div>
                      <div className="text-xs text-zinc-500">@ $200/post</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold font-mono">$4,000</div>
                      <div className="text-xs text-zinc-500">/month</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-800 rounded-lg">
                    <div>
                      <div className="text-sm text-zinc-400">SEO consultant</div>
                      <div className="text-xs text-zinc-500">Monthly retainer</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold font-mono">$2,000</div>
                      <div className="text-xs text-zinc-500">/month</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-800 rounded-lg">
                    <div>
                      <div className="text-sm text-zinc-400">Manual indexing</div>
                      <div className="text-xs text-zinc-500">40hrs @ $50/hr</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold font-mono">$2,000</div>
                      <div className="text-xs text-zinc-500">/month</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Monthly Cost:</span>
                    <span className="text-2xl font-bold text-red-400 font-mono">$8,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Annual Cost:</span>
                    <span className="text-3xl font-bold text-red-400 font-mono">$96,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SEO Automation */}
            <Card className="bg-zinc-900/30 border-emerald-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1 bg-emerald-500/10 border-l border-b border-emerald-500/20 text-xs text-emerald-400 font-medium">
                SEO Automation
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-zinc-100">Startup Plan</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-lg">
                    <div>
                      <div className="text-sm text-zinc-300">50+ blog posts/month</div>
                      <div className="text-xs text-emerald-400">Automated generation</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold font-mono text-emerald-400">$0</div>
                      <div className="text-xs text-emerald-500">Included</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-lg">
                    <div>
                      <div className="text-sm text-zinc-300">Built-in SEO optimization</div>
                      <div className="text-xs text-emerald-400">Schema, meta tags, links</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold font-mono text-emerald-400">$0</div>
                      <div className="text-xs text-emerald-500">Included</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-lg">
                    <div>
                      <div className="text-sm text-zinc-300">Auto indexing</div>
                      <div className="text-xs text-emerald-400">50+ search engines</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold font-mono text-emerald-400">$0</div>
                      <div className="text-xs text-emerald-500">Included</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-emerald-500/20 pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">One-time Cost:</span>
                    <span className="text-2xl font-bold text-emerald-400 font-mono">$149</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Annual Cost:</span>
                    <span className="text-3xl font-bold text-emerald-400 font-mono">$149</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Savings Banner */}
          <Card className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)]"></div>
            <CardContent className="p-8 relative">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="text-5xl font-bold text-emerald-400 mb-2 font-mono">Save $95,851</div>
                  <div className="text-zinc-400 text-lg">in Year 1 • <span className="text-emerald-400 font-semibold">64,434% ROI</span></div>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-zinc-300">2.5x more content published</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-zinc-300">24/7 automated workflow</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-zinc-300">No recurring monthly fees</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-red-500/10 text-red-400 border-red-500/20 animate-pulse">
              ⏰ Early Access - Prices increase in 72 hours
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Choose Your Plan</h2>
            <p className="text-lg text-zinc-400">One-time payment. Lifetime access. No subscriptions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Founder Plan */}
            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2">Founder</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold font-mono text-zinc-100">$197</span>
                    <span className="text-zinc-500 line-through text-xl">$997</span>
                  </div>
                  <div className="text-sm text-zinc-500">One-time payment • Early access pricing</div>
                </div>

                {/* Gradient Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-6"></div>

                <ul className="space-y-4 text-sm text-zinc-300 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">1 Next.js project</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated sitemap generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI-powered meta tags & descriptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automatic Schema.org markup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Instant Google/Bing indexing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Email support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All future updates included</span>
                  </li>
                </ul>

                <div className="mt-auto">
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold transition-all" size="lg">
                    Get Founder Plan
                  </Button>
                  <div className="text-center text-xs text-zinc-500 mt-4">37 spots left at this price</div>
                </div>
              </CardContent>
            </Card>

            {/* Startup Plan - FEATURED */}
            <Card className="relative bg-gradient-to-b from-emerald-500/10 to-zinc-900/50 border-emerald-500/50 hover:border-emerald-500/70 scale-105 shadow-2xl shadow-emerald-500/20 transition-all flex flex-col">
              {/* Most Popular Badge */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                <Badge className="bg-emerald-500 text-black text-xs px-3 py-0.5">
                  Popular
                </Badge>
              </div>

              <CardContent className="p-8 pt-10 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-white">Startup</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold font-mono text-emerald-400">$497</span>
                    <span className="text-zinc-500 line-through text-xl">$2,997</span>
                  </div>
                  <div className="text-sm text-emerald-400/80">One-time payment • Early access pricing</div>
                </div>

                {/* Gradient Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-6"></div>

                <ul className="space-y-4 text-sm text-zinc-200 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">5 Next.js projects</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-400/90">Everything in Founder, plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Priority indexing</strong> (24-48h guarantee)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Advanced keyword research</strong> integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Automated backlink generation</strong> (200+ directories)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Custom content templates</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Analytics dashboard</strong> with rank tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Priority email + Slack support</strong></span>
                  </li>
                </ul>

                <div className="mt-auto">
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all shadow-lg shadow-emerald-500/20" size="lg">
                    Get Startup Plan
                  </Button>
                  <div className="text-center text-xs text-emerald-400/80 mt-4">21 spots left at this price</div>
                </div>
              </CardContent>
            </Card>

            {/* Agency Plan */}
            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2">Agency</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold font-mono text-zinc-100">$1,297</span>
                    <span className="text-zinc-500 line-through text-xl">$7,997</span>
                  </div>
                  <div className="text-sm text-zinc-500">One-time payment • Early access pricing</div>
                </div>

                {/* Gradient Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-6"></div>

                <ul className="space-y-4 text-sm text-zinc-300 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Unlimited projects</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Everything in Startup, plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">White-label</strong> (remove all branding)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">AI-powered backlink outreach</strong> (automated emails)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">API access</strong> for custom integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Client reporting</strong> dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Priority feature requests</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">1-on-1 onboarding call</strong> (60 min)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Dedicated Slack channel</strong></span>
                  </li>
                </ul>

                <div className="mt-auto">
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold transition-all" size="lg">
                    Get Agency Plan
                  </Button>
                  <div className="text-center text-xs text-zinc-500 mt-4">9 spots left at this price</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg">
              <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="text-sm">
                <div className="font-semibold text-white">Secure Payment</div>
                <div className="text-zinc-500 text-xs">Stripe-powered</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg">
              <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="text-sm">
                <div className="font-semibold text-white">Instant Access</div>
                <div className="text-zinc-500 text-xs">Email confirmation</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg">
              <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div className="text-sm">
                <div className="font-semibold text-white">Price Lock</div>
                <div className="text-zinc-500 text-xs">Guaranteed forever</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg">
              <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm">
                <div className="font-semibold text-white">Lifetime Updates</div>
                <div className="text-zinc-500 text-xs">All future features</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-zinc-400">Everything you need to know about SEO Automation</p>
          </div>
          
          <div className="space-y-3">
            {[
              {
                q: "Which AI models can I use for content generation?",
                a: "SEO Automation gives you total flexibility — use any LLM you prefer! We support OpenAI (GPT-4, GPT-4o, GPT-3.5), Anthropic (Claude 3.5 Sonnet, Opus, Haiku), Google (Gemini Pro, Ultra), Mistral, Llama, and custom models. You bring your own API key, so you control costs with no markup."
              },
              {
                q: "How does the automated backlink generation work?",
                a: "SEO Automation monitors your backlink profile 24/7, tracks new/lost links, identifies toxic links, and auto-disavows them. It automatically submits your content to 200+ authority directories and blogs, sends AI-powered personalized outreach emails to high-DA sites for guest post opportunities. Most users see 50-100 new quality backlinks in the first 60 days."
              },
              {
                q: "Which platforms and search engines does it index to?",
                a: "We submit to 50+ search engines including Google Search Console (API integration), Bing Webmaster Tools, Yandex, Baidu, DuckDuckGo, and the IndexNow protocol for instant indexing. Average indexing time is 24-48 hours vs 1-2 weeks with manual submission."
              },
              {
                q: "Can I use this with my existing Next.js website?",
                a: "Yes — 100% compatible. SEO Automation is a Next.js library that works with both App Router and Pages Router, static exports, ISR, and SSG. Simply npm install, configure your LLM provider and API keys, and start generating. Works with Vercel, Netlify, AWS Amplify, and any Node.js hosting."
              },
              {
                q: "How long does it take to see SEO results?",
                a: "Indexing happens within 24-48 hours with our multi-platform submission (vs 1-2 weeks manually). You'll see pages appear in Google Search Console within 2-3 days. Organic traffic improvements typically start within 2-4 weeks. Most early adopters report 2-5x traffic growth within 90 days."
              },
              {
                q: "Will search engines penalize AI-generated content?",
                a: "No. Google's official stance (updated March 2024) is that AI-generated content is acceptable if it provides value to users. Our content passes AI detection tools because we use advanced prompting with any LLM you choose, human-like variation, and fact-checking. The key is quality + value, not the creation method."
              },
              {
                q: "What API keys and services do I need?",
                a: "Required: Your choice of LLM API key (OpenAI, Anthropic, Google, Mistral, etc.) and Google Search Console credentials (for indexing). OpenAI charges ~$0.01-0.03 per 1,000-word article. Google Search Console is 100% free. You control all costs directly — we never mark up API usage."
              },
              {
                q: "Does this include keyword research and content gap analysis?",
                a: "Yes! SEO Automation automatically crawls your website, analyzes your niche, identifies high-value keywords your competitors rank for (but you don't), finds content gaps in your site structure, and discovers trending topics. It scans 10,000+ keywords and prioritizes low-competition/high-traffic opportunities."
              },
              {
                q: "What's your refund policy? Can I really get my money back anytime?",
                a: "Yes — 100% money-back guarantee, anytime, no questions asked. If you're not satisfied for any reason — doesn't fit your workflow, changed your mind, found a different solution — simply email us for a full refund. We process refunds within 24 hours. No hassles, no forms, no hoops to jump through."
              },
              {
                q: "Can I upgrade between plans later?",
                a: "Yes. You can upgrade from Founder → Startup or Startup → Agency anytime by paying the difference. If you upgrade during the pre-order period, you still get founder pricing on the difference. Upgrades unlock more projects, priority support, analytics dashboards, and API access."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                  <span className="font-semibold text-zinc-100 pr-8">{faq.q}</span>
                  <span className="text-zinc-500 group-open:rotate-180 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              Final Call
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Ready to 10x Your Organic Traffic?
            </h2>
            
            <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
              Join 127+ founders who are pre-ordering SEO Automation. Lock in founder pricing before it increases.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#pricing">
                <Button size="lg" className="px-8 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold shadow-lg shadow-emerald-500/20">
                  Get Started
                </Button>
              </a>
              <a href="#demo">
                <Button variant="outline" size="lg" className="px-8 border-zinc-700 hover:border-zinc-600 hover:bg-zinc-900/50">
                  Watch Demo
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>One-time payment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Founder pricing locked</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Lifetime updates</span>
              </div>
            </div>
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
