"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface EventCardProps {
  day: string;
  month: string;
  title: string;
  category: string;
}

const EventCard = ({ day, month, title, category }: EventCardProps) => {
  return (
    <div className="bg-primary p-6 rounded-lg flex items-center justify-between group hover:shadow-md transition-shadow stagger-item">
      <div className="flex items-center gap-6">
        <div className="text-center">
          <span className="text-2xl font-bold block">{day}</span>
          <span className="text-xs uppercase">{month}</span>
        </div>
        <div>
          <span className="text-xs uppercase font-semibold block mb-1">
            {category}
          </span>
          <h3 className="font-medium text-secondary">{title}</h3>
        </div>
      </div>
      <button className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center group-hover:bg-secondary/90 transition-colors">
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const Events = () => {
  return (
    <section className="py-16">
      <div className="container-padding mx-auto">
        <h2 className="section-title mb-8">Our Events</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <EventCard
            day="13"
            month="April"
            category="Next Events"
            title="A day with our wonderful children"
          />
          <EventCard
            day="25"
            month="April"
            category="Next Events"
            title="Seminar: Caring for children with autism"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
