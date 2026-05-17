"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  Star, 
  Heart, 
  Filter,
  X,
  ChevronDown,
  Calendar,
  Users,
  Globe,
  Sun,
  Cloud,
  CloudRain,
  Thermometer,
  DollarSign,
  Clock,
  Plane,
  Hotel,
  Utensils,
  Camera,
  Mountain,
  Umbrella,
  Compass,
  Sparkles,
  TrendingUp,
  Building2,
  Landmark
} from "lucide-react";

// Types
interface Destination {
  id: number;
  name: string;
  country: string;
  city: string;
  image: string;
  images: string[];
  description: string;
  shortDescription: string;
  rating: number;
  reviewCount: number;
  price: number;
  currency: string;
  bestTimeToVisit: string;
  popularAttractions: string[];
  activities: string[];
  weather: {
    temp: string;
    condition: string;
    icon: React.ElementType;
  };
  flightPrice: number;
  hotelPrice: number;
  daysRecommended: number;
  isPopular: boolean;
  isTrending: boolean;
  tags: string[];
}

// Destinations Data
const destinations: Destination[] = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    city: "Denpasar",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop",
    images: [],
    description: "Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands.",
    shortDescription: "Island of gods with stunning beaches and rich culture",
    rating: 4.8,
    reviewCount: 12500,
    price: 899,
    currency: "USD",
    bestTimeToVisit: "April - October",
    popularAttractions: ["Tanah Lot Temple", "Ubud Monkey Forest", "Mount Batur", "Seminyak Beach"],
    activities: ["Surfing", "Yoga", "Snorkeling", "Temple Tour"],
    weather: { temp: "28°C", condition: "Sunny", icon: Sun },
    flightPrice: 450,
    hotelPrice: 80,
    daysRecommended: 7,
    isPopular: true,
    isTrending: true,
    tags: ["beach", "cultural", "adventure"],
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    city: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop",
    images: [],
    description: "The City of Light is famous for its art, fashion, gastronomy, and culture.",
    shortDescription: "Romantic city of lights and art",
    rating: 4.7,
    reviewCount: 18700,
    price: 1299,
    currency: "EUR",
    bestTimeToVisit: "April - June, September - October",
    popularAttractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Champs-Élysées"],
    activities: ["Museum Tour", "River Cruise", "Shopping", "Wine Tasting"],
    weather: { temp: "15°C", condition: "Cloudy", icon: Cloud },
    flightPrice: 650,
    hotelPrice: 150,
    daysRecommended: 5,
    isPopular: true,
    isTrending: false,
    tags: ["city", "cultural", "romantic"],
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    city: "Tokyo",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
    images: [],
    description: "Tokyo is a city where ancient traditions meet futuristic technology.",
    shortDescription: "Where tradition meets futuristic technology",
    rating: 4.9,
    reviewCount: 15600,
    price: 1499,
    currency: "USD",
    bestTimeToVisit: "March - May, September - November",
    popularAttractions: ["Shibuya Crossing", "Senso-ji Temple", "Tokyo Tower", "Akihabara"],
    activities: ["Shopping", "Food Tour", "Temple Visit", "Anime Culture"],
    weather: { temp: "22°C", condition: "Sunny", icon: Sun },
    flightPrice: 850,
    hotelPrice: 120,
    daysRecommended: 6,
    isPopular: true,
    isTrending: true,
    tags: ["city", "cultural", "adventure"],
  },
  {
    id: 4,
    name: "Santorini",
    country: "Greece",
    city: "Thira",
    image: "https://images.unsplash.com/photo-1613395870684-2f5d4a4c4b2c?w=600&h=400&fit=crop",
    images: [],
    description: "Santorini is known for its stunning sunsets, white-washed buildings, and blue-domed churches.",
    shortDescription: "Iconic white and blue paradise",
    rating: 4.9,
    reviewCount: 8900,
    price: 1099,
    currency: "EUR",
    bestTimeToVisit: "April - October",
    popularAttractions: ["Oia Sunset", "Red Beach", "Fira Town", "Ancient Thera"],
    activities: ["Sunset Viewing", "Wine Tasting", "Boat Tour", "Swimming"],
    weather: { temp: "26°C", condition: "Sunny", icon: Sun },
    flightPrice: 550,
    hotelPrice: 180,
    daysRecommended: 4,
    isPopular: true,
    isTrending: false,
    tags: ["beach", "romantic", "luxury"],
  },
  {
    id: 5,
    name: "New York",
    country: "USA",
    city: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
    images: [],
    description: "The Big Apple is a city that never sleeps.",
    shortDescription: "The city that never sleeps",
    rating: 4.6,
    reviewCount: 22400,
    price: 1299,
    currency: "USD",
    bestTimeToVisit: "April - June, September - November",
    popularAttractions: ["Statue of Liberty", "Times Square", "Central Park", "Empire State Building"],
    activities: ["Broadway Show", "Museum Tour", "Shopping", "Food Tour"],
    weather: { temp: "18°C", condition: "Cloudy", icon: Cloud },
    flightPrice: 300,
    hotelPrice: 200,
    daysRecommended: 5,
    isPopular: true,
    isTrending: false,
    tags: ["city", "cultural", "nightlife"],
  },
  {
    id: 6,
    name: "Phuket",
    country: "Thailand",
    city: "Phuket",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&h=400&fit=crop",
    images: [],
    description: "Phuket is Thailand's largest island, known for its beautiful beaches.",
    shortDescription: "Tropical paradise with vibrant nightlife",
    rating: 4.5,
    reviewCount: 9800,
    price: 699,
    currency: "USD",
    bestTimeToVisit: "November - April",
    popularAttractions: ["Phi Phi Islands", "Big Buddha", "Patong Beach", "Old Phuket Town"],
    activities: ["Island Hopping", "Snorkeling", "Night Market", "Thai Massage"],
    weather: { temp: "30°C", condition: "Sunny", icon: Sun },
    flightPrice: 400,
    hotelPrice: 60,
    daysRecommended: 6,
    isPopular: false,
    isTrending: true,
    tags: ["beach", "nightlife", "island"],
  },
  {
    id: 7,
    name: "London",
    country: "UK",
    city: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    images: [],
    description: "London is a global city known for its history, culture, and royal heritage.",
    shortDescription: "Historic city with royal charm",
    rating: 4.7,
    reviewCount: 19800,
    price: 1199,
    currency: "GBP",
    bestTimeToVisit: "March - May, September - November",
    popularAttractions: ["Big Ben", "London Eye", "British Museum", "Buckingham Palace"],
    activities: ["Museum Tour", "River Cruise", "Shopping", "Theatre"],
    weather: { temp: "12°C", condition: "Rainy", icon: CloudRain },
    flightPrice: 600,
    hotelPrice: 140,
    daysRecommended: 5,
    isPopular: true,
    isTrending: false,
    tags: ["city", "history", "royal"],
  },
  {
    id: 8,
    name: "Dubai",
    country: "UAE",
    city: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
    images: [],
    description: "Dubai is a futuristic city known for its luxury shopping and ultramodern architecture.",
    shortDescription: "City of superlatives and luxury",
    rating: 4.8,
    reviewCount: 14200,
    price: 1599,
    currency: "USD",
    bestTimeToVisit: "November - March",
    popularAttractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert Safari"],
    activities: ["Shopping", "Desert Safari", "Fine Dining", "Water Parks"],
    weather: { temp: "35°C", condition: "Sunny", icon: Sun },
    flightPrice: 700,
    hotelPrice: 200,
    daysRecommended: 4,
    isPopular: true,
    isTrending: true,
    tags: ["city", "luxury", "modern"],
  },
];

// Category Filters
const categories = [
  { id: "all", name: "All Destinations", icon: Globe },
  { id: "beach", name: "Beach", icon: Umbrella },
  { id: "mountain", name: "Mountain", icon: Mountain },
  { id: "city", name: "City", icon: Building2 },
  { id: "cultural", name: "Cultural", icon: Landmark },
  { id: "adventure", name: "Adventure", icon: Compass },
];

// Price Ranges
const priceRanges = [
  { id: "all", name: "All Prices", min: 0, max: 10000 },
  { id: "budget", name: "Budget (< $800)", min: 0, max: 800 },
  { id: "moderate", name: "Moderate ($800 - $1200)", min: 800, max: 1200 },
  { id: "luxury", name: "Luxury (> $1200)", min: 1200, max: 10000 },
];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Filter Destinations
  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || dest.tags.includes(selectedCategory);
    
    const priceRange = priceRanges.find(p => p.id === selectedPrice);
    const matchesPrice = dest.price >= (priceRange?.min || 0) && dest.price <= (priceRange?.max || 10000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort Destinations
  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    if (sortBy === "popular") return b.rating - a.rating;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const toggleWishlist = (id: number) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 py-24">
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full mb-4">
            <Compass size={14} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Explore the World
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Amazing{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Destinations
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover the most beautiful places around the world. Find your next adventure.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by destination, country or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-xl hover:bg-white/60 dark:hover:bg-slate-900/50 transition"
            >
              <Filter size={18} />
              Filters
              <ChevronDown size={16} className={`transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-5 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-800/50"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition ${
                            selectedCategory === cat.id
                              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                              : "bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-indigo-600"
                          }`}
                        >
                          <cat.icon size={14} />
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold mb-3">Price Range</h3>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.id}
                          onClick={() => setSelectedPrice(range.id)}
                          className={`px-3 py-1.5 rounded-full text-sm transition ${
                            selectedPrice === range.id
                              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                              : "bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-indigo-600"
                          }`}
                        >
                          {range.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedCategory !== "all" || selectedPrice !== "all") && (
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedPrice("all");
                    }}
                    className="mt-4 text-sm text-indigo-600 hover:text-indigo-500 flex items-center gap-1"
                  >
                    <X size={14} />
                    Clear all filters
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-slate-500">
            Found <span className="font-semibold text-white">{sortedDestinations.length}</span> destinations
          </p>
        </div>

        {/* Destinations Grid */}
        {sortedDestinations.length === 0 ? (
          <div className="text-center py-16">
            <Compass className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
            <p className="text-slate-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/50 transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleWishlist(dest.id)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-red-500/80 transition"
                  >
                    <Heart 
                      size={16} 
                      className={wishlist.includes(dest.id) ? "fill-red-500 text-red-500" : "text-white"} 
                    />
                  </button>
                  {dest.isPopular && (
                    <span className="absolute top-3 left-3 z-10 px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-xs font-semibold text-white">
                      Popular
                    </span>
                  )}
                  {dest.isTrending && (
                    <span className="absolute bottom-3 left-3 z-10 px-2 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg text-xs font-semibold text-white flex items-center gap-1">
                      <TrendingUp size={10} />
                      Trending
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <MapPin size={14} className="text-indigo-500" />
                      <span>{dest.country}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-amber-500 text-amber-500" />
                      <span className="text-sm font-medium">{dest.rating}</span>
                      <span className="text-xs text-slate-500">({dest.reviewCount.toLocaleString()})</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-500 transition">
                    {dest.name}
                  </h3>
                  
                  <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                    {dest.shortDescription}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-200/50 dark:border-slate-800/50">
                    <div>
                      <span className="text-xl font-bold">${dest.price}</span>
                      <span className="text-xs text-slate-500"> /person</span>
                    </div>
                    <Link
                      href={`/destinations/${dest.id}`}
                      className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white text-sm font-semibold hover:shadow-lg transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {sortedDestinations.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-white/10 rounded-xl text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2 mx-auto">
              Load More Destinations
              <ChevronDown size={18} />
            </button>
          </div>
        )}

      </div>
    </main>
  );
}