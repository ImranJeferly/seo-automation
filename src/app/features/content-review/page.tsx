import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Content Review | SEO Automation for SaaS",
  description: "Preview drafts before publishing. Edit AI-generated content, adjust tone, or approve with one click. Full editorial control.",
  keywords: [
    "content review",
    "content approval",
    "content editing",
    "draft preview",
    "editorial workflow",
    "content management",
    "ai content editor",
    "content quality control",
  ],
};

export default function ContentReviewPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Content Review
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Preview drafts before publishing. Edit AI-generated content, adjust tone, or approve with one click.
            </p>
          </div>

          {/* Main Feature Card */}
          <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm mb-12">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Full Control Over Your Content</h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                Automation doesn&apos;t mean losing control. Our content review system lets you preview every draft before it 
                goes live. Make quick edits, adjust the tone, add personal touches, or approve everything with one click. 
                You decide what represents your brand.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Live Preview</h3>
                  <p className="text-zinc-400">
                    See exactly how your content will look on your site before publishing. Preview on desktop and mobile.
                  </p>
                </div>
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">In-line Editing</h3>
                  <p className="text-zinc-400">
                    Make changes directly in the preview. Edit text, adjust formatting, or regenerate specific sections.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">✏️</div>
                <h3 className="text-xl font-semibold mb-3">Rich Text Editor</h3>
                <p className="text-zinc-400">
                  Full-featured editor with formatting options, media embedding, and markdown support.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3">Tone Adjustment</h3>
                <p className="text-zinc-400">
                  Change the writing style on the fly — professional, casual, technical, or conversational.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold mb-3">Quick Approval</h3>
                <p className="text-zinc-400">
                  One-click approval for content that meets your standards. Batch approve multiple drafts at once.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/#pricing">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                Start Reviewing Content
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
