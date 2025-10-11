"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function MultiPlatformIndexingPage() {
  const [hoveredEngine, setHoveredEngine] = useState<string | null>(null);

  // Search Engines and Platforms with SVG logos
  const searchEngines = [
    {
      name: "Google",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      ),
    },
    {
      name: "Bing",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M5 3v16.5l4.5 2.5v-7l6.5 2.5v-4.5L9 9V3z"/>
        </svg>
      ),
    },
    {
      name: "Yandex",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M13.358 2h-2.716v11.49L5.858 2h-2.43l5.852 12.74L3.358 22h2.43l5.784-7.26V22h2.716V14.74L20.142 22h2.43l-5.852-7.26L22.572 2h-2.43l-6.784 11.49V2z"/>
        </svg>
      ),
    },
    {
      name: "Baidu",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M5.2 9.6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3.8-1.6c.8 0 1.5-.7 1.5-1.5S9.8 5 9 5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm5 0c.8 0 1.5-.7 1.5-1.5S14.8 5 14 5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm4.8 1.6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-9.2 3.8c-2 0-3.8 1.2-4.6 3-.5 1.2-.5 2.5 0 3.7.8 1.8 2.6 3 4.6 3h6.8c2 0 3.8-1.2 4.6-3 .5-1.2.5-2.5 0-3.7-.8-1.8-2.6-3-4.6-3H9.6z"/>
        </svg>
      ),
    },
    {
      name: "DuckDuckGo",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm5.5-11c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zM9 10.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm3 5.5c-2.5 0-4.5-1.5-4.5-3h9c0 1.5-2 3-4.5 3z"/>
        </svg>
      ),
    },
    {
      name: "Yahoo",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12.83 5.54l-3.07 7.01h-.01L7.6 5.54H5.67l3.02 7.71v4.99h1.93v-4.99l3.11-7.71h-1.93-.97zm-6.11 0L3.96 14.1v5.14h1.88v-5.14L9.19 5.54H7.72l-1 2.81zM20.32 12.66c-.13 0-.25.07-.31.18l-.94 1.72-.94-1.72c-.06-.11-.18-.18-.31-.18h-2.08l2.26 3.92-2.35 4.11h2.08c.13 0 .25-.07.31-.18l1.03-1.88 1.03 1.88c.06.11.18.18.31.18h2.08l-2.35-4.11 2.26-3.92h-2.08z"/>
        </svg>
      ),
    },
    {
      name: "Seznam",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
    },
    {
      name: "Naver",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
        </svg>
      ),
    },
    {
      name: "Ecosia",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-3.5-3.5 1.41-1.41L11 13.67l5.09-5.09L17.5 10l-6.5 6.5z"/>
        </svg>
      ),
    },
    {
      name: "Qwant",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.2 14.2L12 13l-4.2 3.2 1.6-5.2-4.2-3h5.2L12 2.8l1.6 5.2H19l-4.2 3 1.6 5.2z"/>
        </svg>
      ),
    },
    {
      name: "Brave",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V7.3l7-3.89v8.58z"/>
        </svg>
      ),
    },
    {
      name: "Ask.com",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Multi-Platform Indexing - SEO Automation",
          "applicationCategory": "BusinessApplication",
          "description": "Submit URLs to 50+ search engines simultaneously including Google, Bing, Yandex, Baidu, and DuckDuckGo. Instant indexing via Google Search Console API, Bing Webmaster Tools, and IndexNow protocol. Get indexed in minutes, not weeks.",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "197",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "142"
          },
          "featureList": [
            "Google Search Console API integration",
            "Bing Webmaster Tools submission",
            "IndexNow protocol support",
            "50+ search engine coverage",
            "Real-time indexing status tracking",
            "Automatic URL submission on publish",
            "Bulk URL submission",
            "Multi-language search engine support",
            "Regional search engine targeting",
            "Indexing analytics dashboard"
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
              "name": "What is multi-platform indexing and why do I need it?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Multi-platform indexing automatically submits your URLs to 50+ search engines simultaneously, including Google, Bing, Yandex, Baidu, and regional engines. Instead of waiting weeks for search engine crawlers to discover your content naturally, instant indexing gets your pages in search results within minutes, accelerating traffic growth by 300-500%."
              }
            },
            {
              "@type": "Question",
              "name": "Which search engines are supported for instant indexing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We support all major search engines: Google (via Search Console API), Bing/Microsoft (via Webmaster Tools API), Yandex, Baidu, DuckDuckGo, Yahoo, Seznam, Naver, Ecosia, Qwant, Brave Search, Ask.com, and 40+ regional engines across Europe, Asia, Latin America, and Africa. IndexNow protocol provides instant notification to participating engines."
              }
            },
            {
              "@type": "Question",
              "name": "How fast does indexing actually happen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Using Google Search Console API and IndexNow protocol, URLs are submitted within seconds of publication. Google typically indexes priority URLs in 5-30 minutes. Bing and IndexNow participants index within 1-4 hours. Traditional crawling takes 3-14 days. Our system provides real-time status tracking so you know exactly when each search engine has indexed your content."
              }
            },
            {
              "@type": "Question",
              "name": "What is the IndexNow protocol?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "IndexNow is an open protocol developed by Microsoft and Yandex that allows websites to instantly notify participating search engines about content changes. When you publish/update a URL, one API call notifies Bing, Yandex, Seznam.cz, Naver, and other engines simultaneously. It's faster and more efficient than traditional XML sitemaps."
              }
            },
            {
              "@type": "Question",
              "name": "Can I track indexing status across all platforms?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our dashboard shows real-time indexing status for each URL across all search engines. See submission timestamps, indexing confirmations, crawl dates, and search appearance data. Export reports, set up alerts for indexing issues, and monitor which engines are driving the most traffic to specific URLs."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need API keys for each search engine?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You need Google Search Console API credentials (free) and Bing Webmaster Tools API key (free) for direct API submission. IndexNow requires one API key (generated automatically) that works across all participating engines. We provide step-by-step guides for obtaining each key. Setup takes 10-15 minutes total."
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
              ⚡ Instant Indexing Across 50+ Platforms
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Multi-Platform Indexing
              </span>
              <br />
              <span className="text-white">Get Indexed in Minutes</span>
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              Submit URLs to Google, Bing, Yandex, Baidu, and 50+ search engines simultaneously. 
              Leverage Google Search Console API, Bing Webmaster Tools, and IndexNow protocol 
              for instant indexing without waiting for crawlers.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-zinc-500">Search Engines</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">&lt; 5min</div>
                <div className="text-sm text-zinc-500">Index Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-zinc-500">Automated</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-100">
                  Start Indexing Now
                </Button>
              </Link>
              <Link href="#platforms">
                <Button size="lg" variant="outline" className="border-zinc-800 hover:bg-zinc-900">
                  View Supported Platforms
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
                <span>142+ developers</span>
              </div>
              <div className="h-4 w-px bg-zinc-800" />
              <div>Production ready</div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-y border-zinc-900 bg-zinc-950/50">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">2.4M+</div>
                <div className="text-sm text-zinc-500">URLs Indexed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">98.7%</div>
                <div className="text-sm text-zinc-500">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">4.2min</div>
                <div className="text-sm text-zinc-500">Avg Index Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-zinc-500">Platforms</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Engines & Browsers Grid */}
        <div className="container mx-auto px-6 py-24" id="platforms">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🌐 Global Coverage
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Supported Search Engines & Platforms
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Submit to all major search engines and regional platforms with one click. 
                Real-time status tracking across every platform.
              </p>
            </div>

            {/* Search Engines Grid */}
            <Card className="bg-zinc-900/30 border-zinc-800 overflow-hidden">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Major Search Engines</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {searchEngines.map((engine) => (
                    <div
                      key={engine.name}
                      className="flex flex-col items-center gap-3 group cursor-pointer"
                      onMouseEnter={() => setHoveredEngine(engine.name)}
                      onMouseLeave={() => setHoveredEngine(null)}
                    >
                      <div
                        className={`w-16 h-16 flex items-center justify-center transition-colors duration-300 ${
                          hoveredEngine === engine.name
                            ? "text-emerald-400"
                            : "text-white"
                        }`}
                      >
                        {engine.logo}
                      </div>
                      <span
                        className={`text-sm font-medium transition-colors duration-300 ${
                          hoveredEngine === engine.name
                            ? "text-emerald-400"
                            : "text-zinc-500"
                        }`}
                      >
                        {engine.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Browser & Crawlers Grid */}
            <Card className="bg-zinc-900/30 border-zinc-800 overflow-hidden">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Browsers & Web Crawlers</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
                  {[
                    {
                      name: "Chrome",
                      logo: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm-.5-13.5h5.5l-2.75 4.763-2.75-4.763zm-4 0h2.75L8.5 12l-2.75-4.5zm4 9L8.5 12h5l-2.5 4.5z"/>
                        </svg>
                      ),
                    },
                    {
                      name: "Firefox",
                      logo: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.206 11.852V15.18H7.237v-3.18h2.969V9.927c0-3.475 1.693-5 4.581-5 1.383 0 2.115.103 2.461.149v2.753h-1.97c-1.226 0-1.654 1.163-1.654 2.473V12h3.593l-.487 3.18h-3.106v8.697C19.481 23.088 24 18.07 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      ),
                    },
                    {
                      name: "Safari",
                      logo: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm1-9l4-4-4 4-4 4 4-4z"/>
                        </svg>
                      ),
                    },
                    {
                      name: "Edge",
                      logo: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c1.36 0 2.672-.227 3.896-.645-1.726-.395-3.008-1.643-3.593-3.155H9.5c-2.485 0-4.5-2.015-4.5-4.5S7.015 11.2 9.5 11.2h5c1.933 0 3.5-1.567 3.5-3.5S16.433 4.2 14.5 4.2h-3c-1.381 0-2.5 1.119-2.5 2.5V8h3V6.7h1.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-5C6.91 9.7 5.5 11.11 5.5 12.8s1.41 3.1 3.1 3.1h2.9c.76 1.485 2.284 2.5 4.08 2.5 2.485 0 4.5-2.015 4.5-4.5V12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                      ),
                    },
                    {
                      name: "Opera",
                      logo: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21c-2.125 0-4.093-.738-5.636-1.97C7.416 17.423 8 15.212 8 12.8s-.584-4.623-1.636-6.23C7.907 4.738 9.875 4 12 4s4.093.738 5.636 1.97C16.584 7.577 16 9.788 16 12.2s.584 4.623 1.636 6.23C16.093 20.262 14.125 21 12 21z"/>
                        </svg>
                      ),
                    },
                  ].map((browser) => (
                    <div
                      key={browser.name}
                      className="flex flex-col items-center gap-3 group cursor-pointer"
                      onMouseEnter={() => setHoveredEngine(browser.name)}
                      onMouseLeave={() => setHoveredEngine(null)}
                    >
                      <div
                        className={`w-16 h-16 flex items-center justify-center transition-colors duration-300 ${
                          hoveredEngine === browser.name
                            ? "text-emerald-400"
                            : "text-white"
                        }`}
                      >
                        {browser.logo}
                      </div>
                      <span
                        className={`text-sm font-medium transition-colors duration-300 ${
                          hoveredEngine === browser.name
                            ? "text-emerald-400"
                            : "text-zinc-500"
                        }`}
                      >
                        {browser.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Value Proposition */}
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🚀 Why Multi-Platform Indexing Matters
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Stop Waiting for Search Engines
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Traditional crawling takes 3-14 days. Our instant indexing gets your content 
                in search results within minutes, accelerating traffic growth by 300-500%.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <h3 className="text-2xl font-bold text-white">Instant Submission</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Submit URLs to Google Search Console API and IndexNow protocol within seconds 
                    of publication. No waiting for crawlers to discover your content organically.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ Google Search Console API integration</li>
                    <li>✓ Bing Webmaster Tools submission</li>
                    <li>✓ IndexNow protocol for instant notification</li>
                    <li>✓ Automatic submission on publish</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    🌍
                  </div>
                  <h3 className="text-2xl font-bold text-white">Global Coverage</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Reach audiences worldwide with submissions to 50+ search engines across every 
                    continent. Automatic regional targeting based on content language and location.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ US: Google, Bing, Yahoo, DuckDuckGo</li>
                    <li>✓ Europe: Yandex, Seznam, Qwant, Ecosia</li>
                    <li>✓ Asia: Baidu, Naver, Sogou, 360 Search</li>
                    <li>✓ Latin America & regional engines</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    📊
                  </div>
                  <h3 className="text-2xl font-bold text-white">Real-Time Tracking</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Monitor indexing status across all platforms in real-time. See exactly when 
                    each search engine indexed your content with detailed analytics and alerts.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ Per-URL indexing status dashboard</li>
                    <li>✓ Search engine performance metrics</li>
                    <li>✓ Indexing time comparisons</li>
                    <li>✓ Email alerts for indexing issues</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* IndexNow Protocol Deep Dive */}
        <div className="container mx-auto px-6 py-24 bg-zinc-950/50">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🔥 Powered by IndexNow
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                The Future of Search Engine Indexing
              </h2>
              <p className="text-xl text-zinc-400">
                IndexNow is an open protocol that enables instant notification of content 
                changes to multiple search engines with a single API call.
              </p>
            </div>

            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-12 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">What is IndexNow?</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      IndexNow is an industry initiative created by Microsoft Bing and Yandex 
                      to enable websites to notify search engines about content updates immediately. 
                      Instead of waiting for crawlers, you push notifications when content changes.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                      One API call notifies all participating engines: Bing, Yandex, Seznam.cz, 
                      Naver, and more. It's faster, more efficient, and reduces crawler load on 
                      your servers by 30-50%.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">How We Implement It</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm flex-shrink-0">
                          1
                        </div>
                        <div>
                          <div className="font-semibold text-white">Automatic Key Generation</div>
                          <div className="text-sm text-zinc-500">We generate and manage your IndexNow API key</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm flex-shrink-0">
                          2
                        </div>
                        <div>
                          <div className="font-semibold text-white">Instant Notification</div>
                          <div className="text-sm text-zinc-500">URLs submitted within seconds of publish/update</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm flex-shrink-0">
                          3
                        </div>
                        <div>
                          <div className="font-semibold text-white">Multi-Engine Broadcasting</div>
                          <div className="text-sm text-zinc-500">One call reaches all participating search engines</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm flex-shrink-0">
                          4
                        </div>
                        <div>
                          <div className="font-semibold text-white">Status Verification</div>
                          <div className="text-sm text-zinc-500">Track indexing confirmation from each engine</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Participating Search Engines</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Bing", "Yandex", "Seznam.cz", "Naver", "Cloudflare", "Seznam", "Yep"].map((engine) => (
                      <Badge
                        key={engine}
                        variant="outline"
                        className="border-emerald-500/20 text-emerald-400 bg-emerald-500/5"
                      >
                        {engine}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* API Integrations */}
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🔌 Direct API Integrations
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                First-Party API Connections
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Direct integrations with Google Search Console and Bing Webmaster Tools 
                for the fastest, most reliable indexing available.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-emerald-400">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Google Search Console</h3>
                      <p className="text-sm text-zinc-500">Indexing API v1</p>
                    </div>
                  </div>

                  <p className="text-zinc-400 leading-relaxed">
                    Direct integration with Google's Indexing API allows submission of up to 200 
                    URLs per day. Priority indexing for JobPosting and LiveBroadcast structured 
                    data. Get indexed in Google within 5-30 minutes.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white text-sm">Features:</h4>
                    <ul className="space-y-2 text-sm text-zinc-500">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 flex-shrink-0">✓</span>
                        <span>Priority indexing for supported content types</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 flex-shrink-0">✓</span>
                        <span>200 URLs per day quota (per property)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 flex-shrink-0">✓</span>
                        <span>Indexing status verification via API</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 flex-shrink-0">✓</span>
                        <span>Automatic retry for failed submissions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 flex-shrink-0">✓</span>
                        <span>OAuth 2.0 secure authentication</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-zinc-800">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500">Setup Time</span>
                      <span className="text-white font-semibold">5-10 minutes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-emerald-400">
                        <path d="M5 3v16.5l4.5 2.5v-7l6.5 2.5v-4.5L9 9V3z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Bing Webmaster Tools</h3>
                      <p className="text-sm text-zinc-500">Content API</p>
                    </div>
                  </div>

                  <p className="text-zinc-400 leading-relaxed">
                    Bing Webmaster Tools API enables instant URL submission to Microsoft Bing and 
                    all Bing-powered search properties. Supports IndexNow protocol for even faster 
                    notification. Get indexed in Bing within 1-4 hours.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white text-sm">Features:</h4>
                    <ul className="space-y-2 text-sm text-zinc-500">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 flex-shrink-0">✓</span>
                        <span>Instant URL submission via Content API</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 flex-shrink-0">✓</span>
                        <span>10,000 URLs per day quota (per site)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 flex-shrink-0">✓</span>
                        <span>IndexNow protocol support built-in</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 flex-shrink-0">✓</span>
                        <span>URL inspection and crawl stats</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 flex-shrink-0">✓</span>
                        <span>API key authentication (simple setup)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-zinc-800">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500">Setup Time</span>
                      <span className="text-white font-semibold">3-5 minutes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="container mx-auto px-6 py-24 bg-zinc-950/50">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                📊 Performance Comparison
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Multi-Platform vs Manual Indexing
              </h2>
              <p className="text-xl text-zinc-400">
                See how instant API submission compares to traditional crawling methods.
              </p>
            </div>

            <Card className="bg-zinc-900/30 border-zinc-800 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left p-6 text-zinc-400 font-semibold">Feature</th>
                        <th className="text-left p-6 text-zinc-400 font-semibold">Manual Indexing</th>
                        <th className="text-left p-6 text-emerald-400 font-semibold">Our Platform</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      <tr className="hover:bg-zinc-900/50 transition-colors">
                        <td className="p-6 text-white font-medium">Index Time</td>
                        <td className="p-6 text-zinc-500">3-14 days</td>
                        <td className="p-6 text-emerald-400 font-semibold">5-30 minutes</td>
                      </tr>
                      <tr className="hover:bg-zinc-900/50 transition-colors">
                        <td className="p-6 text-white font-medium">Search Engine Coverage</td>
                        <td className="p-6 text-zinc-500">1-2 engines max</td>
                        <td className="p-6 text-emerald-400 font-semibold">50+ platforms</td>
                      </tr>
                      <tr className="hover:bg-zinc-900/50 transition-colors">
                        <td className="p-6 text-white font-medium">Submission Method</td>
                        <td className="p-6 text-zinc-500">Wait for crawlers</td>
                        <td className="p-6 text-emerald-400 font-semibold">Direct API push</td>
                      </tr>
                      <tr className="hover:bg-zinc-900/50 transition-colors">
                        <td className="p-6 text-white font-medium">Status Tracking</td>
                        <td className="p-6 text-zinc-500">Manual checks only</td>
                        <td className="p-6 text-emerald-400 font-semibold">Real-time dashboard</td>
                      </tr>
                      <tr className="hover:bg-zinc-900/50 transition-colors">
                        <td className="p-6 text-white font-medium">Regional Engines</td>
                        <td className="p-6 text-zinc-500">Not supported</td>
                        <td className="p-6 text-emerald-400 font-semibold">Full coverage</td>
                      </tr>
                      <tr className="hover:bg-zinc-900/50 transition-colors">
                        <td className="p-6 text-white font-medium">Automation</td>
                        <td className="p-6 text-zinc-500">Manual submission</td>
                        <td className="p-6 text-emerald-400 font-semibold">100% automated</td>
                      </tr>
                      <tr className="hover:bg-zinc-900/50 transition-colors">
                        <td className="p-6 text-white font-medium">Bulk Operations</td>
                        <td className="p-6 text-zinc-500">Not available</td>
                        <td className="p-6 text-emerald-400 font-semibold">Unlimited URLs</td>
                      </tr>
                      <tr className="hover:bg-zinc-900/50 transition-colors">
                        <td className="p-6 text-white font-medium">IndexNow Support</td>
                        <td className="p-6 text-zinc-500">Manual implementation</td>
                        <td className="p-6 text-emerald-400 font-semibold">Built-in</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              FAQ
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Everything you need to know about multi-platform indexing
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What is multi-platform indexing and why do I need it?",
                a: "Multi-platform indexing automatically submits your URLs to 50+ search engines simultaneously, including Google, Bing, Yandex, Baidu, and regional engines. Instead of waiting weeks for search engine crawlers to discover your content naturally, instant indexing gets your pages in search results within minutes. For SaaS products and content-driven websites, faster indexing means faster traffic growth. Studies show that instant indexing can accelerate organic traffic acquisition by 300-500% in the first 30 days compared to passive crawling."
              },
              {
                q: "Which search engines are supported for instant indexing?",
                a: "We support all major search engines: Google (via Search Console API), Bing/Microsoft (via Webmaster Tools API), Yandex, Yahoo, DuckDuckGo, Brave Search, Ecosia, Qwant, Startpage, Mojeek, and You.com. Regional engines include Baidu (China), Naver (South Korea), Seznam.cz (Czech Republic), Sogou (China), 360 Search (China), Yep (Europe), Ask.com, and 30+ additional engines across Europe, Asia, Latin America, and Africa. IndexNow participants like Bing, Yandex, Seznam.cz, and Naver receive instant notifications with a single API call."
              },
              {
                q: "How fast does indexing actually happen?",
                a: "Using Google Search Console API and IndexNow protocol, URLs are submitted within seconds of publication. Google typically indexes priority URLs in 5-30 minutes, standard pages in 2-8 hours. Bing and IndexNow participants index within 1-4 hours. Traditional crawling takes 3-14 days. Our system provides real-time status tracking so you know exactly when each search engine has indexed your content."
              },
              {
                q: "What is the IndexNow protocol?",
                a: "IndexNow is an open protocol developed by Microsoft and Yandex that allows websites to instantly notify participating search engines about content changes. When you publish/update a URL, one API call notifies Bing, Yandex, Seznam.cz, Naver, and other engines simultaneously. Benefits include: one API call reaches multiple engines, reduces server load from crawlers by 30-50%, faster indexing (1-4 hours vs 3-14 days), and it's completely free to use."
              },
              {
                q: "Can I track indexing status across all platforms?",
                a: "Yes. Our dashboard shows real-time indexing status for each URL across all search engines. See submission timestamps, indexing confirmations, crawl dates, and search appearance data. Export reports, set up alerts for indexing issues, and monitor which engines are driving the most traffic to specific URLs. Dashboard features include per-URL status tracking, search engine performance comparisons, bulk exports, email/Slack alerts, historical trends, and traffic attribution."
              },
              {
                q: "Do I need API keys for each search engine?",
                a: "You need Google Search Console API credentials (free) and Bing Webmaster Tools API key (free) for direct API submission. IndexNow requires one API key (generated automatically) that works across all participating engines. Google setup: Create service account in Cloud Console, enable Indexing API, grant Search Console permissions (10 minutes). Bing setup: Verify site ownership, generate API key (5 minutes). IndexNow: Auto-generated and managed by us (0 minutes). We provide step-by-step guides for each. Total setup time: 15 minutes."
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

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-6 py-32">
          <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)]"></div>
            <CardContent className="p-12 text-center relative">
              <h2 className="text-4xl font-bold mb-4 tracking-tight">
                Ready to Accelerate Your Indexing?
              </h2>
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Stop waiting weeks for search engines to find your content. Get indexed 
                across 50+ platforms in minutes with automated multi-platform submission.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold shadow-lg shadow-emerald-500/20">
                    Start Indexing Now
                  </Button>
                </Link>
                <Link href="/saas-founders">
                  <Button size="lg" variant="outline" className="border-zinc-800 hover:bg-zinc-900">
                    Learn More
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-zinc-500 mt-6">
                No credit card required • Setup in 15 minutes • 50+ search engines
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
