"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const Mission = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-padding mx-auto">
        <div className="flex-image-right items-center">
          <div className="text-left">
            <div className="section-divider">
              <span className="section-divider-text">Know about us</span>
            </div>
            <div className="after-header">
              <h2 className="section-title  delay-200 ">
                We provide a place for children with special needs
              </h2>
              <p className="section-subtitle  delay-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <p className="text-secondary-light mb-8  delay-600">
                Cras sed felis eget velit aliquet sagittis id consectetur. Donec
                ullamcorper nulla non metus auctor fringilla. Curabitur blandit
                tempus porttitor. Integer posuere erat a ante venenatis dapibus
                posuere velit aliquet. Vestibulum id ligula porta felis euismod
                semper.
              </p>

              <Button className="btn-primary  delay-600">Learn more</Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/54/28/cd/5428cd617e6b243c35b8b6fb378f5af7.jpg"
                alt="Children playing outside"
                className="object-cover rounded-lg image-right"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-16">
          <div className="flex flex-col items-center stagger-item">
            <img
              src="https://placehold.co/80x80/EBF0F9/1D2130?text=Icon"
              alt="Partner"
              className="h-10 w-10 mb-2"
            />
            <span className="text-xs text-secondary-light">Organization</span>
          </div>
          <div className="flex flex-col items-center stagger-item">
            <img
              src="https://placehold.co/80x80/EBF0F9/1D2130?text=Icon"
              alt="Partner"
              className="h-10 w-10 mb-2"
            />
            <span className="text-xs text-secondary-light">Organization</span>
          </div>
          <div className="flex flex-col items-center stagger-item">
            <img
              src="https://placehold.co/80x80/EBF0F9/1D2130?text=Icon"
              alt="Partner"
              className="h-10 w-10 mb-2"
            />
            <span className="text-xs text-secondary-light">Organization</span>
          </div>
          <div className="flex flex-col items-center stagger-item">
            <img
              src="https://placehold.co/80x80/EBF0F9/1D2130?text=Icon"
              alt="Partner"
              className="h-10 w-10 mb-2"
            />
            <span className="text-xs text-secondary-light">Organization</span>
          </div>
          <div className="flex flex-col items-center stagger-item">
            <img
              src="https://placehold.co/80x80/EBF0F9/1D2130?text=Icon"
              alt="Partner"
              className="h-10 w-10 mb-2"
            />
            <span className="text-xs text-secondary-light">Organization</span>
          </div>
          <div className="flex flex-col items-center stagger-item">
            <img
              src="https://placehold.co/80x80/EBF0F9/1D2130?text=Icon"
              alt="Partner"
              className="h-10 w-10 mb-2"
            />
            <span className="text-xs text-secondary-light">Organization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
