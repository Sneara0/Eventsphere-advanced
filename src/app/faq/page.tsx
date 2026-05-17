"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Ticket, 
  CreditCard, 
  User, 
  Shield, 
  Calendar,
  MessageCircle,
  Award,
  Globe,
  Smartphone,
  Users,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (id: number) => {
    setOpenQuestions(prev =>
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle, count: 24 },
    { id: "booking", name: "Booking & Tickets", icon: Ticket, count: 6 },
    { id: "payment", name: "Payments & Refunds", icon: CreditCard, count: 5 },
    { id: "account", name: "Account & Profile", icon: User, count: 4 },
    { id: "events", name: "Events", icon: Calendar, count: 4 },
    { id: "security", name: "Security & Privacy", icon: Shield, count: 3 },
  ];

  const faqs = [
    {
      id: 1,
      category: "booking",
      question: "How do I book tickets for an event?",
      answer: "Booking tickets is easy! Simply browse our events page, find the event you're interested in, click 'Get Tickets', select the number of tickets you want, and proceed to checkout. You'll receive a confirmation email with your e-tickets instantly.",
      helpful: true,
    },
    {
      id: 2,
      category: "booking",
      question: "Can I cancel or change my booking?",
      answer: "Yes, you can cancel or modify your booking up to 7 days before the event date. Go to 'My Bookings' in your account dashboard, select the event, and click 'Cancel' or 'Modify'. Refunds are processed within 5-7 business days.",
      helpful: true,
    },
    {
      id: 3,
      category: "booking",
      question: "Do I need to print my ticket?",
      answer: "No, you don't need to print your ticket! You can show the QR code on your mobile device at the event entrance. We recommend saving it to your phone's wallet for easy access.",
      helpful: true,
    },
    {
      id: 4,
      category: "payment",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through our payment partners.",
      helpful: true,
    },
    {
      id: 5,
      category: "payment",
      question: "How do I get a refund?",
      answer: "To request a refund, go to 'My Bookings' in your account, find the event, and click 'Request Refund'. Refund eligibility depends on the event's cancellation policy. Most events offer full refunds up to 7 days before the event.",
      helpful: true,
    },
    {
      id: 6,
      category: "payment",
      question: "Is my payment information secure?",
      answer: "Absolutely! We use industry-standard SSL encryption and never store your full payment details. All transactions are processed through PCI-compliant payment gateways like Stripe and PayPal.",
      helpful: true,
    },
    {
      id: 7,
      category: "account",
      question: "How do I create an account?",
      answer: "Click the 'Sign Up' button in the top right corner, fill in your name, email address, and create a password. You can also sign up using Google or Facebook for quicker access.",
      helpful: true,
    },
    {
      id: 8,
      category: "account",
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
      helpful: true,
    },
    {
      id: 9,
      category: "account",
      question: "How do I delete my account?",
      answer: "To delete your account, go to Account Settings > Delete Account. Please note that this action is permanent and will remove all your booking history and saved information.",
      helpful: true,
    },
    {
      id: 10,
      category: "events",
      question: "How do I find events near me?",
      answer: "Use our location filter on the events page. Enter your city or zip code, and we'll show you all upcoming events in your area. You can also filter by date, category, and price range.",
      helpful: true,
    },
    {
      id: 11,
      category: "events",
      question: "Can I get a refund if the event is canceled?",
      answer: "Yes, if an event is canceled by the organizer, you will receive a full refund automatically. No action is required from your side. Refunds are processed within 5-7 business days.",
      helpful: true,
    },
    {
      id: 12,
      category: "events",
      question: "How do I know if an event is legitimate?",
      answer: "All events on EventSphere are vetted by our team. We verify organizers and venues before allowing ticket sales. Look for the 'Verified' badge on event pages for added assurance.",
      helpful: true,
    },
    {
      id: 13,
      category: "security",
      question: "How do you protect my personal information?",
      answer: "We use multiple security layers including SSL encryption, two-factor authentication, regular security audits, and strict access controls. Your data is never sold to third parties.",
      helpful: true,
    },
    {
      id: 14,
      category: "security",
      question: "What is your privacy policy?",
      answer: "Our privacy policy explains how we collect, use, and protect your information. You can read the full policy at /privacy. We comply with GDPR and CCPA regulations.",
      helpful: true,
    },
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat?.icon || HelpCircle;
  };

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
            <HelpCircle size={14} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Help Center
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Find answers to common questions about booking, payments, events, and more.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400 hover:text-indigo-600"
              }`}
            >
              <cat.icon size={14} />
              {cat.name}
              <span className={`text-xs ${activeCategory === cat.id ? "text-white/80" : "text-slate-400"}`}>
                ({cat.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-slate-500">Try adjusting your search or category filter</p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5">
                      {React.createElement(getCategoryIcon(faq.category), {
                        size: 18,
                        className: "text-indigo-500"
                      })}
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 transition-transform duration-300 ${
                      openQuestions.includes(faq.id) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openQuestions.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-200/50 dark:border-slate-800/50"
                    >
                      <div className="p-5 pt-4">
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                        {faq.helpful && (
                          <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                            <span>Was this helpful?</span>
                            <button className="flex items-center gap-1 hover:text-emerald-500 transition">
                              <CheckCircle size={14} /> Yes
                            </button>
                            <button className="flex items-center gap-1 hover:text-red-500 transition">
                              <HelpCircle size={14} /> No
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-white/80 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              <MessageCircle size={16} />
              Contact Support
            </Link>
            <a 
              href="mailto:support@eventsphere.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/20 rounded-xl font-semibold hover:bg-white/30 transition-all"
            >
              <Mail size={16} />
              support@eventsphere.com
            </a>
            <a 
              href="tel:+18005550123"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/20 rounded-xl font-semibold hover:bg-white/30 transition-all"
            >
              <Phone size={16} />
              +1 (800) 555-0123
            </a>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          <div className="text-center p-4 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-200/50">
            <Clock className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">24/7</p>
            <p className="text-xs text-slate-500">Support Available</p>
          </div>
          <div className="text-center p-4 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-200/50">
            <Mail className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">2hr</p>
            <p className="text-xs text-slate-500">Avg Response Time</p>
          </div>
          <div className="text-center p-4 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-200/50">
            <Users className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">98%</p>
            <p className="text-xs text-slate-500">Satisfaction Rate</p>
          </div>
          <div className="text-center p-4 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-200/50">
            <Star className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">4.9</p>
            <p className="text-xs text-slate-500">Customer Rating</p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}