"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/menuItems";

const MENU_ITEMS: typeof ROUTES = ROUTES;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white dark:bg-secondary py-4 shadow-sm sticky top-0 z-50">
      <div className="container-padding mx-auto w-full max-w-[1800px] flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="font-bold text-xl text-secondary dark:text-white"
          >
            distant<span className="text-primary">Relatives</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-6">
          {MENU_ITEMS.map((item) =>
            item.subItems ? (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(item.title)}
                onClick={() => setDropdownOpen(null)}
              >
                <button className="flex items-center gap-1 text-secondary dark:text-white/80 hover:text-primary transition-colors">
                  {item.title}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {dropdownOpen === item.title && (
                  <div
                    onMouseLeave={() => setDropdownOpen(null)}
                    className="absolute left-0 mt-2 bg-white dark:bg-secondary shadow-md rounded-md w-48"
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.path}
                        className="block px-4 py-2 text-sm text-secondary dark:text-white/80 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.title}
                href={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-accent font-semibold relative after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:h-[1px] after:w-full after:bg-accent after:rounded-full'
                    : "text-secondary dark:text-white/80"
                } hover:text-accent transition-colors`}
              >
                {item.title}
              </Link>
            )
          )}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Donate Button */}
        <Button variant="destructive" className="hidden md:block">
          Donate
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-secondary py-4 px-6 shadow-lg absolute top-full left-0 right-0">
          <nav className="flex flex-col space-y-4">
            {MENU_ITEMS.map((item) => (
              <div key={item.title}>
                {item.subItems ? (
                  <div>
                    <button
                      className="flex justify-between w-full text-left text-secondary dark:text-white/80 hover:text-primary transition-colors"
                      onClick={() =>
                        setDropdownOpen((prev) =>
                          prev === item.title ? "" : item.title
                        )
                      }
                    >
                      {item.title}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {dropdownOpen === item.title && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.path}
                            className="block text-secondary dark:text-white/80 hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-secondary dark:text-white/80"
                    } hover:text-primary transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Button
              variant="destructive"
              className="w-full mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
