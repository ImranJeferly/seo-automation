import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Account Settings | Manage Billing, Security & Preferences | SEO Automation",
  description: "Manage your SEO Automation account settings. Update billing information, change password, configure two-factor authentication, view usage statistics, download invoices, manage email preferences, and control your data privacy settings. Secure account management with enterprise-grade encryption.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
