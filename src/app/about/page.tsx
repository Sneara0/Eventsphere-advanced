"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Calendar,
  MapPin,
  Clock,
  Heart,
  Globe,
  Zap,
  Star,
  CheckCircle,
  TrendingUp,
  Mail,
  Phone,
  Share2,
  X,
  Camera,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { value: "500+", label: "Events Hosted", icon: Calendar },
    { value: "100K+", label: "Happy Attendees", icon: Users },
    { value: "50+", label: "Cities Covered", icon: Globe },
    { value: "98%", label: "Satisfaction Rate", icon: Star },
  ];

  const teamMembers = [
    { name: "Alex Johnson", role: "CEO & Founder", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Sarah Chen", role: "CTO", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Michael Rodriguez", role: "Head of Events", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Emily Davis", role: "Customer Success", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  ];

  const values = [
    { icon: Heart, title: "Passion", desc: "We love what we do and it shows in every event" },
    { icon: ShieldCheck, title: "Integrity", desc: "Transparent and honest with our community" },
    { icon: Zap, title: "Innovation", desc: "Always pushing boundaries with new tech" },
    { icon: Users, title: "Community", desc: "Building connections that last forever" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-800 dark:text-slate-200 overflow-x-hidden">
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full mb-6">
            <Sparkles size={14} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              About Us
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
            We Bring People
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            EventSphere is revolutionizing how events are discovered, managed, and experienced. 
            We're building the future of community connection.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 lg:mb-24"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To empower event organizers with robust, scalable, and easy-to-use tools that eliminate technical friction, 
              allowing them to focus entirely on crafting great human connections.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To become the global ecosystem for event management, utilizing next-generation technologies 
              like AI suggestions to bridge the gap between brilliant ideas and worldwide audiences.
            </p>
          </motion.div>
        </div>

        {/* Our Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">
              Our Core{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 hover:bg-white/60 dark:hover:bg-slate-900/50 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">
              Meet the{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Passionate people behind EventSphere
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call To Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            Ready to Experience the Best Events?
          </h2>
          <p className="text-white/80 max-w-md mx-auto mb-8">
            Check out our upcoming technical summits, cultural festivals, and modern workshops now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/events" 
              className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-slate-50 transition flex items-center justify-center gap-2 shadow-md group"
            >
              <span>Explore Events</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition flex items-center justify-center gap-2 border border-white/20"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200/50 dark:border-slate-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2024 EventSphere. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-500 hover:text-indigo-600 transition">
                <Share2 size={18} />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-indigo-600 transition">
                <X size={18} />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-indigo-600 transition">
                <Camera size={18} />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-indigo-600 transition">
                <Briefcase size={18} />
              </Link>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}