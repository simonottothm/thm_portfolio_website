"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Start", href: "/" },
  { name: "Über mich", href: "/ueber-mich" },
  { name: "Projekte", href: "/projekte" },
  { name: "Vita", href: "/vita" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-display font-bold bg-gradient-to-r from-primary via-accent-start to-accent-end bg-clip-text text-transparent group-hover:from-accent-start group-hover:via-accent-end group-hover:to-accent-light transition-all duration-300">
              SO | Simon Otto
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md",
                    isActive
                      ? "bg-gradient-to-r from-accent-start to-accent-end text-white shadow-md shadow-accent-start/30"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-accent-start/10 hover:to-accent-end/10 hover:text-accent-start"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <Button asChild className="ml-4">
              <Link href="/kontakt">Jetzt kontaktieren</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-accent-start to-accent-end text-white shadow-md shadow-accent-start/30"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-accent-start/10 hover:to-accent-end/10 hover:text-accent-start"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <Button asChild className="mt-4 w-full">
              <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                Jetzt kontaktieren
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}

