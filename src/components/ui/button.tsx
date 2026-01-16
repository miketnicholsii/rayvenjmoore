import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-olive-dark",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-secondary hover:text-secondary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary",
        // Premium Brand Variants - Terracotta + Olive (cream text for contrast)
        hero: "bg-[#7D5C4E] text-[#FAF7F2] font-semibold shadow-lg shadow-terracotta hover:shadow-warm hover:bg-[#6B4D41] hover:-translate-y-0.5",
        heroOutline: "border-2 border-[#7D5C4E] bg-transparent text-[#7D5C4E] hover:bg-[#7D5C4E] hover:text-[#FAF7F2]",
        accent: "bg-[#7D5C4E] text-[#FAF7F2] font-semibold shadow-md hover:bg-[#6B4D41] hover:shadow-lg hover:-translate-y-0.5",
        accentOutline: "border-2 border-[#7D5C4E] bg-transparent text-[#7D5C4E] hover:bg-[#7D5C4E] hover:text-[#FAF7F2]",
        olive: "bg-[#6C7463] text-[#FAF7F2] font-semibold shadow-md hover:bg-[#5A6152] hover:shadow-lg hover:-translate-y-0.5",
        oliveOutline: "border-2 border-[#6C7463] bg-transparent text-[#6C7463] hover:bg-[#6C7463] hover:text-[#FAF7F2]",
        minimal: "text-foreground hover:text-[#7D5C4E] underline-offset-4 hover:underline decoration-[#7D5C4E]",
        // Legacy support (mapped to new colors with proper contrast)
        gold: "bg-[#7D5C4E] text-[#FAF7F2] font-semibold shadow-md hover:bg-[#6B4D41] hover:shadow-lg hover:-translate-y-0.5",
        goldOutline: "border-2 border-[#7D5C4E] bg-transparent text-[#7D5C4E] hover:bg-[#7D5C4E] hover:text-[#FAF7F2]",
        forest: "bg-[#6C7463] text-[#FAF7F2] font-semibold shadow-md hover:bg-[#5A6152] hover:shadow-lg hover:-translate-y-0.5",
        forestOutline: "border-2 border-[#6C7463] bg-transparent text-[#6C7463] hover:bg-[#6C7463] hover:text-[#FAF7F2]",
        navy: "bg-[#4B544A] text-[#FAF7F2] font-semibold shadow-md hover:bg-[#3D453C] hover:shadow-lg hover:-translate-y-0.5",
        navyOutline: "border-2 border-[#4B544A] bg-transparent text-[#4B544A] hover:bg-[#4B544A] hover:text-[#FAF7F2]",
        evergreen: "bg-[#4B544A] text-[#FAF7F2] font-semibold shadow-md hover:bg-[#3D453C] hover:shadow-lg hover:-translate-y-0.5",
        evergreenOutline: "border-2 border-dark-forest bg-transparent text-dark-forest hover:bg-dark-forest hover:text-cream",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
