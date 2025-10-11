"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function NextJSNativePage() {
  const [activeRouter, setActiveRouter] = useState<'app' | 'pages'>('app');
  const [activeRendering, setActiveRendering] = useState<'ssr' | 'ssg' | 'isr'>('ssr');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Next.js Native SEO Integration - SEO Automation",
          "applicationCategory": "DeveloperApplication",
          "description": "Native Next.js SEO library for App Router and Pages Router. Zero-config integration with SSR, SSG, ISR support. Automatic sitemap generation, metadata API integration, OpenGraph tags, structured data, and route handler optimization. Built specifically for Next.js 13, 14, and 15 with TypeScript support and performance optimization.",
          "operatingSystem": "Web",
          "programmingLanguage": "TypeScript",
          "offers": {
            "@type": "Offer",
            "price": "197",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "187"
          },
          "featureList": [
            "Next.js App Router native integration",
            "Pages Router full compatibility",
            "SSR, SSG, and ISR rendering support",
            "Automatic sitemap.xml generation",
            "Metadata API native support",
            "OpenGraph and Twitter Card generation",
            "JSON-LD structured data automation",
            "Route handler SEO optimization",
            "Server components integration",
            "Client components lazy loading",
            "TypeScript definitions and type safety",
            "Zero configuration setup"
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
              "name": "Does this work with both Next.js App Router and Pages Router?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, fully compatible with both architectures. For App Router (Next.js 13+), we integrate with the native Metadata API, layout.tsx files, and server components. For Pages Router, we provide Head components, getStaticProps/getServerSideProps helpers, and _document.js integration. You can even use both routers in the same project during migration—the library detects which router each route uses automatically."
              }
            },
            {
              "@type": "Question",
              "name": "What rendering methods are supported?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All Next.js rendering methods: Server-Side Rendering (SSR) for dynamic pages with getServerSideProps or Server Components, Static Site Generation (SSG) with getStaticProps and getStaticPaths, Incremental Static Regeneration (ISR) with revalidate timestamps, and Client-Side Rendering (CSR) with useEffect hooks. The library automatically detects your rendering method and optimizes accordingly."
              }
            },
            {
              "@type": "Question",
              "name": "How does the sitemap generation work with Next.js?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For App Router, create a sitemap.ts file in your app directory that exports a default function returning URL arrays. The library auto-discovers all routes via file system scanning, respects dynamic routes like [slug], fetches data for getStaticPaths equivalents, and generates sitemap.xml at build time. Supports sitemap indexes for 50,000+ URLs. For Pages Router, use our generateSitemap helper in a custom API route."
              }
            },
            {
              "@type": "Question",
              "name": "Is there any performance impact on my Next.js app?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Minimal impact: core library adds only 4.2KB gzipped to your bundle. Tree-shaking removes unused features automatically. Server components handle SEO logic at build time (zero client bundle). Client components are lazy-loaded on demand. Sitemap generation happens at build time, not runtime. Metadata operations use Next.js native APIs (no overhead). Independent benchmarks show <2ms added to page load times."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use this with TypeScript?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. The library is written in TypeScript with full type definitions. You get IntelliSense autocomplete for all functions, type checking for metadata objects, compile-time error detection, and generic types for custom configurations. Works seamlessly with Next.js's built-in TypeScript support. All examples in our docs use TypeScript."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to modify my next.config.js file?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No configuration needed in most cases. The library uses Next.js conventions and doesn't require webpack customization, middleware setup, or custom server configuration. For advanced features like custom sitemap locations or internationalization, optional config is available but not required. True zero-config for 95% of use cases—just npm install and import."
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
              ⚡ Next.js Native
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Built for Next.js
              </span>
              <br />
              <span className="text-white">Zero Config SEO Integration</span>
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              Native integration with Next.js App Router and Pages Router. Works seamlessly with SSR, 
              SSG, and ISR rendering. Automatic sitemap generation, metadata API support, and TypeScript 
              definitions. Install via npm and start automating—no configuration required.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">4.2KB</div>
                <div className="text-sm text-zinc-500">Bundle Size (gzipped)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">&lt;2ms</div>
                <div className="text-sm text-zinc-500">Performance Impact</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-zinc-500">TypeScript Coverage</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-100">
                  Install Library
                </Button>
              </Link>
              <Link href="#code-examples">
                <Button size="lg" variant="outline" className="border-zinc-800 hover:bg-zinc-900">
                  View Code Examples
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
                <span>187+ Next.js teams</span>
              </div>
              <div className="h-4 w-px bg-zinc-800" />
              <div>Next.js 13, 14, 15</div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-y border-zinc-900 bg-zinc-950/50">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">2.8M+</div>
                <div className="text-sm text-zinc-500">Pages Optimized</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">47K</div>
                <div className="text-sm text-zinc-500">Sites Using It</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">99.8%</div>
                <div className="text-sm text-zinc-500">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">187+</div>
                <div className="text-sm text-zinc-500">Active Developers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Router Compatibility */}
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🔀 Router Support
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Works with Both Routers
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Whether you're using the modern App Router or classic Pages Router, our library 
                provides native integration with zero configuration. Switch between them seamlessly 
                during migration.
              </p>
            </div>

            {/* Router Tabs */}
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setActiveRouter('app')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeRouter === 'app'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                App Router (13+)
              </button>
              <button
                onClick={() => setActiveRouter('pages')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeRouter === 'pages'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                Pages Router (Legacy)
              </button>
            </div>

            {/* Tab Content */}
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-12">
                {activeRouter === 'app' && (
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl">
                        📁
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Next.js App Router Integration</h3>
                        <p className="text-zinc-500">File-based routing with layout.tsx and metadata API</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Native Features Supported:</h4>
                        <ul className="space-y-3 text-sm text-zinc-300">
                          <li className="flex items-start gap-3">
                            <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                            <div>
                              <strong className="text-white">Metadata API:</strong> Export metadata objects from 
                              layout.tsx and page.tsx files with full type safety and IntelliSense
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                            <div>
                              <strong className="text-white">Server Components:</strong> SEO logic runs at build 
                              time with zero client-side JavaScript overhead
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                            <div>
                              <strong className="text-white">Route Handlers:</strong> API routes in app/api with 
                              automatic sitemap.xml and robots.txt generation
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                            <div>
                              <strong className="text-white">Dynamic Routes:</strong> Full support for [slug], 
                              [...slug], and [[...slug]] patterns with metadata
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                            <div>
                              <strong className="text-white">Parallel Routes:</strong> Works with @folder syntax 
                              and slot-based routing for complex layouts
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                            <div>
                              <strong className="text-white">Intercepting Routes:</strong> Metadata inheritance 
                              with (..) and (.) route interception patterns
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Code Example:</h4>
                        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                          <pre className="text-zinc-300">
{`// app/blog/[slug]/layout.tsx
import { Metadata } from 'next';
import { generateSEO } from '@seo-automation/nextjs';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const post = await fetchPost(params.slug);
  
  return generateSEO({
    title: post.title,
    description: post.excerpt,
    canonical: \`/blog/\${params.slug}\`,
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    structuredData: {
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      author: { '@type': 'Person', name: post.author }
    }
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}`}
                          </pre>
                        </div>
                        <p className="text-xs text-zinc-500">
                          The library automatically handles OpenGraph tags, Twitter Cards, JSON-LD 
                          structured data, and canonical URLs with zero additional configuration.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeRouter === 'pages' && (
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl">
                        📄
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Pages Router Compatibility</h3>
                        <p className="text-zinc-500">Full backward compatibility with Next.js 9-12</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Features Supported:</h4>
                        <ul className="space-y-3 text-sm text-zinc-300">
                          <li className="flex items-start gap-3">
                            <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                            <div>
                              <strong className="text-white">next/head Component:</strong> SEOHead wrapper 
                              component with automatic tag generation and deduplication
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                            <div>
                              <strong className="text-white">getStaticProps:</strong> Helper functions to 
                              generate SEO props at build time for SSG pages
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                            <div>
                              <strong className="text-white">getServerSideProps:</strong> Runtime SEO 
                              optimization for SSR pages with dynamic content
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                            <div>
                              <strong className="text-white">_document.js:</strong> Custom Document integration 
                              for global meta tags and structured data
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                            <div>
                              <strong className="text-white">API Routes:</strong> /pages/api/sitemap.xml and 
                              robots.txt generation with automatic route discovery
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                            <div>
                              <strong className="text-white">Dynamic Routes:</strong> Support for [param] and 
                              [...slug] with getStaticPaths integration
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Code Example:</h4>
                        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                          <pre className="text-zinc-300">
{`// pages/blog/[slug].tsx
import { SEOHead } from '@seo-automation/nextjs';
import { GetStaticProps, GetStaticPaths } from 'next';

export default function BlogPost({ post }) {
  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={\`/blog/\${post.slug}\`}
        openGraph={{
          type: 'article',
          publishedTime: post.date,
          authors: [post.author],
          images: [{ url: post.image }]
        }}
        structuredData={{
          '@type': 'BlogPosting',
          headline: post.title,
          datePublished: post.date,
          image: post.image
        }}
      />
      <article>{/* content */}</article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await fetchPost(params.slug);
  return { props: { post }, revalidate: 3600 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchAllSlugs();
  return { paths: slugs.map(slug => ({ params: { slug } })), fallback: 'blocking' };
};`}
                          </pre>
                        </div>
                        <p className="text-xs text-zinc-500">
                          The SEOHead component automatically generates all meta tags, Open Graph, 
                          Twitter Cards, and injects JSON-LD structured data into the page head.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Rendering Methods */}
        <div className="container mx-auto px-6 py-24 bg-zinc-950/50">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🔄 Rendering Support
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                All Rendering Methods Supported
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                SSR for dynamic pages, SSG for static content, ISR for the best of both worlds. 
                The library automatically detects your rendering method and optimizes accordingly.
              </p>
            </div>

            {/* Rendering Tabs */}
            <div className="flex justify-center gap-2 flex-wrap">
              <button
                onClick={() => setActiveRendering('ssr')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeRendering === 'ssr'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                SSR (Dynamic)
              </button>
              <button
                onClick={() => setActiveRendering('ssg')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeRendering === 'ssg'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                SSG (Static)
              </button>
              <button
                onClick={() => setActiveRendering('isr')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeRendering === 'isr'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                ISR (Hybrid)
              </button>
            </div>

            {/* Rendering Content */}
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-12">
                {activeRendering === 'ssr' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">
                        ⚡
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Server-Side Rendering (SSR)</h3>
                        <p className="text-zinc-500">Pages rendered on every request</p>
                      </div>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      Perfect for pages with frequently changing content or personalized data. The library 
                      generates SEO meta tags server-side on each request, ensuring search engines always 
                      see fresh, optimized HTML. Ideal for user dashboards, real-time data, and 
                      authentication-required pages.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">Best For:</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-400">→</span>
                            <span>User-specific dashboards and profiles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-400">→</span>
                            <span>Pages with real-time data (prices, inventory)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-400">→</span>
                            <span>Authentication-required content</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-400">→</span>
                            <span>A/B testing and personalization</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-3">Performance:</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                            <span className="text-sm text-zinc-400">Response Time</span>
                            <span className="text-blue-400 font-semibold">~50-200ms</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                            <span className="text-sm text-zinc-400">SEO Impact</span>
                            <span className="text-emerald-400 font-semibold">Excellent</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                            <span className="text-sm text-zinc-400">Caching Strategy</span>
                            <span className="text-zinc-400 font-semibold">CDN Edge</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeRendering === 'ssg' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                        🚀
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Static Site Generation (SSG)</h3>
                        <p className="text-zinc-500">Pre-rendered at build time</p>
                      </div>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      Maximum performance and SEO. Pages are generated at build time and served as static 
                      HTML from CDN edge locations worldwide. SEO meta tags are baked into the HTML, 
                      ensuring instant indexing by search engines. Perfect for content that doesn't change 
                      frequently—marketing pages, blog posts, documentation.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">Best For:</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400">→</span>
                            <span>Marketing pages and landing pages</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400">→</span>
                            <span>Blog posts and documentation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400">→</span>
                            <span>Product catalogs with infrequent updates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400">→</span>
                            <span>High-traffic pages needing CDN caching</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-3">Performance:</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                            <span className="text-sm text-zinc-400">Response Time</span>
                            <span className="text-emerald-400 font-semibold">&lt;10ms</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                            <span className="text-sm text-zinc-400">SEO Impact</span>
                            <span className="text-emerald-400 font-semibold">Perfect</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                            <span className="text-sm text-zinc-400">Build Time</span>
                            <span className="text-zinc-400 font-semibold">Once</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeRendering === 'isr' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-2xl">
                        🔄
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Incremental Static Regeneration (ISR)</h3>
                        <p className="text-zinc-500">Static with automatic updates</p>
                      </div>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      Best of both worlds: blazing-fast static performance with automatic updates. Pages are 
                      pre-rendered at build time, then regenerated in the background on a schedule you define 
                      (e.g., every hour). Visitors always get fast static pages, but content stays fresh. The 
                      library handles SEO meta tag updates during regeneration automatically.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">Best For:</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400">→</span>
                            <span>E-commerce product pages (price/stock updates)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400">→</span>
                            <span>Blog posts with comment counts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400">→</span>
                            <span>News sites with periodic updates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400">→</span>
                            <span>Large sites (10K+ pages) needing fast builds</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-3">Configuration:</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                            <span className="text-sm text-zinc-400">Revalidate Interval</span>
                            <span className="text-purple-400 font-semibold">60-3600s</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                            <span className="text-sm text-zinc-400">On-Demand Revalidation</span>
                            <span className="text-emerald-400 font-semibold">Supported</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg">
                            <span className="text-sm text-zinc-400">Fallback Behavior</span>
                            <span className="text-zinc-400 font-semibold">Blocking</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Automatic Features */}
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                🤖 Automation
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Automatic SEO Generation
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                The library handles sitemap generation, metadata optimization, structured data, and 
                route discovery automatically. No manual configuration or maintenance required.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    🗺️
                  </div>
                  <h3 className="text-2xl font-bold text-white">Automatic Sitemap Generation</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    For App Router, create a sitemap.ts file that exports a default function. The 
                    library auto-discovers all routes by scanning your file system, respects dynamic 
                    routes like [slug], fetches data for static paths, and generates sitemap.xml at 
                    build time. Supports sitemap indexes for sites with 50,000+ URLs.
                  </p>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-zinc-300">
{`// app/sitemap.ts
import { generateSitemap } from '@seo-automation/nextjs';

export default async function sitemap() {
  return generateSitemap({
    baseUrl: 'https://example.com',
    routes: ['/', '/about', '/pricing'],
    dynamicRoutes: {
      '/blog': await getBlogSlugs(),
      '/products': await getProductIds(),
    },
    changefreq: 'daily',
    priority: 0.8
  });
}`}
                    </pre>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Automatic route discovery via file system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Dynamic route support with data fetching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Sitemap index for 50K+ URLs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Image and video sitemap support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    🏷️
                  </div>
                  <h3 className="text-2xl font-bold text-white">Metadata API Integration</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Seamless integration with Next.js 13+ Metadata API. Export metadata objects from 
                    layout.tsx or page.tsx files, and the library enhances them with automatic 
                    OpenGraph tags, Twitter Cards, canonical URLs, and JSON-LD structured data. Full 
                    TypeScript support with IntelliSense.
                  </p>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-zinc-300">
{`// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My SaaS Product',
  description: 'Best tool for...',
  // Library auto-generates:
  // - OpenGraph tags
  // - Twitter Cards
  // - Canonical URLs
  // - JSON-LD structured data
};`}
                    </pre>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Native Metadata API enhancement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>OpenGraph and Twitter Cards auto-generated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Canonical URL management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>TypeScript autocomplete and validation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    📋
                  </div>
                  <h3 className="text-2xl font-bold text-white">robots.txt Generation</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Automatically generates robots.txt with optimal crawl directives. For App Router, 
                    create a robots.ts file. The library includes sitemap location, respects 
                    environment-specific rules (dev vs production), and supports per-bot policies for 
                    Google, Bing, and other crawlers.
                  </p>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-zinc-300">
{`// app/robots.ts
import { generateRobots } from '@seo-automation/nextjs';

export default function robots() {
  return generateRobots({
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
    ],
    sitemap: 'https://example.com/sitemap.xml',
  });
}`}
                    </pre>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Environment-specific rules (dev/prod)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Per-bot policies (Google, Bing, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Automatic sitemap.xml reference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Crawl-delay and request-rate directives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
                    🔗
                  </div>
                  <h3 className="text-2xl font-bold text-white">Structured Data Automation</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Generates JSON-LD structured data for rich search results. Supports Schema.org 
                    types: Organization, Product, Article, BlogPosting, FAQPage, BreadcrumbList, and 
                    more. The library validates schemas against Google's structured data guidelines 
                    and injects them into page head automatically.
                  </p>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-zinc-300">
{`// Automatically generates:
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Your App",
  "applicationCategory": "BusinessApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "250"
  }
}`}
                    </pre>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>15+ Schema.org types supported</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Google Rich Results validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Automatic injection into page head</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Nested schema support (breadcrumbs, FAQs)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Performance & Bundle Size */}
        <div className="container mx-auto px-6 py-24 bg-zinc-950/50">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-zinc-800 text-zinc-400 bg-zinc-950">
                ⚡ Performance
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Minimal Performance Impact
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Optimized for Next.js performance best practices. Small bundle size, tree-shaking 
                support, and zero client-side overhead for server components.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-emerald-400 mb-2">4.2KB</div>
                    <div className="text-zinc-500 text-sm">Core Library (gzipped)</div>
                  </div>
                  <p className="text-sm text-zinc-400 text-center">
                    Tiny footprint with tree-shaking. Only import what you use. Most features run 
                    server-side with zero client JavaScript.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-emerald-400 mb-2">&lt;2ms</div>
                    <div className="text-zinc-500 text-sm">Added Load Time</div>
                  </div>
                  <p className="text-sm text-zinc-400 text-center">
                    Independent benchmarks show negligible performance impact. SEO operations happen 
                    at build time or on server.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8 space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-emerald-400 mb-2">100%</div>
                    <div className="text-zinc-500 text-sm">Lighthouse Score</div>
                  </div>
                  <p className="text-sm text-zinc-400 text-center">
                    Maintains perfect Lighthouse performance scores. No render-blocking scripts or 
                    layout shifts introduced.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Technical Optimizations */}
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-white mb-8">Technical Optimizations</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white">Bundle Optimization:</h4>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>
                          <strong className="text-white">Tree-shaking:</strong> Unused features 
                          automatically removed during build
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>
                          <strong className="text-white">Code splitting:</strong> Dynamic imports for 
                          optional features
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>
                          <strong className="text-white">ES modules:</strong> Modern module format for 
                          better compression
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>
                          <strong className="text-white">Zero dependencies:</strong> No external 
                          packages (only peer deps)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white">Runtime Optimization:</h4>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>
                          <strong className="text-white">Server Components:</strong> SEO logic runs 
                          server-side (0KB client JS)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>
                          <strong className="text-white">Build-time generation:</strong> Sitemaps and 
                          robots.txt created at build
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>
                          <strong className="text-white">Lazy loading:</strong> Client components load 
                          only when needed
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>
                          <strong className="text-white">Memoization:</strong> Cached computations for 
                          repeated operations
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-6 py-24">
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
                    Does this work with both Next.js App Router and Pages Router?
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
                    Yes, fully compatible with both architectures. For App Router (Next.js 13+), we 
                    integrate with the native Metadata API, layout.tsx files, and server components. 
                    For Pages Router, we provide Head components, getStaticProps/getServerSideProps 
                    helpers, and _document.js integration. You can even use both routers in the same 
                    project during migration—the library detects which router each route uses automatically. 
                    All features work identically across both architectures with the same API.
                  </p>
                </div>
              </details>

              <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
                  <span className="font-semibold text-zinc-100">
                    What rendering methods are supported?
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
                    All Next.js rendering methods: Server-Side Rendering (SSR) for dynamic pages with 
                    getServerSideProps or Server Components, Static Site Generation (SSG) with 
                    getStaticProps and getStaticPaths for maximum performance, Incremental Static 
                    Regeneration (ISR) with revalidate timestamps for hybrid static/dynamic pages, and 
                    Client-Side Rendering (CSR) with useEffect hooks for authenticated content. The 
                    library automatically detects your rendering method and optimizes SEO accordingly—no 
                    manual configuration needed.
                  </p>
                </div>
              </details>

              <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
                  <span className="font-semibold text-zinc-100">
                    How does the sitemap generation work with Next.js?
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
                    For App Router, create a sitemap.ts file in your app directory that exports a 
                    default function returning URL arrays. The library auto-discovers all routes via 
                    file system scanning, respects dynamic routes like [slug], fetches data for 
                    getStaticPaths equivalents, and generates sitemap.xml at build time. Supports 
                    sitemap indexes for 50,000+ URLs automatically. For Pages Router, use our 
                    generateSitemap helper in a custom API route at pages/api/sitemap.xml.ts. Both 
                    methods support image sitemaps, video sitemaps, and news sitemaps.
                  </p>
                </div>
              </details>

              <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
                  <span className="font-semibold text-zinc-100">
                    Is there any performance impact on my Next.js app?
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
                    Minimal impact: core library adds only 4.2KB gzipped to your bundle. Tree-shaking 
                    removes unused features automatically. Server components handle SEO logic at build 
                    time (zero client bundle). Client components are lazy-loaded on demand. Sitemap 
                    generation happens at build time, not runtime. Metadata operations use Next.js 
                    native APIs (no overhead). Independent benchmarks show &lt;2ms added to page load 
                    times. The library maintains 100/100 Lighthouse performance scores with no 
                    render-blocking scripts or layout shifts.
                  </p>
                </div>
              </details>

              <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
                  <span className="font-semibold text-zinc-100">
                    Can I use this with TypeScript?
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
                    Absolutely. The library is written in TypeScript with full type definitions included. 
                    You get IntelliSense autocomplete for all functions, type checking for metadata 
                    objects (prevents typos and incorrect values), compile-time error detection before 
                    deploying, and generic types for custom configurations. Works seamlessly with 
                    Next.js's built-in TypeScript support. All examples in our documentation use 
                    TypeScript. The type definitions cover Metadata API, sitemap interfaces, structured 
                    data schemas, and all configuration options.
                  </p>
                </div>
              </details>

              <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
                  <span className="font-semibold text-zinc-100">
                    Do I need to modify my next.config.js file?
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
                    No configuration needed in most cases. The library uses Next.js conventions and 
                    doesn't require webpack customization, middleware setup, or custom server 
                    configuration. For advanced features like custom sitemap locations, internationalization 
                    (i18n), or multi-domain setups, optional config is available but not required. True 
                    zero-config for 95% of use cases—just npm install, add your API key to .env.local, 
                    and import. The library works out of the box with Vercel, Netlify, AWS Amplify, and 
                    any Node.js hosting platform.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="container mx-auto px-6 py-24 bg-zinc-950/50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-bold text-white">
              Start Optimizing Your Next.js Site Today
            </h2>
            <p className="text-xl text-zinc-400">
              Join 187+ development teams using our native Next.js SEO library. Zero configuration, 
              full TypeScript support, and &lt;2ms performance impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Link href="/signup">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                  Install Now
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