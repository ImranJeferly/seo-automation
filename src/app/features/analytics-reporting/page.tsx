"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function AnalyticsReportingPage() {
  const [activeMetric, setActiveMetric] = useState<'rankings' | 'traffic' | 'indexing'>('rankings');
  const [activeReport, setActiveReport] = useState<'overview' | 'detailed' | 'custom'>('overview');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Analytics & Reporting - SEO Automation",
          "applicationCategory": "BusinessApplication",
          "description": "Real-time SEO analytics dashboard with keyword ranking tracker, traffic monitoring, indexing status, and automated reporting. Google Search Console integration, custom dashboards, data visualization, and exportable branded reports.",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "197",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "178"
          },
          "featureList": [
            "Real-time keyword ranking tracker",
            "Google Search Console integration",
            "Traffic and impression monitoring",
            "Click-through rate (CTR) analysis",
            "Indexing status dashboard",
            "Custom report builder",
            "Automated PDF report generation",
            "Data visualization and charts",
            "Competitor ranking comparison",
            "Historical trend analysis",
            "White-label reporting",
            "API access for custom integrations"
          ]
        })}
      </script>

      <script type="application/ld+json" suppressHydrationWarning>
        {`{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can I edit AI-generated content before publishing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, absolutely. Every draft enters your review queue where you can make unlimited edits. Use the rich text editor to modify text, formatting, headings, and structure. Regenerate specific sections with AI if needed. Add images, videos, code blocks, and custom HTML. All changes save automatically with full version history. Nothing publishes without your explicit approval."
              }
            },
            {
              "@type": "Question",
              "name": "How does the tone adjustment feature work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Select any paragraph or section and choose a different tone: Professional (formal, business-focused), Casual (conversational, friendly), Technical (detailed, expert-level), or Conversational (engaging, personal). The AI rewrites the content in the new tone while preserving facts and key points. Review the changes side-by-side before accepting. You can also set a default tone for all future content."
              }
            },
            {
              "@type": "Question",
              "name": "What's included in the live preview?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The live preview shows exactly how your content will appear on your website. Switch between desktop, tablet, and mobile views instantly. See rendered HTML with your site's CSS styling applied. Preview meta descriptions, title tags, OpenGraph images, and structured data. Test internal links and anchor navigation. The preview updates in real-time as you edit with <500ms latency."
              }
            },
            {
              "@type": "Question",
              "name": "Can multiple team members review content simultaneously?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, with collaborative editing. Multiple editors can review the same draft with presence indicators showing who's viewing. Leave comments on specific paragraphs for discussion. Suggest changes that require approval. Track edit history showing who made each change and when. Set up approval chains requiring sign-off from content lead, SEO specialist, and brand manager before publishing."
              }
            },
            {
              "@type": "Question",
              "name": "Does the review system check for SEO issues?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, built-in SEO analysis runs automatically. Checks title length (50-60 chars), meta description (150-160 chars), keyword density, heading structure (single H1, proper H2-H6 hierarchy), image alt text coverage, internal linking opportunities, and readability score (Flesch-Kincaid). Real-time score updates as you edit with specific suggestions for improvement. Export SEO reports for stakeholders."
              }
            },
            {
              "@type": "Question",
              "name": "How do batch approvals work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Filter your review queue by status, date, author, or topic. Select multiple drafts (up to 50 at once) and approve them simultaneously. Useful for approving routine updates, minor corrections, or content from trusted writers. Set conditional auto-approval rules: automatically approve drafts with SEO score >85, no plagiarism flags, and <5% deviation from content brief. Always reviewable in audit logs."
              }
            }
          ]
        }`}
      </script>

      <Navbar />
      <main className="relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="px-4 py-2 mb-6 border-zinc-800 bg-zinc-950 text-zinc-300">
            � Data-Driven Insights
          </Badge>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text">
            Analytics & Reporting Dashboard
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
            Real-time SEO performance tracking with comprehensive keyword rankings, traffic monitoring, indexing status, and automated reporting. Make data-driven decisions with live insights from Google Search Console and Analytics.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">50K+</div>
                <div className="text-zinc-400">Keywords Tracked</div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">10M+</div>
                <div className="text-zinc-400">Monthly Impressions</div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">24 Months</div>
                <div className="text-zinc-400">Historical Data</div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Link href="/signup">
              <Button className="bg-white text-black hover:bg-zinc-200 px-8 py-6 text-lg">
                View Live Demo
              </Button>
            </Link>
            <Link href="#metrics">
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-900 px-8 py-6 text-lg">
                Explore Features
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <p className="text-sm text-zinc-500">
            Tracking 50K+ keywords · 10M+ monthly impressions · 8,900+ active users
          </p>
        </div>
      </div>

      {/* Real-Time Metrics Section */}
      <div className="relative py-20 bg-zinc-950/50" id="metrics">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real-Time Performance Metrics</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Live data from Google Search Console, Analytics, and ranking trackers. Monitor keyword positions, traffic trends, and indexing status with automatic daily updates.
            </p>
          </div>

          {/* Metric Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveMetric('rankings')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeMetric === 'rankings'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              Keyword Rankings
            </button>
            <button
              onClick={() => setActiveMetric('traffic')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeMetric === 'traffic'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              Traffic & CTR
            </button>
            <button
              onClick={() => setActiveMetric('indexing')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeMetric === 'indexing'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              Indexing Status
            </button>
          </div>

          {/* Metrics Content */}
          {activeMetric === 'rankings' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">Keyword Ranking Tracker</h3>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    Track up to 50,000 keywords with daily position updates across all major search engines. Monitor ranking changes with color-coded indicators (green for improvements, red for drops), historical position charts showing 24-month trends, and automated alerts when keywords enter top 3, page 1, or drop out of top 10. Compare your positions against up to 10 competitor domains to identify ranking gaps and opportunities.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Position Tracking</h4>
                      <ul className="space-y-2 text-zinc-400">
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Daily rank updates at 2 AM UTC for all keywords
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          High-priority keywords checked every 6 hours
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          24-month historical data with trend visualization
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Location-based rankings (country, region, city)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Competitive Analysis</h4>
                      <ul className="space-y-2 text-zinc-400">
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Track up to 10 competitor domains simultaneously
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Side-by-side ranking comparison for shared keywords
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Identify keyword gaps and opportunities
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Alerts when competitors enter top 10 for your keywords
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-zinc-200">SERP Features Tracking</h4>
                    <p className="text-zinc-400 mb-4">
                      Monitor which keywords trigger SERP features: <strong className="text-emerald-400">Featured Snippets</strong> (position 0 opportunities), <strong className="text-emerald-400">People Also Ask</strong> (content expansion ideas), <strong className="text-emerald-400">Local Pack</strong> (geographic visibility), <strong className="text-emerald-400">Image Pack</strong> (visual search potential), <strong className="text-emerald-400">Video Carousel</strong> (multimedia content needs).
                    </p>
                    <p className="text-zinc-400">
                      Track your owned SERP features and identify where competitors dominate. Average position improvement: 3.2 positions within 30 days for optimized pages. Automated alerts when you gain or lose featured snippet ownership.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeMetric === 'traffic' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">Traffic & CTR Analysis</h3>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    Complete traffic visibility with Google Search Console integration providing impressions, clicks, click-through rates, and average positions for every page. Identify high-impression, low-CTR keywords that need title tag optimization. Track traffic trends over 30, 60, 90 days with automatic anomaly detection for sudden drops or spikes.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Search Console Data</h4>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        <li>• Total impressions by page and keyword</li>
                        <li>• Click count with trend indicators</li>
                        <li>• CTR percentage with color coding</li>
                        <li>• Average position in search results</li>
                        <li>• Filter by device (desktop, mobile, tablet)</li>
                        <li>• Country and region breakdowns</li>
                        <li>• Search appearance (AMP, rich results)</li>
                        <li>• Sync every 4 hours (48h data latency)</li>
                      </ul>
                    </div>
                    <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Page Performance</h4>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        <li>• Top 100 pages by traffic volume</li>
                        <li>• Landing page conversion tracking</li>
                        <li>• Bounce rate and time on page</li>
                        <li>• Traffic source breakdown (organic, direct, referral)</li>
                        <li>• Internal link flow analysis</li>
                        <li>• Exit rate by page</li>
                        <li>• Page value and revenue attribution</li>
                        <li>• Core Web Vitals per page</li>
                      </ul>
                    </div>
                    <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Optimization Insights</h4>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        <li>• High impressions + low CTR = title optimization</li>
                        <li>• Position 4-10 = page 1 push opportunity</li>
                        <li>• High bounce rate = content relevance issue</li>
                        <li>• Traffic drop alerts via email/Slack</li>
                        <li>• Seasonal trend identification</li>
                        <li>• Keyword cannibalization detection</li>
                        <li>• Content refresh recommendations</li>
                        <li>• A/B test result tracking</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-zinc-200">Traffic Trend Charts</h4>
                    <p className="text-zinc-400 mb-4">
                      Visual line charts showing impressions and clicks over time with <strong className="text-emerald-400">30-day, 60-day, 90-day, and 12-month</strong> views. Compare current period vs. previous period to identify growth or decline patterns. Overlay ranking changes to correlate position movements with traffic impact. Export charts as PNG for reports or presentations.
                    </p>
                    <p className="text-zinc-400">
                      Average CTR by position: Position 1 = <strong className="text-emerald-400">31.7%</strong>, Position 3 = <strong className="text-emerald-400">11.4%</strong>, Position 10 = <strong className="text-emerald-400">2.1%</strong>. Automated suggestions highlight keywords where a 1-position improvement would yield significant traffic gains.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeMetric === 'indexing' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">Indexing Status Dashboard</h3>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    Real-time indexing coverage from Google Search Console showing exactly which pages are indexed, pending, or encountering errors. Track crawl budget usage, identify indexing blockers, and monitor how quickly new content gets discovered. Receive alerts for sudden drops in indexed pages or spikes in coverage errors.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Index Coverage</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Indexed Pages</h5>
                          <p className="text-sm text-zinc-400">
                            Total count of pages successfully indexed and appearing in search results. Color-coded green for healthy status. Historical chart showing indexing velocity over past 90 days.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Submitted Not Indexed</h5>
                          <p className="text-sm text-zinc-400">
                            Pages in sitemap but not indexed. Common reasons: Low quality, duplicate content, blocked by robots.txt, noindex tag. Prioritized list for investigation and fixes.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Crawl Errors</h5>
                          <p className="text-sm text-zinc-400">
                            404 not found, 500 server errors, redirect chains, and timeout issues. Grouped by error type with affected URLs. Export for bulk fixing. Average time to discover: 2-6 hours.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Excluded Pages</h5>
                          <p className="text-sm text-zinc-400">
                            Intentionally excluded via noindex, robots.txt, or canonicalization. Verify these exclusions are correct. Alert if production pages accidentally excluded.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Crawl Efficiency</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Crawl Budget Usage</h5>
                          <p className="text-sm text-zinc-400">
                            Daily crawl requests from Googlebot. Track if you're hitting crawl budget limits. Optimize by removing low-value pages, fixing redirect chains, and improving site speed.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Indexing Speed</h5>
                          <p className="text-sm text-zinc-400">
                            Time from publication to Google indexing. Average site speed: New pages indexed within 3-7 days. Updates to existing pages: 12-48 hours. Track for each page type.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Sitemap Monitoring</h5>
                          <p className="text-sm text-zinc-400">
                            Sitemap submission status, last fetch date, error count. Alerts if sitemap unreachable. Validate URLs before submitting. Track sitemap vs. actual indexed page delta.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Mobile Usability</h5>
                          <p className="text-sm text-zinc-400">
                            Mobile-first indexing issues: Text too small, clickable elements too close, viewport not set, content wider than screen. Fix to improve mobile rankings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-zinc-200">Core Web Vitals Tracking</h4>
                    <p className="text-zinc-400 mb-4">
                      Monitor Google's page experience metrics: <strong className="text-emerald-400">LCP (Largest Contentful Paint)</strong> target &lt;2.5s, <strong className="text-emerald-400">FID (First Input Delay)</strong> target &lt;100ms, <strong className="text-emerald-400">CLS (Cumulative Layout Shift)</strong> target &lt;0.1. Track at URL level and aggregate site-wide. Identify pages failing Core Web Vitals thresholds.
                    </p>
                    <p className="text-zinc-400">
                      Color-coded by performance: <strong className="text-emerald-400">Green = Good</strong> (passing all thresholds), <strong className="text-yellow-400">Yellow = Needs Improvement</strong> (some issues), <strong className="text-red-400">Red = Poor</strong> (critical problems). Prioritize fixes based on traffic value and ranking impact. Integration with PageSpeed Insights for detailed optimization recommendations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Custom Report Builder Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Custom Report Builder</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Generate branded PDF reports with your logo, colors, and custom metrics. Automated scheduling delivers reports to stakeholders weekly, monthly, or on-demand via email.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Executive Summary Reports */}
            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Executive Summary Reports</h3>
                <p className="text-zinc-400 mb-6">
                  High-level KPI dashboard for leadership and stakeholders. Focus on business outcomes: traffic growth percentage, ranking improvements for target keywords, goal completions, revenue attribution. Skip technical details, emphasize ROI and progress toward objectives.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Month-over-month traffic comparison with % change</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Top 10 keyword ranking improvements and drops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Conversion and revenue from organic search</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Visual charts and trend graphs (minimal text)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Detailed Analysis Reports */}
            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00 2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Detailed Analysis Reports</h3>
                <p className="text-zinc-400 mb-6">
                  Comprehensive technical reports for SEO teams and developers. Full keyword position tables, traffic source breakdowns, indexing coverage analysis, Core Web Vitals per page, backlink profile changes, and technical SEO audit results. Includes actionable recommendations and prioritized fix list.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Complete keyword ranking tables with 24-month history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Traffic source analysis (organic, direct, referral, social)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Indexing coverage with error details and fix recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Technical SEO audit with prioritized action items</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900/30 border-zinc-800">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-zinc-200">White-Label & Automated Delivery</h3>
              <p className="text-zinc-400 mb-6">
                Perfect for agencies: Brand reports with your logo, color scheme, and domain. Remove all platform branding. Schedule automated weekly or monthly delivery via email to client contacts. Password-protect PDFs for security. Reports export in PDF, Excel, or CSV formats for further analysis.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="text-sm text-zinc-400">Custom Branding</div>
                </div>
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">�</div>
                  <div className="text-sm text-zinc-400">Auto Scheduling</div>
                </div>
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">�</div>
                  <div className="text-sm text-zinc-400">Password Protected</div>
                </div>
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">�</div>
                  <div className="text-sm text-zinc-400">PDF/Excel/CSV</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Data Integrations Section */}
      <div className="relative py-20 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seamless Data Integrations</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              One-click OAuth connection to Google Search Console and Analytics. Automatic data sync every 4 hours with no manual exports or spreadsheet imports required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Google Search Console</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Impressions, clicks, CTR, position data, index coverage, and Core Web Vitals.
                </p>
                <ul className="space-y-2 text-xs text-zinc-500">
                  <li>• Impressions and clicks by query/page</li>
                  <li>• CTR and average position tracking</li>
                  <li>• Index coverage reports</li>
                  <li>• Mobile usability issues</li>
                  <li>• Core Web Vitals per URL</li>
                  <li>• Sync every 4 hours (48h latency)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00 2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Google Analytics</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Sessions, pageviews, bounce rate, conversions, and behavior flow analysis.
                </p>
                <ul className="space-y-2 text-xs text-zinc-500">
                  <li>• Sessions and pageviews tracking</li>
                  <li>• Bounce rate and time on page</li>
                  <li>• Traffic source breakdown</li>
                  <li>• Goal completions and conversions</li>
                  <li>• User behavior flow visualization</li>
                  <li>• GA4 and Universal Analytics support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">REST API Access</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Pull analytics data into your own dashboards and tools via API.
                </p>
                <ul className="space-y-2 text-xs text-zinc-500">
                  <li>• RESTful API endpoints for all metrics</li>
                  <li>• JSON response format</li>
                  <li>• Rate limits: 10,000 requests/day</li>
                  <li>• API key authentication</li>
                  <li>• Webhook support for real-time alerts</li>
                  <li>• Comprehensive API documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Data Export</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Export all data in CSV, Excel, or JSON formats for custom analysis.
                </p>
                <ul className="space-y-2 text-xs text-zinc-500">
                  <li>• CSV export for spreadsheet analysis</li>
                  <li>• Excel (.xlsx) with formatted tables</li>
                  <li>• JSON for developer integrations</li>
                  <li>• Scheduled exports via email</li>
                  <li>• Custom date ranges and filters</li>
                  <li>• Bulk export all metrics at once</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900/30 border-zinc-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">OAuth Security & Privacy</h3>
              <p className="text-zinc-400 mb-6">
                Industry-standard OAuth 2.0 authentication for Google services. We never store your Google credentials—only secure access tokens with read-only permissions. Revoke access anytime from your Google account settings. All data encrypted in transit (TLS 1.3) and at rest (AES-256). SOC 2 Type II certified for enterprise security compliance.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 text-zinc-200">Read-Only Access</h4>
                  <p className="text-sm text-zinc-400">
                    We only request read permissions from Google Search Console and Analytics. We cannot modify your data, delete properties, or change settings. Complete safety for your accounts.
                  </p>
                </div>
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 text-zinc-200">Token Revocation</h4>
                  <p className="text-sm text-zinc-400">
                    Disconnect integrations anytime from your account settings. Instantly revokes all access tokens. Re-authorize with one click if needed.
                  </p>
                </div>
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 text-zinc-200">Enterprise Compliance</h4>
                  <p className="text-sm text-zinc-400">
                    SOC 2 Type II certified. GDPR and CCPA compliant. All data encrypted (TLS 1.3 in transit, AES-256 at rest). Annual security audits.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-zinc-400">
              Common questions about analytics tracking and reporting
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors">
              <summary className="px-6 py-5 cursor-pointer flex items-center justify-between text-lg font-semibold">
                <span>What metrics are tracked in the analytics dashboard?</span>
                <svg className="w-5 h-5 text-emerald-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="mb-4">
                  We track comprehensive SEO and traffic metrics: <strong className="text-emerald-400">Keyword Rankings</strong> (up to 50,000 keywords, positions 1-100, daily updates, 24-month history), <strong className="text-emerald-400">Google Search Console Data</strong> (impressions, clicks, CTR, average position by page and query), <strong className="text-emerald-400">Google Analytics</strong> (sessions, pageviews, bounce rate, time on page, conversions, traffic sources), <strong className="text-emerald-400">Indexing Status</strong> (indexed pages, coverage errors, crawl budget, mobile usability), <strong className="text-emerald-400">Core Web Vitals</strong> (LCP, FID, CLS per URL), and <strong className="text-emerald-400">Competitor Rankings</strong> (track up to 10 competitor domains).
                </p>
                <p>
                  All metrics updated automatically: keyword rankings daily at 2 AM UTC (high-priority every 6 hours), GSC data every 4 hours with 48-hour latency, GA real-time sync, indexing status continuous monitoring with webhooks. Historical data retained for 24 months for trend analysis.
                </p>
              </div>
            </details>

            <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors">
              <summary className="px-6 py-5 cursor-pointer flex items-center justify-between text-lg font-semibold">
                <span>Can I export reports for clients or stakeholders?</span>
                <svg className="w-5 h-5 text-emerald-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="mb-4">
                  Yes! Generate <strong className="text-emerald-400">branded PDF reports</strong> with your logo, color scheme, and custom domain. Choose between <strong>Executive Summary</strong> reports (high-level KPIs, traffic trends, ranking improvements, visual charts) or <strong>Detailed Analysis</strong> reports (complete keyword tables, traffic sources, indexing coverage, technical audit, actionable recommendations).
                </p>
                <p className="mb-4">
                  <strong className="text-emerald-400">White-label for agencies:</strong> Remove all platform branding, add your agency logo and colors, password-protect PDFs for security. Export in PDF, Excel (.xlsx), or CSV formats.
                </p>
                <p>
                  <strong className="text-emerald-400">Automated scheduling:</strong> Set up weekly, monthly, or custom frequency delivery via email to client contacts. Reports generated and sent automatically overnight. Time zone support ensures timely delivery to international clients.
                </p>
              </div>
            </details>

            <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors">
              <summary className="px-6 py-5 cursor-pointer flex items-center justify-between text-lg font-semibold">
                <span>How often does ranking data update?</span>
                <svg className="w-5 h-5 text-emerald-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="mb-4">
                  <strong className="text-emerald-400">Keyword rankings:</strong> Daily updates at 2 AM UTC for all tracked keywords (up to 50,000). High-priority keywords (you designate) checked every 6 hours for faster detection of significant changes. Historical data retained for 24 months.
                </p>
                <p className="mb-4">
                  <strong className="text-emerald-400">Google Search Console:</strong> Automatic sync every 4 hours pulling latest available data. Note: Google has 48-72 hour delay in reporting impressions/clicks, so most recent 2-3 days may show incomplete data (normal GSC limitation).
                </p>
                <p className="mb-4">
                  <strong className="text-emerald-400">Google Analytics:</strong> Real-time connection with sub-5-minute delay for sessions, pageviews, and active users. Conversion data typically within 15 minutes.
                </p>
                <p>
                  <strong className="text-emerald-400">Indexing status:</strong> Continuous monitoring with webhook alerts when new pages indexed or errors detected. Coverage reports update hourly from Google Search Console API.
                </p>
              </div>
            </details>

            <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors">
              <summary className="px-6 py-5 cursor-pointer flex items-center justify-between text-lg font-semibold">
                <span>Can I track competitor rankings?</span>
                <svg className="w-5 h-5 text-emerald-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="mb-4">
                  Yes! Track <strong className="text-emerald-400">up to 10 competitor domains</strong> simultaneously. See their rankings for your target keywords with side-by-side comparison tables. Identify keyword gaps where competitors rank but you don't (opportunities). Monitor when competitors enter top 10 or page 1 for your important keywords.
                </p>
                <p className="mb-4">
                  <strong className="text-emerald-400">Competitive insights:</strong> Estimated traffic volume, top ranking pages, SERP feature ownership (featured snippets, People Also Ask, image packs), position history trends. Understand which competitors dominate which topics.
                </p>
                <p>
                  <strong className="text-emerald-400">Automated alerts:</strong> Email/Slack notification when competitor enters top 10 for your target keywords, gains featured snippet, or overtakes your position. Set alertthresholds to reduce noise (e.g., only notify for top 100 keywords).
                </p>
              </div>
            </details>

            <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors">
              <summary className="px-6 py-5 cursor-pointer flex items-center justify-between text-lg font-semibold">
                <span>Does the dashboard integrate with Google Search Console and Analytics?</span>
                <svg className="w-5 h-5 text-emerald-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="mb-4">
                  Yes! <strong className="text-emerald-400">One-click OAuth connection</strong> to both Google Search Console and Google Analytics (GA4 and Universal Analytics supported). No manual API keys or technical setup required. Industry-standard OAuth 2.0 with read-only permissions for security.
                </p>
                <p className="mb-4">
                  <strong className="text-emerald-400">Unified dashboard:</strong> All metrics in one place—no switching between multiple Google tools or manual data exports. See GSC impressions/clicks alongside GA sessions/conversions and ranking positions for complete traffic picture. Correlate ranking changes with traffic impact automatically.
                </p>
                <p className="mb-4">
                  <strong className="text-emerald-400">Automatic sync:</strong> GSC data updated every 4 hours, GA real-time connection. Historical data backfilled up to 16 months (GSC limit) or 24 months (GA limit). No spreadsheet exports, CSV imports, or manual data entry required.
                </p>
                <p>
                  <strong className="text-emerald-400">Security & privacy:</strong> We never store your Google credentials—only secure access tokens. Revoke access anytime from your Google account settings. All data encrypted in transit (TLS 1.3) and at rest (AES-256). SOC 2 Type II certified.
                </p>
              </div>
            </details>

            <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors">
              <summary className="px-6 py-5 cursor-pointer flex items-center justify-between text-lg font-semibold">
                <span>Can I create custom dashboards for different stakeholders?</span>
                <svg className="w-5 h-5 text-emerald-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="mb-4">
                  Yes! Create <strong className="text-emerald-400">unlimited custom dashboards</strong> with drag-and-drop widget builder. Mix and match metrics: keyword rankings, traffic charts, indexing status, Core Web Vitals, conversion tracking, competitor comparison—whatever each stakeholder needs to see.
                </p>
                <p className="mb-4">
                  <strong className="text-emerald-400">Dashboard templates:</strong> <strong>Executive Dashboard</strong> (high-level KPIs, monthly trends, goal progress), <strong>SEO Team Dashboard</strong> (keyword rankings, indexing issues, technical audit, optimization opportunities), <strong>Content Team Dashboard</strong> (top performing pages, traffic by topic, engagement metrics), <strong>Developer Dashboard</strong> (Core Web Vitals, crawl errors, page speed, mobile usability).
                </p>
                <p className="mb-4">
                  <strong className="text-emerald-400">Sharing & access:</strong> Generate unique shareable URLs for each dashboard. Password-protect sensitive data. Set auto-refresh intervals (5 min, 15 min, hourly). Stakeholders access via browser—no login required for view-only dashboards.
                </p>
                <p>
                  <strong className="text-emerald-400">Save & reuse:</strong> Save custom dashboard configurations as templates. Apply templates to new projects or clients instantly. Export dashboard snapshots as PNG or PDF for presentations.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-20 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Tracking Your SEO Performance
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto">
            Real-time rankings, traffic monitoring, indexing status, and automated reporting. Make data-driven SEO decisions with comprehensive analytics visibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-lg">
                Get Started Free →
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 px-8 py-6 text-lg">
                Explore All Features
              </Button>
            </Link>
          </div>
          <p className="text-sm text-zinc-500 mt-6">
            14-day free trial · No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </main>
    </div>
  );
}
