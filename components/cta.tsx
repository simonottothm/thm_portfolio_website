"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTA({
  title = "Interessiert? Lassen Sie uns sprechen.",
  description,
  buttonText = "Jetzt kontaktieren",
  buttonHref = "/kontakt",
}: CTAProps) {
  const floatingImages = [
    { 
      src: "/assets/shopify.png", 
      alt: "Shopify", 
      size: 140, 
      position: "top-left",
      // Random circular/elliptical path
      xPath: [0, 80, 120, 60, -40, -80, -20, 0],
      yPath: [0, -60, -20, 40, 80, 40, -20, 0],
    },
    { 
      src: "/assets/insta.png", 
      alt: "Instagram", 
      size: 130, 
      position: "top-right",
      // Different path - more vertical movement
      xPath: [0, -50, -100, -60, 20, 80, 40, 0],
      yPath: [0, -80, -40, 60, 100, 60, -40, 0],
    },
    { 
      src: "/assets/meta.png", 
      alt: "Meta", 
      size: 135, 
      position: "bottom-left",
      // Wide horizontal movement
      xPath: [0, 100, 140, 80, -60, -120, -40, 0],
      yPath: [0, 40, -20, -60, -40, 20, 60, 0],
    },
    { 
      src: "/assets/tiktok.png", 
      alt: "TikTok", 
      size: 125, 
      position: "bottom-right",
      // Zigzag pattern
      xPath: [0, -70, -40, 50, 90, 30, -50, 0],
      yPath: [0, 60, -30, -70, -40, 50, 30, 0],
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-accent-start via-accent-end to-accent-light text-white rounded-2xl p-8 md:p-12 text-center overflow-visible">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary-700/30 animate-gradient-shift bg-[length:200%_200%] rounded-2xl" />
      
      {/* Floating platform images */}
      {floatingImages.map((image, index) => {
        const positionStyles: Record<
          string,
          { left?: string; right?: string; top?: string; bottom?: string }
        > = {
          "top-left": { left: "5%", top: "5%" },
          "top-right": { right: "5%", top: "5%" },
          "bottom-left": { left: "5%", bottom: "5%" },
          "bottom-right": { right: "5%", bottom: "5%" },
        };

        return (
          <motion.div
            key={image.alt}
            className="absolute z-0 opacity-100 hover:opacity-100 transition-opacity duration-300"
            style={positionStyles[image.position]}
            animate={{
              x: image.xPath,
              y: image.yPath,
              rotate: [0, 12, -10, 8, -5, 10, -8, 0],
              scale: [1, 1.2, 0.85, 1.1, 0.95, 1.15, 0.9, 1],
            }}
            transition={{
              duration: 20 + index * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 1.2,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.size}
              height={image.size}
              className="object-contain drop-shadow-2xl filter brightness-110"
            />
          </motion.div>
        );
      })}
      
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <Button asChild size="lg" variant="secondary" className="text-base px-8 bg-white text-accent-start hover:bg-gray-50 hover:shadow-xl hover:shadow-white/20">
          <Link href={buttonHref}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

