"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Heart, 
  Share2,
  CheckCircle,
  ArrowLeft,
  Ticket,
  Shield,
  Clock as ClockIcon,
  Phone,
  Mail,
  Globe,
  X,
  Camera,
  Briefcase
} from "lucide-react";

// Types
interface Event {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  price: number;
  date: string;
  startTime: string;
  endTime: string;
  rating: number;
  reviewCount: number;
  location: string;
  venue: string;
  address: string;
  category: string;
  duration: string;
  attendees: number;
  organizer: {
    name: string;
    email: string;
    phone: string;
    website: string;
  };
  highlights: string[];
  requirements: string[];
  tags: string[];
  isPopular?: boolean;
}

// Mock Data
const getEventById = (id: number): Event | null => {
  const events: Event[] = [
    {
      id: 1,
      title: "Summer Music Festival 2024",
      description: "Experience the biggest music festival of the year with top artists from around the world.",
      longDescription: "Join us for an unforgettable weekend of music, art, and culture. The Summer Music Festival brings together the world's most talented artists for three days of non-stop entertainment. From rock to electronic, pop to indie, there's something for everyone. Enjoy food trucks, art installations, and camping options available.",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=500&fit=crop",
      ],
      price: 299,
      date: "August 15-17, 2024",
      startTime: "2:00 PM",
      endTime: "11:00 PM",
      rating: 4.8,
      reviewCount: 1243,
      location: "New York, NY",
      venue: "Central Park",
      address: "Central Park, New York, NY 10022",
      category: "Music",
      duration: "3 days",
      attendees: 15234,
      organizer: {
        name: "Live Nation Entertainment",
        email: "support@livenation.com",
        phone: "+1 (800) 555-0123",
        website: "https://livenation.com",
      },
      highlights: [
        "50+ International Artists",
        "3 Main Stages",
        "Food & Drink Vendors",
        "Art Installations",
        "Camping Available",
        "VIP Lounge Access"
      ],
      requirements: [
        "Valid ID Required",
        "Ages 18+",
        "No Outside Food/Drinks",
        "Comfortable Shoes Recommended"
      ],
      tags: ["Music", "Festival", "Outdoor", "Summer"],
      isPopular: true,
    },
    {
      id: 2,
      title: "Tech Conference 2024",
      description: "Join industry leaders for the most anticipated tech conference of the year.",
      longDescription: "Tech Conference 2024 is the premier event for technology professionals, entrepreneurs, and innovators. Featuring keynote speeches from industry giants, hands-on workshops, and networking opportunities. Learn about the latest trends in AI, blockchain, cloud computing, and more.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=500&fit=crop",
      ],
      price: 499,
      date: "September 10-12, 2024",
      startTime: "9:00 AM",
      endTime: "6:00 PM",
      rating: 4.9,
      reviewCount: 856,
      location: "San Francisco, CA",
      venue: "Moscone Center",
      address: "747 Howard St, San Francisco, CA 94103",
      category: "Technology",
      duration: "3 days",
      attendees: 8756,
      organizer: {
        name: "Tech Events Inc.",
        email: "info@techevents.com",
        phone: "+1 (800) 555-0456",
        website: "https://techevents.com",
      },
      highlights: [
        "100+ Speakers",
        "50+ Workshops",
        "Networking Sessions",
        "Startup Pitch Competition",
        "Career Fair",
        "After Parties"
      ],
      requirements: [
        "Conference Pass Required",
        "Laptop Recommended",
        "Business Casual Attire"
      ],
      tags: ["Technology", "Conference", "Networking"],
      isPopular: true,
    },
  ];

  return events.find(event => event.id === id) || null;
};

// Related Events
const getRelatedEvents = (currentId: number, category: string) => {
  const allEvents: Event[] = [
    {
      id: 3,
      title: "Food & Wine Expo",
      description: "Indulge in culinary delights from world-renowned chefs.",
      longDescription: "",
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop",
      images: [],
      price: 149,
      date: "October 5-6, 2024",
      startTime: "11:00 AM",
      endTime: "8:00 PM",
      rating: 4.7,
      reviewCount: 523,
      location: "Chicago, IL",
      venue: "McCormick Place",
      address: "",
      category: "Food",
      duration: "2 days",
      attendees: 5234,
      organizer: { name: "", email: "", phone: "", website: "" },
      highlights: [],
      requirements: [],
      tags: ["Food", "Wine", "Expo"],
    },
    {
      id: 4,
      title: "Art & Design Workshop",
      description: "Learn from master artists and designers.",
      longDescription: "",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
      images: [],
      price: 99,
      date: "November 1-3, 2024",
      startTime: "10:00 AM",
      endTime: "5:00 PM",
      rating: 4.6,
      reviewCount: 432,
      location: "Boston, MA",
      venue: "Art Institute",
      address: "",
      category: "Art",
      duration: "3 days",
      attendees: 1234,
      organizer: { name: "", email: "", phone: "", website: "" },
      highlights: [],
      requirements: [],
      tags: ["Art", "Workshop", "Design"],
    },
  ];

  return allEvents.filter(event => event.id !== currentId && event.category === category);
};

export default function EventDetailsPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const eventData = getEventById(id);
      setEvent(eventData);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-96 bg-white/10 rounded-2xl mb-8" />
            <div className="h-8 bg-white/10 rounded w-1/3 mb-4" />
            <div className="h-4 bg-white/10 rounded w-full mb-2" />
            <div className="h-4 bg-white/10 rounded w-3/4 mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="h-40 bg-white/10 rounded mb-4" />
                <div className="h-40 bg-white/10 rounded" />
              </div>
              <div className="h-96 bg-white/10 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className="text-gray-400 mb-8">The event you're looking for doesn't exist.</p>
          <Link href="/events" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const relatedEvents = getRelatedEvents(event.id, event.category);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 pb-16 pt-24">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link 
          href="/events" 
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition"
        >
          <ArrowLeft size={18} />
          Back to Events
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          <div className="lg:col-span-3">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={event.images[selectedImage] || event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-red-500/80 transition"
              >
                <Heart size={18} className={isLiked ? "fill-red-500 text-red-500" : "text-white"} />
              </button>
              <button className="absolute top-4 right-16 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-indigo-500/80 transition">
                <Share2 size={18} className="text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {event.images.slice(0, 3).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative h-[158px] rounded-xl overflow-hidden border-2 transition ${
                  selectedImage === idx ? 'border-indigo-500' : 'border-transparent'
                }`}
              >
                <Image src={img} alt={`${event.title} ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Title & Meta */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full">
                  {event.category}
                </span>
                {event.isPopular && (
                  <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-semibold rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">{event.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-amber-500 text-amber-500" />
                  <span className="font-semibold text-white">{event.rating}</span>
                  <span>({event.reviewCount.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{event.attendees.toLocaleString()} attending</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold mb-4">About This Event</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {event.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-bold mb-4">Event Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckCircle size={16} className="text-emerald-500" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-xl font-bold mb-4">Requirements</h2>
              <div className="flex flex-wrap gap-2">
                {event.requirements.map((req, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {req}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-bold mb-4">Reviews & Ratings</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="p-4 rounded-xl bg-white/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                          {review === 1 ? "JD" : review === 2 ? "SK" : "ML"}
                        </div>
                        <div>
                          <h4 className="font-semibold">
                            {review === 1 ? "John Doe" : review === 2 ? "Sarah Kim" : "Mike Lee"}
                          </h4>
                          <div className="flex items-center gap-1 mt-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={12} className="fill-amber-500 text-amber-500" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-slate-500">2 days ago</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {review === 1 
                        ? "Amazing event! The organization was perfect and the atmosphere was electric. Will definitely attend again!"
                        : review === 2
                        ? "Great experience overall. The speakers were knowledgeable and the networking opportunities were valuable."
                        : "Well organized event. The venue was beautiful and the staff was very helpful."}
                    </p>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-indigo-600 hover:text-indigo-500 text-sm font-semibold">
                Read all {event.reviewCount} reviews
              </button>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <div className="sticky top-24 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-800/50 p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-black">${event.price}</div>
                <p className="text-sm text-slate-500">per person</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar size={16} className="text-indigo-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <ClockIcon size={16} className="text-indigo-500" />
                  <span>{event.startTime} - {event.endTime}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-indigo-500" />
                  <span>{event.venue}, {event.location}</span>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 mb-4">
                <Ticket size={18} />
                Get Tickets
              </button>

              <button className="w-full py-3 bg-white/10 rounded-xl text-white font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Heart size={18} />
                Save to Wishlist
              </button>

              <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                <h4 className="font-semibold mb-3">Organizer</h4>
                <p className="text-sm font-medium">{event.organizer.name}</p>
                <div className="mt-2 space-y-1 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Mail size={12} />
                    <span>{event.organizer.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={12} />
                    <span>{event.organizer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={12} />
                    <span>{event.organizer.website}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                  <Shield size={14} />
                  <span>Secure Payment Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedEvents.map((related) => (
                <Link key={related.id} href={`/events/${related.id}`}>
                  <div className="group bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/50 transition-all">
                    <div className="relative h-48">
                      <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-indigo-500 font-semibold">{related.category}</span>
                        <div className="flex items-center gap-1">
                          <Star size={12} className="fill-amber-500 text-amber-500" />
                          <span className="text-sm font-medium">{related.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-indigo-500 transition">{related.title}</h3>
                      <p className="text-sm text-slate-500 line-clamp-2">{related.description}</p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-200/50">
                        <span className="text-lg font-bold">${related.price}</span>
                        <span className="text-xs text-slate-500">{related.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}