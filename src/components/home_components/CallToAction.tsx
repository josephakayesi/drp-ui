'use client'

import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-10"></div>
      <div className="container-padding mx-auto relative z-20">
        <div className="bg-no-repeat bg-cover bg-center h-[400px] rounded-lg overflow-hidden flex items-center justify-center"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="text-center max-w-3xl p-8 bg-black/60 backdrop-blur-sm rounded-lg">
            <h2 className="heading-md text-white mb-8 font-bold">
              You can contribute to provide a place for children with special needs!
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="destructive" className="transition-all transform hover:scale-105">
                Donate right now
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/20 transition-all transform hover:scale-105">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
