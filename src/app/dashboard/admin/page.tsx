"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  DollarSign,
  Ticket,
  Eye,
  Edit,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  UserPlus,
  Plus,
  BarChart3,
  PieChart,
  LineChart,
  AlertCircle,
  Award,
  Activity,
  Sparkles,
  ArrowRight
} from "lucide-react";

// ========== TYPES ==========
type UserRole = "admin" | "manager" | "user";
type UserStatus = "active" | "blocked" | "pending";
type EventStatus = "upcoming" | "ongoing" | "completed" | "cancelled";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joinDate: string;
  eventsAttended: number;
  avatar: string;
}

interface Event {
  id: string;
  title: string;
  category: string;
  date: string;
  ticketsSold: number;
  revenue: number;
  status: EventStatus;
  image: string;
  rating: number;
}

// ========== STATUS COLORS ==========
const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    active: "bg-emerald-500/20 text-emerald-400",
    blocked: "bg-red-500/20 text-red-400",
    pending: "bg-amber-500/20 text-amber-400",
    upcoming: "bg-blue-500/20 text-blue-400",
    ongoing: "bg-emerald-500/20 text-emerald-400",
    completed: "bg-slate-600/30 text-slate-400",
    cancelled: "bg-red-500/20 text-red-400",
  };
  return colors[status] || "bg-slate-600/30 text-slate-400";
};

const getRoleBadgeClass = (role: UserRole): string => {
  switch (role) {
    case "admin": return "bg-purple-500/20 text-purple-400";
    case "manager": return "bg-blue-500/20 text-blue-400";
    default: return "bg-emerald-500/20 text-emerald-400";
  }
};

// ========== MOCK DATA ==========
const mockUsers: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "user", status: "active", joinDate: "2024-01-15", eventsAttended: 12, avatar: "JD" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "user", status: "active", joinDate: "2024-02-20", eventsAttended: 8, avatar: "JS" },
  { id: "3", name: "Admin User", email: "admin@example.com", role: "admin", status: "active", joinDate: "2024-01-01", eventsAttended: 45, avatar: "AU" },
  { id: "4", name: "Manager User", email: "manager@example.com", role: "manager", status: "active", joinDate: "2024-01-10", eventsAttended: 23, avatar: "MU" },
  { id: "5", name: "Sarah Wilson", email: "sarah@example.com", role: "user", status: "blocked", joinDate: "2024-03-05", eventsAttended: 3, avatar: "SW" },
  { id: "6", name: "Mike Brown", email: "mike@example.com", role: "user", status: "active", joinDate: "2024-03-20", eventsAttended: 5, avatar: "MB" },
  { id: "7", name: "Emily Davis", email: "emily@example.com", role: "manager", status: "active", joinDate: "2024-04-01", eventsAttended: 15, avatar: "ED" },
];

const mockEvents: Event[] = [
  { id: "1", title: "Summer Music Festival", category: "Music", date: "2024-08-15", ticketsSold: 4500, revenue: 156780, status: "upcoming", image: "🎵", rating: 4.8 },
  { id: "2", title: "Tech Conference 2024", category: "Technology", date: "2024-09-10", ticketsSold: 7000, revenue: 437800, status: "upcoming", image: "💻", rating: 4.9 },
  { id: "3", title: "Food & Wine Expo", category: "Food", date: "2024-10-05", ticketsSold: 4000, revenue: 78360, status: "upcoming", image: "🍷", rating: 4.7 },
  { id: "4", title: "Art & Design Workshop", category: "Art", date: "2024-11-01", ticketsSold: 1000, revenue: 37020, status: "upcoming", image: "🎨", rating: 4.6 },
  { id: "5", title: "Wellness Retreat", category: "Wellness", date: "2024-12-01", ticketsSold: 350, revenue: 25880, status: "upcoming", image: "🧘", rating: 4.9 },
];

const statsData = {
  totalUsers: 12543,
  totalEvents: 342,
  totalRevenue: 2487650,
  totalTickets: 87654,
  pendingApprovals: 23,
  activeEvents: 18,
  userGrowth: 12.5,
  revenueGrowth: 18.3,
};

const statCards = [
  { title: "Total Users", value: statsData.totalUsers.toLocaleString(), icon: Users, change: `+${statsData.userGrowth}%`, positive: true, gradient: "from-indigo-500 to-purple-500" },
  { title: "Total Events", value: statsData.totalEvents.toLocaleString(), icon: Calendar, change: "+8.2%", positive: true, gradient: "from-emerald-500 to-teal-500" },
  { title: "Total Revenue", value: `$${statsData.totalRevenue.toLocaleString()}`, icon: DollarSign, change: `+${statsData.revenueGrowth}%`, positive: true, gradient: "from-amber-500 to-orange-500" },
  { title: "Tickets Sold", value: statsData.totalTickets.toLocaleString(), icon: Ticket, change: "+15.4%", positive: true, gradient: "from-cyan-500 to-blue-500" },
];

const menuItems = [
  { name: "Overview", icon: LayoutDashboard, tab: "overview" },
  { name: "Users", icon: Users, tab: "users" },
  { name: "Events", icon: Calendar, tab: "events" },
  { name: "Analytics", icon: BarChart3, tab: "analytics" },
  { name: "Settings", icon: Settings, tab: "settings" },
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [userPage, setUserPage] = useState(1);
  const [eventSearch, setEventSearch] = useState("");
  const [eventPage, setEventPage] = useState(1);
  const itemsPerPage = 5;

  const filteredUsers = mockUsers.filter((u) =>
    u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
    u.email.toLowerCase().includes(userSearch.toLowerCase())
  );
  const paginatedUsers = filteredUsers.slice((userPage - 1) * itemsPerPage, userPage * itemsPerPage);
  const userTotalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const filteredEvents = mockEvents.filter((e) =>
    e.title.toLowerCase().includes(eventSearch.toLowerCase()) ||
    e.category.toLowerCase().includes(eventSearch.toLowerCase())
  );
  const paginatedEvents = filteredEvents.slice((eventPage - 1) * itemsPerPage, eventPage * itemsPerPage);
  const eventTotalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-black">
      {/* Animated Accent Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] animate-pulse delay-2000" />
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-black/90 backdrop-blur-xl border-r border-white/10 transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">AdminPanel</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="px-4 py-6">
          <div className="mb-6 px-3">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              A
            </div>
            <h3 className="text-center text-white font-semibold mt-3">Admin User</h3>
            <p className="text-center text-xs text-slate-500">Administrator</p>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === item.tab
                    ? "bg-gradient-to-r from-indigo-600/30 to-purple-600/30 text-white border border-white/20 shadow-lg"
                    : "text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon size={18} className={activeTab === item.tab ? "text-indigo-400" : "text-slate-500"} />
                {item.name}
                {activeTab === item.tab && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />}
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
              <Sparkles size={16} className="text-indigo-400" />
              <h1 className="text-sm text-slate-500">
                Welcome back, <span className="text-white font-semibold">Admin</span>
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="relative p-2 rounded-xl text-slate-400 hover:bg-white/10 transition">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
              </button>
              <div className="flex items-center gap-3 pl-2 border-l border-white/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  AD
                </div>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs text-slate-500">admin@eventsphere.com</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {statCards.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                        <stat.icon className="w-6 h-6 text-indigo-400" />
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          stat.positive
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-500 mt-1">{stat.title}</p>
                    <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full w-2/3 bg-gradient-to-r ${stat.gradient} rounded-full`} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-sm text-slate-400">Pending Approvals</span>
                  </div>
                  <p className="text-3xl font-bold text-white">{statsData.pendingApprovals}</p>
                  <button className="mt-3 text-sm text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    Review now <ArrowRight size={12} />
                  </button>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-sm text-slate-400">Active Events</span>
                  </div>
                  <p className="text-3xl font-bold text-white">{statsData.activeEvents}</p>
                  <button className="mt-3 text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                    Manage events <ArrowRight size={12} />
                  </button>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-indigo-400" />
                    </div>
                    <span className="text-sm text-slate-400">Completion Rate</span>
                  </div>
                  <p className="text-3xl font-bold text-white">94%</p>
                  <button className="mt-3 text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                    View details <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Activity size={18} className="text-indigo-400" /> Recent Activity
                </h3>
                <div className="space-y-3">
                  {[
                    { action: "New user registered: John Doe", time: "2 minutes ago", icon: UserPlus, color: "text-indigo-400" },
                    { action: "New event created: Summer Music Festival", time: "1 hour ago", icon: Calendar, color: "text-emerald-400" },
                    { action: "500 tickets sold for Tech Conference", time: "3 hours ago", icon: Ticket, color: "text-amber-400" },
                    { action: "Revenue reached $50,000 this week", time: "Yesterday", icon: DollarSign, color: "text-cyan-400" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition group">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white">{item.action}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.time}</p>
                      </div>
                      <button className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition">
                        <Eye size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* USERS TAB */}
          {activeTab === "users" && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-5 border-b border-white/10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Users size={18} className="text-indigo-400" /> Users Management
                  </h3>
                  <div className="flex gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        placeholder="Search users..."
                        value={userSearch}
                        onChange={(e) => setUserSearch(e.target.value)}
                        className="pl-9 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
                      />
                    </div>
                    <button className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white text-sm font-semibold flex items-center gap-2 shadow-lg">
                      <UserPlus size={16} /> Add User
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">User</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">Role</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">Status</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">Joined</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">Events</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedUsers.map((user) => (
                      <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                              {user.avatar}
                            </div>
                            <div>
                              <p className="text-sm text-white font-medium">{user.name}</p>
                              <p className="text-xs text-slate-500">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getRoleBadgeClass(user.role)}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-slate-500">{user.joinDate}</td>
                        <td className="py-3 px-4 text-sm text-white">{user.eventsAttended}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-white/10 transition">
                              <Eye size={16} />
                            </button>
                            <button className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-white/10 transition">
                              <Edit size={16} />
                            </button>
                            <button className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-white/10 transition">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {userTotalPages > 1 && (
                <div className="flex justify-between items-center p-4 border-t border-white/10">
                  <p className="text-sm text-slate-500">
                    Showing {(userPage - 1) * itemsPerPage + 1} to {Math.min(userPage * itemsPerPage, filteredUsers.length)} of {filteredUsers.length}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setUserPage((p) => Math.max(1, p - 1))}
                      disabled={userPage === 1}
                      className="p-2 rounded-lg bg-white/10 text-white disabled:opacity-50 hover:bg-white/20 transition"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setUserPage((p) => Math.min(userTotalPages, p + 1))}
                      disabled={userPage === userTotalPages}
                      className="p-2 rounded-lg bg-white/10 text-white disabled:opacity-50 hover:bg-white/20 transition"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* EVENTS TAB */}
          {activeTab === "events" && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-5 border-b border-white/10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Calendar size={18} className="text-emerald-400" /> Events Management
                  </h3>
                  <div className="flex gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        placeholder="Search events..."
                        value={eventSearch}
                        onChange={(e) => setEventSearch(e.target.value)}
                        className="pl-9 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
                      />
                    </div>
                    <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-white text-sm font-semibold flex items-center gap-2 shadow-lg">
                      <Plus size={16} /> Create Event
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">Event</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">Category</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">Date</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">Tickets</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">Revenue</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">Status</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedEvents.map((event) => (
                      <tr key={event.id} className="border-b border-white/5 hover:bg-white/5 transition">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-xl">
                              {event.image}
                            </div>
                            <p className="text-sm text-white font-medium">{event.title}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-slate-500">{event.category}</td>
                        <td className="py-3 px-4 text-sm text-slate-500">{event.date}</td>
                        <td className="py-3 px-4 text-sm text-white">{event.ticketsSold.toLocaleString()}</td>
                        <td className="py-3 px-4 text-sm text-white">${event.revenue.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                            {event.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-white/10 transition">
                              <Eye size={16} />
                            </button>
                            <button className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-white/10 transition">
                              <Edit size={16} />
                            </button>
                            <button className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-white/10 transition">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {eventTotalPages > 1 && (
                <div className="flex justify-between items-center p-4 border-t border-white/10">
                  <p className="text-sm text-slate-500">
                    Showing {(eventPage - 1) * itemsPerPage + 1} to {Math.min(eventPage * itemsPerPage, filteredEvents.length)} of {filteredEvents.length}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEventPage((p) => Math.max(1, p - 1))}
                      disabled={eventPage === 1}
                      className="p-2 rounded-lg bg-white/10 text-white disabled:opacity-50 hover:bg-white/20 transition"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setEventPage((p) => Math.min(eventTotalPages, p + 1))}
                      disabled={eventPage === eventTotalPages}
                      className="p-2 rounded-lg bg-white/10 text-white disabled:opacity-50 hover:bg-white/20 transition"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ANALYTICS TAB */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <BarChart3 size={18} className="text-indigo-400" /> Revenue Overview
                </h3>
                <div className="h-80 flex items-center justify-center border border-white/20 rounded-xl bg-black/30">
                  <div className="text-center">
                    <BarChart3 className="w-14 h-14 text-indigo-400/50 mx-auto mb-3" />
                    <p className="text-slate-500 mb-4">Monthly Revenue Chart</p>
                    <div className="flex items-end gap-3 justify-center">
                      {[65, 45, 75, 55, 85, 70, 90].map((h, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1">
                          <div className="w-10 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-lg transition-all hover:w-12" style={{ height: `${h}px` }} />
                          <span className="text-xs text-slate-500">W{idx + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <LineChart size={18} className="text-indigo-400" /> User Growth
                  </h3>
                  <div className="h-56 flex items-center justify-center border border-white/20 rounded-xl bg-black/30">
                    <div className="text-center">
                      <LineChart className="w-10 h-10 text-indigo-400/50 mx-auto mb-2" />
                      <p className="text-slate-500">+32% growth this month</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <PieChart size={18} className="text-indigo-400" /> Category Distribution
                  </h3>
                  <div className="h-56 flex items-center justify-center border border-white/20 rounded-xl bg-black/30">
                    <div className="text-center">
                      <PieChart className="w-10 h-10 text-indigo-400/50 mx-auto mb-2" />
                      <p className="text-slate-500 mb-3">Events by category</p>
                      <div className="flex justify-center gap-4 flex-wrap">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-cyan-500" />
                          <span className="text-xs text-slate-500">Music 35%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-emerald-500" />
                          <span className="text-xs text-slate-500">Tech 25%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-amber-500" />
                          <span className="text-xs text-slate-500">Food 20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === "settings" && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Settings size={20} className="text-slate-500" /> Admin Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <p className="text-white font-medium">Site Maintenance Mode</p>
                    <p className="text-sm text-slate-500 mt-1">Enable maintenance mode for site updates</p>
                  </div>
                  <button className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white text-sm font-semibold hover:shadow-lg transition">
                    Enable
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <p className="text-white font-medium">Email Notifications</p>
                    <p className="text-sm text-slate-500 mt-1">Configure admin email alerts</p>
                  </div>
                  <button className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white text-sm font-semibold hover:shadow-lg transition">
                    Configure
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <p className="text-white font-medium">Backup Database</p>
                    <p className="text-sm text-slate-500 mt-1">Schedule automated backups</p>
                  </div>
                  <button className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white text-sm font-semibold hover:shadow-lg transition">
                    Configure
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}