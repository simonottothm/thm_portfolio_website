"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const badges = [
  "Meta Certified",
  "Google Partner",
  "Webflow Expert",
];

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Lava Lamp Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white" />
        
        {/* Animated gradient blobs - Lava Lamp Effect */}
        <div className="absolute inset-0">
          {/* Blob 1 - Top Right */}
          <motion.div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-accent-start/30 via-accent-end/25 to-accent-light/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 50, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Blob 2 - Bottom Left */}
          <motion.div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-accent-end/25 via-accent-start/20 to-accent-light/15 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 60, 0],
              y: [0, 100, -40, 0],
              scale: [1, 0.8, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          
          {/* Blob 3 - Center Right */}
          <motion.div
            className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-accent-light/20 via-accent-end/15 to-accent-start/25 rounded-full blur-3xl"
            animate={{
              x: [0, 70, -30, 0],
              y: [0, -60, 40, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          
          {/* Blob 4 - Top Left */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-gradient-to-tr from-accent-start/15 via-accent-light/20 to-accent-end/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 40, 0],
              y: [0, 70, -50, 0],
              scale: [1, 0.9, 1.2, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary mb-4"
            >
              Digitale Performance,
              <br />
              messbar gemacht.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-3"
            >
              Ich verbinde aktuelles Online-Marketing-Know-how mit sauberem
              Web-Development – für Marken, die Ergebnisse sehen wollen.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-gray-600 max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-6"
            >
              Fokus auf ROAS, schnelle Iteration, klare Reports – fundiert,
              datengetrieben, praxisnah.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6"
            >
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/kontakt">
                  Jetzt kontaktieren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link href="/vita">Vita ansehen</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {badges.map((badge, index) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="text-sm px-4 py-1"
                >
                  {badge}
                </Badge>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -15, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{ 
                scale: { duration: 0.8, delay: 0.5 },
                opacity: { duration: 0.8, delay: 0.5 },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
              className="relative w-full h-full"
            >
              <Image
                src="/assets/img-hero1.png"
                alt="Simon Otto - Performance Marketing & Web Development"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              {/* Subtle glow effect around image */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-start/10 via-transparent to-accent-end/10 rounded-2xl blur-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

