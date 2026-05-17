"use client"
import { useState } from "react"
import { Search, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function AISearchBar() {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val)
    
    // AI Suggestion Logic (মক ডেটা)
    if (val.length > 2) {
      setSuggestions([
        `Trending ${val} events this weekend`,
        `Top rated ${val} workshops near you`,
        `Popular ${val} conferences in 2026`
      ])
    } else {
      setSuggestions([])
    }
  }

  return (
    <div className="container mx-auto px-4 -mt-12 relative z-30">
      <div className="max-w-3xl mx-auto bg-background border border-primary/20 shadow-2xl rounded-2xl p-2">
        <div className="flex items-center gap-3 px-4 py-2">
          <Search className="text-muted-foreground w-5 h-5" />
          <Input 
            className="border-none focus-visible:ring-0 text-lg placeholder:text-muted-foreground/60" 
            placeholder="Search events with AI magic..."
            value={query}
            onChange={handleSearch}
          />
          <div className="hidden md:flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
            <Sparkles className="w-3 h-3" /> AI Powered
          </div>
        </div>

        {suggestions.length > 0 && (
          <div className="border-t border-primary/10 p-2 animate-in fade-in slide-in-from-top-2">
            {suggestions.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-3 hover:bg-primary/5 rounded-xl cursor-pointer transition-colors text-sm"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}