"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-secondary text-white h-[85vh]">
      {/* Video Background */}
      <div className="absolute inset-y-0 left-0 right-0 w-screen mx-[calc(50%-50vw)] h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <iframe
          className="absolute inset-0 w-full h-full object-cover scale-125"
          src="https://www.youtube.com/embed/LySMSnP-_s8?autoplay=1&mute=1&controls=0&loop=1&playlist=LySMSnP-_s8&disablekb=1&showinfo=0"
          title="Children with special needs"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content */}
      <div className="container-padding mx-auto relative z-20 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="heading-lg text-white mb-6 ">
            Inclusive care for children with special needs
          </h1>
          <div className="flex flex-wrap gap-4 mt-8  delay-200">
            <Button variant="destructive">Donate now</Button>
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              Play video
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-10 mt-20 text-white/90">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold">220,000+</span>
            <span className="text-sm">CHILDREN HELPED</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>52 branches worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
