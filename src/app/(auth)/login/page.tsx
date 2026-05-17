"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  // Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // API Login Handler
  const handleLogin = async (e?: React.FormEvent, customEmail?: string, customPassword?: string) => {
    if (e) e.preventDefault();
    
    const finalEmail = customEmail || email;
    const finalPassword = customPassword || password;

    if (!finalEmail || !finalPassword) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: finalEmail, password: finalPassword }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Invalid credentials");
      }

      // 🔍 অবজেক্ট স্ট্রাকচার ফিক্স: ব্যাকএন্ড থেকে ডাটা data.data এর ভেতর আসলে তা রিসিভ করবে, না হলে রুট লেভেল থেকে নিবে
      const authData = resData.data ? resData.data : resData;
      const loggedInUser = authData.user;
      const token = authData.accessToken || authData.token || resData.token;

      if (!loggedInUser) {
        throw new Error("User data not returned from server.");
      }

      // Zustand ও LocalStorage এ ডাটা সেভ করা
      setAuth(loggedInUser, token);

      // 🛡️ রোল সেফটি চেক এবং রিডাইরেকশন লজিক (Case Insensitive)
      const userRole = loggedInUser.role ? String(loggedInUser.role).toUpperCase() : "";

      if (userRole === "ADMIN" || userRole === "SUPER_ADMIN") {
        router.push("/dashboard/admin");
      } else if (userRole === "ORGANIZER") {
        router.push("/dashboard/organizer");
      } else {
        router.push("/dashboard/user");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Quick Demo Login Auto-fill & Submit
  const handleDemoLogin = (role: "admin" | "user") => {
    const demoEmail = role === "admin" ? "admin@demo.com" : "user@demo.com";
    const demoPassword = "password123";

    setEmail(demoEmail);
    setPassword(demoPassword);
    
    // সাথে সাথে লগইন ফাংশন কল করা
    handleLogin(undefined, demoEmail, demoPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
        
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-2">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-slate-500 dark:text-slate-400 mb-6">
          Login to manage or explore your events
        </p>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-900">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition disabled:opacity-50 flex justify-center items-center"
          >
            {loading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* --- 💡 Demo Credentials Block (Requirement-6) --- */}
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs font-semibold text-center text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
            Quick Demo Login
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleDemoLogin("admin")}
              type="button"
              className="px-3 py-2 text-xs font-medium text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition"
            >
              ⚡ Demo Admin
            </button>
            <button
              onClick={() => handleDemoLogin("user")}
              type="button"
              className="px-3 py-2 text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition"
            >
              ⚡ Demo User
            </button>
          </div>
        </div>

        <p className="mt-6 text-sm text-center text-slate-600 dark:text-slate-400">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 hover:underline font-medium">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}