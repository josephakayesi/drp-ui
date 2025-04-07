"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Book, Home, Hospital } from "lucide-react";

interface Initiative {
  title: string;
  description: string;
  icon: React.ReactNode;
  images: string[];
}

const initiatives: Initiative[] = [
  {
    title: "Education",
    description:
      "We believe that every child deserves access to quality education regardless of their abilities or challenges. Our educational programs are designed to create inclusive learning environments where children with special needs can thrive academically and socially.",
    icon: <Book className="h-8 w-8 text-primary" />,
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
    ],
  },
  {
    title: "Homelessness",
    description:
      "Our homelessness initiative addresses the unique challenges faced by families with special needs children who are experiencing housing insecurity. We provide emergency housing assistance, transitional support, and connect families with sustainable housing solutions.",
    icon: <Home className="h-8 w-8 text-primary" />,
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=800&h=500",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800&h=500",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800&h=500",
    ],
  },
  {
    title: "Healthcare",
    description:
      "Access to specialized healthcare is vital for children with special needs. Our healthcare initiatives include medical advocacy, funding for specialized treatments, and partnerships with healthcare providers to ensure every child receives the medical care they need.",
    icon: <Hospital className="h-8 w-8 text-primary" />,
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=500",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800&h=500",
    ],
  },
];

const CoreInitiatives = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (timelineRef.current) {
      setTimelineHeight(timelineRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const startPos = window.innerHeight * 0.1;
        const endPos = window.innerHeight * 0.5;

        const totalDistance = rect.height - (endPos - startPos);
        let progress = (startPos - rect.top) / totalDistance;
        progress = Math.min(Math.max(progress, 0), 1);

        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="w-full stretched-bg bg-white dark:bg-tertiary py-16 md:py-24"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="section-divider">
          <span className="section-divider-text">Our Focus</span>
        </div>
        <h2 className="section-title mb-8 after-header">Core Initiatives</h2>
        <p className="section-subtitle mb-16 after-header">
          Our organization focuses on three key areas where we can make the
          biggest impact for children with special needs.
        </p>

        <div ref={timelineRef} className="relative">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-start pt-10 md:pt-32 md:gap-10 mb-16"
            >
              <div className="sticky flex flex-col md:flex-row z-10 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-white dark:bg-tertiary flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    {initiative.icon}
                  </div>
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-secondary dark:text-white">
                  {initiative.title}
                </h3>
              </div>

              <div className="relative pl-16 md:pl-4 w-full">
                <h3 className="md:hidden text-2xl mb-4 font-bold text-secondary dark:text-white">
                  {initiative.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
                  {initiative.description}
                </p>

                <Carousel className="w-full max-w-3xl">
                  <CarouselContent>
                    {initiative.images.map((img, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <img
                              src={img}
                              alt={`${initiative.title} image ${imgIndex + 1}`}
                              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-end gap-2 mt-4">
                    <CarouselPrevious className="relative left-0 right-0 translate-y-0" />
                    <CarouselNext className="relative left-0 right-0 translate-y-0" />
                  </div>
                </Carousel>
              </div>
            </div>
          ))}

          <div
            style={{
              height: timelineHeight + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-muted dark:via-gray-700 to-transparent to-[99%]"
          >
            <div
              style={{
                height: `${scrollProgress * timelineHeight}px`,
                opacity: scrollProgress > 0.1 ? 1 : scrollProgress * 10,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-secondary to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreInitiatives;
