"use client"
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { 
  ShieldCheck, 
  Plane, 
  Hotel, 
  Map, 
  ArrowRight,
  Clock, 
  LifeBuoy, 
  CreditCard, 
  Zap,
  Palmtree, 
  Mountain, 
  Building2, 
  Navigation, 
  Globe2, 
  CloudSun,
  Sparkles,
  ChevronDown,
  Star,
  Users,
  ThumbsUp,
  Award,
  Play,
  Calendar,
  Ticket,
  Headphones,
  Gift,
  TrendingUp,
  Compass,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Send,
  Quote,
  Briefcase,
  Heart,
  Trophy,
  CheckCircle
} from 'lucide-react'

export default function LandingPage() {
  const [loading, setLoading] = useState(true)
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Stats Data
  const stats = [
    { value: 500, label: "Airlines", icon: Plane, suffix: "+", gradient: "from-cyan-500 to-blue-500" },
    { value: 120, label: "Countries", icon: Globe2, suffix: "+", gradient: "from-emerald-500 to-teal-500" },
    { value: 50, label: "Happy Clients", icon: Users, suffix: "k+", gradient: "from-violet-500 to-purple-500" },
    { value: 98, label: "Satisfaction", icon: ThumbsUp, suffix: "%", gradient: "from-amber-500 to-orange-500" }
  ]

  // Categories Data
  const categories = [
    { name: "Tropical Escape", icon: Palmtree, count: "150+ Flights", gradient: "from-emerald-500 to-teal-500", desc: "Sunny beaches & palm trees", price: "$299", popular: true },
    { name: "Mountain High", icon: Mountain, count: "85+ Flights", gradient: "from-sky-500 to-blue-600", desc: "Serene peaks & fresh air", price: "$399", popular: false },
    { name: "Urban Vibes", icon: Building2, count: "210+ Flights", gradient: "from-slate-600 to-gray-700", desc: "Pulse of modern cities", price: "$249", popular: true },
    { name: "Hidden Gems", icon: Navigation, count: "40+ Flights", gradient: "from-amber-500 to-orange-600", desc: "Secret paradise spots", price: "$449", popular: false },
    { name: "Global Biz", icon: Globe2, count: "120+ Flights", gradient: "from-indigo-500 to-purple-600", desc: "Business class luxury", price: "$599", popular: true },
    { name: "Quick Trips", icon: CloudSun, count: "95+ Flights", gradient: "from-rose-400 to-pink-500", desc: "Weekend getaways", price: "$199", popular: false }
  ]

  // Services Data
  const services = [
    { icon: Plane, title: "Global Flights", desc: "500+ airlines worldwide with exclusive deals", gradient: "from-cyan-500 to-blue-500", iconBg: "bg-cyan-500/10", iconColor: "text-cyan-500" },
    { icon: Hotel, title: "Luxury Stays", desc: "Handpicked 5-star hotels & resorts", gradient: "from-emerald-500 to-teal-500", iconBg: "bg-emerald-500/10", iconColor: "text-emerald-500" },
    { icon: Map, title: "Guided Tours", desc: "Local experiences with expert guides", gradient: "from-violet-500 to-purple-500", iconBg: "bg-violet-500/10", iconColor: "text-violet-500" },
    { icon: ShieldCheck, title: "Travel Insurance", desc: "Comprehensive coverage worldwide", gradient: "from-amber-500 to-orange-500", iconBg: "bg-amber-500/10", iconColor: "text-amber-500" }
  ]

  // Features Data
  const features = [
    { icon: Award, title: "Best Price Guarantee", desc: "We match any lower price you find", color: "text-emerald-500" },
    { icon: Clock, title: "24/7 Customer Support", desc: "Round-the-clock assistance", color: "text-blue-500" },
    { icon: CreditCard, title: "Secure Payments", desc: "256-bit SSL encryption", color: "text-purple-500" },
    { icon: TrendingUp, title: "Price Drop Alerts", desc: "Get notified when prices fall", color: "text-amber-500" },
    { icon: Gift, title: "Reward Points", desc: "Earn points on every booking", color: "text-pink-500" },
    { icon: Headphones, title: "24/7 Support", desc: "Round the clock assistance", color: "text-cyan-500" }
  ]

  // Testimonials
  const testimonials = [
    { name: "Sarah Johnson", role: "Travel Blogger", text: "Best travel platform! Found amazing deals and exceptional service.", rating: 5, avatar: "SJ", location: "New York, USA" },
    { name: "Michael Chen", role: "Business Executive", text: "Seamless bookings, great recommendations. Highly recommended!", rating: 5, avatar: "MC", location: "Singapore" },
    { name: "Emma Williams", role: "Adventure Seeker", text: "50+ countries with FinNexus. Never disappointed!", rating: 5, avatar: "EW", location: "London, UK" }
  ]

  // 📝 BLOG POSTS
  const blogPosts = [
    { title: "Top 10 Beach Destinations for 2024", desc: "Discover the most beautiful beaches around the world...", emoji: "🏖️", date: "May 15, 2024", readTime: "5 min read", category: "Destinations" },
    { title: "Travel on a Budget: 15 Money-Saving Tips", desc: "Learn how to travel more while spending less...", emoji: "💰", date: "May 12, 2024", readTime: "7 min read", category: "Tips" },
    { title: "Sustainable Travel Guide", desc: "How to reduce your carbon footprint while traveling...", emoji: "🌱", date: "May 10, 2024", readTime: "4 min read", category: "Eco-Travel" }
  ]

  // ❓ FAQ DATA
  const faqs = [
    { q: "How do I book a flight?", a: "Simply search for your destination, select your preferred flight, enter passenger details, and complete payment." },
    { q: "Can I cancel my booking?", a: "Yes, free cancellation is available up to 24 hours before departure for most bookings." },
    { q: "How does price match work?", a: "If you find a lower price elsewhere within 24 hours, we'll match it and give you $50 credit." },
    { q: "Is my payment secure?", a: "Absolutely! We use 256-bit SSL encryption and never store your payment details." }
  ]

  // 🤝 PARTNERS
  const partners = [
    { name: "Emirates", icon: "✈️" },
    { name: "Marriott", icon: "🏨" },
    { name: "TripAdvisor", icon: "⭐" },
    { name: "Booking.com", icon: "📚" },
    { name: "Expedia", icon: "🌐" },
    { name: "Airbnb", icon: "🏠" }
  ]

  // 🏆 AWARDS
  const awards = [
    { title: "Best Travel Platform", year: "2024", icon: Trophy, color: "from-amber-500 to-orange-500" },
    { title: "Top Customer Service", year: "2023", icon: Headphones, color: "from-blue-500 to-cyan-500" },
    { title: "Innovation Award", year: "2024", icon: Sparkles, color: "from-purple-500 to-pink-500" }
  ]

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center z-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute mt-32 text-white text-lg font-semibold tracking-wider"
        >
          EventSphere
        </motion.p>
      </div>
    )
  }

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white overflow-x-hidden">
      
      {/* ========== SECTION 1: HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950 dark:via-slate-950 dark:to-purple-950">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-[100px] opacity-30 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full blur-[120px] opacity-30 animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-200 to-rose-200 rounded-full blur-[150px] opacity-20 animate-pulse delay-2000" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-indigo-200/30 dark:border-indigo-800/30"
          >
            <Sparkles size={16} className="text-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Powered by AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6"
          >
            EXPLORE THE{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">WORLD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Discover amazing destinations, book flights, hotels, and create unforgettable memories with AI-powered travel recommendations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 group">
              Start Exploring
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full text-slate-700 dark:text-white font-semibold text-lg hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <Play size={18} /> Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ========== SECTION 2: STATISTICS ========== */}
      <section className="py-20 px-4 container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 hover:shadow-xl transition-all">
              <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-black tracking-tighter bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== SECTION 3: CATEGORIES ========== */}
      <section className="py-24 px-4 container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-[0.3em] mb-4">
              <Sparkles size={14} /> Popular Destinations
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">CHOOSE YOUR <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ATMOSPHERE</span></h2>
          </div>
          <button className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:gap-3">View All <ArrowRight size={16} /></button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"><cat.icon size={28} /></div>
                  {cat.popular && <span className="px-3 py-1 bg-amber-400 text-amber-900 text-xs font-black rounded-full flex items-center gap-1"><Star size={12} /> Popular</span>}
                </div>
                <div><h3 className="text-2xl font-black tracking-tight mb-1">{cat.name}</h3><p className="text-white/80 text-sm mb-2">{cat.desc}</p><div className="flex justify-between items-center"><span className="text-xs font-semibold uppercase tracking-wider">{cat.count}</span><span className="text-2xl font-black">{cat.price}</span></div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== SECTION 4: SERVICES ========== */}
      <section className="py-24 px-4 container mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full mb-6"><Zap size={14} className="text-indigo-600" /><span className="text-[10px] font-black uppercase tracking-[0.3em]">Premium Services</span></motion.div>
          <motion.h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">ELEVATED <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">EXPERIENCE</span></motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto">We provide end-to-end travel solutions with best-in-class services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8 }} className="group p-6 rounded-2xl bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl transition-all">
              <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110`}><service.icon className={service.iconColor} size={28} /></div>
              <h3 className="text-xl font-black mb-3">{service.title}</h3><p className="text-slate-500 text-sm">{service.desc}</p>
              <div className="mt-6 pt-6 border-t border-slate-200/50 opacity-0 group-hover:opacity-100"><span className="text-sm font-semibold text-indigo-600 flex items-center gap-2">Learn More <ArrowRight size={14} className="group-hover:translate-x-1" /></span></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== SECTION 5: FEATURES ========== */}
      <section className="py-24 px-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-1.5 rounded-full mb-6"><Award size={14} className="text-amber-500" /><span className="text-[10px] font-black uppercase tracking-[0.3em]">Why Choose Us</span></motion.div>
            <motion.h2 className="text-4xl md:text-5xl font-black tracking-tighter">TRAVEL WITH <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">CONFIDENCE</span></motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center"><item.icon className={`w-6 h-6 ${item.color}`} /></div>
                <div><h3 className="font-bold text-lg mb-1">{item.title}</h3><p className="text-sm text-slate-500">{item.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: TESTIMONIALS ========== */}
      <section className="py-24 px-4 container mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-1.5 rounded-full mb-6"><Star size={14} className="text-amber-500 fill-amber-500" /><span className="text-[10px] font-black uppercase tracking-[0.3em]">Love Notes</span></motion.div>
          <motion.h2 className="text-4xl md:text-5xl font-black tracking-tighter">WHAT OUR <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">TRAVELERS SAY</span></motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 hover:shadow-2xl">
              <Quote className="w-8 h-8 text-indigo-400 mb-4" />
              <p className="text-slate-600 mb-6 italic">"{test.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">{test.avatar}</div>
                <div><h4 className="font-semibold">{test.name}</h4><p className="text-xs text-slate-500">{test.role}</p><p className="text-xs text-slate-400 flex items-center gap-1"><Globe2 size={10} /> {test.location}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== SECTION 7: BLOG ========== */}
      <section className="py-24 px-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full mb-6"><BookOpen size={14} className="text-indigo-600" /><span className="text-[10px] font-black uppercase tracking-[0.3em]">Travel Blog</span></motion.div>
            <motion.h2 className="text-4xl md:text-5xl font-black tracking-tighter">LATEST <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">STORIES</span></motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-6xl">{post.emoji}</div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600">{post.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{post.desc}</p>
                  <button className="text-indigo-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2">Read More <ArrowRight size={14} /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: AWARDS ========== */}
      <section className="py-24 px-4 container mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-1.5 rounded-full mb-6"><Trophy size={14} className="text-amber-500" /><span className="text-[10px] font-black uppercase tracking-[0.3em]">Our Achievements</span></motion.div>
          <motion.h2 className="text-4xl md:text-5xl font-black tracking-tighter">Awards & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Recognition</span></motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`text-center p-6 rounded-2xl bg-gradient-to-br ${award.color} bg-opacity-10 border border-white/10`}>
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center"><award.icon className="w-8 h-8 text-white" /></div>
              <h3 className="text-xl font-bold text-white mb-1">{award.title}</h3>
              <p className="text-white/70 text-sm">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== SECTION 9: PARTNERS ========== */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
        <div className="text-center mb-12">
          <motion.h2 className="text-2xl md:text-3xl font-black tracking-tighter">Trusted by <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Leading Partners</span></motion.h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl">{partner.icon}</div>
              <p className="text-sm text-slate-500 mt-2">{partner.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== SECTION 10: FAQ ========== */}
      <section className="py-24 px-4 container mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-1.5 rounded-full mb-6"><HelpCircle size={14} className="text-purple-600" /><span className="text-[10px] font-black uppercase tracking-[0.3em]">FAQ</span></motion.div>
          <motion.h2 className="text-4xl md:text-5xl font-black tracking-tighter">FREQUENTLY ASKED <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">QUESTIONS</span></motion.h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="mb-4">
              <button onClick={() => setActiveFAQ(activeFAQ === i ? null : i)} className="w-full flex justify-between items-center p-5 rounded-xl bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200/50 text-left">
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeFAQ === i ? 'rotate-180' : ''}`} />
              </button>
              {activeFAQ === i && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-5 mt-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-slate-600 text-sm">
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== SECTION 11: CTA ========== */}
      <section className="py-24 px-4 container mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="max-w-5xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/80 text-lg mb-8">Join thousands of happy travelers who have discovered amazing destinations with FinNexus</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center gap-2 group">Get Started <ArrowRight className="group-hover:translate-x-1" /></button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 border border-white/20">View Pricing</button>
          </div>
        </motion.div>
      </section>

      {/* ========== SECTION 12: NEWSLETTER ========== */}
      <section className="py-16 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input type="email" placeholder="Enter your email for exclusive deals" className="flex-1 px-6 py-3 rounded-full bg-white/10 dark:bg-slate-900/30 border border-slate-200 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all flex items-center gap-2 group">Subscribe <Send size={16} className="group-hover:translate-x-1" /></button>
          </div>
          <p className="text-xs text-slate-500 mt-4">Get updates on new destinations and exclusive offers</p>
        </div>
      </section>

      {/* ========== SECTION 13: FOOTER ========== */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div><div className="flex items-center gap-2 mb-4"><div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center"><Compass className="w-5 h-5 text-white" /></div><span className="text-xl font-bold">EventSphere</span></div><p className="text-slate-400 text-sm">Your trusted partner for unforgettable journeys.</p></div>
            <div><h4 className="font-semibold mb-4">Quick Links</h4><ul className="space-y-2 text-sm text-slate-400"><li><Link href="/about" className="hover:text-indigo-400">About Us</Link></li><li><Link href="/destinations" className="hover:text-indigo-400">Destinations</Link></li><li><Link href="/contact" className="hover:text-indigo-400">Contact</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Support</h4><ul className="space-y-2 text-sm text-slate-400"><li><Link href="/faq" className="hover:text-indigo-400">FAQ</Link></li><li><Link href="/privacy" className="hover:text-indigo-400">Privacy Policy</Link></li><li><Link href="/terms" className="hover:text-indigo-400">Terms of Service</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Connect</h4><ul className="space-y-2 text-sm text-slate-400"><li><Link href="#" className="hover:text-indigo-400">Instagram</Link></li><li><Link href="#" className="hover:text-indigo-400">Facebook</Link></li><li><Link href="#" className="hover:text-indigo-400">Twitter</Link></li></ul></div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500"><p>&copy; 2024 EventSphere. All rights reserved.</p></div>
        </div>
      </footer>
    </main>
  )
}