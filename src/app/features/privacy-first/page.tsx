import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Privacy-First | SEO Automation for SaaS",
  description: "No external branding. Your API keys stay secure. GDPR compliant with no data retention. Complete privacy for your SEO operations.",
  keywords: [
    "privacy first seo",
    "gdpr compliant",
    "secure api keys",
    "no data retention",
    "white label seo",
    "privacy compliant",
    "secure seo tool",
    "data privacy",
  ],
  openGraph: {
    title: "Privacy-First | SEO Automation",
    description: "GDPR compliant with no data retention. Your API keys stay secure.",
    url: "https://seoautomation.com/features/privacy-first",
    siteName: "SEO Automation",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Privacy-First",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy-First | SEO Automation",
    description: "Complete privacy and security for your SEO operations.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://seoautomation.com/features/privacy-first",
  },
};

export default function PrivacyFirstPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Privacy-First
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              No external branding. Your API keys stay secure. GDPR compliant with no data retention.
            </p>
          </div>

          {/* Main Feature Card */}
          <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm mb-12">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Your Data, Your Control</h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                In an era where data breaches make headlines daily, we take privacy seriously. Your API keys are encrypted 
                at rest and in transit. We don&apos;t retain your content, don&apos;t share your data with third parties, and comply 
                with GDPR, CCPA, and other privacy regulations. No external branding means your content stays truly yours.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">End-to-End Encryption</h3>
                  <p className="text-zinc-400">
                    All API keys and sensitive data are encrypted using industry-standard AES-256 encryption.
                  </p>
                </div>
                <div className="bg-black border border-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Zero Data Retention</h3>
                  <p className="text-zinc-400">
                    We don&apos;t store your generated content or analytics data. Everything stays on your infrastructure.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">GDPR Compliant</h3>
                <p className="text-zinc-400">
                  Fully compliant with GDPR, CCPA, and other privacy regulations. Right to erasure and data portability included.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🏷️</div>
                <h3 className="text-xl font-semibold mb-3">White Label</h3>
                <p className="text-zinc-400">
                  No &quot;Powered by&quot; badges or external branding. Your content appears 100% as your own creation.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800/50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-3">Secure API Keys</h3>
                <p className="text-zinc-400">
                  Your OpenAI, Ahrefs, and other API keys are encrypted and never exposed in client-side code.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/#pricing">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                Start with Privacy
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
