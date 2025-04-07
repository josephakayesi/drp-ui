"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ROUTES } from "@/constants/menuItems";
import Link from "next/link";

const groupedRoutes = ROUTES.reduce(
  (acc, route) => {
    if (route.tag) {
      if (!acc[route.tag]) {
        acc[route.tag] = [];
      }
      acc[route.tag].push(route);
    }
    return acc;
  },
  {} as Record<string, typeof ROUTES>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter",
    });
    setEmail("");
  };

  return (
    <footer className="bg-secondary dark:bg-gray-900  text-white pt-16 pb-8">
      <div className="container-padding mx-auto w-full max-w-[1800px]">
        <div className="grid w-full md:grid-cols-3 gap-12 md:gap-24 lg:gap-44 pb-12 border-b border-secondary-light/20">
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(groupedRoutes).map(([tag, routes]) => (
              <div key={tag}>
                <h3 className="font-bold text-lg mb-4">{tag}</h3>
                <ul className="space-y-3">
                  {routes.map((route) => (
                    <li key={route.path}>
                      <Link
                        href={route.path}
                        className="text-white/70 hover:text-white text-sm transition-colors block"
                      >
                        {route.title}
                      </Link>
                      {route.subItems && (
                        <ul className="ml-4 mt-2 space-y-2">
                          {route.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              <Link
                                href={subItem.path}
                                className="text-white/60 hover:text-white text-xs transition-colors block"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:mt-0">
            <h3 className="font-bold text-lg mb-6">
              Subscribe to get latest updates
            </h3>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-secondary-light/20 border-secondary-light/20 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="btn-primary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} distantRelatives. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
