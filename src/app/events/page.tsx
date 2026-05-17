"use client";

import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Star, ArrowRight, RefreshCw } from "lucide-react";

// --- এপিআই থেকে আসা ইভেন্ট ডেটার ইন্টারফেস ---
interface EventData {
  id: string;
  title: string;
  description: string;
  image: string; 
  ticketPrice: number;
  date: string;
  location: string;
  rating?: number;
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 📡 ব্যাকএন্ড এপিআই থেকে ডাটা ফেচ করার ফাংশন
  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError("");
      
      // আপনার ব্যাকএন্ড এপিআই ইউআরএল (প্রয়োজনে পোর্ট পরিবর্তন করে নিন)
      const response = await fetch("http://localhost:5000/api/v1/events");
      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Failed to fetch events from server");
      }

      // জেনারেক sendResponse ফরম্যাট হ্যান্ডেলিং (data.data অথবা ডিরেক্ট অ্যারে)
      const fetchedData = resData.data ? resData.data : resData;
      
      setEvents(Array.isArray(fetchedData) ? fetchedData : fetchedData.events || []);
    } catch (err: any) {
      console.error("API Fetch Error:", err);
      setError(err.message || "Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* 🏷️ পেজ হেডার এবং রিফ্রেশ বাটন */}
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight sm:text-4xl">
              All Available Events
            </h1>
            <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
              Browse through our live collection of awesome events and conferences.
            </p>
          </div>
          
          <button 
            onClick={fetchEvents}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-xl shadow-sm hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800 transition disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Reload
          </button>
        </div>

        {/* 🚨 এরর স্টেট (সার্ভার বন্ধ থাকলে বা ডাটা না আসলে দেখাবে) */}
        {error && (
          <div className="p-4 mb-8 text-sm text-red-700 bg-red-50 dark:bg-red-950/30 dark:text-red-400 rounded-2xl border border-red-200 dark:border-red-900/50 shadow-sm flex flex-col gap-2">
            <span className="font-semibold">⚠️ Connection Error:</span>
            <p>{error}</p>
            <p className="text-xs text-slate-500 mt-1">Make sure your backend server is running on port 5000.</p>
          </div>
        )}

        {/* 📭 এম্পটি স্টেট (ডাটাবেজে কোনো ইভেন্ট না থাকলে) */}
        {!loading && events.length === 0 && !error && (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
              No events are currently published.
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Create an event from the Organizer Dashboard to see it live here!
            </p>
          </div>
        )}

        {/* 🎴 ৪-কলাম বিশিষ্ট নিখুঁত রেসপনসিভ গ্রিড লেআউট */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? // ডাটা লোড হওয়ার সময় ৪টি নিখুঁত স্কেলিটন কার্ড ব্লিংক করবে
              Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
            : // রিয়েল এপিআই ডাটা রেন্ডারিং লুপ
              events.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </div>
    </main>
  );
}

// --- 🌟 রিয়েল ডাটা কার্ড কম্পোনেন্ট ---
function EventCard({ event }: { event: EventData }) {
  // ISO ডেট স্ট্রিংকে ইউজার ফ্রেন্ডলি ফরম্যাটে রূপান্তর
  const formattedDate = event.date 
    ? new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "Date TBD";

  return (
    <div className="group flex flex-col h-[460px] w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      
      {/* ইভেন্ট ইমেজ এবং প্রাইস ট্যাগ */}
      <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img
          src={event.image || "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600"} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 dark:text-indigo-400 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
          {Number(event.ticketPrice) === 0 ? "Free" : `$${event.ticketPrice}`}
        </div>
      </div>

      {/* কন্টেন্ট এরিয়া (সব কার্ডের হাইট সমান রাখার ম্যাজিক লেয়ার) */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        
        {/* টাইটেল এবং শর্ট ডেসক্রিপশন */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {event.title}
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {event.description || "No description provided for this event."}
          </p>
        </div>

        {/* মেটা ইনফরমেশন (ডেট, লোকেশন, রেটিং) */}
        <div className="space-y-2.5 my-4 border-t border-b border-slate-100 dark:border-slate-800/60 py-3.5">
          <div className="flex items-center text-xs text-slate-600 dark:text-slate-400 gap-2">
            <Calendar className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span>{formattedDate}</span>
          </div>
          
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center text-xs text-slate-600 dark:text-slate-400 gap-2 truncate">
              <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <span className="truncate">{event.location || "Online"}</span>
            </div>
            
            <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded text-xs font-medium text-amber-700 dark:text-amber-400 flex-shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{event.rating || 4.5}</span>
            </div>
          </div>
        </div>

        {/* অ্যাকশন বাটন */}
        <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm rounded-xl transition shadow-sm hover:shadow-md flex justify-center items-center gap-2 group/btn">
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

// --- 💀 স্কেলিটন লোডার কম্পোনেন্ট ---
function SkeletonCard() {
  return (
    <div className="flex flex-col h-[460px] w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm animate-pulse overflow-hidden">
      <div className="h-48 w-full bg-slate-200 dark:bg-slate-800" />
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="h-5 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-md" />
          <div className="space-y-2 mt-3">
            <div className="h-3.5 w-full bg-slate-200 dark:bg-slate-800 rounded-md" />
            <div className="h-3.5 w-5/6 bg-slate-200 dark:bg-slate-800 rounded-md" />
          </div>
        </div>
        <div className="space-y-3 my-4 border-t border-b border-slate-100 dark:border-slate-800/60 py-3.5">
          <div className="h-3.5 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-md" />
          <div className="flex justify-between items-center">
            <div className="h-3.5 w-1/3 bg-slate-200 dark:bg-slate-800 rounded-md" />
            <div className="h-5 w-10 bg-slate-200 dark:bg-slate-800 rounded-md" />
          </div>
        </div>
        <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-xl" />
      </div>
    </div>
  );
}