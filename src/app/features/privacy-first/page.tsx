"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function PrivacyFirstPage() {
  const [activeCompliance, setActiveCompliance] = useState<'gdpr' | 'ccpa' | 'soc2'>('gdpr');
  const [activePrivacy, setActivePrivacy] = useState<'encryption' | 'anonymization' | 'retention'>('encryption');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Privacy-First SEO - SEO Automation",
          "applicationCategory": "BusinessApplication",
          "description": "Privacy-focused SEO automation with zero tracking scripts, GDPR/CCPA compliance, end-to-end encryption, local data storage, no third-party cookies, cookie-less analytics, and complete data ownership. SOC 2 Type II certified with AES-256 encryption, anonymized analytics, automatic data deletion, and right to erasure. No external branding, secure API key storage, and privacy-first architecture built for compliance-conscious businesses.",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "197",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "156"
          },
          "featureList": [
            "Zero tracking scripts or pixels",
            "GDPR and CCPA compliant by design",
            "End-to-end AES-256 encryption",
            "Local data storage (no cloud retention)",
            "Cookie-less analytics alternative",
            "No third-party cookies or trackers",
            "Anonymized user data processing",
            "Automatic data deletion policies",
            "Right to erasure (GDPR Article 17)",
            "Data portability (export all data)",
            "SOC 2 Type II certified",
            "Secure API key vault storage",
            "No external branding or watermarks",
            "Privacy policy generator",
            "Consent management tools",
            "Audit logs for compliance"
          ]
        })}
      </script>

      <Navbar />
      <main className="relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="px-4 py-2 mb-6 border-zinc-800 bg-zinc-950 text-zinc-300">
            🔒 Privacy by Design
          </Badge>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text">
            Privacy-First SEO Automation
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
            Zero tracking scripts, GDPR/CCPA compliant by design, end-to-end encryption, and complete data ownership. Build organic traffic without compromising user privacy or collecting unnecessary data. No cookies, no trackers, no surveillance—just clean SEO.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">Zero</div>
                <div className="text-zinc-400">Tracking Scripts</div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                <div className="text-zinc-400">GDPR Compliant</div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">AES-256</div>
                <div className="text-zinc-400">Data Encryption</div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Link href="/signup">
              <Button className="bg-white text-black hover:bg-zinc-200 px-8 py-6 text-lg">
                Start Privacy-First
              </Button>
            </Link>
            <Link href="#compliance">
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-900 px-8 py-6 text-lg">
                View Compliance
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <p className="text-sm text-zinc-500">
            SOC 2 Type II certified · GDPR & CCPA compliant · Zero data retention · 7,200+ privacy-conscious users
          </p>
        </div>
      </div>

      {/* Privacy Architecture Section */}
      <div className="relative py-20 bg-zinc-950/50" id="compliance">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Privacy-First Architecture</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Built from the ground up with privacy as the foundation. No retrofitted privacy features—every component designed for data minimization and user protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Zero Tracking</h3>
                <p className="text-zinc-400 text-sm">
                  No Google Analytics, Facebook Pixel, or third-party trackers. No cookies, no fingerprinting, no surveillance capitalism.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">End-to-End Encryption</h3>
                <p className="text-zinc-400 text-sm">
                  AES-256 encryption for data at rest, TLS 1.3 for data in transit. Your API keys and content encrypted with your unique key.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Local Storage</h3>
                <p className="text-zinc-400 text-sm">
                  Content and analytics stored locally on your infrastructure. No cloud data retention, no backup copies on our servers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Auto-Delete</h3>
                <p className="text-zinc-400 text-sm">
                  Automatic data deletion after 30 days (configurable). Temporary data purged immediately. No indefinite data retention.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Compliance Standards Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compliance Standards</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Meet global privacy regulations without legal teams or compliance consultants. GDPR, CCPA, and SOC 2 compliance built-in with automated enforcement.
            </p>
          </div>

          {/* Compliance Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveCompliance('gdpr')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCompliance === 'gdpr'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              GDPR (EU)
            </button>
            <button
              onClick={() => setActiveCompliance('ccpa')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCompliance === 'ccpa'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              CCPA (California)
            </button>
            <button
              onClick={() => setActiveCompliance('soc2')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCompliance === 'soc2'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              SOC 2 Type II
            </button>
          </div>

          {/* Compliance Content */}
          {activeCompliance === 'gdpr' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">GDPR Compliance (General Data Protection Regulation)</h3>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    Full compliance with EU's General Data Protection Regulation. All 7 principles of GDPR enforced by default: lawfulness/fairness/transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity/confidentiality, and accountability. No need to hire Data Protection Officers or legal consultants—compliance is automatic.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">GDPR Rights Enforced:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Right to Access (Article 15):</strong>
                            <span className="text-zinc-400"> Export all your data in machine-readable format (JSON/CSV) at any time via dashboard or API.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Right to Erasure (Article 17):</strong>
                            <span className="text-zinc-400"> One-click account deletion removes all data permanently within 24 hours. No backups retained.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Right to Rectification (Article 16):</strong>
                            <span className="text-zinc-400"> Edit any personal data directly from your dashboard. Changes reflected immediately.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Right to Restriction (Article 18):</strong>
                            <span className="text-zinc-400"> Pause data processing without deleting account. Content stays but no new processing occurs.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Right to Portability (Article 20):</strong>
                            <span className="text-zinc-400"> Export data to competitors' platforms using standard formats. No vendor lock-in.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Right to Object (Article 21):</strong>
                            <span className="text-zinc-400"> Opt out of any data processing activities including analytics and marketing.</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4">Technical Measures:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Data Minimization:</strong>
                            <span className="text-zinc-400"> Only collect email, password, and content. No IP addresses, browser fingerprints, or device IDs.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Pseudonymization:</strong>
                            <span className="text-zinc-400"> Internal user IDs separated from identifying information. Can't link data to individuals.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Encryption at Rest:</strong>
                            <span className="text-zinc-400"> AES-256 encryption for all stored data. Separate encryption keys per customer (not shared).</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Access Controls:</strong>
                            <span className="text-zinc-400"> Role-based permissions. Multi-factor authentication. Audit logs for all data access.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Data Processing Records:</strong>
                            <span className="text-zinc-400"> Article 30 compliant records of processing activities available for audit.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Breach Notification:</strong>
                            <span className="text-zinc-400"> Automated 72-hour breach notification to supervisory authorities and affected users.</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeCompliance === 'ccpa' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">CCPA Compliance (California Consumer Privacy Act)</h3>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    Full compliance with California's privacy law (CCPA/CPRA). Designed for SaaS businesses serving California residents. No sale of personal information, transparent data practices, and consumer rights enforced by default. No need for "Do Not Sell My Info" links—we don't sell data, period.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">CCPA Rights Enforced:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Right to Know:</strong>
                            <span className="text-zinc-400"> View all personal information collected, sources, purposes, and third parties with access. Dashboard shows everything in real-time.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Right to Delete:</strong>
                            <span className="text-zinc-400"> Permanent deletion of all personal data within 45 days (we do it in 24 hours). No exceptions, no retention.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Right to Opt-Out:</strong>
                            <span className="text-zinc-400"> We don't sell data, so no opt-out needed. But you can restrict sharing with AI providers if desired.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Right to Non-Discrimination:</strong>
                            <span className="text-zinc-400"> Same pricing and service quality regardless of privacy choices. No penalties for exercising rights.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Right to Correct:</strong>
                            <span className="text-zinc-400"> Fix inaccurate personal information directly from dashboard. No verification delays—instant updates.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Right to Limit Use (CPRA):</strong>
                            <span className="text-zinc-400"> Restrict sensitive data processing. Control how your content is used for AI training or analytics.</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4">Business Practices:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">No Sale of Data:</strong>
                            <span className="text-zinc-400"> We never sell, rent, or share personal information with third parties for monetary benefit. Zero revenue from data sales.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Privacy Policy Transparency:</strong>
                            <span className="text-zinc-400"> Plain-language privacy policy updated annually. No legal jargon—written for humans, not lawyers.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Data Retention Limits:</strong>
                            <span className="text-zinc-400"> 30-day default retention (configurable down to 0 days). No indefinite storage "just in case."</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Service Provider Agreements:</strong>
                            <span className="text-zinc-400"> CCPA-compliant contracts with AI providers (OpenAI, Anthropic). They can't use your data for training.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Consumer Request Portal:</strong>
                            <span className="text-zinc-400"> Self-service portal for exercising rights. No phone calls or email verification needed.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Authorized Agent Support:</strong>
                            <span className="text-zinc-400"> Accept requests from authorized agents on behalf of consumers (parents, lawyers, etc.).</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeCompliance === 'soc2' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">SOC 2 Type II Certification</h3>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    Enterprise-grade security audited by independent third-party auditors. SOC 2 Type II certification validates our security controls over 6-12 months (not just a point-in-time audit). Trust Services Criteria met: Security, Availability, Processing Integrity, Confidentiality, and Privacy. Annual re-certification ensures continuous compliance.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Security Controls:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Access Control (CC6.1):</strong>
                            <span className="text-zinc-400"> Role-based access control (RBAC), least privilege principle, MFA required for all accounts, session timeouts.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Logical Security (CC6.6):</strong>
                            <span className="text-zinc-400"> Firewall rules, intrusion detection/prevention, DDoS protection, rate limiting, IP whitelisting available.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Data Classification (CC6.7):</strong>
                            <span className="text-zinc-400"> All data classified as "Sensitive" by default. Separate handling for PII, API keys, and content.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Encryption (CC6.7):</strong>
                            <span className="text-zinc-400"> TLS 1.3 for data in transit, AES-256 for data at rest, separate encryption keys per customer.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Vulnerability Management (CC7.1):</strong>
                            <span className="text-zinc-400"> Weekly vulnerability scans, automated patch management, penetration testing twice annually.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Incident Response (CC7.3):</strong>
                            <span className="text-zinc-400"> 24/7 security monitoring, automated incident detection, defined response procedures, customer notification within 24h.</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4">Operational Controls:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Change Management (CC8.1):</strong>
                            <span className="text-zinc-400"> All code changes reviewed, tested in staging, deployed via CI/CD, rollback procedures documented.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">System Monitoring (CC7.2):</strong>
                            <span className="text-zinc-400"> Real-time monitoring of infrastructure, automated alerts for anomalies, 99.9% uptime SLA.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Backup & Recovery (A1.2):</strong>
                            <span className="text-zinc-400"> Daily encrypted backups, 30-day retention, tested quarterly, 4-hour recovery time objective (RTO).</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Audit Logging (CC4.2):</strong>
                            <span className="text-zinc-400"> Comprehensive audit trails for all system actions, immutable logs, 1-year retention, available for review.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Vendor Management (CC9.2):</strong>
                            <span className="text-zinc-400"> All vendors (AWS, Vercel, AI providers) SOC 2 certified. Annual vendor risk assessments.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">✓</span>
                          <div>
                            <strong className="text-white">Business Continuity (A1.3):</strong>
                            <span className="text-zinc-400"> Disaster recovery plan tested semi-annually, multi-region infrastructure, failover within 15 minutes.</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Privacy Features Section */}
      <div className="relative py-20 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Privacy-Enhanced Features</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Every feature designed with privacy-first principles. No compromise between functionality and user protection—you get both.
            </p>
          </div>

          {/* Privacy Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActivePrivacy('encryption')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activePrivacy === 'encryption'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              Encryption
            </button>
            <button
              onClick={() => setActivePrivacy('anonymization')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activePrivacy === 'anonymization'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              Anonymization
            </button>
            <button
              onClick={() => setActivePrivacy('retention')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activePrivacy === 'retention'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              Data Retention
            </button>
          </div>

          {/* Privacy Content */}
          {activePrivacy === 'encryption' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">End-to-End Encryption</h3>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    Military-grade AES-256 encryption for all data at rest. TLS 1.3 for data in transit. Each customer gets unique encryption keys—not shared across accounts. Even our engineers can't read your content without your permission.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Data at Rest (Storage)
                      </h4>
                      <ul className="space-y-2 text-sm text-zinc-400 ml-7">
                        <li>• AES-256-GCM encryption for all database records</li>
                        <li>• Separate encryption keys per customer (key isolation)</li>
                        <li>• Keys stored in AWS KMS (Hardware Security Module)</li>
                        <li>• Automatic key rotation every 90 days</li>
                        <li>• Content encrypted before leaving your browser</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        Data in Transit (Network)
                      </h4>
                      <ul className="space-y-2 text-sm text-zinc-400 ml-7">
                        <li>• TLS 1.3 with perfect forward secrecy</li>
                        <li>• HTTPS enforced (no HTTP fallback)</li>
                        <li>• Certificate pinning for API requests</li>
                        <li>• Encrypted API keys never sent in plain text</li>
                        <li>• VPN support for enterprise customers</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Data in Use (Processing)
                      </h4>
                      <ul className="space-y-2 text-sm text-zinc-400 ml-7">
                        <li>• Content decrypted only in secure processing environment</li>
                        <li>• AI providers (OpenAI, Anthropic) use zero-retention APIs</li>
                        <li>• Memory cleared immediately after processing</li>
                        <li>• No logging of decrypted content</li>
                        <li>• Ephemeral compute instances (destroyed after use)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activePrivacy === 'anonymization' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">Data Anonymization & Privacy</h3>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    Cookie-less analytics, anonymized user IDs, no IP address logging, and zero browser fingerprinting. We collect only what's necessary for the service to function—nothing more. No cross-site tracking or behavioral profiling.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        What We Don't Collect
                      </h4>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">✗</span>
                          <span>IP addresses (anonymized via proxy)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">✗</span>
                          <span>Browser fingerprints (canvas, WebGL, fonts)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">✗</span>
                          <span>Cookies (first-party or third-party)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">✗</span>
                          <span>Device IDs, IMEI, MAC addresses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">✗</span>
                          <span>GPS location or Wi-Fi positioning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">✗</span>
                          <span>Cross-site tracking pixels or tags</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">✗</span>
                          <span>Social media integrations (Like, Share)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">✗</span>
                          <span>Behavioral profiling or user segmentation</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        What We Collect (Minimal)
                      </h4>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>Email (for authentication only)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>Hashed password (bcrypt, never plaintext)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>Content you create (encrypted)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>Page view counts (anonymous aggregates)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>Billing info (handled by Stripe, not stored)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>Feature usage stats (no PII attached)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>Error logs (stripped of identifying data)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>Account creation date (for billing)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-emerald-400">Cookie-less Analytics Alternative</h4>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Unlike Google Analytics, we use server-side event tracking with anonymized user IDs. Page views, button clicks, and feature usage tracked without cookies or localStorage. Data aggregated daily with no ability to track individual users across sessions. No retention of raw events—only statistical summaries kept for 30 days.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activePrivacy === 'retention' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">Data Retention & Deletion</h3>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    Automatic data deletion after 30 days (configurable from 0-90 days). No indefinite storage "just in case." When you delete your account, everything is permanently erased within 24 hours—no backups, no archives, no "soft deletes." True right to erasure.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4">Default Retention Periods:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded">
                          <span className="text-sm text-zinc-300">Published Content</span>
                          <span className="text-emerald-400 font-semibold">30 days</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded">
                          <span className="text-sm text-zinc-300">Draft Content</span>
                          <span className="text-emerald-400 font-semibold">90 days</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded">
                          <span className="text-sm text-zinc-300">Analytics Data</span>
                          <span className="text-emerald-400 font-semibold">30 days</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded">
                          <span className="text-sm text-zinc-300">Audit Logs</span>
                          <span className="text-emerald-400 font-semibold">1 year</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded">
                          <span className="text-sm text-zinc-300">Backup Archives</span>
                          <span className="text-emerald-400 font-semibold">7 days</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded">
                          <span className="text-sm text-zinc-300">Session Data</span>
                          <span className="text-emerald-400 font-semibold">24 hours</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4">Configurable Options:</h4>
                      <ul className="space-y-3 text-sm text-zinc-300">
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-0.5">✓</span>
                          <div>
                            <strong>Immediate Deletion (0 days):</strong> Content deleted right after indexing. No local storage.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-0.5">✓</span>
                          <div>
                            <strong>Short-term (7 days):</strong> For high-turnover content like news or flash sales.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-0.5">✓</span>
                          <div>
                            <strong>Standard (30 days):</strong> Recommended for most SaaS businesses.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-0.5">✓</span>
                          <div>
                            <strong>Extended (90 days):</strong> For regulatory compliance (financial services, healthcare).
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-0.5">✓</span>
                          <div>
                            <strong>Custom Schedules:</strong> Set different retention per content type (blog vs docs).
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400 mt-0.5">✓</span>
                          <div>
                            <strong>Manual Override:</strong> Delete specific content immediately via dashboard.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4">Account Deletion Process:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <strong className="text-white">Initiate Deletion:</strong>
                          <p className="text-sm text-zinc-400 mt-1">Click "Delete Account" in settings. No phone call or email confirmation required—just two-factor authentication.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <strong className="text-white">Immediate Deactivation:</strong>
                          <p className="text-sm text-zinc-400 mt-1">Account instantly deactivated. No new charges, no access. Billing stopped immediately (prorated refund issued).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <strong className="text-white">Data Deletion (24 hours):</strong>
                          <p className="text-sm text-zinc-400 mt-1">All content, analytics, logs, and personal info permanently deleted. Database records overwritten with random data.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">
                          4
                        </div>
                        <div>
                          <strong className="text-white">Backup Purge (7 days):</strong>
                          <p className="text-sm text-zinc-400 mt-1">Encrypted backups automatically purged. No recovery possible after 7 days. Compliance with "right to erasure."</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">
                          5
                        </div>
                        <div>
                          <strong className="text-white">Confirmation Email:</strong>
                          <p className="text-sm text-zinc-400 mt-1">Receive deletion confirmation. Includes proof-of-deletion certificate for compliance audits (GDPR, CCPA).</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-400">⚠️ Legal Retention Exceptions</h4>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      In rare cases, we may be legally required to retain data longer: (1) Active legal disputes (litigation hold), (2) Government subpoenas or court orders, (3) Tax/accounting records (7 years for IRS). These exceptions affect &lt;0.01% of accounts and are documented in our privacy policy. You'll be notified if your data falls under legal hold.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Build Traffic Without <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text">
              Compromising Privacy
            </span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
            Join 7,200+ privacy-conscious businesses using SEO automation without tracking scripts, surveillance capitalism, or data exploitation. GDPR/CCPA compliant from day one.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 px-10 py-6 text-lg font-semibold">
                Start Free Trial
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-900 px-10 py-6 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-zinc-500 flex-wrap">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              SOC 2 certified
            </div>
          </div>
        </div>
      </div>
      </div>
      </main>

      <footer className="relative border-t border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-zinc-500">
          <p>© 2025 SEO Automation for SaaS. Privacy-first SEO without tracking or surveillance. GDPR & CCPA compliant.</p>
        </div>
      </footer>
    </div>
  );
}
