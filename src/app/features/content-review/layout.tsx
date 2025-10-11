import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Review | Editorial Workflow & Quality Assurance | SEO Automation",
  description:
    "Professional content review system with live preview, rich text editor, collaborative editing, and approval workflows. AI-powered tone adjustment, SEO scoring, plagiarism detection, version control, and team collaboration. Built-in quality checks with readability analysis, grammar checking, and brand voice consistency. Complete editorial control over AI-generated content with multi-stage approval chains, batch operations, and side-by-side comparison tools. Real-time notifications via Slack, email, and webhooks. Review 5.2M+ pieces with 99.4% approval rate and 2.3-minute average review time.",
  keywords: [
    "content review",
    "content review system",
    "editorial workflow",
    "editorial workflow automation",
    "content approval",
    "content approval system",
    "content approval workflow",
    "collaborative editing",
    "collaborative content editing",
    "team collaboration tools",
    "version control",
    "content version control",
    "content version history",
    "approval workflow",
    "approval workflow automation",
    "multi-stage approval",
    "content quality assurance",
    "content quality control",
    "quality assurance tools",
    "rich text editor",
    "wysiwyg editor",
    "live content preview",
    "content preview tools",
    "inline editing",
    "inline content editor",
    "tone adjustment",
    "ai tone adjustment",
    "writing tone changer",
    "content tone modifier",
    "seo score checker",
    "seo content analysis",
    "readability score",
    "readability analysis",
    "plagiarism detection",
    "plagiarism checker",
    "grammar check",
    "grammar checker tool",
    "brand voice consistency",
    "editorial control",
    "content governance",
    "content workflow management",
    "batch approval",
    "bulk content approval",
    "content comparison",
    "side-by-side comparison",
    "diff highlighting",
    "content diff tool",
    "review queue management",
    "content assignment",
    "workflow routing",
    "approval chains",
    "content collaboration",
    "team content review",
    "comment threads",
    "suggestion mode",
    "track changes",
    "real-time editing",
    "collaborative workspace",
    "content notifications",
    "slack integration",
    "webhook notifications",
  ],
  openGraph: {
    title: "Content Review & Editorial Workflow - SEO Automation",
    description:
      "Professional content review system with live preview, rich text editor, collaborative editing, and approval workflows. Review 5.2M+ pieces with 99.4% approval rate. Complete editorial control with quality checks, version history, and team collaboration.",
    url: "https://seoautomation.com/features/content-review",
    siteName: "SEO Automation",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Content Review & Editorial Workflow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Review & Editorial Workflow - SEO Automation",
    description:
      "Professional content review system with live preview, collaborative editing, approval workflows, and quality checks. Review 5.2M+ pieces with 99.4% approval rate and 2.3min average review time.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://seoautomation.com/features/content-review",
  },
};

export default function ContentReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
