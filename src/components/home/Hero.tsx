"use client"
import { Search, Repeat, PlaneTakeoff, Calendar, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { 
   
  MapPin // <--- এই আইকনটি যোগ করুন
} from "lucide-react"
export default function Hero() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[850px] flex flex-col items-center justify-center text-white pt-20 overflow-hidden">
      
      {/* ১. Background Image with Advanced Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Flight background"
        />
        {/* Gradient Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent dark:from-black/80 dark:via-black/40" />
      </div>

      {/* ২. Hero Content - Animated */}
      <div className="container relative z-10 px-4 text-center lg:text-left mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-4 py-1.5 rounded-full mb-6">
            <PlaneTakeoff size={16} className="text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Premium Flight Experience</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">
            SKY IS NOT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">THE LIMIT.</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-xl font-medium italic">
            "Your next take-off awaits. Discover deals that take you further."
          </p>
        </motion.div>
      </div>

      {/* ৩. Floating Search Box - Cinematic Design */}
      <div className="container relative z-20 px-4 w-full">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] p-8 text-slate-800 border border-white/20"
        >
          {/* Trip Types with Modern Styling */}
          <RadioGroup defaultValue="round" className="flex gap-8 mb-8 justify-center lg:justify-start">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <RadioGroupItem value="round" id="r1" className="border-blue-600 text-blue-600" />
              <Label htmlFor="r1" className="font-black uppercase tracking-widest text-xs cursor-pointer group-hover:text-blue-600 transition-colors dark:text-zinc-300">Round-trip</Label>
            </div>
            <div className="flex items-center space-x-3 group cursor-pointer">
              <RadioGroupItem value="one" id="r2" className="border-blue-600 text-blue-600" />
              <Label htmlFor="r2" className="font-black uppercase tracking-widest text-xs cursor-pointer group-hover:text-blue-600 transition-colors dark:text-zinc-300">One-way</Label>
            </div>
          </RadioGroup>

          {/* Search Inputs - Multi-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* FROM */}
            <div className="relative group bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 transition-all">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">Leaving from</p>
              <div className="flex items-center gap-3">
                 <PlaneTakeoff className="text-zinc-400" size={18} />
                 <Input variant="ghost" className="border-0 p-0 h-8 font-black text-xl bg-transparent dark:text-white focus-visible:ring-0" placeholder="Dhaka" />
              </div>
              {/* Swap Button */}
              <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-full p-2 cursor-pointer shadow-lg hover:rotate-180 transition-all duration-500 hover:bg-blue-600 hover:text-white">
                <Repeat size={16} />
              </div>
            </div>

            {/* TO */}
            <div className="group bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 transition-all">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">Going to</p>
              <div className="flex items-center gap-3">
                 <MapPin className="text-zinc-400" size={18} />
                 <Input variant="ghost" className="border-0 p-0 h-8 font-black text-xl bg-transparent dark:text-white focus-visible:ring-0" placeholder="Dubai" />
              </div>
            </div>

            {/* DATE */}
            <div className="group bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 transition-all">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">Departure - Return</p>
              <div className="flex items-center gap-3">
                 <Calendar className="text-zinc-400" size={18} />
                 <div className="font-black text-lg h-8 dark:text-white truncate">May 3 — May 15</div>
              </div>
            </div>

            {/* PASSENGERS */}
            <div className="group bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 transition-all">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">Travelers & Class</p>
              <div className="flex items-center gap-3">
                 <Users className="text-zinc-400" size={18} />
                 <div className="font-black text-lg h-8 dark:text-white truncate">1 Adult, Economy</div>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mt-8">
            <button className="text-zinc-500 dark:text-zinc-400 font-black text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">
              + Add Flight/Hotel
            </button>
            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-black px-12 py-7 rounded-2xl text-lg font-black transition-all group shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)]">
              <Search className="mr-3 group-hover:scale-125 transition-transform" /> SEARCH FLIGHTS
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  )
}