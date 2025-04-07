"use client";

import CallToAction from "@/components/home_components/CallToAction";
import CoreInitiatives from "@/components/home_components/CoreInitiatives";
import DonationChart from "@/components/home_components/DonationChart";
import Events from "@/components/home_components/Events";
import Hero from "@/components/home_components/Hero";
import Mission from "@/components/home_components/Mission";
import Projects from "@/components/home_components/Projects";
import Services from "@/components/home_components/Services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Mission />
        <CoreInitiatives />
        <Services />
        <Projects />
        <DonationChart />
        <CallToAction />
        <Events />
      </main>
    </div>
  );
}
