"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function ContentReviewPage() {
  const [activeWorkflow, setActiveWorkflow] = useState<'review' | 'edit' | 'approve'>('review');
  const [activeTone, setActiveTone] = useState<'professional' | 'casual' | 'technical'>('professional');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Content Review & Editorial Workflow - SEO Automation",
          "applicationCategory": "BusinessApplication",
          "description": "Professional content review system with live preview, in-line editing, version control, and approval workflows. AI-powered tone adjustment, SEO scoring, plagiarism detection, and collaborative editing. Built-in rich text editor with markdown support, media management, and batch operations for efficient content approval.",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "197",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "164"
          },
          "featureList": [
            "Live content preview (desktop & mobile)",
            "In-line WYSIWYG editor with rich text formatting",
            "AI-powered tone adjustment (professional, casual, technical)",
            "Version control with unlimited revisions",
            "Collaborative editing with team comments",
            "SEO score with optimization suggestions",
            "Plagiarism detection and originality checking",
            "Grammar and readability analysis",
            "Batch approval workflows",
            "Content comparison side-by-side",
            "Custom approval chains",
            "Markdown and HTML support"
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
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="px-4 py-2 mb-6 border-zinc-800 bg-zinc-950 text-zinc-300">
            📝 Editorial Control
          </Badge>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text">
            Content Review & Quality Assurance
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
            Full editorial control over AI-generated content. Preview drafts with live rendering, edit with rich text editor, collaborate with team comments, and approve with confidence. Maintain your brand voice while leveraging AI efficiency.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">5.2M+</div>
                <div className="text-zinc-400">Reviews Completed</div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">99.4%</div>
                <div className="text-zinc-400">Approval Rate</div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">2.3min</div>
                <div className="text-zinc-400">Avg Review Time</div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Link href="/signup">
              <Button className="bg-white text-black hover:bg-zinc-200 px-8 py-6 text-lg">
                Start Reviewing Content
              </Button>
            </Link>
            <Link href="#workflow">
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-900 px-8 py-6 text-lg">
                See Workflow Demo
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <p className="text-sm text-zinc-500">
            Trusted by 12,400+ content teams · 5.2M+ pieces reviewed · 850+ enterprise clients
          </p>
        </div>
      </div>

      {/* Editorial Workflow Section */}
      <div className="relative py-20 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Editorial Workflow</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Streamlined review process from draft submission to publication. Multi-stage approval chains, automatic routing, and real-time status tracking.
            </p>
          </div>

          {/* Workflow Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveWorkflow('review')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeWorkflow === 'review'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              Review Stage
            </button>
            <button
              onClick={() => setActiveWorkflow('edit')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeWorkflow === 'edit'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              Edit & Refine
            </button>
            <button
              onClick={() => setActiveWorkflow('approve')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeWorkflow === 'approve'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              Approve & Publish
            </button>
          </div>

          {/* Workflow Content */}
          {activeWorkflow === 'review' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">Review Queue & Assignment</h3>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    Every AI-generated draft enters your review queue with full context: target keyword, content brief, SEO score, and generation timestamp. Smart assignment system routes drafts based on content type, author experience level, and reviewer expertise. Workload balancing ensures no reviewer gets overwhelmed while urgent content gets priority.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Automatic Routing</h4>
                      <ul className="space-y-2 text-zinc-400">
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Round-robin distribution for balanced workload
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Topic-based routing (technical content → technical reviewers)
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Priority flags for time-sensitive content
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Language-specific assignment for multilingual teams
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Queue Management</h4>
                      <ul className="space-y-2 text-zinc-400">
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Filter by status (draft, in-review, approved, rejected)
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Sort by priority, date, SEO score, or word count
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Bulk actions for multiple drafts simultaneously
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          Quick preview without leaving queue view
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-zinc-200">Status Tracking</h4>
                    <p className="text-zinc-400 mb-4">
                      Real-time visibility into content lifecycle: <strong className="text-emerald-400">Draft</strong> (AI generation complete) → <strong className="text-emerald-400">In Review</strong> (assigned to reviewer) → <strong className="text-emerald-400">Revisions Requested</strong> (needs edits) → <strong className="text-emerald-400">Approved</strong> (ready to publish) → <strong className="text-emerald-400">Scheduled</strong> (publication queued) → <strong className="text-emerald-400">Published</strong> (live on site).
                    </p>
                    <p className="text-zinc-400">
                      Average time per stage: Draft to Review (2 minutes), Review to Decision (8 minutes), Approval to Publication (instant or scheduled). Email and Slack notifications keep stakeholders informed at each transition.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeWorkflow === 'edit' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">Rich Text Editor & Live Preview</h3>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    Professional WYSIWYG editor with split-screen live preview showing exactly how content renders on your site. Make edits with confidence knowing the formatting, images, and links will look perfect. Supports markdown shortcuts for power users and visual toolbar for quick formatting changes.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Formatting Tools</h4>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        <li>• Headings (H1-H6) with hierarchy validation</li>
                        <li>• Bold, italic, underline, strikethrough</li>
                        <li>• Ordered and unordered lists</li>
                        <li>• Blockquotes and callouts</li>
                        <li>• Code blocks with syntax highlighting</li>
                        <li>• Tables with cell merging</li>
                        <li>• Horizontal dividers</li>
                        <li>• Text alignment (left, center, right, justify)</li>
                      </ul>
                    </div>
                    <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Media Management</h4>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        <li>• Image upload with automatic compression</li>
                        <li>• Alt text editor for accessibility</li>
                        <li>• Video embedding (YouTube, Vimeo, custom)</li>
                        <li>• Image galleries and carousels</li>
                        <li>• Drag-and-drop positioning</li>
                        <li>• Caption and attribution fields</li>
                        <li>• Responsive image sizing</li>
                        <li>• WebP conversion for performance</li>
                      </ul>
                    </div>
                    <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Advanced Features</h4>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        <li>• Markdown shortcuts (##, **, -, etc.)</li>
                        <li>• Keyboard shortcuts (Ctrl+B, Ctrl+I)</li>
                        <li>• Custom HTML/CSS insertion</li>
                        <li>• Anchor links for table of contents</li>
                        <li>• Internal link suggestions</li>
                        <li>• External link nofollow/noopener</li>
                        <li>• Undo/redo with unlimited history</li>
                        <li>• Find and replace across content</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-zinc-200">Live Preview Modes</h4>
                    <p className="text-zinc-400 mb-4">
                      Toggle between desktop (1920px), tablet (768px), and mobile (375px) viewports to verify responsive behavior. Preview applies your site's actual CSS, fonts, and layout so you see the authentic user experience. Test meta descriptions, title tags, and OpenGraph images as they'll appear in search results and social shares.
                    </p>
                    <p className="text-zinc-400">
                      Updates in <strong className="text-emerald-400">&lt;500ms</strong> as you type. Click internal links to verify anchor navigation. Test structured data preview showing how rich snippets will appear in Google search results. Export preview as PDF or screenshot for stakeholder review.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeWorkflow === 'approve' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">Approval Workflows & Publishing</h3>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    Flexible approval chains from simple one-click approval to multi-stage sign-off requiring content lead, SEO specialist, legal review, and brand manager. Conditional routing based on content type, word count, or sensitivity. Delegation support for vacation coverage and approval analytics to identify bottlenecks.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Approval Types</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Single Reviewer</h5>
                          <p className="text-sm text-zinc-400">
                            One-click approval for trusted authors or routine content. Approve drafts directly from queue or email notification. Average approval time: <strong>45 seconds</strong>.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Multi-Stage Chain</h5>
                          <p className="text-sm text-zinc-400">
                            Sequential approvals requiring sign-off from multiple stakeholders. Example: Content Writer → SEO Specialist → Brand Manager → Publisher. Each stage can request revisions.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Parallel Approvals</h5>
                          <p className="text-sm text-zinc-400">
                            Multiple reviewers approve simultaneously (e.g., SEO and Legal review content concurrently). Publishes when all approvers sign off. Reduces approval time by 60%.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Conditional Routing</h5>
                          <p className="text-sm text-zinc-400">
                            Automatic workflow selection based on rules: Product pages → require legal approval. Blog posts &lt;1000 words → single reviewer. Press releases → CEO sign-off required.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 text-zinc-200">Rejection & Revision</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Revision Requests</h5>
                          <p className="text-sm text-zinc-400">
                            Reject with specific feedback highlighting issues. Inline comments on problem areas. Assign back to original author or reassign to different writer. Track revision cycles.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Quick Fixes</h5>
                          <p className="text-sm text-zinc-400">
                            Make minor edits yourself during review instead of rejecting. Fix typos, adjust headings, or tweak SEO elements. Approve with your changes immediately.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Regenerate Sections</h5>
                          <p className="text-sm text-zinc-400">
                            Don't like a specific paragraph? Regenerate just that section with AI while keeping the rest unchanged. Request different tone or add more detail.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-emerald-400 mb-2">Approval Delegation</h5>
                          <p className="text-sm text-zinc-400">
                            Out of office? Delegate approval authority to another team member temporarily. Set date ranges and content types. Approval audit trail preserved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-zinc-200">Auto-Approval Rules</h4>
                    <p className="text-zinc-400 mb-4">
                      Set conditional auto-approval for content meeting quality thresholds: <strong className="text-emerald-400">SEO score ≥85</strong> + <strong className="text-emerald-400">No plagiarism flags</strong> + <strong className="text-emerald-400">From trusted author</strong> + <strong className="text-emerald-400">Within content brief parameters (&lt;5% deviation)</strong> = Automatically approved and queued for publishing.
                    </p>
                    <p className="text-zinc-400">
                      Perfect for scaling content production while maintaining quality standards. Auto-approved content still appears in audit logs for spot-checking. Disable auto-approval for sensitive topics or high-stakes content. Average 35% of drafts qualify for auto-approval after calibration period.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Collaboration & Version Control Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Collaboration & Version Control</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Real-time team collaboration with comments, suggestions, and complete revision history. Never lose work with automatic versioning and one-click rollback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Collaborative Editing */}
            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Real-Time Collaboration</h3>
                <p className="text-zinc-400 mb-6">
                  Multiple team members can review and comment on the same draft simultaneously. See who's viewing with presence indicators. Leave inline comments on specific paragraphs for discussion. @mention teammates to request input or approval.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Inline comments on selected text with threading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Suggestion mode (track changes like Microsoft Word)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Activity feed showing all edits and comments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Resolve comment threads when discussion complete</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Version History */}
            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Complete Version History</h3>
                <p className="text-zinc-400 mb-6">
                  Every edit is saved automatically with timestamps and author attribution. Compare any two versions side-by-side with diff highlighting. Restore previous versions with one click. Export version history as audit trail for compliance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Unlimited revision history with auto-save every 30 seconds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Diff view showing exact changes between versions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">One-click rollback to any previous version</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                    <span className="text-zinc-400">Blame view showing who changed each paragraph</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900/30 border-zinc-800">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-zinc-200">Integration & Notifications</h3>
              <p className="text-zinc-400 mb-6">
                Stay informed with notifications sent to Slack, Discord, Microsoft Teams, or email when content enters your review queue, teammates comment on your drafts, or approvals are requested. Webhook support for custom integrations with your existing tools.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <div className="text-sm text-zinc-400">Slack Alerts</div>
                </div>
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📧</div>
                  <div className="text-sm text-zinc-400">Email Digest</div>
                </div>
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔔</div>
                  <div className="text-sm text-zinc-400">In-App Alerts</div>
                </div>
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔗</div>
                  <div className="text-sm text-zinc-400">Webhooks</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content Quality Checks Section */}
      <div className="relative py-20 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Automated Quality Checks</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Built-in SEO analysis, readability scoring, plagiarism detection, and grammar checks. Ensure every piece meets your quality standards before publication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">SEO Optimization</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Real-time SEO score with specific improvement suggestions.
                </p>
                <ul className="space-y-2 text-xs text-zinc-500">
                  <li>• Title length (50-60 chars)</li>
                  <li>• Meta description (150-160)</li>
                  <li>• Keyword density analysis</li>
                  <li>• Heading structure (H1-H6)</li>
                  <li>• Image alt text coverage</li>
                  <li>• Internal linking opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Readability Score</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Flesch-Kincaid and Gunning Fog readability analysis.
                </p>
                <ul className="space-y-2 text-xs text-zinc-500">
                  <li>• Reading grade level</li>
                  <li>• Average sentence length</li>
                  <li>• Complex word usage</li>
                  <li>• Passive voice detection</li>
                  <li>• Paragraph length warnings</li>
                  <li>• Transition word usage</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Plagiarism Detection</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Check against billions of web pages and your content library.
                </p>
                <ul className="space-y-2 text-xs text-zinc-500">
                  <li>• Web plagiarism scan</li>
                  <li>• Internal duplicate detection</li>
                  <li>• Similarity percentage</li>
                  <li>• Source URL identification</li>
                  <li>• Paraphrase detection</li>
                  <li>• Citation suggestions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Grammar & Spelling</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Advanced grammar checks with context-aware suggestions.
                </p>
                <ul className="space-y-2 text-xs text-zinc-500">
                  <li>• Spelling corrections</li>
                  <li>• Grammar rule violations</li>
                  <li>• Punctuation errors</li>
                  <li>• Word choice improvements</li>
                  <li>• Style consistency</li>
                  <li>• Cliché detection</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900/30 border-zinc-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Brand Voice Consistency</h3>
              <p className="text-zinc-400 mb-6">
                Define your brand's unique voice and tone guidelines. The AI analyzes every draft against your style guide to ensure consistency across all content. Flag content that deviates from terminology standards, writing style preferences, or brand messaging guidelines.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 text-zinc-200">Custom Terminology</h4>
                  <p className="text-sm text-zinc-400">
                    Define preferred terms and banned words. Example: Use "customer" not "user", "pricing" not "cost". Automatic flagging when wrong terms appear.
                  </p>
                </div>
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 text-zinc-200">Tone Analysis</h4>
                  <p className="text-sm text-zinc-400">
                    Measure formality level, sentiment, and confidence. Ensure technical docs are authoritative while marketing copy stays friendly.
                  </p>
                </div>
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 text-zinc-200">Style Rules</h4>
                  <p className="text-sm text-zinc-400">
                    Enforce capitalization (SaaS vs saas), number formatting (10% vs 10 percent), and punctuation preferences (Oxford comma).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tone & Style Adjustment Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI-Powered Tone Adjustment</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Transform content tone instantly while preserving facts and key messages. Perfect for adapting content to different audiences or channels.
            </p>
          </div>

          {/* Tone Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveTone('professional')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTone === 'professional'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setActiveTone('casual')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTone === 'casual'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              Casual
            </button>
            <button
              onClick={() => setActiveTone('technical')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTone === 'technical'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              Technical
            </button>
          </div>

          {/* Tone Examples */}
          {activeTone === 'professional' && (
            <Card className="bg-zinc-900/30 border-zinc-800 animate-in fade-in slide-in-from-top-2 duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-emerald-400">Professional Tone</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-zinc-200">Before (Casual)</h4>
                    <p className="text-zinc-400 text-sm italic">
                      "Hey! So our new feature is pretty cool. It lets you do stuff way faster and you'll love how easy it is to use. Give it a try!"
                    </p>
                  </div>
                  <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-emerald-400">After (Professional)</h4>
                    <p className="text-zinc-300 text-sm">
                      "Our latest release introduces advanced automation capabilities that reduce workflow execution time by 73%. The intuitive interface ensures immediate productivity gains with minimal training requirements."
                    </p>
                  </div>
                </div>
                <p className="text-zinc-400 mt-6 text-sm">
                  Perfect for: Corporate communications, whitepapers, case studies, press releases, investor updates, and formal documentation.
                </p>
              </CardContent>
            </Card>
          )}

          {activeTone === 'casual' && (
            <Card className="bg-zinc-900/30 border-zinc-800 animate-in fade-in slide-in-from-top-2 duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-emerald-400">Casual Tone</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-zinc-200">Before (Professional)</h4>
                    <p className="text-zinc-400 text-sm italic">
                      "Implementation of our platform requires configuration of authentication parameters and establishment of API connectivity through secure protocols."
                    </p>
                  </div>
                  <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-emerald-400">After (Casual)</h4>
                    <p className="text-zinc-300 text-sm">
                      "Getting started is super easy! Just connect your API key (takes 2 minutes) and you're ready to go. No complicated setup or tech headaches."
                    </p>
                  </div>
                </div>
                <p className="text-zinc-400 mt-6 text-sm">
                  Perfect for: Blog posts, social media, newsletters, onboarding emails, community forums, and customer-facing help content.
                </p>
              </CardContent>
            </Card>
          )}

          {activeTone === 'technical' && (
            <Card className="bg-zinc-900/30 border-zinc-800 animate-in fade-in slide-in-from-top-2 duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-emerald-400">Technical Tone</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-zinc-200">Before (Casual)</h4>
                    <p className="text-zinc-400 text-sm italic">
                      "Our system is really fast and can handle tons of requests without slowing down. It's built to scale!"
                    </p>
                  </div>
                  <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-emerald-400">After (Technical)</h4>
                    <p className="text-zinc-300 text-sm">
                      "Architecture leverages distributed processing across edge nodes with sub-50ms P99 latency. Horizontal scaling supports 100K+ concurrent requests with automatic load balancing and Redis-backed session persistence."
                    </p>
                  </div>
                </div>
                <p className="text-zinc-400 mt-6 text-sm">
                  Perfect for: API documentation, technical specifications, architecture guides, developer blogs, integration tutorials, and engineering announcements.
                </p>
              </CardContent>
            </Card>
          )}

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Selective Rewriting</h3>
                <p className="text-zinc-400 mb-4">
                  Don't need to rewrite the entire article? Select specific paragraphs or sections and adjust tone individually. Mix formal product descriptions with casual user testimonials in the same piece.
                </p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    Paragraph-level tone control
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    Preview before applying changes
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    Undo individual rewrites
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Custom Voice Templates</h3>
                <p className="text-zinc-400 mb-4">
                  Create custom tone presets beyond our defaults. Define voice characteristics: formality level, sentence complexity, emoji usage, technical jargon density, humor level, and empathy expression.
                </p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    Save unlimited voice templates
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    Share templates across team
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    Auto-apply by content type
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Batch Operations & Comparison Section */}
      <div className="relative py-20 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Batch Operations & Content Comparison</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Process multiple drafts simultaneously and compare versions side-by-side for efficient review workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">Bulk Approval Operations</h3>
                <p className="text-zinc-400 mb-6">
                  Review and approve up to 50 drafts at once. Filter your queue by status, author, topic, or quality score, then apply actions to all selected items simultaneously. Perfect for processing routine updates or content from trusted writers.
                </p>
                <div className="space-y-4">
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-zinc-200">Batch Approve</h4>
                    <p className="text-sm text-zinc-400">Approve multiple drafts meeting quality standards with one click. Average time savings: 87% vs individual review.</p>
                  </div>
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-zinc-200">Mass Scheduling</h4>
                    <p className="text-sm text-zinc-400">Set publication dates for multiple approved pieces. Distribute across days/weeks for consistent publishing cadence.</p>
                  </div>
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-zinc-200">Bulk Export</h4>
                    <p className="text-sm text-zinc-400">Export selected content as Markdown, HTML, PDF, or Word docs. Include metadata and SEO fields in export.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border-zinc-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">Side-by-Side Comparison</h3>
                <p className="text-zinc-400 mb-6">
                  Compare any two versions side-by-side with synchronized scrolling and diff highlighting. See exactly what changed between versions, compare AI-generated draft against edited version, or review competitor content alongside yours.
                </p>
                <div className="space-y-4">
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-zinc-200">Diff Highlighting</h4>
                    <p className="text-sm text-zinc-400">Added text in green, removed text in red, modified text in yellow. Character-level precision shows exact changes.</p>
                  </div>
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-zinc-200">Before/After Mode</h4>
                    <p className="text-sm text-zinc-400">Toggle between original and edited versions instantly. Perfect for reviewing tone adjustments or AI rewrites.</p>
                  </div>
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-zinc-200">Merge Conflicts</h4>
                    <p className="text-sm text-zinc-400">When multiple editors modify same section, resolve conflicts with visual merge tool. Choose version or combine edits.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 cursor-pointer hover:border-zinc-700 transition-colors">
              <summary className="flex justify-between items-center font-semibold text-lg">
                <span>Can I edit AI-generated content before publishing?</span>
                <svg className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-zinc-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                Yes, absolutely. Every draft enters your review queue where you can make unlimited edits. Use the rich text editor to modify text, formatting, headings, and structure. Regenerate specific sections with AI if needed. Add images, videos, code blocks, and custom HTML. All changes save automatically with full version history. Nothing publishes without your explicit approval.
              </div>
            </details>

            <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 cursor-pointer hover:border-zinc-700 transition-colors">
              <summary className="flex justify-between items-center font-semibold text-lg">
                <span>How does the tone adjustment feature work?</span>
                <svg className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-zinc-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                Select any paragraph or section and choose a different tone: Professional (formal, business-focused), Casual (conversational, friendly), Technical (detailed, expert-level), or Conversational (engaging, personal). The AI rewrites the content in the new tone while preserving facts and key points. Review the changes side-by-side before accepting. You can also set a default tone for all future content.
              </div>
            </details>

            <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 cursor-pointer hover:border-zinc-700 transition-colors">
              <summary className="flex justify-between items-center font-semibold text-lg">
                <span>What's included in the live preview?</span>
                <svg className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-zinc-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                The live preview shows exactly how your content will appear on your website. Switch between desktop, tablet, and mobile views instantly. See rendered HTML with your site's CSS styling applied. Preview meta descriptions, title tags, OpenGraph images, and structured data. Test internal links and anchor navigation. The preview updates in real-time as you edit with &lt;500ms latency.
              </div>
            </details>

            <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 cursor-pointer hover:border-zinc-700 transition-colors">
              <summary className="flex justify-between items-center font-semibold text-lg">
                <span>Can multiple team members review content simultaneously?</span>
                <svg className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-zinc-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                Yes, with collaborative editing. Multiple editors can review the same draft with presence indicators showing who's viewing. Leave comments on specific paragraphs for discussion. Suggest changes that require approval. Track edit history showing who made each change and when. Set up approval chains requiring sign-off from content lead, SEO specialist, and brand manager before publishing.
              </div>
            </details>

            <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 cursor-pointer hover:border-zinc-700 transition-colors">
              <summary className="flex justify-between items-center font-semibold text-lg">
                <span>Does the review system check for SEO issues?</span>
                <svg className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-zinc-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                Yes, built-in SEO analysis runs automatically. Checks title length (50-60 chars), meta description (150-160 chars), keyword density, heading structure (single H1, proper H2-H6 hierarchy), image alt text coverage, internal linking opportunities, and readability score (Flesch-Kincaid). Real-time score updates as you edit with specific suggestions for improvement. Export SEO reports for stakeholders.
              </div>
            </details>

            <details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 cursor-pointer hover:border-zinc-700 transition-colors">
              <summary className="flex justify-between items-center font-semibold text-lg">
                <span>How do batch approvals work?</span>
                <svg className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-zinc-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                Filter your review queue by status, date, author, or topic. Select multiple drafts (up to 50 at once) and approve them simultaneously. Useful for approving routine updates, minor corrections, or content from trusted writers. Set conditional auto-approval rules: automatically approve drafts with SEO score ≥85, no plagiarism flags, and &lt;5% deviation from content brief. Always reviewable in audit logs.
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-20 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Maintain Quality Without Slowing Down</h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Review, edit, and approve AI-generated content with confidence. Professional tools for teams that value both efficiency and editorial control.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <Link href="/signup">
              <Button className="bg-white text-black hover:bg-zinc-200 px-8 py-6 text-lg">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-900 px-8 py-6 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="text-sm text-zinc-500">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </div>

      <footer className="border-t border-white/6 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-white/60">
          <span>© 2025 SEO Automation for SaaS. Built for technical founders who need organic traffic, not marketing distractions.</span>
        </div>
      </footer>
    </div>
  );
}
