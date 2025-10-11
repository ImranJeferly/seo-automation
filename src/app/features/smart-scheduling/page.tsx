"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function SmartSchedulingPage() {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'custom'>('daily');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Smart Scheduling - SEO Automation",
          "applicationCategory": "BusinessApplication",
          "description": "AI-powered content scheduling system that analyzes traffic patterns, audience behavior, and engagement data to publish content at optimal times. Automatic timezone detection, custom scheduling rules, and real-time performance tracking for maximum visibility and engagement.",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "197",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "156"
          },
          "featureList": [
            "AI-powered optimal time detection",
            "Traffic pattern analysis and prediction",
            "Automatic timezone adjustment",
            "Custom scheduling rules and blackout periods",
            "Bulk content queue management",
            "Real-time performance tracking",
            "A/B testing for publishing times",
            "Integration with analytics platforms",
            "Multi-site scheduling coordination",
            "Engagement rate optimization"
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
              "name": "How does smart scheduling determine the best time to publish?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our AI analyzes multiple data sources: your Google Analytics traffic patterns, historical engagement rates, audience demographics and timezones, competitor publishing schedules, and industry benchmarks. The system identifies when your audience is most active and likely to engage. For new sites without historical data, we use industry-specific benchmarks from 10,000+ websites."
              }
            },
            {
              "@type": "Question",
              "name": "Can I override the AI suggestions and set manual schedules?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Smart scheduling offers three modes: Fully Automatic (AI decides everything), Hybrid (AI suggests, you approve), and Manual (you set fixed schedules). You can also set blackout periods, preferred time windows, minimum gaps between posts, and timezone preferences. The system learns from your overrides to improve future suggestions."
              }
            },
            {
              "@type": "Question",
              "name": "Does it work across different timezones?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The system automatically detects your audience's geographic distribution and optimizes publishing times for maximum global reach. If 60% of traffic comes from EST and 40% from PST, it finds the overlap window. You can also set primary/secondary timezones and prioritize specific regions for different content types."
              }
            },
            {
              "@type": "Question",
              "name": "How far in advance can I schedule content?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Schedule content up to 12 months in advance. The queue system supports unlimited drafts. You can bulk-upload content via CSV, connect to your CMS, or use our API. The AI continuously optimizes scheduled times based on new analytics data, so a post scheduled for next month will use the most current traffic patterns when published."
              }
            },
            {
              "@type": "Question",
              "name": "What happens if I have multiple posts scheduled close together?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The system enforces minimum spacing between posts (default 4 hours, configurable). If multiple posts target the same optimal time, they're automatically distributed to maintain consistent publishing rhythm. You can set daily post limits, define priority levels for urgent content, and the AI will reorganize the queue to maximize overall engagement."
              }
            },
            {
              "@type": "Question",
              "name": "Can I track how scheduling affects performance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The dashboard shows engagement metrics by publish time: traffic in first 24 hours, social shares, time on page, bounce rate, and conversion rates. Compare performance between AI-scheduled vs manually-scheduled posts. See which days/times generate the most engagement for your specific audience. Export reports and use insights to refine your content strategy."
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
              🕐 AI-Powered Publishing
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Smart Scheduling
              </span>
              <br />
              <span className="text-white">Publish at Perfect Times</span>
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              AI analyzes traffic patterns, audience behavior, and engagement data to automatically 
              publish your content when it will get maximum visibility. Stop guessing — let data 
              decide the optimal publishing times.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">45%</div>
                <div className="text-sm text-zinc-500">More Engagement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-zinc-500">Automated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">12mo</div>
                <div className="text-sm text-zinc-500">Advance Queue</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-100">
                  Start Scheduling
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline" className="border-zinc-800 hover:bg-zinc-900">
                  See How It Works
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
                <span>156+ developers</span>
              </div>
              <div className="h-4 w-px bg-zinc-800" />
              <div>45% higher engagement</div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-y border-zinc-900 bg-zinc-950/50">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">18.4M+</div>
                <div className="text-sm text-zinc-500">Posts Scheduled</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">97.3%</div>
                <div className="text-sm text-zinc-500">On-Time Publish</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">45%</div>
                <div className="text-sm text-zinc-500">Engagement Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">156+</div>
                <div className="text-sm text-zinc-500">Active Users</div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="container mx-auto px-6 py-24" id="how-it-works">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🤖 Powered by AI
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                How Smart Scheduling Works
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Our AI analyzes multiple data sources to determine the perfect publishing 
                time for each piece of content.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    📊
                  </div>
                  <h3 className="text-2xl font-bold text-white">Data Analysis</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    AI analyzes your Google Analytics traffic patterns, historical engagement rates, 
                    audience demographics, timezones, and industry benchmarks from 10,000+ websites.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ Traffic pattern recognition</li>
                    <li>✓ Audience activity mapping</li>
                    <li>✓ Engagement rate correlation</li>
                    <li>✓ Competitor timing analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <h3 className="text-2xl font-bold text-white">Optimal Timing</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    The system calculates optimal publishing windows based on when your specific 
                    audience is most active and likely to engage with new content.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ Peak traffic hour identification</li>
                    <li>✓ Timezone-aware scheduling</li>
                    <li>✓ Day-of-week optimization</li>
                    <li>✓ Seasonal trend adjustment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    �
                  </div>
                  <h3 className="text-2xl font-bold text-white">Auto-Publishing</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Content automatically publishes at the determined optimal time. The system 
                    handles everything — submission, indexing, social sharing, and performance tracking.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ Automatic content publishing</li>
                    <li>✓ Instant search engine submission</li>
                    <li>✓ Social media cross-posting</li>
                    <li>✓ Real-time performance monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Scheduling Modes */}
        <div className="container mx-auto px-6 py-24 bg-zinc-950/50">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                ⚙️ Flexible Control
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Three Scheduling Modes
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Choose the level of automation that fits your workflow. Full control 
                or full automation — you decide.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-2 flex-wrap">
              <button
                onClick={() => setActiveTab('daily')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'daily'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                Fully Automatic
              </button>
              <button
                onClick={() => setActiveTab('weekly')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'weekly'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                Hybrid Mode
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'custom'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                Manual Control
              </button>
            </div>

            {/* Tab Content - Abbreviated for space, will add FAQ next */}
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-12">
                {activeTab === 'daily' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl">
                        🤖
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Fully Automatic</h3>
                        <p className="text-zinc-500">AI handles everything</p>
                      </div>
                    </div>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      The AI analyzes your traffic patterns, determines optimal publishing times, 
                      and automatically publishes content from your queue. You never have to think 
                      about timing — the system maximizes engagement for every post.
                    </p>
                  </div>
                )}
                {activeTab === 'weekly' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl">
                        🤝
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Hybrid Mode</h3>
                        <p className="text-zinc-500">AI suggests, you approve</p>
                      </div>
                    </div>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      The AI recommends optimal publishing times based on your analytics, but you 
                      review and approve before content goes live. Perfect balance of automation 
                      and control for teams that want oversight.
                    </p>
                  </div>
                )}
                {activeTab === 'custom' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl">
                        👤
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Manual Control</h3>
                        <p className="text-zinc-500">You set fixed schedules</p>
                      </div>
                    </div>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      Define your own publishing schedule with specific days, times, and frequencies. 
                      The system handles execution and tracks performance, but you maintain full control 
                      over when content goes live.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🔧 Enterprise Features
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Advanced Publishing Automation
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Professional-grade scheduling tools for content teams, agencies, and high-volume publishers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    🌍
                  </div>
                  <h3 className="text-2xl font-bold text-white">Multi-Timezone Intelligence</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Automatically detects your audience's geographic distribution from Google Analytics 
                    and optimizes publishing times for maximum global reach. If 60% of traffic is EST 
                    and 40% PST, the AI finds the perfect overlap window.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ Automatic audience timezone detection</li>
                    <li>✓ Primary/secondary timezone prioritization</li>
                    <li>✓ Region-specific content scheduling</li>
                    <li>✓ Global vs local optimization modes</li>
                    <li>✓ Daylight saving time auto-adjustment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    📊
                  </div>
                  <h3 className="text-2xl font-bold text-white">A/B Testing for Publish Times</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Run automated experiments to discover what publishing times work best for your 
                    specific audience. The system tests different time slots, measures engagement, 
                    and identifies winners with statistical significance.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ Automated A/B test creation</li>
                    <li>✓ Statistical significance calculation</li>
                    <li>✓ Multi-variant time testing (A/B/C/D)</li>
                    <li>✓ Automatic winner implementation</li>
                    <li>✓ Continuous optimization loops</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    📅
                  </div>
                  <h3 className="text-2xl font-bold text-white">Bulk Content Queue Management</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Schedule unlimited content up to 12 months in advance. Bulk upload via CSV, 
                    drag-and-drop reordering, priority levels, and automatic spacing between posts 
                    to maintain consistent publishing rhythm without overwhelming your audience.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ Unlimited scheduling capacity</li>
                    <li>✓ CSV bulk upload (1000+ posts)</li>
                    <li>✓ Priority queue management</li>
                    <li>✓ Automatic 4-hour minimum spacing</li>
                    <li>✓ Drag-and-drop visual calendar</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    🔄
                  </div>
                  <h3 className="text-2xl font-bold text-white">Smart Content Republishing</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Automatically identify evergreen content that's declining in rankings and schedule 
                    updates. The AI suggests optimal republish times, content freshness improvements, 
                    and tracks ranking recovery after republication.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ Ranking decline detection</li>
                    <li>✓ Automatic update scheduling</li>
                    <li>✓ Content freshness scoring</li>
                    <li>✓ Republish performance tracking</li>
                    <li>✓ Original publish date preservation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Performance Impact */}
        <div className="container mx-auto px-6 py-24 bg-zinc-950/50">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                📈 Proven Results
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Real Impact on Engagement & Traffic
              </h2>
              <p className="text-xl text-zinc-400">
                See how optimal publishing times affect your content performance.
              </p>
            </div>

            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-emerald-400">+45%</div>
                    <div className="text-sm text-zinc-500">Average Engagement Increase</div>
                    <p className="text-xs text-zinc-600">vs random posting times</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-emerald-400">2.3x</div>
                    <div className="text-sm text-zinc-500">First-Hour Traffic Boost</div>
                    <p className="text-xs text-zinc-600">measured within 60 minutes</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-emerald-400">67%</div>
                    <div className="text-sm text-zinc-500">Better Conversion Rates</div>
                    <p className="text-xs text-zinc-600">on call-to-action clicks</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics Tracked</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white text-sm">Traffic Analysis</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">•</span>
                            <span>Initial 24-hour traffic by publish time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">•</span>
                            <span>Peak engagement window identification</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">•</span>
                            <span>Day-of-week performance trends</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">•</span>
                            <span>Time-to-first-engagement metrics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">•</span>
                            <span>Organic search traffic correlation</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white text-sm">Engagement Metrics</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">•</span>
                            <span>Social shares by publish time slot</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">•</span>
                            <span>Comments and user interactions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">•</span>
                            <span>Average time on page by schedule</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">•</span>
                            <span>Bounce rate correlation analysis</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 flex-shrink-0">•</span>
                            <span>Scroll depth and engagement rate</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-800 pt-8">
                    <h4 className="font-semibold text-white mb-4 text-lg">AI vs Manual Scheduling Comparison</h4>
                    <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                      Our dashboard provides detailed comparisons between AI-optimized publishing times 
                      and manually-scheduled content. Export comprehensive reports showing which time 
                      slots generate the highest engagement for your specific audience. Use these insights 
                      to continuously refine your content strategy and maximize ROI.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-black/50 border border-zinc-800 rounded-lg p-4">
                        <div className="text-2xl font-bold text-white mb-1">156+</div>
                        <div className="text-xs text-zinc-500">Active Publishers</div>
                      </div>
                      <div className="bg-black/50 border border-zinc-800 rounded-lg p-4">
                        <div className="text-2xl font-bold text-white mb-1">18.4M</div>
                        <div className="text-xs text-zinc-500">Posts Scheduled</div>
                      </div>
                      <div className="bg-black/50 border border-zinc-800 rounded-lg p-4">
                        <div className="text-2xl font-bold text-white mb-1">97.3%</div>
                        <div className="text-xs text-zinc-500">On-Time Rate</div>
                      </div>
                      <div className="bg-black/50 border border-zinc-800 rounded-lg p-4">
                        <div className="text-2xl font-bold text-white mb-1">4.8/5</div>
                        <div className="text-xs text-zinc-500">User Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Use Cases */}
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                💼 Who Benefits Most
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Perfect for Every Content Strategy
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Smart scheduling adapts to your specific publishing needs and audience behavior.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white">SaaS Startups</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Focus on building your product while AI handles content publishing. Schedule 
                    blog posts, product updates, and documentation at times when your developer 
                    audience is most active (typically 9-11 AM EST for B2B SaaS).
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-500">
                    <li>✓ Hands-off automation for small teams</li>
                    <li>✓ Optimize for developer timezones</li>
                    <li>✓ Product update synchronization</li>
                    <li>✓ Integration with changelog tools</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl mb-4">📰</div>
                  <h3 className="text-2xl font-bold text-white">Content Publishers</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Manage multiple blogs, news sites, or media properties with centralized scheduling. 
                    Bulk upload content calendars, set publishing frequencies (3x/day, 5x/week), and 
                    maintain consistent output without manual intervention.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-500">
                    <li>✓ Multi-site content coordination</li>
                    <li>✓ High-volume publishing (50+ posts/week)</li>
                    <li>✓ RSS feed auto-generation</li>
                    <li>✓ Editorial workflow integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-white">Marketing Agencies</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Manage content calendars for multiple clients with different target audiences 
                    and timezones. AI optimizes each client's schedule independently based on their 
                    unique traffic patterns and engagement data.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-500">
                    <li>✓ Client-specific optimization</li>
                    <li>✓ White-label reporting dashboards</li>
                    <li>✓ Team collaboration tools</li>
                    <li>✓ Approval workflows and reviews</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h3 className="text-2xl font-bold text-white">E-commerce Brands</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Coordinate blog content with product launches, seasonal campaigns, and promotional 
                    periods. Schedule SEO content to drive organic traffic during peak shopping times 
                    (evenings and weekends for consumer brands).
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-500">
                    <li>✓ Campaign-synchronized publishing</li>
                    <li>✓ Seasonal content scheduling</li>
                    <li>✓ Product launch coordination</li>
                    <li>✓ Shopping behavior optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-2xl font-bold text-white">Thought Leaders</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Build personal brand authority with consistent publishing. AI ensures your insights 
                    reach your audience when they're most receptive. Perfect for founders, consultants, 
                    and industry experts who want regular presence without daily management.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-500">
                    <li>✓ Consistent weekly/bi-weekly cadence</li>
                    <li>✓ LinkedIn synchronization</li>
                    <li>✓ Newsletter integration</li>
                    <li>✓ Cross-platform coordination</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold text-white">Educational Platforms</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Deliver course content, tutorials, and educational resources on predictable schedules. 
                    Maintain engagement with students across different timezones by optimizing for 
                    when learners are most likely to consume educational content.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-500">
                    <li>✓ Course module release scheduling</li>
                    <li>✓ Student timezone optimization</li>
                    <li>✓ Learning platform integration</li>
                    <li>✓ Drip content delivery</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Integration & Technical */}
        <div className="container mx-auto px-6 py-24 bg-zinc-950/50">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🔌 Integrations
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Connect Your Entire Content Stack
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Smart scheduling integrates with your existing tools and workflows seamlessly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                      📊
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Analytics Integration</h3>
                      <p className="text-sm text-zinc-500">Data-driven optimization</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    Connect Google Analytics 4, Plausible, or Fathom Analytics to feed traffic data 
                    into the AI scheduling engine. The system continuously learns from your actual 
                    audience behavior patterns.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ Google Analytics 4 integration</li>
                    <li>✓ Real-time traffic pattern analysis</li>
                    <li>✓ Audience demographic insights</li>
                    <li>✓ Engagement rate tracking</li>
                    <li>✓ Custom event monitoring</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                      📝
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">CMS Compatibility</h3>
                      <p className="text-sm text-zinc-500">Universal publishing support</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    Works with WordPress, Ghost, Webflow, Notion, Contentful, and any platform 
                    with API access. Schedule content from your existing CMS or use our built-in 
                    editor with markdown support.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ WordPress REST API integration</li>
                    <li>✓ Ghost Admin API support</li>
                    <li>✓ Webflow CMS connectivity</li>
                    <li>✓ Headless CMS compatibility</li>
                    <li>✓ Custom API webhooks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                      💬
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Team Collaboration</h3>
                      <p className="text-sm text-zinc-500">Slack & email notifications</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    Get notified when content publishes, when approval is needed, or when 
                    scheduling conflicts arise. Integrate with Slack, Discord, or email for 
                    team-wide visibility into the content calendar.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ Slack publish notifications</li>
                    <li>✓ Email digest summaries</li>
                    <li>✓ Discord webhook support</li>
                    <li>✓ Calendar export (iCal/Google)</li>
                    <li>✓ Team permission management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                      🔧
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Developer API</h3>
                      <p className="text-sm text-zinc-500">Programmatic control</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    Full REST API access for custom integrations. Schedule content programmatically, 
                    query analytics data, and build custom workflows. Comprehensive documentation 
                    and SDKs for Node.js, Python, and PHP.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li>✓ RESTful API with authentication</li>
                    <li>✓ Webhook event streaming</li>
                    <li>✓ Node.js, Python, PHP SDKs</li>
                    <li>✓ GraphQL endpoint (beta)</li>
                    <li>✓ Rate limiting: 10k req/hour</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
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
              Everything you need to know about smart scheduling
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How does smart scheduling determine the best time to publish?",
                a: "Our AI analyzes multiple data sources: your Google Analytics traffic patterns, historical engagement rates, audience demographics and timezones, competitor publishing schedules, and industry benchmarks. The system identifies when your audience is most active and likely to engage. For new sites without historical data, we use industry-specific benchmarks from 10,000+ websites to get you started."
              },
              {
                q: "Can I override the AI suggestions and set manual schedules?",
                a: "Absolutely. Smart scheduling offers three modes: Fully Automatic (AI decides everything), Hybrid (AI suggests, you approve), and Manual (you set fixed schedules). You can also set blackout periods, preferred time windows, minimum gaps between posts, and timezone preferences. The system learns from your overrides to improve future suggestions."
              },
              {
                q: "Does it work across different timezones?",
                a: "Yes. The system automatically detects your audience's geographic distribution and optimizes publishing times for maximum global reach. If 60% of traffic comes from EST and 40% from PST, it finds the overlap window. You can also set primary/secondary timezones and prioritize specific regions for different content types."
              },
              {
                q: "How far in advance can I schedule content?",
                a: "Schedule content up to 12 months in advance. The queue system supports unlimited drafts. You can bulk-upload content via CSV, connect to your CMS, or use our API. The AI continuously optimizes scheduled times based on new analytics data, so a post scheduled for next month will use the most current traffic patterns when published."
              },
              {
                q: "What happens if I have multiple posts scheduled close together?",
                a: "The system enforces minimum spacing between posts (default 4 hours, configurable). If multiple posts target the same optimal time, they're automatically distributed to maintain consistent publishing rhythm. You can set daily post limits, define priority levels for urgent content, and the AI will reorganize the queue to maximize overall engagement."
              },
              {
                q: "Can I track how scheduling affects performance?",
                a: "Yes. The dashboard shows engagement metrics by publish time: traffic in first 24 hours, social shares, time on page, bounce rate, and conversion rates. Compare performance between AI-scheduled vs manually-scheduled posts. See which days/times generate the most engagement for your specific audience. Export reports and use insights to refine your content strategy."
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
                Ready to Optimize Your Publishing Schedule?
              </h2>
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let AI analyze your traffic patterns and automatically publish content when 
                your audience is most engaged. 45% higher engagement guaranteed.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold shadow-lg shadow-emerald-500/20">
                    Start Smart Scheduling
                  </Button>
                </Link>
                <Link href="/saas-founders">
                  <Button size="lg" variant="outline" className="border-zinc-800 hover:bg-zinc-900">
                    Learn More
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-zinc-500 mt-6">
                No credit card required • 12-month advance queue • AI-powered optimization
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
