"use client";

import React from "react";

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem = ({ title, description }: ServiceItemProps) => {
  return (
    <div className="mb-8 stagger-item">
      <div className="flex items-start gap-3">
        <div className="bg-accent w-5 h-5 mt-1 flex-shrink-0 rounded-sm"></div>
        <div>
          <h3 className="font-bold text-xl mb-2 text-secondary">{title}</h3>
          <p className="text-foreground/80">{description}</p>
          <p className="text-sm mt-2 text-secondary">
            <a
              href="#"
              className="border-b border-secondary hover:text-accent transition-colors"
            >
              Read more about our services
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="w-screen mx-[calc(50%-50vw)]">
      <div className="bg-gradient-to-br from-white to-secondary/10 py-16 md:py-24">
        <div className="container-padding lg:mx-[5.8rem] max-w-[1800px]">
          <div className="section-divider">
            <span className="section-divider-text text-accent dark:text-accent font-bold">
              WHAT WE DO
            </span>
          </div>

          <div className="flex-image-right after-header">
            <div className="text-left">
              <h2 className="section-title delay-200 text-secondary dark:text-secondary text-4xl md:text-5xl">
                Our Services for Special Needs Children
              </h2>
              <p className="section-subtitle delay-400 text-secondary/80 dark:text-foreground/80">
                Our comprehensive approach ensures that children with special
                needs receive the care and support they require to reach their
                full potential.
              </p>

              <div className="mt-8 space-y-8">
                <ServiceItem
                  title="Family support"
                  description="We provide resources, counseling, and community connections to help families navigate the challenges of raising children with special needs."
                />
                <ServiceItem
                  title="Health benefits"
                  description="Our programs include access to specialized healthcare services, therapy sessions, and wellness activities tailored to each child's unique needs."
                />
                <ServiceItem
                  title="Scholarships"
                  description="We offer educational opportunities through scholarships and financial assistance to ensure children with special needs have access to quality education."
                />
                {/* <ServiceItem 
                title="Therapy" 
                description="We provide various therapy services including speech, occupational, physical, and behavioral therapies conducted by certified professionals."
              /> */}
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://i.pinimg.com/736x/5d/a6/a8/5da6a8128cc5ba28621f5586f91d0624.jpg"
                  alt="Child with special needs"
                  className="object-cover rounded-lg image-right hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
