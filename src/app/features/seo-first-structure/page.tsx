"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function SEOFirstStructurePage() {
  const [activeTab, setActiveTab] = useState<'html' | 'meta' | 'schema'>('html');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SEO-First Structure",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Enterprise-grade technical SEO automation with proper H1-H6 hierarchy, optimized meta tags, Open Graph, Twitter Cards, and JSON-LD structured data automatically generated for every page.",
            "featureList": [
              "Semantic HTML5 Structure",
              "H1-H6 Heading Hierarchy",
              "Meta Tags Optimization",
              "Open Graph Protocol",
              "Twitter Card Tags",
              "JSON-LD Structured Data",
              "Schema.org Markup",
              "Canonical URLs",
              "Breadcrumb Navigation",
              "Rich Snippets Support"
            ],
            "screenshot": "/logo.png"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is SEO-First Structure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO-First Structure is an automated technical SEO system that ensures every page has proper HTML5 semantic markup, heading hierarchy (H1-H6), optimized meta tags, Open Graph tags, Twitter Cards, and JSON-LD structured data. It eliminates manual SEO work and ensures 100% compliance with search engine best practices."
                }
              },
              {
                "@type": "Question",
                "name": "Why is heading hierarchy important for SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Proper heading hierarchy (H1-H6) helps search engines understand your content structure and relationships between topics. Google uses headings to determine page context and relevance. A single H1, followed by logical H2-H6 progression, improves crawlability and can increase rankings by 15-20%."
                }
              },
              {
                "@type": "Question",
                "name": "What is JSON-LD structured data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "JSON-LD (JavaScript Object Notation for Linked Data) is a structured data format that helps search engines understand your content context. It enables rich snippets, knowledge panels, and enhanced SERP features. Our system automatically generates Article, FAQPage, BreadcrumbList, Organization, and Product schemas."
                }
              },
              {
                "@type": "Question",
                "name": "How do meta tags affect SEO rankings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Meta tags (title and description) are critical ranking factors. The title tag (50-60 characters) directly impacts rankings and CTR. Meta descriptions (150-160 characters) influence click-through rates. Our system optimizes both automatically, including keyword placement, length optimization, and compelling CTAs."
                }
              },
              {
                "@type": "Question",
                "name": "What are Open Graph and Twitter Card tags?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Open Graph tags control how your content appears on Facebook, LinkedIn, and other social platforms. Twitter Cards control Twitter previews. Both significantly impact social media CTR and traffic. Our system automatically generates og:title, og:description, og:image, og:url, twitter:card, and all required tags."
                }
              }
            ]
          })
        }}
      />

      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 py-32">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
          
          <div className="relative text-center mb-20">
            <Badge variant="outline" className="mb-6 border-emerald-800 text-emerald-400 bg-emerald-950">
              Technical SEO
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
                SEO-First Structure
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed mb-12">
              Enterprise-grade technical SEO automation. Perfect HTML5 structure, heading hierarchy, 
              meta tags, Open Graph, and JSON-LD structured data — automatically generated for every page.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "100%", label: "SEO Compliance" },
                { value: "15-20%", label: "Ranking Boost" },
                { value: "50+", label: "SEO Checks" },
                { value: "<1ms", label: "Generation Time" }
              ].map((stat, index) => (
                <div key={index} className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Overview */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              Technical Foundation
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">
              Enterprise-Grade Technical SEO
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Every technical SEO best practice, automatically implemented
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Semantic HTML5 Structure",
                description: "Proper use of <article>, <section>, <header>, <nav>, <aside>, and <footer> elements",
                technical: "HTML5 semantic elements improve accessibility and help search engines understand content hierarchy"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                ),
                title: "Heading Hierarchy (H1-H6)",
                description: "Single H1 per page, logical H2-H6 progression with keyword optimization",
                technical: "Proper heading structure helps Google parse content and determine topical relevance"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                ),
                title: "Meta Tags Optimization",
                description: "Title tags (50-60 chars), meta descriptions (150-160 chars) with keyword placement",
                technical: "Optimized length and keyword positioning maximize CTR and ranking potential"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                ),
                title: "Open Graph Protocol",
                description: "og:title, og:description, og:image, og:url, og:type for perfect social previews",
                technical: "Controls how content appears on Facebook, LinkedIn, WhatsApp, and 40+ platforms"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: "Twitter Card Tags",
                description: "twitter:card, twitter:title, twitter:description, twitter:image for optimized Twitter sharing",
                technical: "Summary_large_image cards get 3x more engagement than basic link previews"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "JSON-LD Structured Data",
                description: "Schema.org markup for Article, FAQPage, BreadcrumbList, Organization, and Product",
                technical: "Enables rich snippets, knowledge panels, and enhanced SERP features"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                ),
                title: "Canonical URLs",
                description: "Proper canonical tags to prevent duplicate content issues",
                technical: "Consolidates link equity and prevents dilution across similar pages"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                title: "Breadcrumb Navigation",
                description: "Schema markup for breadcrumbs displayed in search results",
                technical: "Improves SERP appearance and helps users understand site hierarchy"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Core Web Vitals Tags",
                description: "Preconnect, preload, and resource hints for optimal performance",
                technical: "LCP, FID, and CLS optimization through proper resource loading"
              }
            ].map((item, index) => (
              <Card key={index} className="group bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                <CardContent className="relative p-6">
                  <div className="w-14 h-14 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4 text-white group-hover:bg-zinc-700 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-zinc-800/50">
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      <span className="text-zinc-400 font-semibold">→</span> {item.technical}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Code Examples with Tabs */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              Implementation
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">
              See the Technical Implementation
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Real code examples of what we automatically generate
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {[
              { 
                id: 'html' as const, 
                label: 'HTML Structure',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              { 
                id: 'meta' as const, 
                label: 'Meta Tags',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                )
              },
              { 
                id: 'schema' as const, 
                label: 'JSON-LD Schema',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-700'
                }`}
              >
                <span className={activeTab === tab.id ? 'text-black' : 'text-zinc-500'}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="relative">
            
            <Card className="bg-zinc-950/80 border-zinc-800 backdrop-blur-sm overflow-hidden shadow-2xl">
              <CardContent className="p-0">
              {activeTab === 'html' && (
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Semantic HTML5 Structure</h3>
                  
                  {/* Code Block with Terminal Style */}
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden mb-6">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      </div>
                      <span className="text-xs text-zinc-500">index.html</span>
                    </div>
                    <div className="p-6 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
                      <pre className="text-sm font-mono leading-relaxed">
                        <div><span className="text-gray-500">&lt;!</span><span className="text-pink-400">DOCTYPE</span> <span className="text-purple-400">html</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">html</span> <span className="text-purple-400">lang</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;en&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">head</span><span className="text-gray-500">&gt;</span></div>
                        <div>  <span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">charset</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;UTF-8&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div>  <span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;viewport&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;width=device-width, initial-scale=1.0&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div>  <span className="text-gray-500">&lt;</span><span className="text-green-400">title</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">10 Best SEO Strategies for 2025 | SEO Automation</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">title</span><span className="text-gray-500">&gt;</span></div>
                        <div>  <span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;description&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;Discover the top 10 SEO strategies...&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div>  <span className="text-gray-500">&lt;</span><span className="text-green-400">link</span> <span className="text-purple-400">rel</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;canonical&quot;</span> <span className="text-purple-400">href</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;https://example.com/seo-strategies-2025&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;/</span><span className="text-green-400">head</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">body</span><span className="text-gray-500">&gt;</span></div>
                        <div>  <span className="text-gray-500">&lt;</span><span className="text-green-400">header</span><span className="text-gray-500">&gt;</span></div>
                        <div>    <span className="text-gray-500">&lt;</span><span className="text-green-400">nav</span> <span className="text-purple-400">aria-label</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;Main navigation&quot;</span><span className="text-gray-500">&gt;</span><span className="text-zinc-500">...</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">nav</span><span className="text-gray-500">&gt;</span></div>
                        <div>  <span className="text-gray-500">&lt;/</span><span className="text-green-400">header</span><span className="text-gray-500">&gt;</span></div>
                        <div></div>
                        <div>  <span className="text-gray-500">&lt;</span><span className="text-green-400">main</span><span className="text-gray-500">&gt;</span></div>
                        <div>    <span className="text-gray-500">&lt;</span><span className="text-green-400">article</span><span className="text-gray-500">&gt;</span></div>
                        <div>      <span className="text-gray-500">&lt;</span><span className="text-green-400">header</span><span className="text-gray-500">&gt;</span></div>
                        <div>        <span className="text-gray-500">&lt;</span><span className="text-green-400">h1</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">10 Best SEO Strategies for 2025</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">h1</span><span className="text-gray-500">&gt;</span></div>
                        <div>        <span className="text-gray-500">&lt;</span><span className="text-green-400">p</span> <span className="text-purple-400">class</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;byline&quot;</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">Published on January 15, 2025</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">p</span><span className="text-gray-500">&gt;</span></div>
                        <div>      <span className="text-gray-500">&lt;/</span><span className="text-green-400">header</span><span className="text-gray-500">&gt;</span></div>
                        <div></div>
                        <div>      <span className="text-gray-500">&lt;</span><span className="text-green-400">section</span><span className="text-gray-500">&gt;</span></div>
                        <div>        <span className="text-gray-500">&lt;</span><span className="text-green-400">h2</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">1. AI-Powered Content Optimization</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">h2</span><span className="text-gray-500">&gt;</span></div>
                        <div>        <span className="text-gray-500">&lt;</span><span className="text-green-400">p</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">Content introduction...</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">p</span><span className="text-gray-500">&gt;</span></div>
                        <div></div>
                        <div>        <span className="text-gray-500">&lt;</span><span className="text-green-400">h3</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">Why AI Content Matters</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">h3</span><span className="text-gray-500">&gt;</span></div>
                        <div>        <span className="text-gray-500">&lt;</span><span className="text-green-400">p</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">Subsection content...</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">p</span><span className="text-gray-500">&gt;</span></div>
                        <div></div>
                        <div>        <span className="text-gray-500">&lt;</span><span className="text-green-400">h3</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">Implementation Best Practices</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">h3</span><span className="text-gray-500">&gt;</span></div>
                        <div>        <span className="text-gray-500">&lt;</span><span className="text-green-400">p</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">More subsection content...</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">p</span><span className="text-gray-500">&gt;</span></div>
                        <div>      <span className="text-gray-500">&lt;/</span><span className="text-green-400">section</span><span className="text-gray-500">&gt;</span></div>
                        <div></div>
                        <div>      <span className="text-gray-500">&lt;</span><span className="text-green-400">section</span><span className="text-gray-500">&gt;</span></div>
                        <div>        <span className="text-gray-500">&lt;</span><span className="text-green-400">h2</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">2. Technical SEO Fundamentals</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">h2</span><span className="text-gray-500">&gt;</span></div>
                        <div>        <span className="text-gray-500">&lt;</span><span className="text-green-400">p</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">Next section...</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">p</span><span className="text-gray-500">&gt;</span></div>
                        <div>      <span className="text-gray-500">&lt;/</span><span className="text-green-400">section</span><span className="text-gray-500">&gt;</span></div>
                        <div>    <span className="text-gray-500">&lt;/</span><span className="text-green-400">article</span><span className="text-gray-500">&gt;</span></div>
                        <div></div>
                        <div>    <span className="text-gray-500">&lt;</span><span className="text-green-400">aside</span><span className="text-gray-500">&gt;</span></div>
                        <div>      <span className="text-gray-500">&lt;</span><span className="text-green-400">h2</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">Related Articles</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">h2</span><span className="text-gray-500">&gt;</span></div>
                        <div>      <span className="text-gray-500">&lt;</span><span className="text-green-400">nav</span> <span className="text-purple-400">aria-label</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;Related content&quot;</span><span className="text-gray-500">&gt;</span><span className="text-zinc-500">...</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">nav</span><span className="text-gray-500">&gt;</span></div>
                        <div>    <span className="text-gray-500">&lt;/</span><span className="text-green-400">aside</span><span className="text-gray-500">&gt;</span></div>
                        <div>  <span className="text-gray-500">&lt;/</span><span className="text-green-400">main</span><span className="text-gray-500">&gt;</span></div>
                        <div></div>
                        <div>  <span className="text-gray-500">&lt;</span><span className="text-green-400">footer</span><span className="text-gray-500">&gt;</span></div>
                        <div>    <span className="text-gray-500">&lt;</span><span className="text-green-400">p</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">&copy; 2025 Your Company</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">p</span><span className="text-gray-500">&gt;</span></div>
                        <div>  <span className="text-gray-500">&lt;/</span><span className="text-green-400">footer</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;/</span><span className="text-green-400">body</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;/</span><span className="text-green-400">html</span><span className="text-gray-500">&gt;</span></div>
                      </pre>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Correct Structure
                      </h4>
                      <ul className="text-sm text-zinc-400 space-y-2">
                        <li>• Single H1 per page (main topic)</li>
                        <li>• H2 for major sections</li>
                        <li>• H3-H6 for subsections</li>
                        <li>• Proper semantic elements</li>
                        <li>• Accessibility attributes</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Common Mistakes
                      </h4>
                      <ul className="text-sm text-zinc-400 space-y-2">
                        <li>• Multiple H1 tags</li>
                        <li>• Skipping heading levels (H2 → H4)</li>
                        <li>• Using headings for styling</li>
                        <li>• Missing semantic elements</li>
                        <li>• No heading hierarchy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'meta' && (
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Optimized Meta Tags & Open Graph</h3>
                  
                  {/* Code Block with Terminal Style */}
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden mb-6">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      </div>
                      <span className="text-xs text-zinc-500">head.html</span>
                    </div>
                    <div className="p-6 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
                      <pre className="text-sm font-mono leading-relaxed">
                        <div><span className="text-zinc-600">&lt;!-- Primary Meta Tags --&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">title</span><span className="text-gray-500">&gt;</span><span className="text-zinc-300">10 Best SEO Strategies for 2025 | SEO Automation</span><span className="text-gray-500">&lt;/</span><span className="text-green-400">title</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;title&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;10 Best SEO Strategies for 2025&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;description&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;Discover the top 10 SEO strategies that will dominate 2025. Learn AI-powered optimization, technical SEO, and link building tactics from experts.&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;keywords&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;SEO strategies, SEO 2025, technical SEO, AI SEO&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">link</span> <span className="text-purple-400">rel</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;canonical&quot;</span> <span className="text-purple-400">href</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;https://example.com/seo-strategies-2025&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div></div>
                        <div><span className="text-zinc-600">&lt;!-- Open Graph / Facebook --&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">property</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;og:type&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;article&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">property</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;og:url&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;https://example.com/seo-strategies-2025&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">property</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;og:title&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;10 Best SEO Strategies for 2025&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">property</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;og:description&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;Discover the top 10 SEO strategies that will dominate 2025. Learn AI-powered optimization and technical SEO tactics.&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">property</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;og:image&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;https://example.com/images/seo-2025.jpg&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">property</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;og:image:width&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;1200&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">property</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;og:image:height&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;630&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">property</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;og:site_name&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;SEO Automation&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">property</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;article:published_time&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;2025-01-15T08:00:00Z&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">property</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;article:author&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;https://example.com/author/john-doe&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">property</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;article:section&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;SEO&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">property</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;article:tag&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;SEO&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div></div>
                        <div><span className="text-zinc-600">&lt;!-- Twitter --&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;twitter:card&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;summary_large_image&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;twitter:url&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;https://example.com/seo-strategies-2025&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;twitter:title&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;10 Best SEO Strategies for 2025&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;twitter:description&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;Discover the top 10 SEO strategies that will dominate 2025. Learn AI-powered optimization.&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;twitter:image&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;https://example.com/images/seo-2025.jpg&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;twitter:creator&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;@yourhandle&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div></div>
                        <div><span className="text-zinc-600">&lt;!-- Additional SEO Tags --&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;robots&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;index, follow, max-snippet:-1, max-image-preview:large&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">meta</span> <span className="text-purple-400">name</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;googlebot&quot;</span> <span className="text-purple-400">content</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;index, follow&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">link</span> <span className="text-purple-400">rel</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;alternate&quot;</span> <span className="text-purple-400">hreflang</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;en&quot;</span> <span className="text-purple-400">href</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;https://example.com/seo-strategies-2025&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">link</span> <span className="text-purple-400">rel</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;alternate&quot;</span> <span className="text-purple-400">hreflang</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;es&quot;</span> <span className="text-purple-400">href</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;https://example.com/es/estrategias-seo-2025&quot;</span><span className="text-gray-500">&gt;</span></div>
                      </pre>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3">📏 Title Tag Rules</h4>
                      <ul className="text-sm text-zinc-400 space-y-2">
                        <li>• 50-60 characters optimal</li>
                        <li>• Primary keyword first</li>
                        <li>• Include brand name</li>
                        <li>• Unique per page</li>
                        <li>• Compelling & descriptive</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3">📝 Meta Description</h4>
                      <ul className="text-sm text-zinc-400 space-y-2">
                        <li>• 150-160 characters</li>
                        <li>• Include target keywords</li>
                        <li>• Call-to-action</li>
                        <li>• Accurate summary</li>
                        <li>• Unique per page</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3">🖼️ OG Images</h4>
                      <ul className="text-sm text-zinc-400 space-y-2">
                        <li>• 1200x630 pixels</li>
                        <li>• JPG or PNG format</li>
                        <li>• Under 8MB file size</li>
                        <li>• Compelling visual</li>
                        <li>• Brand consistent</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'schema' && (
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">JSON-LD Structured Data (Schema.org)</h3>
                  
                  {/* Code Block with Terminal Style */}
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden mb-6">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      </div>
                      <span className="text-xs text-zinc-500">structured-data.json</span>
                    </div>
                    <div className="p-6 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
                      <pre className="text-sm font-mono leading-relaxed">
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">script</span> <span className="text-purple-400">type</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;application/ld+json&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-zinc-400">{'{'}</span></div>
                        <div>  <span className="text-blue-400">&quot;@context&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;https://schema.org&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;@type&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;Article&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;headline&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;10 Best SEO Strategies for 2025&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;description&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;Discover the top 10 SEO strategies that will dominate 2025&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;image&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;https://example.com/images/seo-2025.jpg&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;author&quot;</span><span className="text-zinc-400">:</span> <span className="text-zinc-400">{'{'}</span></div>
                        <div>    <span className="text-blue-400">&quot;@type&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;Person&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>    <span className="text-blue-400">&quot;name&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;John Doe&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>    <span className="text-blue-400">&quot;url&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;https://example.com/author/john-doe&quot;</span></div>
                        <div>  <span className="text-zinc-400">{'}'}</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;publisher&quot;</span><span className="text-zinc-400">:</span> <span className="text-zinc-400">{'{'}</span></div>
                        <div>    <span className="text-blue-400">&quot;@type&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;Organization&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>    <span className="text-blue-400">&quot;name&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;SEO Automation&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>    <span className="text-blue-400">&quot;logo&quot;</span><span className="text-zinc-400">:</span> <span className="text-zinc-400">{'{'}</span></div>
                        <div>      <span className="text-blue-400">&quot;@type&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;ImageObject&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>      <span className="text-blue-400">&quot;url&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;https://example.com/logo.png&quot;</span></div>
                        <div>    <span className="text-zinc-400">{'}'}</span></div>
                        <div>  <span className="text-zinc-400">{'}'}</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;datePublished&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;2025-01-15T08:00:00Z&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;dateModified&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;2025-01-15T08:00:00Z&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;mainEntityOfPage&quot;</span><span className="text-zinc-400">:</span> <span className="text-zinc-400">{'{'}</span></div>
                        <div>    <span className="text-blue-400">&quot;@type&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;WebPage&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>    <span className="text-blue-400">&quot;@id&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;https://example.com/seo-strategies-2025&quot;</span></div>
                        <div>  <span className="text-zinc-400">{'}'}</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;articleSection&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;SEO&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;keywords&quot;</span><span className="text-zinc-400">:</span> <span className="text-zinc-400">[</span><span className="text-emerald-400">&quot;SEO&quot;</span><span className="text-zinc-400">,</span> <span className="text-emerald-400">&quot;SEO strategies&quot;</span><span className="text-zinc-400">,</span> <span className="text-emerald-400">&quot;2025&quot;</span><span className="text-zinc-400">,</span> <span className="text-emerald-400">&quot;technical SEO&quot;</span><span className="text-zinc-400">]</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;wordCount&quot;</span><span className="text-zinc-400">:</span> <span className="text-orange-400">2500</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;articleBody&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;Full article text here...&quot;</span></div>
                        <div><span className="text-zinc-400">{'}'}</span></div>
                        <div><span className="text-gray-500">&lt;/</span><span className="text-green-400">script</span><span className="text-gray-500">&gt;</span></div>
                        <div></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">script</span> <span className="text-purple-400">type</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;application/ld+json&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-zinc-400">{'{'}</span></div>
                        <div>  <span className="text-blue-400">&quot;@context&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;https://schema.org&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;@type&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;BreadcrumbList&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;itemListElement&quot;</span><span className="text-zinc-400">:</span> <span className="text-zinc-400">[</span></div>
                        <div>    <span className="text-zinc-400">{'{'}</span></div>
                        <div>      <span className="text-blue-400">&quot;@type&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;ListItem&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>      <span className="text-blue-400">&quot;position&quot;</span><span className="text-zinc-400">:</span> <span className="text-orange-400">1</span><span className="text-zinc-400">,</span></div>
                        <div>      <span className="text-blue-400">&quot;name&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;Home&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>      <span className="text-blue-400">&quot;item&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;https://example.com&quot;</span></div>
                        <div>    <span className="text-zinc-400">{'}'}</span><span className="text-zinc-400">,</span></div>
                        <div>    <span className="text-zinc-400">{'{'}</span></div>
                        <div>      <span className="text-blue-400">&quot;@type&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;ListItem&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>      <span className="text-blue-400">&quot;position&quot;</span><span className="text-zinc-400">:</span> <span className="text-orange-400">2</span><span className="text-zinc-400">,</span></div>
                        <div>      <span className="text-blue-400">&quot;name&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;Blog&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>      <span className="text-blue-400">&quot;item&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;https://example.com/blog&quot;</span></div>
                        <div>    <span className="text-zinc-400">{'}'}</span><span className="text-zinc-400">,</span></div>
                        <div>    <span className="text-zinc-400">{'{'}</span></div>
                        <div>      <span className="text-blue-400">&quot;@type&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;ListItem&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>      <span className="text-blue-400">&quot;position&quot;</span><span className="text-zinc-400">:</span> <span className="text-orange-400">3</span><span className="text-zinc-400">,</span></div>
                        <div>      <span className="text-blue-400">&quot;name&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;SEO Strategies&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>      <span className="text-blue-400">&quot;item&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;https://example.com/seo-strategies-2025&quot;</span></div>
                        <div>    <span className="text-zinc-400">{'}'}</span></div>
                        <div>  <span className="text-zinc-400">]</span></div>
                        <div><span className="text-zinc-400">{'}'}</span></div>
                        <div><span className="text-gray-500">&lt;/</span><span className="text-green-400">script</span><span className="text-gray-500">&gt;</span></div>
                        <div></div>
                        <div><span className="text-gray-500">&lt;</span><span className="text-green-400">script</span> <span className="text-purple-400">type</span><span className="text-zinc-400">=</span><span className="text-emerald-400">&quot;application/ld+json&quot;</span><span className="text-gray-500">&gt;</span></div>
                        <div><span className="text-zinc-400">{'{'}</span></div>
                        <div>  <span className="text-blue-400">&quot;@context&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;https://schema.org&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;@type&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;FAQPage&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>  <span className="text-blue-400">&quot;mainEntity&quot;</span><span className="text-zinc-400">:</span> <span className="text-zinc-400">[</span></div>
                        <div>    <span className="text-zinc-400">{'{'}</span></div>
                        <div>      <span className="text-blue-400">&quot;@type&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;Question&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>      <span className="text-blue-400">&quot;name&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;What are the best SEO strategies for 2025?&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>      <span className="text-blue-400">&quot;acceptedAnswer&quot;</span><span className="text-zinc-400">:</span> <span className="text-zinc-400">{'{'}</span></div>
                        <div>        <span className="text-blue-400">&quot;@type&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;Answer&quot;</span><span className="text-zinc-400">,</span></div>
                        <div>        <span className="text-blue-400">&quot;text&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;The best SEO strategies for 2025 include AI-powered content...&quot;</span></div>
                        <div>      <span className="text-zinc-400">{'}'}</span></div>
                        <div>    <span className="text-zinc-400">{'}'}</span></div>
                        <div>  <span className="text-zinc-400">]</span></div>
                        <div><span className="text-zinc-400">{'}'}</span></div>
                        <div><span className="text-gray-500">&lt;/</span><span className="text-green-400">script</span><span className="text-gray-500">&gt;</span></div>
                      </pre>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3">🎯 Supported Schemas</h4>
                      <ul className="text-sm text-zinc-400 space-y-2">
                        <li>• Article (news, blog posts)</li>
                        <li>• FAQPage (Q&A content)</li>
                        <li>• BreadcrumbList (navigation)</li>
                        <li>• Organization (company info)</li>
                        <li>• Product (e-commerce)</li>
                        <li>• HowTo (tutorials)</li>
                        <li>• Review (ratings)</li>
                        <li>• VideoObject (video content)</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3">⭐ Rich Snippet Benefits</h4>
                      <ul className="text-sm text-zinc-400 space-y-2">
                        <li>• Enhanced SERP appearance</li>
                        <li>• Higher click-through rates</li>
                        <li>• Knowledge panel eligibility</li>
                        <li>• Featured snippet priority</li>
                        <li>• Voice search optimization</li>
                        <li>• Google Discover eligibility</li>
                        <li>• Better mobile visibility</li>
                        <li>• Increased organic traffic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          </div>
        </section>

        {/* SEO Impact Metrics */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              Performance Impact
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">
              Measurable SEO Improvements
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Real data from implementing proper technical SEO structure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                metric: "15-20% Ranking Improvement",
                description: "Proper heading hierarchy helps Google understand content structure, leading to better rankings",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                stat: "+18%",
                detail: "Average position increase after implementing H1-H6 structure",
                color: "emerald"
              },
              {
                metric: "35-40% Higher CTR",
                description: "Optimized meta titles and descriptions dramatically improve click-through rates from SERPs",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                ),
                stat: "+38%",
                detail: "CTR improvement with compelling meta descriptions",
                color: "blue"
              },
              {
                metric: "3x More Social Shares",
                description: "Open Graph and Twitter Card tags make content more shareable with rich previews",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                ),
                stat: "3.2x",
                detail: "Increase in social media engagement with proper OG tags",
                color: "purple"
              },
              {
                metric: "60% More Rich Snippets",
                description: "JSON-LD structured data enables featured snippets, knowledge panels, and enhanced SERP features",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                stat: "+62%",
                detail: "Rich snippet eligibility with Schema.org markup",
                color: "yellow"
              }
            ].map((item, index) => (
              <Card key={index} className="group bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden">
                <CardContent className="relative p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white group-hover:bg-zinc-700 transition-all duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{item.metric}</h3>
                      <p className="text-zinc-400 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="border-t border-zinc-800/50 pt-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-5xl font-bold text-white mb-2">{item.stat}</div>
                        <div className="inline-flex items-center gap-2 text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Verified
                        </div>
                      </div>
                      <div className="text-right max-w-xs">
                        <p className="text-xs text-zinc-500 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical SEO Checklist */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              Complete Checklist
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">
              50+ Technical SEO Checks
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Every check automatically validated on every page
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "HTML Structure",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                checks: [
                  "Single H1 tag per page",
                  "Logical heading hierarchy",
                  "Semantic HTML5 elements",
                  "Proper structure tags",
                  "Descriptive alt text",
                  "Internal linking",
                  "No broken links",
                  "Mobile-responsive"
                ]
              },
              {
                category: "Meta Tags",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                ),
                checks: [
                  "Unique title tag (50-60)",
                  "Meta description (150-160)",
                  "Canonical URL set",
                  "Robots meta configured",
                  "UTF-8 charset",
                  "Viewport meta tag",
                  "Language declaration",
                  "No duplicate tags"
                ]
              },
              {
                category: "Social Tags",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                ),
                checks: [
                  "Open Graph complete",
                  "og:url with canonical",
                  "og:type configured",
                  "Twitter Card tags",
                  "Social images 1200x630",
                  "Image alt text",
                  "Article dates",
                  "Author information"
                ]
              },
              {
                category: "Structured Data",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                checks: [
                  "Article schema",
                  "Organization schema",
                  "BreadcrumbList",
                  "FAQPage schema",
                  "Product schema",
                  "Review/Rating schema",
                  "Valid JSON-LD",
                  "No errors (Google)"
                ]
              },
              {
                category: "Performance",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                checks: [
                  "Preconnect external",
                  "Resource hints",
                  "Optimized images",
                  "Lazy loading",
                  "Minified assets",
                  "No render-blocking",
                  "LCP under 2.5s",
                  "CLS under 0.1"
                ]
              },
              {
                category: "Advanced SEO",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                checks: [
                  "Hreflang tags",
                  "AMP version",
                  "XML sitemap",
                  "Breadcrumb visible",
                  "Schema validated",
                  "No interstitials",
                  "HTTPS everywhere",
                  "Mobile-first ready"
                ]
              }
            ].map((section, index) => (
              <Card key={index} className="group bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden">
                <CardContent className="relative p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white group-hover:bg-zinc-700 transition-colors duration-300">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">{section.category}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {section.checks.map((check, checkIndex) => (
                      <li key={checkIndex} className="flex items-start gap-2.5 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        <svg className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">{check}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              FAQ
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about technical SEO structure
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is SEO-First Structure?",
                answer: "SEO-First Structure is an automated technical SEO system that ensures every page has proper HTML5 semantic markup, heading hierarchy (H1-H6), optimized meta tags, Open Graph tags, Twitter Cards, and JSON-LD structured data. It eliminates manual SEO work and ensures 100% compliance with search engine best practices."
              },
              {
                question: "Why is heading hierarchy important for SEO?",
                answer: "Proper heading hierarchy (H1-H6) helps search engines understand your content structure and relationships between topics. Google uses headings to determine page context and relevance. A single H1, followed by logical H2-H6 progression, improves crawlability and can increase rankings by 15-20%. Skipping heading levels or using multiple H1s confuses search engines."
              },
              {
                question: "What is JSON-LD structured data?",
                answer: "JSON-LD (JavaScript Object Notation for Linked Data) is a structured data format that helps search engines understand your content context. It enables rich snippets, knowledge panels, and enhanced SERP features. Our system automatically generates Article, FAQPage, BreadcrumbList, Organization, and Product schemas based on your content type."
              },
              {
                question: "How do meta tags affect SEO rankings?",
                answer: "Meta tags (title and description) are critical ranking factors. The title tag (50-60 characters) directly impacts rankings and CTR. Meta descriptions (150-160 characters) influence click-through rates from search results. Our system optimizes both automatically, including keyword placement, length optimization, and compelling CTAs that drive clicks."
              },
              {
                question: "What are Open Graph and Twitter Card tags?",
                answer: "Open Graph tags control how your content appears on Facebook, LinkedIn, and other social platforms. Twitter Cards control Twitter previews. Both significantly impact social media CTR and traffic. Our system automatically generates og:title, og:description, og:image, og:url, twitter:card, and all required tags with proper dimensions and formatting."
              },
              {
                question: "Do I need to manually add structured data?",
                answer: "No. Our system automatically generates and validates all structured data for every page. We support Article, FAQPage, BreadcrumbList, Organization, Product, HowTo, Review, and VideoObject schemas. All JSON-LD is validated against Schema.org specifications and Google's Structured Data Testing Tool before publication."
              },
              {
                question: "How does this improve Core Web Vitals?",
                answer: "Proper technical structure improves Core Web Vitals by: 1) Reducing DOM complexity with semantic HTML, 2) Enabling resource hints (preconnect, preload) for faster loading, 3) Optimizing image loading with lazy loading and proper formats, 4) Minimizing render-blocking resources. This improves LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift)."
              },
              {
                question: "Can I customize the SEO structure?",
                answer: "Yes. While we provide optimal defaults, you can customize meta tags, schema types, Open Graph images, and structured data fields. Our system validates all customizations to ensure they meet SEO best practices and won't harm your rankings. You maintain full control while we ensure technical compliance."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300">
                <summary className="p-6 cursor-pointer list-none flex items-center justify-between">
                  <h3 className="text-lg font-semibold group-hover:text-white transition-colors pr-8">
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 border-t border-zinc-800/30">
                  <p className="text-zinc-400 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm overflow-hidden">
            <CardContent className="relative p-12 text-center">
              <div className="w-20 h-20 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Perfect Technical SEO,
                <br />
                <span className="text-white">
                  Automatically
                </span>
              </h2>
              
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                Stop manually implementing technical SEO. Get enterprise-grade structure, meta tags, 
                Open Graph, and JSON-LD on every page — automatically.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-black hover:bg-zinc-200 font-semibold px-8 transition-all">
                    Start Free Trial
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </Link>
                <Link href="/#pricing">
                  <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-900 hover:border-zinc-600 px-8 transition-all">
                    View Pricing
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No credit card
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  7-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </CardContent>
          </Card>
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
