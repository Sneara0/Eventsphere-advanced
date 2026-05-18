"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Calendar,
  Ticket,
  Heart,
  Wallet,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  User,
  Eye,
  Edit,
  Search,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  TrendingUp,
  Award,
  Activity,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Star,
  Users
} from "lucide-react";
import Link from "next/link";

// ========== TYPES ==========
interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinDate: string;
  phone: string;
  location: string;
}

interface Event {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  image: string;
  price: number;
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  rating?: number;
}

interface Booking {
  id: string;
  eventId: string;
  eventTitle: string;
  eventImage: string;
  bookingDate: string;
  eventDate: string;
  tickets: number;
  totalAmount: number;
  status: "confirmed" | "pending" | "cancelled" | "completed";
}

// ========== MOCK DATA ==========
const currentUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "JD",
  joinDate: "2024-01-15",
  phone: "+1 234 567 8900",
  location: "New York, USA",
};

const upcomingEvents: Event[] = [
  { id: "1", title: "Summer Music Festival", category: "Music", date: "2024-08-15", time: "7:00 PM", location: "Central Park, NY", image: "🎵", price: 299, status: "upcoming", rating: 4.8 },
  { id: "2", title: "Tech Conference 2024", category: "Technology", date: "2024-09-10", time: "9:00 AM", location: "Moscone Center, SF", image: "💻", price: 499, status: "upcoming", rating: 4.9 },
  { id: "3", title: "Food & Wine Expo", category: "Food", date: "2024-10-05", time: "11:00 AM", location: "McCormick Place, CHI", image: "🍷", price: 149, status: "upcoming", rating: 4.7 },
];

const myBookings: Booking[] = [
  { id: "b1", eventId: "1", eventTitle: "Summer Music Festival", eventImage: "🎵", bookingDate: "2024-07-01", eventDate: "2024-08-15", tickets: 2, totalAmount: 598, status: "confirmed" },
  { id: "b2", eventId: "2", eventTitle: "Tech Conference 2024", eventImage: "💻", bookingDate: "2024-07-10", eventDate: "2024-09-10", tickets: 1, totalAmount: 499, status: "confirmed" },
];

const savedEvents: Event[] = [
  { id: "4", title: "Art & Design Workshop", category: "Art", date: "2024-11-01", time: "10:00 AM", location: "Art Institute, BOS", image: "🎨", price: 99, status: "upcoming", rating: 4.6 },
  { id: "5", title: "Wellness Retreat", category: "Wellness", date: "2024-12-01", time: "8:00 AM", location: "Sedona, AZ", image: "🧘", price: 599, status: "upcoming", rating: 4.9 },
];

const statsData = {
  totalBookings: 12,
  totalSpent: 2450,
  upcomingEvents: 5,
  loyaltyPoints: 1250,
};

const menuItems = [
  { name: "Overview", icon: Home, tab: "overview" },
  { name: "My Bookings", icon: Ticket, tab: "bookings" },
  { name: "Saved Events", icon: Heart, tab: "saved" },
  { name: "Wallet", icon: Wallet, tab: "wallet" },
  { name: "Profile", icon: User, tab: "profile" },
  { name: "Settings", icon: Settings, tab: "settings" },
];

export default function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bookingPage, setBookingPage] = useState(1);
  const [savedPage, setSavedPage] = useState(1);
  const itemsPerPage = 4;

  const paginatedBookings = myBookings.slice((bookingPage - 1) * itemsPerPage, bookingPage * itemsPerPage);
  const bookingTotalPages = Math.ceil(myBookings.length / itemsPerPage);

  const paginatedSaved = savedEvents.slice((savedPage - 1) * itemsPerPage, savedPage * itemsPerPage);
  const savedTotalPages = Math.ceil(savedEvents.length / itemsPerPage);

  const statCards = [
    { title: "Total Bookings", value: statsData.totalBookings, icon: Ticket, change: "+12%", color: "text-blue-400", bg: "bg-blue-500/10" },
    { title: "Total Spent", value: `$${statsData.totalSpent}`, icon: DollarSign, change: "+8%", color: "text-green-400", bg: "bg-green-500/10" },
    { title: "Upcoming Events", value: statsData.upcomingEvents, icon: Calendar, change: "+3", color: "text-purple-400", bg: "bg-purple-500/10" },
    { title: "Loyalty Points", value: statsData.loyaltyPoints, icon: Award, change: "+250", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      confirmed: "bg-green-500/20 text-green-400",
      pending: "bg-yellow-500/20 text-yellow-400",
      cancelled: "bg-red-500/20 text-red-400",
      completed: "bg-blue-500/20 text-blue-400",
      upcoming: "bg-blue-500/20 text-blue-400",
      ongoing: "bg-green-500/20 text-green-400",
    };
    return colors[status] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Animated Background Accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-50 h-screen w-72 bg-black/90 backdrop-blur-xl border-r border-white/10 transition-all duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex h-16 items-center justify-between px-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">UserPanel</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white"><X size={20} /></button>
        </div>

        <div className="px-4 py-6">
          <div className="mb-6 px-3">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              {currentUser.avatar}
            </div>
            <h3 className="text-center text-white font-semibold mt-3">{currentUser.name}</h3>
            <p className="text-center text-xs text-slate-500">{currentUser.email}</p>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === item.tab
                    ? "bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white border border-white/20 shadow-lg"
                    : "text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon size={18} className={activeTab === item.tab ? "text-blue-400" : "text-slate-500"} />
                {item.name}
                {activeTab === item.tab && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <button className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all group">
            <LogOut size={18} className="group-hover:scale-110 transition" />
            Logout
          </button>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 z-40 bg-black/80 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-3">
            <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-xl text-slate-400 hover:bg-white/10 lg:hidden">
              <Menu size={20} />
            </button>
            <div className="hidden lg:flex items-center gap-2">
              <Sparkles size={16} className="text-blue-400" />
              <h1 className="text-sm text-slate-400">Welcome back, <span className="text-white font-semibold">{currentUser.name}</span></h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="relative p-2 rounded-xl text-slate-400 hover:bg-white/10 transition">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
              </button>
              <div className="flex items-center gap-3 pl-2 border-l border-white/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  {currentUser.avatar}
                </div>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-white">{currentUser.name}</p>
                  <p className="text-xs text-slate-500">{currentUser.email}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* ========== OVERVIEW TAB ========== */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {statCards.map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <span className="text-xs font-semibold text-green-400 bg-green-500/20 px-2.5 py-1 rounded-full">{stat.change}</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-500 mt-1">{stat.title}</p>
                    <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full w-2/3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full`} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Upcoming Events Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2"><Calendar size={18} className="text-blue-400" /> Upcoming Events</h3>
                  <button className="text-sm text-blue-400 hover:text-blue-300">View All →</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">{event.image}</div>
                        <div><h4 className="text-white font-semibold">{event.title}</h4><p className="text-xs text-slate-400">{event.category}</p></div>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2 text-slate-400"><Calendar size={14} /> {event.date}</div>
                        <div className="flex items-center gap-2 text-slate-400"><Clock size={14} /> {event.time}</div>
                        <div className="flex items-center gap-2 text-slate-400"><MapPin size={14} /> {event.location}</div>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                        <span className="text-white font-bold">${event.price}</span>
                        <button className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-semibold">Book Now</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Activity size={18} className="text-blue-400" /> Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { action: "You booked tickets for Summer Music Festival", time: "2 days ago", icon: Ticket, color: "text-blue-400" },
                    { action: "You saved Art & Design Workshop to wishlist", time: "5 days ago", icon: Heart, color: "text-pink-400" },
                    { action: "You earned 250 loyalty points", time: "1 week ago", icon: Award, color: "text-yellow-400" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><item.icon className={`w-5 h-5 ${item.color}`} /></div>
                      <div className="flex-1"><p className="text-sm text-white">{item.action}</p><p className="text-xs text-slate-500 mt-0.5">{item.time}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========== MY BOOKINGS TAB ========== */}
          {activeTab === "bookings" && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-5 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2"><Ticket size={18} className="text-blue-400" /> My Bookings</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr><th className="text-left py-3 px-4 text-xs font-semibold text-slate-400">Event</th><th className="text-left py-3 px-4 text-xs font-semibold text-slate-400">Booking Date</th><th className="text-left py-3 px-4 text-xs font-semibold text-slate-400">Event Date</th><th className="text-left py-3 px-4 text-xs font-semibold text-slate-400">Tickets</th><th className="text-left py-3 px-4 text-xs font-semibold text-slate-400">Total</th><th className="text-left py-3 px-4 text-xs font-semibold text-slate-400">Status</th><th className="text-left py-3 px-4 text-xs font-semibold text-slate-400">Actions</th></tr></thead>
                  <tbody>
                    {paginatedBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5 transition">
                        <td className="py-3 px-4"><div className="flex items-center gap-3"><div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-xl">{booking.eventImage}</div><span className="text-sm text-white">{booking.eventTitle}</span></div></td>
                        <td className="py-3 px-4 text-sm text-slate-400">{booking.bookingDate}</td>
                        <td className="py-3 px-4 text-sm text-slate-400">{booking.eventDate}</td>
                        <td className="py-3 px-4 text-sm text-white">{booking.tickets}</td>
                        <td className="py-3 px-4 text-sm text-white">${booking.totalAmount}</td>
                        <td className="py-3 px-4"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>{booking.status}</span></td>
                        <td className="py-3 px-4"><button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-semibold hover:bg-blue-600/30">View Details</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {bookingTotalPages > 1 && (
                <div className="flex justify-between items-center p-4 border-t border-white/10">
                  <p className="text-sm text-slate-400">Showing {bookingPage} of {bookingTotalPages} pages</p>
                  <div className="flex gap-2"><button onClick={() => setBookingPage(p => Math.max(1, p-1))} disabled={bookingPage === 1} className="p-2 rounded-lg bg-white/10 text-white disabled:opacity-50"><ChevronLeft size={16} /></button><button onClick={() => setBookingPage(p => Math.min(bookingTotalPages, p+1))} disabled={bookingPage === bookingTotalPages} className="p-2 rounded-lg bg-white/10 text-white disabled:opacity-50"><ChevronRight size={16} /></button></div>
                </div>
              )}
            </div>
          )}

          {/* ========== SAVED EVENTS TAB ========== */}
          {activeTab === "saved" && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-5 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2"><Heart size={18} className="text-pink-400" /> Saved Events</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                {paginatedSaved.map((event) => (
                  <div key={event.id} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition">
                    <div className="flex items-center gap-3 mb-3"><div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">{event.image}</div><div><h4 className="text-white font-semibold">{event.title}</h4><p className="text-xs text-slate-400">{event.category}</p></div></div>
                    <div className="space-y-1 text-sm"><div className="flex items-center gap-2 text-slate-400"><Calendar size={14} /> {event.date}</div><div className="flex items-center gap-2 text-slate-400"><Clock size={14} /> {event.time}</div><div className="flex items-center gap-2 text-slate-400"><MapPin size={14} /> {event.location}</div><div className="flex items-center gap-1"><Star size={14} className="text-yellow-400 fill-yellow-400" /><span className="text-white text-sm">{event.rating}</span></div></div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10"><span className="text-white font-bold">${event.price}</span><button className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-semibold">Book Now</button></div>
                  </div>
                ))}
              </div>
              {savedTotalPages > 1 && (
                <div className="flex justify-between items-center p-4 border-t border-white/10">
                  <p className="text-sm text-slate-400">Showing {savedPage} of {savedTotalPages} pages</p>
                  <div className="flex gap-2"><button onClick={() => setSavedPage(p => Math.max(1, p-1))} disabled={savedPage === 1} className="p-2 rounded-lg bg-white/10 text-white disabled:opacity-50"><ChevronLeft size={16} /></button><button onClick={() => setSavedPage(p => Math.min(savedTotalPages, p+1))} disabled={savedPage === savedTotalPages} className="p-2 rounded-lg bg-white/10 text-white disabled:opacity-50"><ChevronRight size={16} /></button></div>
                </div>
              )}
            </div>
          )}

          {/* ========== WALLET TAB ========== */}
          {activeTab === "wallet" && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 text-center">
                <Wallet className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <p className="text-slate-400 mb-2">Available Balance</p>
                <p className="text-4xl font-bold text-white">$1,250.00</p>
                <button className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-sm font-semibold">Add Funds</button>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Transaction History</h3>
                <div className="space-y-3">
                  {[{ date: "2024-07-01", amount: -598, type: "Event Booking", status: "completed" },{ date: "2024-06-25", amount: 500, type: "Added Funds", status: "completed" },{ date: "2024-06-20", amount: -499, type: "Event Booking", status: "completed" }].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                      <div><p className="text-white text-sm">{tx.type}</p><p className="text-xs text-slate-500">{tx.date}</p></div>
                      <div className={`text-right ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>{tx.amount > 0 ? `+$${tx.amount}` : `-$${Math.abs(tx.amount)}`}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========== PROFILE TAB ========== */}
          {activeTab === "profile" && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">{currentUser.avatar}</div>
                <div><h3 className="text-xl font-bold text-white">{currentUser.name}</h3><p className="text-slate-400">Member since {currentUser.joinDate}</p></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10"><p className="text-xs text-slate-400">Full Name</p><p className="text-white">{currentUser.name}</p></div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10"><p className="text-xs text-slate-400">Email</p><p className="text-white">{currentUser.email}</p></div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10"><p className="text-xs text-slate-400">Phone</p><p className="text-white">{currentUser.phone}</p></div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10"><p className="text-xs text-slate-400">Location</p><p className="text-white">{currentUser.location}</p></div>
              </div>
              <button className="mt-6 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-sm font-semibold flex items-center gap-2"><Edit size={16} /> Edit Profile</button>
            </div>
          )}

          {/* ========== SETTINGS TAB ========== */}
          {activeTab === "settings" && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2"><Settings size={20} className="text-slate-400" /> Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"><div><p className="text-white font-medium">Email Notifications</p><p className="text-sm text-slate-500">Receive updates about events and bookings</p></div><button className="px-4 py-2 bg-blue-600 rounded-lg text-white text-sm">Enable</button></div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"><div><p className="text-white font-medium">Two-Factor Authentication</p><p className="text-sm text-slate-500">Add an extra layer of security</p></div><button className="px-4 py-2 bg-gray-600 rounded-lg text-white text-sm">Setup</button></div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"><div><p className="text-white font-medium">Language Preference</p><p className="text-sm text-slate-500">Choose your preferred language</p></div><button className="px-4 py-2 bg-gray-600 rounded-lg text-white text-sm">English</button></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}