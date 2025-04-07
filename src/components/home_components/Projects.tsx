"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden bg-secondary text-white relative group h-[420px] stagger-item">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent z-10"></div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h4 className="heading-sm mb-1">{title}</h4>
        <p className="text-white/70 text-sm font-medium mb-2">{subtitle}</p>
        <p className="text-white/80 mb-4 text-sm">{description}</p>
        <Button className="bg-white text-secondary hover:bg-white/90 transition-colors">
          Learn more
        </Button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-padding mx-auto">
        <div className="section-divider">
          <span className="section-divider-text">Projects we have done</span>
        </div>

        <h2 className="section-title mb-12 delay-200 after-header">
          We are creating a place where children with special needs can thrive
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Mission smile: 1k Outdoor charity"
            subtitle="Digital inclusion"
            description="We are on a mission to support children with special needs and their families."
            imageUrl="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ProjectCard
            title="Weekly excursions"
            subtitle="Physical activity"
            description="Regular outdoor activities to improve physical and mental health."
            imageUrl="https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ProjectCard
            title="Monthly public awareness"
            subtitle="Education & outreach"
            description="We create awareness about special needs and promote inclusion in communities."
            imageUrl="https://images.unsplash.com/photo-1536337005238-94b997371b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
