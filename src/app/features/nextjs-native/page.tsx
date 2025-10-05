import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Next.js Native Integration | SEO Automation for SaaS",
  description: "Works with App Router, Pages Router, static exports, ISR, and SSG. Zero config required — just npm install and start automating.",
  keywords: [
    "nextjs seo",
    "nextjs app router",
    "nextjs pages router",
    "nextjs static export",
    "isr nextjs",
    "ssg nextjs",
    "nextjs library",
    "nextjs automation",
  ],
};

export default function NextJSNativePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Next.js Native Integration
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Works with App Router, Pages Router, static exports, ISR, and SSG. Zero config required — just npm install.
            </p>
          </div>

          {/* Main Feature Card */}
          <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm mb-12">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Built Specifically for Next.js</h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                Unlike generic SEO tools that require complex integrations, our library is built from the ground up for Next.js. 
                Whether you&apos;re using the new App Router, classic Pages Router, or static exports — everything works seamlessly. 
                No configuration files, no breaking changes, no headaches. Just install and start automating.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Universal Compatibility</h3>
                  <p className="text-zinc-400">
                    Works with Next.js 13+, 14, and 15. Supports both App Router and Pages Router architectures.
                  </p>
                </div>
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Zero Configuration</h3>
                  <p className="text-zinc-400">
                    Install via npm, add your API key, and you&apos;re done. No webpack configs, no middleware setup required.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold mb-3">All Rendering Methods</h3>
                <p className="text-zinc-400">
                  Fully supports SSR, SSG, ISR, and client-side rendering. Choose what works best for your use case.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-semibold mb-3">TypeScript First</h3>
                <p className="text-zinc-400">
                  Built with TypeScript for type safety. Full IntelliSense support and autocompletion in VS Code.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Performance Optimized</h3>
                <p className="text-zinc-400">
                  Minimal bundle size impact. Lazy-loaded components and tree-shaking support for optimal performance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/#pricing">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                Get Started with Next.js
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
