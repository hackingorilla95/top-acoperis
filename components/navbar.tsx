/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Home,
  Hammer,
  Wrench,
  Droplets,
  Building2,
  Menu,
  X,
  Image as ImageIcon,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const mainNav = [
    {
      name: "Acasă",
      href: "/",
      icon: Home,
    },
    {
      name: "Montaj Acoperiș",
      href: "/montaj-acoperisuri",
      icon: Hammer,
    },
    {
      name: "Reparații Acoperiș",
      href: "/reparatii-acoperisuri",
      icon: Wrench,
    },
    {
      name: "Hidroizolații",
      href: "/hidroizolatii",
      icon: Droplets,
    },
    {
      name: "Dulgherie",
      href: "/dulgherie",
      icon: Building2,
    },
    {
      name: "Portofoliu",
      href: "/portofoliu",
      icon: ImageIcon,
    },
  ];

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={cn(
          "fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300",
          isScrolled ? "top-2" : "top-3"
        )}
      >
        <div
          className={cn(
            "bg-white/95 backdrop-blur-xl rounded-2xl border transition-all duration-300",
            isScrolled
              ? "shadow-lg border-gray-200/60"
              : "shadow-md border-gray-200/40"
          )}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 min-h-[4.5rem] py-2">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              onClick={closeDrawer}
            >
              <img
                src="/logo-roof.png"
                alt="TOP Acoperis Logo"
                className="w-9 h-9 rounded-xl shadow-sm group-hover:shadow-md transition-shadow object-cover"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base sm:text-lg text-gray-900">
                  TOP Acoperis
                </span>
                <span className="text-[10px] text-gray-500">
                  Rapid si fara griji
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Larger to prevent overflow */}
            <div className="hidden lg:flex items-center gap-1.5 flex-wrap">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 shadow-sm h-9 text-sm px-4"
              >
                <a href="tel:0729373800" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="hidden xs:inline">Sună Acum</span>
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Meniu"
              >
                {isDrawerOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeDrawer}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 lg:hidden transition-transform duration-300 ease-out",
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="/logo-roof.png"
                alt="Acoperis Logo"
                className="h-8 w-8 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base text-gray-900">
                  TOP Acoperis
                </span>
                <span className="text-xs text-gray-500">Meniu Servicii</span>
              </div>
            </div>
            <button
              onClick={closeDrawer}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-1">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeDrawer}
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/10 to-orange-500/10 flex items-center justify-center group-hover:from-yellow-400/20 group-hover:to-orange-500/20 transition-colors">
                    <item.icon className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="font-semibold text-gray-900">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-gray-200">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 shadow-sm h-12 text-base font-semibold"
            >
              <a
                href="tel:0729 373 800"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                <span>Sună Acum - 0729 373 800</span>
              </a>
            </Button>
            <p className="text-xs text-center text-gray-500 mt-3">
              Disponibili 24/7 pentru urgențe
            </p>
          </div>
        </div>
      </div>

      {/* Spacer - Adjusted for larger navbar */}
      <div className="h-24" aria-hidden="true" />
    </>
  );
}
