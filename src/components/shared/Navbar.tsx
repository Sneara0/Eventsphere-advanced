"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Menu,
  X,
  Calendar,
  Home,
  Ticket,
  Users,
  Star,
  Settings,
  HelpCircle,
  LogOut,
  User,
  ChevronDown,
  Bell,
  Search,
  Globe,
  Sun,
  Moon,
  MessageCircle,
  Zap,
  LogIn,
  UserPlus,
  Sparkles,
  TrendingUp,
  Wallet,
  Shield,
  Headphones,
  Award,
  Gift,
  Clock,
  MapPin,
  Music,
  Video,
  Camera,
  Coffee,
  Heart,
  Trophy,
  BookOpen,
  CreditCard,
  Mail,
  Phone,
  Plus,
  Minus,
  Check,
  XCircle,
  AlertCircle,
  Info
} from 'lucide-react'

// ========== TYPES ==========
interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'user' | 'organizer'
}

// ========== NAVBAR COMPONENT ==========
export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [eventsMenuOpen, setEventsMenuOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [darkMode, setDarkMode] = useState(false)

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check auth status
  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
    if (token) {
      setUser({
        id: '1',
        name: 'Alex Johnson',
        email: 'alex@eventsphere.com',
        role: 'user',
        avatar: 'AJ'
      })
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    setUser(null)
    setProfileMenuOpen(false)
    router.push('/')
  }

  // Navigation Links (Logged Out - 4 routes)
  const loggedOutLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
  ]

  // Navigation Links (Logged In - 6 routes)
  const loggedInLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'My Events', href: '/my-events', icon: Calendar },
    { name: 'Tickets', href: '/tickets', icon: Ticket },
    { name: 'Bookings', href: '/bookings', icon: BookOpen },
    { name: 'Saved', href: '/saved', icon: Heart },
    { name: 'Wallet', href: '/wallet', icon: Wallet },
  ]

  // Events Dropdown Menu
  const eventsDropdown = [
    { name: 'Concerts', href: '/events/concerts', icon: Music, desc: 'Live music performances' },
    { name: 'Conferences', href: '/events/conferences', icon: Users, desc: 'Business & tech events' },
    { name: 'Workshops', href: '/events/workshops', icon: Zap, desc: 'Learn new skills' },
    { name: 'Festivals', href: '/events/festivals', icon: Sparkles, desc: 'Cultural celebrations' },
    { name: 'Sports', href: '/events/sports', icon: Trophy, desc: 'Live sports matches' },
    { name: 'Virtual Events', href: '/events/virtual', icon: Video, desc: 'Online experiences' },
  ]

  // Profile Dropdown Items
  const profileMenuItems = [
    { name: 'My Profile', href: '/profile', icon: User },
    { name: 'My Bookings', href: '/bookings', icon: BookOpen },
    { name: 'My Tickets', href: '/tickets', icon: Ticket },
    { name: 'Payment Methods', href: '/payments', icon: CreditCard },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Help Center', href: '/help', icon: HelpCircle },
  ]

  // Notifications
  const notifications = [
    { id: 1, title: 'New Event!', message: 'Music Festival coming to your city', time: '5 min ago', read: false, icon: Sparkles },
    { id: 2, title: 'Booking Confirmed', message: 'Your ticket for Concert is confirmed', time: '1 hour ago', read: false, icon: Check },
    { id: 3, title: 'Payment Received', message: 'Your payment has been processed', time: '2 hours ago', read: true, icon: CreditCard },
    { id: 4, title: 'Early Bird Offer', message: 'Get 20% off on event tickets', time: '3 hours ago', read: true, icon: Gift },
    { id: 5, title: 'Event Reminder', message: 'Your event starts in 2 hours', time: '5 hours ago', read: true, icon: Bell },
  ]

  const unreadCount = notifications.filter(n => !n.read).length

  // Navigation handler
  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'bg-black/70 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30"
              >
                <Calendar className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hidden sm:inline">
                EventSphere
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {(isLoggedIn ? loggedInLinks : loggedOutLinks).map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? 'text-purple-400 bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <link.icon size={16} />
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                )
              })}

              {/* Events Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setEventsMenuOpen(!eventsMenuOpen)}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    eventsMenuOpen
                      ? 'text-purple-400 bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Calendar size={16} />
                  Explore
                  <ChevronDown size={14} className={`transition-transform ${eventsMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {eventsMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50"
                    >
                      <div className="p-3 border-b border-white/10">
                        <h3 className="text-white font-semibold text-sm">Explore Events</h3>
                        <p className="text-gray-500 text-xs mt-0.5">Find your perfect experience</p>
                      </div>
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {eventsDropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/10 transition group"
                            onClick={() => setEventsMenuOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                              <item.icon size={14} className="text-purple-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-xs font-medium">{item.name}</p>
                              <p className="text-gray-500 text-[10px] truncate">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center gap-3">
              
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <Search size={20} />
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {isLoggedIn ? (
                <>
                  {/* Notifications Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setNotificationsOpen(!notificationsOpen)}
                      className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <Bell size={20} />
                      {unreadCount > 0 && (
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                      )}
                    </button>

                    <AnimatePresence>
                      {notificationsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          className="absolute right-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50"
                        >
                          <div className="p-4 border-b border-white/10 flex justify-between items-center">
                            <h3 className="text-white font-semibold text-sm">Notifications</h3>
                            <button className="text-xs text-purple-400 hover:text-purple-300">Mark all read</button>
                          </div>
                          <div className="max-h-96 overflow-y-auto">
                            {notifications.map((notif) => (
                              <div key={notif.id} className={`p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition ${!notif.read ? 'bg-purple-500/5' : ''}`}>
                                <div className="flex items-start gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                    <notif.icon size={14} className="text-purple-400" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-white text-sm font-medium">{notif.title}</p>
                                    <p className="text-gray-400 text-xs mt-1">{notif.message}</p>
                                    <p className="text-gray-500 text-xs mt-2">{notif.time}</p>
                                  </div>
                                  {!notif.read && (
                                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="p-3 border-t border-white/10 text-center">
                            <button className="text-purple-400 text-sm hover:text-purple-300 transition">
                              View All Notifications
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Settings Button */}
                  <button
                    onClick={() => navigateTo('/settings')}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Settings size={20} />
                  </button>

                  {/* Profile Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                      className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/10 transition-all"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        {user?.avatar || user?.name?.charAt(0) || 'U'}
                      </div>
                      <ChevronDown size={16} className={`text-gray-400 transition-transform ${profileMenuOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {profileMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          className="absolute right-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50"
                        >
                          <div className="p-4 border-b border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                            <p className="text-white font-semibold">{user?.name}</p>
                            <p className="text-gray-400 text-sm">{user?.email}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="inline-block px-2 py-0.5 bg-purple-500/20 rounded-full text-xs text-purple-400">Premium</span>
                              <span className="inline-block px-2 py-0.5 bg-yellow-500/20 rounded-full text-xs text-yellow-400">Level 3</span>
                            </div>
                          </div>
                          <div className="py-2">
                            {profileMenuItems.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/10 transition group"
                                onClick={() => setProfileMenuOpen(false)}
                              >
                                <item.icon size={18} className="group-hover:scale-110 transition" />
                                <span className="text-sm">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-white/10" />
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition group"
                          >
                            <LogOut size={18} className="group-hover:scale-110 transition" />
                            <span className="text-sm">Sign Out</span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </>
              ) : (
                <>
                  {/* Sign In Button */}
                  <button
                    onClick={() => navigateTo('/login')}
                    className="flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <LogIn size={16} />
                    Sign In
                  </button>
                  
                  {/* Sign Up Button */}
                  <button
                    onClick={() => navigateTo('/register')}
                    className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar Expanded */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-black/80 backdrop-blur-xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search events, concerts, workshops..."
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <kbd className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 bg-white/10 px-2 py-1 rounded-md hidden sm:block">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 max-h-[80vh] overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-1">
                {/* Mobile Navigation Links */}
                {(isLoggedIn ? loggedInLinks : loggedOutLinks).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                      pathname === link.href
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <link.icon size={18} />
                    {link.name}
                  </Link>
                ))}

                {/* Events Dropdown in Mobile */}
                <div className="mt-2">
                  <button
                    onClick={() => setEventsMenuOpen(!eventsMenuOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar size={18} />
                      <span className="text-sm font-medium">Explore Events</span>
                    </div>
                    <ChevronDown size={16} className={`transition-transform ${eventsMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {eventsMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-11 mt-1 space-y-1"
                      >
                        {eventsDropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-2 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/5 transition"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <item.icon size={14} />
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Settings in Mobile */}
                <Link
                  href="/settings"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Settings size={18} />
                  Settings
                </Link>

                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />

                {/* Mobile Auth Buttons */}
                {isLoggedIn ? (
                  <>
                    <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl mx-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold">
                        {user?.avatar || user?.name?.charAt(0) || 'U'}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{user?.name}</p>
                        <p className="text-gray-400 text-xs">{user?.email}</p>
                      </div>
                    </div>
                    {profileMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon size={18} />
                        {item.name}
                      </Link>
                    ))}
                    <button
                      onClick={() => {
                        handleLogout()
                        setMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition"
                    >
                      <LogOut size={18} />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col gap-3 px-4 pt-4 pb-6">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false)
                        navigateTo('/login')
                      }}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-medium bg-white/5 hover:bg-white/10 transition-all"
                    >
                      <LogIn size={18} />
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false)
                        navigateTo('/register')
                      }}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:shadow-lg transition-all"
                    >
                      <UserPlus size={18} />
                      Sign Up
                    </button>
                  </div>
                )}

                {/* Mobile Dark Mode */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-white/10 mt-2">
                  <span className="text-sm text-gray-400 flex items-center gap-2">
                    {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                    Dark Mode
                  </span>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`relative w-12 h-6 rounded-full transition-all ${
                      darkMode ? 'bg-gradient-to-r from-purple-500 to-pink-600' : 'bg-white/20'
                    }`}
                  >
                    <motion.div
                      className="absolute top-1 w-4 h-4 rounded-full bg-white"
                      animate={{ x: darkMode ? 24 : 4 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}