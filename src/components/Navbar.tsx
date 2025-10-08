"use client";

import { useState, useEffect, useRef } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);
  const [showGuidesDropdown, setShowGuidesDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const guidesDropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowFeaturesDropdown(false);
      }
      if (guidesDropdownRef.current && !guidesDropdownRef.current.contains(event.target as Node)) {
        setShowGuidesDropdown(false);
      }
    }

    if (showFeaturesDropdown || showGuidesDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFeaturesDropdown, showGuidesDropdown]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/95 to-black/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="SEO Automation Logo" 
              className="h-8"
            />
            <span className="font-bold text-lg group-hover:text-emerald-400 transition-colors">
              SEO Automation
            </span>
          </Link>

          {/* Center Navigation - Only show on homepage */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <a href="/#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">How It Works</a>
            
            {/* Features Dropdown */}
            <div 
              className="relative"
              ref={dropdownRef}
            >
              <button 
                onClick={() => setShowFeaturesDropdown(!showFeaturesDropdown)}
                className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              >
                Features
                <svg 
                  className={`w-3 h-3 transition-transform ${showFeaturesDropdown ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {showFeaturesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black backdrop-blur-md border border-zinc-800/50 rounded-md shadow-xl py-2 z-50">
                  <a 
                    href="/features/ai-content-generation" 
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setShowFeaturesDropdown(false)}
                  >
                    AI Content Generation
                  </a>
                  <a 
                    href="/features/seo-first-structure" 
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setShowFeaturesDropdown(false)}
                  >
                    SEO-First Structure
                  </a>
                  <a 
                    href="/features/multi-platform-indexing" 
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setShowFeaturesDropdown(false)}
                  >
                    Multi-Platform Indexing
                  </a>
                  <a 
                    href="/features/smart-scheduling" 
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setShowFeaturesDropdown(false)}
                  >
                    <span className="flex items-center justify-between">
                      Smart Scheduling
                      <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 rounded-full">PRO</span>
                    </span>
                  </a>
                  <a 
                    href="/features/keyword-research" 
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setShowFeaturesDropdown(false)}
                  >
                    <span className="flex items-center justify-between">
                      Keyword Research
                      <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 rounded-full">PRO</span>
                    </span>
                  </a>
                  <a 
                    href="/features/nextjs-native" 
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setShowFeaturesDropdown(false)}
                  >
                    Next.js Native
                  </a>
                  <a 
                    href="/features/content-review" 
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setShowFeaturesDropdown(false)}
                  >
                    Content Review
                  </a>
                  <a 
                    href="/features/analytics-reporting" 
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setShowFeaturesDropdown(false)}
                  >
                    <span className="flex items-center justify-between">
                      Analytics & Reporting
                      <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 rounded-full">PRO</span>
                    </span>
                  </a>
                  <a 
                    href="/features/privacy-first" 
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setShowFeaturesDropdown(false)}
                  >
                    Privacy-First
                  </a>
                </div>
              )}
            </div>

            {/* Guides Dropdown */}
            <div 
              className="relative"
              ref={guidesDropdownRef}
            >
              <button 
                onClick={() => setShowGuidesDropdown(!showGuidesDropdown)}
                className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              >
                Guides
                <svg 
                  className={`w-3 h-3 transition-transform ${showGuidesDropdown ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {showGuidesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-black backdrop-blur-md border border-zinc-800/50 rounded-md shadow-xl py-2 z-50">
                  <a 
                    href="/how-to-market-your-saas-in-2025" 
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setShowGuidesDropdown(false)}
                  >
                    Marketing Guide
                  </a>
                </div>
              )}
            </div>
            
            <a href="/#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
          </div>

          {/* Right side - Auth buttons or user info */}
          <div className="flex items-center gap-3">
            {loading ? (
              <div className="w-20 h-9 bg-zinc-800/50 animate-pulse rounded-md"></div>
            ) : user ? (
              <div className="flex items-center gap-3">
                {/* User Info */}
                <div className="flex items-center gap-2">
                  {user.photoURL ? (
                    <div className="w-8 h-8 rounded-full border border-zinc-700 overflow-hidden bg-zinc-800">
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                      <span className="text-emerald-400 text-sm font-medium">
                        {(user.displayName || user.email)?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-white">
                      {user.displayName || user.email?.split("@")[0]}
                    </p>
                  </div>
                </div>

                {/* Logout Button */}
                <Button
                  onClick={handleLogout}
                  size="sm"
                  className="bg-zinc-900/50 hover:bg-zinc-800/50 text-white border border-zinc-800/50 h-9 px-4 text-sm"
                  variant="outline"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login">
                  <Button
                    size="sm"
                    className="bg-zinc-900/50 hover:bg-zinc-800/50 text-white border border-zinc-800/50 h-9 px-4 text-sm"
                    variant="outline"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    size="sm"
                    className="bg-emerald-500 hover:bg-emerald-600 text-black h-9 px-4 text-sm font-medium"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
