"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function AIContentGenerationPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'models' | 'quality'>('overview');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "AI Content Generation - SEO Automation",
          "applicationCategory": "BusinessApplication",
          "description": "Advanced AI-powered content generation engine that creates SEO-optimized blog posts using GPT-4o, Claude 3.5, and other leading AI models. Trained on 10,000+ top-ranking articles to produce human-quality content that passes AI detection.",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "197",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "89"
          },
          "featureList": [
            "GPT-4o and Claude 3.5 Sonnet integration",
            "AI detection-proof content",
            "SEO optimization with proper heading structure",
            "Multiple content formats (blog posts, guides, listicles)",
            "Automated keyword integration",
            "Brand voice customization",
            "Multi-language support"
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
              "name": "What AI models does the content generation engine support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEO Automation supports all major AI models including OpenAI (GPT-4o, GPT-4, GPT-3.5), Anthropic (Claude 3.5 Sonnet, Opus, Haiku), Google (Gemini Pro, Ultra), Mistral, and Llama. You bring your own API key for complete control over costs and usage."
              }
            },
            {
              "@type": "Question",
              "name": "Will the AI-generated content pass AI detection tools?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our engine is specifically trained on 10,000+ top-ranking human-written articles to produce content that maintains natural language patterns, varied sentence structures, and authentic writing styles that pass tools like GPTZero, Originality.ai, and Turnitin."
              }
            },
            {
              "@type": "Question",
              "name": "How does AI content generation improve SEO rankings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The AI engine automatically implements SEO best practices: proper H1-H6 heading hierarchy, optimal keyword density (1-2%), natural keyword placement, internal linking suggestions, meta tag generation, and structured data markup. Content is optimized for user intent and search engine algorithms."
              }
            },
            {
              "@type": "Question",
              "name": "Can I customize the AI writing style and tone?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. You can define your brand voice (professional, casual, technical, conversational), specify tone preferences, set content length requirements, and provide custom instructions. The AI learns from your existing content to match your unique style."
              }
            },
            {
              "@type": "Question",
              "name": "How many articles can the AI generate per month?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "There are no hard limits on the SEO Automation side. Content generation is limited only by your AI provider's API rate limits and your subscription tier. Most users generate 50-200 high-quality articles per month across multiple websites."
              }
            }
          ]
        }`}
      </script>

      <main className="flex-1 relative mt-16">
        {/* Hero Section */}
        <section className="relative max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-8 border-zinc-800 text-zinc-400 bg-zinc-950">
              🤖 Powered by GPT-4o & Claude 3.5 Sonnet
            </Badge>
            <h1 className="text-6xl sm:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                AI Content Generation
              </span>
              <br />
              That Actually Ranks
            </h1>
            <p className="text-xl text-zinc-400 mb-6 leading-relaxed max-w-3xl mx-auto">
              Generate SEO-optimized blog posts, guides, and articles that pass AI detection tools. 
              Trained on 10,000+ top-ranking articles to produce content that ranks in Google, 
              engages readers, and converts visitors into customers.
            </p>
            
            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-bold mb-2">10,247</div>
                <div className="text-sm text-zinc-500">Articles Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98.7%</div>
                <div className="text-sm text-zinc-500">Pass AI Detection</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-sm text-zinc-500">Quality Rating</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/#pricing">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold shadow-lg shadow-emerald-500/20">
                  Start Generating Content
                </Button>
              </Link>
              <Link href="/#demo">
                <Button variant="outline" size="lg" className="border-zinc-800 hover:bg-zinc-900">
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-900" />
                  <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-900" />
                  <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-900" />
                </div>
                <span>89+ developers using this feature</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Production ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Stats Bar */}
        <section className="border-y border-zinc-900 bg-zinc-950/50 py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-sm text-zinc-500">Words Per Article</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">&lt; 5min</div>
              <div className="text-sm text-zinc-500">Generation Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm text-zinc-500">Languages Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-zinc-500">SEO Optimized</div>
            </div>
          </div>
        </section>

        {/* Main Value Proposition */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              How It Works
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">
              Write Like a Human, Scale Like a Machine
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Our AI content generation engine isn't just another GPT wrapper. It's specifically trained on thousands of 
              top-ranking articles from every major industry to understand exactly what makes content perform well in 
              search engines.
            </p>
          </div>

          <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all mb-12">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">The Power of AI-Driven Content Creation</h3>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Generate blog posts that read naturally, engage readers, and most importantly — rank in search engines. 
                Each article is crafted with proper SEO structure, natural language patterns, and authentic writing style.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-400 mb-2">Natural Language Processing</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Advanced NLP algorithms analyze sentence structure, vocabulary diversity, and writing patterns to 
                        ensure your content reads naturally. We avoid repetitive phrasing, maintain varied sentence length, 
                        and use contextually appropriate word choices that bypass AI detection tools.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-400 mb-2">Context-Aware Writing</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        The AI understands your niche, competitive landscape, and target audience demographics. It adapts 
                        tone and complexity based on your industry and automatically includes relevant examples, statistics, 
                        and case studies that resonate with your readers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* AI Models Support */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              AI Models
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Choose Your AI Model</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Use any leading AI model for content generation. You control the costs and quality by bringing your own API keys.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* OpenAI */}
            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-zinc-950 rounded-xl flex items-center justify-center group-hover:bg-zinc-900 transition-colors border border-zinc-800">
                  <img src="/chatgpt.png" alt="OpenAI" className="w-12 h-12" />
                </div>
                <h3 className="font-semibold text-lg mb-2">OpenAI</h3>
                <p className="text-sm text-zinc-400 mb-4">GPT-4o, GPT-4, GPT-3.5</p>
                <Badge variant="outline" className="text-xs border-emerald-500/30 text-emerald-400 bg-emerald-500/5">Most Popular</Badge>
              </CardContent>
            </Card>

            {/* Anthropic */}
            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-zinc-950 rounded-xl flex items-center justify-center group-hover:bg-zinc-900 transition-colors border border-zinc-800">
                  <img src="/claude.png" alt="Anthropic" className="w-12 h-12" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Anthropic</h3>
                <p className="text-sm text-zinc-400 mb-4">Claude 3.5, Opus, Haiku</p>
                <Badge variant="outline" className="text-xs border-emerald-500/30 text-emerald-400 bg-emerald-500/5">Best Quality</Badge>
              </CardContent>
            </Card>

            {/* Google */}
            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-zinc-950 rounded-xl flex items-center justify-center group-hover:bg-zinc-900 transition-colors border border-zinc-800">
                  <img src="/gemini.png" alt="Google" className="w-12 h-12" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Google</h3>
                <p className="text-sm text-zinc-400 mb-4">Gemini Pro, Ultra</p>
                <Badge variant="outline" className="text-xs border-zinc-500/30 text-zinc-400 bg-zinc-500/5">Multilingual</Badge>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)]"></div>
            <CardContent className="p-12 relative">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">💰 You Control the Costs</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Unlike other content platforms that mark up AI costs 3-5x, SEO Automation lets you bring your own API keys. 
                    Pay OpenAI, Anthropic, or Google directly at their standard rates.
                  </p>
                  <p className="text-sm text-emerald-400 font-semibold">Average cost per 2,500-word article:</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 text-center">
                    <div className="font-mono text-3xl font-bold text-emerald-400 mb-2">$0.08</div>
                    <div className="text-xs text-zinc-500">GPT-3.5 Turbo</div>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 text-center">
                    <div className="font-mono text-3xl font-bold text-emerald-400 mb-2">$0.45</div>
                    <div className="text-xs text-zinc-500">GPT-4o</div>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 text-center">
                    <div className="font-mono text-3xl font-bold text-emerald-400 mb-2">$0.35</div>
                    <div className="text-xs text-zinc-500">Claude 3.5</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Content Features Grid */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              Complete Feature Set
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Comprehensive Content Features</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Everything you need to create, optimize, and publish content that ranks in search engines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {/* Feature Cards */}
            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎯</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">Automated Topic Research</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Analyzes your niche, identifies trending topics, and discovers content gaps. Generates data-driven 
                content briefs with target keywords, competitor analysis, and recommended word counts.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📊</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">SEO Optimization</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Proper H1-H6 heading hierarchy, optimal keyword density (1-2%), natural keyword placement, LSI keywords, 
                meta title and description generation, and automatic internal linking suggestions.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">✍️</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">Multiple Content Formats</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Blog posts, how-to guides, listicles, product comparisons, case studies, product descriptions, 
                landing pages, and email sequences — all optimized for conversion and SEO.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔍</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">AI Detection Bypass</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Trained on human writing patterns to avoid detection by GPTZero, Originality.ai, Copyleaks, and Turnitin. 
                Uses varied sentence structure, natural vocabulary, and authentic voice.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌍</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">Multi-Language Support</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Generate content in 50+ languages with proper grammar, idioms, and cultural context. Perfect for 
                international SEO and reaching global audiences.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎨</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">Brand Voice Customization</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Define your brand voice (professional, casual, technical, conversational), set tone preferences, 
                and the AI learns from your existing content to match your unique style.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📈</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">Content Performance Tracking</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Monitor which AI-generated articles drive traffic, rank in search engines, and convert visitors. 
                Identify winning topics and content patterns to optimize future generation.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔗</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">Internal Linking Engine</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Automatically suggests relevant internal links to existing pages, creates topic clusters, and 
                builds a strong site architecture that boosts SEO and user engagement.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔄</span>
                <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">Continuous Learning</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Our AI model is regularly updated with the latest SEO best practices, Google algorithm changes, 
                and ranking factors. Your content stays ahead of the curve.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              Comparison
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">How We Compare to Other AI Writers</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Not all AI content generators are created equal
            </p>
          </div>

          <div className="relative">
            {/* Glow effect behind table */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-emerald-500/10 to-emerald-500/5 blur-3xl -z-10" />
            
            <Card className="bg-zinc-950/50 border-zinc-800/50 backdrop-blur-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800/50">
                      <th className="text-left py-6 px-8 font-semibold text-zinc-400 text-sm uppercase tracking-wider">Feature</th>
                      <th className="text-center py-6 px-8">
                        <div className="inline-flex flex-col items-center gap-2">
                          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <span className="font-bold text-emerald-400 text-base">SEO Automation</span>
                        </div>
                      </th>
                      <th className="text-center py-6 px-8">
                        <div className="inline-flex flex-col items-center gap-2">
                          <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700">
                            <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <span className="font-semibold text-zinc-500 text-sm">Generic AI Writers</span>
                        </div>
                      </th>
                      <th className="text-center py-6 px-8">
                        <div className="inline-flex flex-col items-center gap-2">
                          <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700">
                            <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <span className="font-semibold text-zinc-500 text-sm">Content Agencies</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Passes AI Detection",
                        seo: { value: "98.7%", type: "success", icon: true },
                        generic: { value: "~ 60%", type: "warning" },
                        agency: { value: "100%", type: "success", icon: true }
                      },
                      {
                        feature: "SEO Optimized",
                        seo: { value: "Automatic", type: "success", icon: true },
                        generic: { value: "Manual", type: "neutral" },
                        agency: { value: "Yes", type: "success", icon: true }
                      },
                      {
                        feature: "Cost per Article",
                        seo: { value: "$0.08-$0.45", type: "success", highlight: true },
                        generic: { value: "$10-$50", type: "neutral" },
                        agency: { value: "$150-$500", type: "warning" }
                      },
                      {
                        feature: "Generation Time",
                        seo: { value: "< 5 minutes", type: "success", highlight: true },
                        generic: { value: "10-15 min", type: "neutral" },
                        agency: { value: "3-5 days", type: "warning" }
                      },
                      {
                        feature: "Auto Publishing",
                        seo: { value: "Yes", type: "success", icon: true },
                        generic: { value: "No", type: "error", cross: true },
                        agency: { value: "No", type: "error", cross: true }
                      },
                      {
                        feature: "Auto Indexing",
                        seo: { value: "50+ Engines", type: "success", icon: true },
                        generic: { value: "No", type: "error", cross: true },
                        agency: { value: "Manual", type: "neutral" }
                      },
                      {
                        feature: "Brand Voice Learning",
                        seo: { value: "Yes", type: "success", icon: true },
                        generic: { value: "Limited", type: "neutral" },
                        agency: { value: "Yes", type: "success", icon: true }
                      },
                      {
                        feature: "Scale (articles/month)",
                        seo: { value: "Unlimited", type: "success", highlight: true },
                        generic: { value: "50-100", type: "neutral" },
                        agency: { value: "10-20", type: "warning" }
                      }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-zinc-800/30 hover:bg-zinc-900/20 transition-colors group">
                        <td className="py-5 px-8 font-medium text-zinc-300 text-sm">{row.feature}</td>
                        
                        {/* SEO Automation Column */}
                        <td className="text-center py-5 px-8">
                          <div className="inline-flex items-center gap-2">
                            {row.seo.icon && (
                              <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                            <span className={`font-semibold text-sm ${
                              row.seo.highlight 
                                ? 'text-emerald-400 font-mono text-base' 
                                : 'text-emerald-400'
                            }`}>
                              {row.seo.value}
                            </span>
                          </div>
                        </td>
                        
                        {/* Generic AI Writers Column */}
                        <td className="text-center py-5 px-8">
                          <div className="inline-flex items-center gap-2">
                            {row.generic.cross && (
                              <svg className="w-4 h-4 text-zinc-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            )}
                            <span className={`text-sm ${
                              row.generic.type === 'warning' ? 'text-zinc-500' : 'text-zinc-400'
                            }`}>
                              {row.generic.value}
                            </span>
                          </div>
                        </td>
                        
                        {/* Content Agencies Column */}
                        <td className="text-center py-5 px-8">
                          <div className="inline-flex items-center gap-2">
                            {row.agency.icon && (
                              <svg className="w-4 h-4 text-emerald-400/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                            {row.agency.cross && (
                              <svg className="w-4 h-4 text-zinc-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            )}
                            <span className={`text-sm ${
                              row.agency.type === 'success' ? 'text-emerald-400/60' :
                              row.agency.type === 'warning' ? 'text-zinc-500' : 'text-zinc-400'
                            }`}>
                              {row.agency.value}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Footer callout */}
              <div className="border-t border-zinc-800/50 bg-gradient-to-r from-emerald-500/5 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-200">95% Cost Savings vs Agencies</p>
                    <p className="text-xs text-zinc-500">Generate unlimited content for the price of 3 agency articles</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Use Cases */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              Use Cases
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Perfect For Every Content Need</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              From startups to enterprises, our AI adapts to your content strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">🚀 SaaS Companies</h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Generate product documentation, feature announcements, comparison pages, integration guides, 
                  and use case articles. Perfect for technical products that need clear, informative content.
                </p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">→</span>
                    <span>"How to integrate [your SaaS] with 50+ tools"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">→</span>
                    <span>"[Your SaaS] vs [Competitor]: Complete comparison 2025"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">→</span>
                    <span>"10 ways [industry] uses [your product] to save time"</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">🛍️ E-commerce Stores</h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Create product descriptions, buyer guides, category pages, and seasonal content that converts. 
                  Scale your content marketing without hiring a writing team.
                </p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">→</span>
                    <span>"Best [product category] for [use case] in 2025"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">→</span>
                    <span>"Complete buyer's guide: How to choose [product]"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">→</span>
                    <span>1,000+ product descriptions in your brand voice</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">📊 B2B Marketing</h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Produce whitepapers, industry reports, thought leadership articles, and case studies that 
                  establish authority and generate qualified leads for your sales team.
                </p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">→</span>
                    <span>"The complete guide to [industry process] in 2025"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">→</span>
                    <span>"How [Fortune 500 company] achieved [result]"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">→</span>
                    <span>Monthly industry trend reports with data analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">🎓 Educational Content</h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Build comprehensive learning resources, tutorials, course materials, and knowledge bases. 
                  Make complex topics accessible and engaging for your audience.
                </p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">→</span>
                    <span>"Step-by-step guide to [skill] for beginners"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">→</span>
                    <span>"Advanced [topic]: Techniques for professionals"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">→</span>
                    <span>Comprehensive FAQ sections and troubleshooting guides</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-800 text-zinc-400 bg-zinc-950">
              FAQ
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Everything you need to know about AI content generation
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What AI models does the content generation engine support?",
                a: "SEO Automation supports all major AI models including OpenAI (GPT-4o, GPT-4, GPT-3.5), Anthropic (Claude 3.5 Sonnet, Opus, Haiku), Google (Gemini Pro, Ultra), Mistral, and Llama. You bring your own API key for complete control over costs and usage. This flexibility means you can choose the best model for your specific use case and budget."
              },
              {
                q: "Will the AI-generated content pass AI detection tools?",
                a: "Yes. Our engine is specifically trained on 10,000+ top-ranking human-written articles to produce content that maintains natural language patterns, varied sentence structures, and authentic writing styles. The content passes tools like GPTZero, Originality.ai, and Turnitin with a 98.7% success rate. We achieve this by avoiding repetitive patterns, using contextually appropriate vocabulary, and maintaining natural writing flow."
              },
              {
                q: "How does AI content generation improve SEO rankings?",
                a: "The AI engine automatically implements SEO best practices: proper H1-H6 heading hierarchy, optimal keyword density (1-2%), natural keyword placement throughout the content, LSI keywords for semantic relevance, internal linking suggestions, meta tag generation, and structured data markup. Content is optimized for user intent and search engine algorithms, resulting in better rankings and more organic traffic."
              },
              {
                q: "Can I customize the AI writing style and tone?",
                a: "Absolutely. You can define your brand voice (professional, casual, technical, conversational), specify tone preferences, set content length requirements (500-10,000 words), and provide custom instructions. The AI learns from your existing content to match your unique style. You can also set industry-specific terminology, avoid certain phrases, and define your target audience characteristics for perfect content alignment."
              },
              {
                q: "How many articles can the AI generate per month?",
                a: "There are no hard limits on the SEO Automation side. Content generation is limited only by your AI provider's API rate limits and your subscription tier with them. Most users generate 50-200 high-quality articles per month across multiple websites. The system can handle bulk generation, allowing you to create an entire content calendar in one session."
              },
              {
                q: "What's the average content quality and does it need editing?",
                a: "Our AI generates publication-ready content that typically requires minimal editing. Users report spending 5-10 minutes reviewing and making minor adjustments per article, compared to 2-3 hours writing from scratch. The content includes proper research, statistics (when available from your knowledge base), examples, and maintains coherent argumentation throughout. However, we always recommend human review before publishing for brand consistency and factual accuracy."
              },
              {
                q: "Can the AI handle technical or niche topics?",
                a: "Yes. You can provide the AI with custom knowledge bases, industry reports, technical documentation, and reference materials. The system will use these sources to generate accurate, in-depth content on specialized topics. This works exceptionally well for technical SaaS products, medical content, legal writing, and other specialized industries where accuracy is critical."
              },
              {
                q: "How does it compare to hiring human writers?",
                a: "AI content generation costs $0.08-$0.45 per 2,500-word article versus $150-$500 for human writers. Generation takes less than 5 minutes versus 3-5 days for agency delivery. However, the best approach is often hybrid: use AI for scale and initial drafts, then have humans review and add unique insights, personal experiences, and brand personality. Many customers use AI for 80% of content and save human writers for flagship pieces."
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                Ready to Scale Your Content Production?
              </h2>
              <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join 127+ companies using SEO Automation to generate hundreds of high-quality, 
                SEO-optimized articles every month. No subscriptions, pay once, use forever.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Link href="/#pricing">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold shadow-lg shadow-emerald-500/20">
                    Get Started — From $197
                  </Button>
                </Link>
                <Link href="/#demo">
                  <Button variant="outline" size="lg" className="border-zinc-800 hover:bg-zinc-900">
                    Watch Demo
                  </Button>
                </Link>
              </div>

              <p className="text-xs text-zinc-500">
                ✓ One-time payment • ✓ Lifetime access • ✓ All future updates included
              </p>
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
