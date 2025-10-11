import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy-First SEO | GDPR & CCPA Compliant | Zero Tracking | SEO Automation",
  description: "Privacy-focused SEO automation with zero tracking scripts, GDPR/CCPA compliance, end-to-end AES-256 encryption, and complete data ownership. No cookies, no third-party trackers, no surveillance capitalism. SOC 2 Type II certified with local data storage, automatic deletion policies, and right to erasure. Cookie-less analytics, anonymized user data, and privacy-first architecture built for compliance-conscious businesses. Build organic traffic without compromising user privacy.",
  keywords: [
    "privacy-first seo",
    "gdpr compliant seo",
    "ccpa compliant seo",
    "soc 2 certified seo",
    "zero tracking seo",
    "cookie-less seo",
    "privacy seo automation",
    "gdpr seo tools",
    "ccpa seo compliance",
    "encrypted seo data",
    "aes-256 encryption",
    "privacy by design",
    "no tracking pixels",
    "gdpr article 17",
    "right to erasure",
    "data minimization",
    "anonymized analytics",
    "privacy compliant marketing",
    "seo without cookies",
    "gdpr seo software",
    "eu privacy compliance",
    "california privacy law",
    "soc 2 type ii",
    "hipaa compliant seo",
    "data protection seo",
    "privacy regulations",
    "secure seo platform",
    "encrypted content storage",
    "local data storage seo",
    "automatic data deletion",
    "privacy policy generator",
    "consent management seo",
    "audit logs compliance",
    "data portability",
    "zero data retention",
  ],
  openGraph: {
    title: "Privacy-First SEO | GDPR & CCPA Compliant | Zero Tracking | SEO Automation",
    description: "Privacy-focused SEO with zero tracking, GDPR/CCPA compliance, AES-256 encryption, and complete data ownership. SOC 2 Type II certified. No cookies, no trackers, cookie-less analytics. Build traffic without compromising privacy.",
    url: "https://seoautomation.com/features/privacy-first",
    siteName: "SEO Automation",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Privacy-First SEO - GDPR & CCPA Compliant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy-First SEO | GDPR & CCPA Compliant | Zero Tracking",
    description: "Privacy-focused SEO automation. Zero tracking scripts, GDPR/CCPA compliant, AES-256 encryption, SOC 2 certified. No cookies, cookie-less analytics, complete data ownership. Build organic traffic without privacy compromise.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://seoautomation.com/features/privacy-first",
  },
};

export default function PrivacyFirstLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
