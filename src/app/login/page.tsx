"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, sendEmailVerification } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { createUserDocument } from "@/lib/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState("");
  const [showResendButton, setShowResendButton] = useState(false);
  const router = useRouter();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResendMessage("");
    setShowResendButton(false);
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Check if email is verified
      if (!userCredential.user.emailVerified) {
        setError("Please verify your email before logging in. Check your inbox for the verification link.");
        setShowResendButton(true);
        await auth.signOut(); // Sign them out if not verified
        setLoading(false);
        return;
      }
      
      // Update last login in Firestore
      await createUserDocument(userCredential.user, "email");
      router.push("/"); // Redirect to homepage
    } catch (err: any) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password");
      } else if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password");
      } else {
        setError(err.message || "Failed to login");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    if (!email || !password) {
      setResendMessage("Please enter your email and password first");
      return;
    }

    setLoading(true);
    setResendMessage("");

    try {
      // Sign in to get the user object
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      if (userCredential.user.emailVerified) {
        setResendMessage("Your email is already verified! You can log in now.");
        setShowResendButton(false);
        await auth.signOut();
        setLoading(false);
        return;
      }

      // Send verification email
      await sendEmailVerification(userCredential.user);
      setResendMessage("✅ Verification email sent! Check your inbox.");
      
      // Sign them out
      await auth.signOut();
    } catch (err: any) {
      setResendMessage("Failed to resend verification email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      // Create/update user document in Firestore
      await createUserDocument(userCredential.user, "google");
      router.push("/"); // Redirect to homepage
    } catch (err: any) {
      setError(err.message || "Failed to login with Google");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Animated gradient orb */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full max-w-md py-12">
        <div className="mb-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
            <img 
              src="/logo.png" 
              alt="SEO Automation Logo" 
              className="h-8"
            />
            <div className="text-left">
              <div className="font-bold text-lg group-hover:text-emerald-400 transition-colors">SEO Automation</div>
            </div>
          </Link>
        </div>

        <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Welcome Back</h2>

            {error && (
              <div className="mb-4 p-3 bg-red-500/5 border-l-2 border-red-500/50 text-red-400 text-xs">
                {error}
              </div>
            )}

            {resendMessage && (
              <div className="mb-4 p-3 bg-emerald-500/5 border-l-2 border-emerald-500/50 text-emerald-400 text-xs">
                {resendMessage}
              </div>
            )}

            {showResendButton && (
              <div className="mb-4">
                <Button
                  type="button"
                  onClick={handleResendVerification}
                  disabled={loading}
                  className="w-full bg-zinc-900/50 hover:bg-zinc-800/50 text-white border border-zinc-700/50 text-sm h-10"
                >
                  📧 Resend Verification Email
                </Button>
              </div>
            )}

            {/* Google Login */}
            <Button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full mb-3 bg-zinc-900/50 hover:bg-zinc-800/50 text-white font-medium border border-zinc-800/50 h-11 transition-all"
              variant="outline"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800/50"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-wider">
                <span className="bg-zinc-900/30 backdrop-blur-sm px-3 text-zinc-600">Or continue with email</span>
              </div>
            </div>

            {/* Email/Password Login */}
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-zinc-500 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-zinc-900/50 border border-zinc-800/50 rounded-md focus:outline-none focus:border-emerald-500/50 transition-colors text-white text-sm placeholder:text-zinc-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-medium text-zinc-500 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-zinc-900/50 border border-zinc-800/50 rounded-md focus:outline-none focus:border-emerald-500/50 transition-colors text-white text-sm placeholder:text-zinc-600"
                  placeholder="••••••••"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold h-11 transition-all"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                    Logging in...
                  </span>
                ) : (
                  "Login"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-xs text-zinc-500">
              Don't have an account?{" "}
              <Link href="/signup" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                Create account
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
