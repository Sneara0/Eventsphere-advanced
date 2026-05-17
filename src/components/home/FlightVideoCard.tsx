"use client"
import React from 'react'
import { ArrowRight, Plane } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FlightVideoCard({ flight }: { flight: any }) {
  return (
    <div className="relative group w-full h-[280px] overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
      
      {/* ব্যাকগ্রাউন্ড ভিডিও */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
      >
        <source src={flight.videoUrl} type="video/mp4" />
      </video>

      {/* গ্রেডিয়েন্ট ওভারলে */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* কন্টেন্ট লেআউট */}
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        
        {/* টপ সেকশন: গোলাকার লোগো */}
        <div className="flex items-start justify-between">
          <div className="h-12 w-12 rounded-full border-2 border-white/30 overflow-hidden bg-white/10 backdrop-blur-md p-2 shadow-inner">
            <img 
              src={flight.logo} 
              alt={flight.airline} 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="bg-blue-600/90 backdrop-blur-sm text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border border-white/20">
            {flight.class}
          </div>
        </div>

        {/* বটম সেকশন: ডিটেইলস ও CTA */}
        <div className="flex items-end justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl font-bold">{flight.from}</span>
              <Plane className="h-3 w-3 text-blue-400 rotate-90" />
              <span className="text-xl font-bold">{flight.to}</span>
            </div>
            <p className="text-xs text-gray-300 font-medium mb-1">{flight.airline}</p>
            <p className="text-lg font-bold text-blue-400">{flight.price}</p>
          </div>
          
          {/* গোল CTA বাটন */}
          <Button size="sm" className="rounded-full h-10 w-10 p-0 bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg">
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}