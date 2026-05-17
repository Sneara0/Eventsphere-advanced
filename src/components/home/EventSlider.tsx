"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// আপনার তৈরি করা কার্ড এবং ডাটা ইমপোর্ট করুন
import { EventCard } from "./EventCard"
import { EVENT_DATA } from "@/constants/events"

export default function EventSlider() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Events</h2>
            <p className="text-muted-foreground mt-2">Discover and book the best events around the globe.</p>
          </div>
          <Link href="/events">
            <Button variant="ghost" className="group gap-2">
              View All 
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }, // Requirement 3: 4 cards per row on desktop
          }}
          className="pb-14"
        >
          {EVENT_DATA.map((item) => (
            <SwiperSlide key={item.id}>
              {/* এখানে আপনার Reusable EventCard কম্পোনেন্টটি ব্যবহার হচ্ছে */}
              <EventCard event={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}