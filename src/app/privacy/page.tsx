"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Eye, 
  Cookie, 
  Mail, 
  Trash2,
  Globe,
  CheckCircle,
  ArrowRight,
  Server,
  Database,
  UserCheck,
  FileText,
  Clock,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, phone number, billing information, and event preferences. We also automatically collect certain information about your device and how you interact with our platform.",
      list: [
        "Name and contact information",
        "Account credentials (secured with encryption)",
        "Payment information (processed by secure third-party providers)",
        "Event attendance history and preferences",
        "Device information and usage data",
        "Cookies and similar tracking technologies"
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, communicate with you, and personalize your experience on EventSphere.",
      list: [
        "Process event bookings and ticket purchases",
        "Send event reminders and updates",
        "Personalize event recommendations",
        "Improve our website and user experience",
        "Prevent fraud and ensure security",
        "Comply with legal obligations"
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: "We do not sell your personal information. We may share your information with event organizers to facilitate your participation in events, with service providers who assist our operations, or when required by law.",
      list: [
        "Event organizers (for events you register for)",
        "Payment processors (Stripe, PayPal, etc.)",
        "Email service providers",
        "Analytics partners (anonymized data)",
        "Legal authorities (when required by law)"
      ]
    },
    {
      icon: Cookie,
      title: "Cookies & Tracking",
      content: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.",
      list: [
        "Essential cookies (required for site functionality)",
        "Analytics cookies (to understand site usage)",
        "Preference cookies (remember your settings)",
        "Marketing cookies (for relevant advertisements)"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, regular security audits, and access controls.",
      list: [
        "256-bit SSL encryption for data transmission",
        "Regular security assessments and penetration testing",
        "Strict access controls and authentication",
        "Secure data storage with encryption at rest",
        "24/7 monitoring for suspicious activities"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict processing of your data.",
      list: [
        "Access your personal information",
        "Correct inaccurate information",
        "Delete your account and data",
        "Opt-out of marketing communications",
        "Data portability (receive your data)",
        "Lodge a complaint with supervisory authority"
      ]
    }
  ];

  const importantDates = [
    { label: "Last Updated", value: "May 18, 2024" },
    { label: "Effective Date", value: "May 18, 2024" },
    { label: "Next Review", value: "May 18, 2025" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 py-24">
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full mb-4">
            <Shield size={14} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Privacy & Security
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Privacy{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </motion.div>

        {/* Important Dates */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {importantDates.map((date, i) => (
            <div key={i} className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-xl px-4 py-2 border border-slate-200/50 dark:border-slate-800/50">
              <span className="text-xs text-slate-500">{date.label}</span>
              <p className="font-semibold text-sm">{date.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Quick Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-slate-200/50 dark:border-slate-800/50"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FileText size={18} className="text-indigo-500" />
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {sections.map((section, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition py-1"
              >
                {section.title}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Privacy Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              id={`section-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.05) }}
              className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/50 scroll-mt-24"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4 ml-14">
                {section.content}
              </p>
              <div className="ml-14 space-y-2">
                {section.list.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Children's Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-800/30"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 dark:text-amber-400 mb-1">
                Children's Privacy
              </h3>
              <p className="text-sm text-amber-700 dark:text-amber-500">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact for Privacy Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-xl font-bold mb-2">Questions About Privacy?</h3>
          <p className="text-white/80 mb-4">
            If you have any questions about this Privacy Policy or how we handle your data, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-2 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <a 
              href="mailto:privacy@eventsphere.com"
              className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 rounded-xl font-semibold hover:bg-white/30 transition-all"
            >
              <Mail size={16} />
              privacy@eventsphere.com
            </a>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200/50"
        >
          This Privacy Policy applies to all services provided by EventSphere. We reserve the right to update this policy at any time.
        </motion.p>

      </div>
    </main>
  );
}