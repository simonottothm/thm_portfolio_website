import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-accent-start to-accent-end text-white hover:from-accent-end hover:to-accent-start hover:shadow-lg hover:shadow-accent-start/50 hover:scale-105 active:scale-95",
        destructive: "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 active:scale-95",
        outline: "border-2 border-accent-start/30 bg-white text-accent-start hover:bg-gradient-to-r hover:from-accent-start/10 hover:to-accent-end/10 hover:border-accent-start hover:shadow-md hover:shadow-accent-start/20 hover:scale-105 active:scale-95",
        secondary: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300 hover:shadow-lg hover:scale-105 active:scale-95",
        ghost: "hover:bg-gradient-to-r hover:from-accent-start/10 hover:to-accent-end/10 hover:scale-105 active:scale-95",
        link: "text-accent-start underline-offset-4 hover:underline hover:text-accent-end transition-colors",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      );
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center">
          {children}
        </span>
        {/* Shine effect on hover */}
        {variant === "default" && (
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

