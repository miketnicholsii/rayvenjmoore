import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-forest-moss",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-secondary hover:text-secondary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:text-accent",
        // Premium Brand Variants - Forest Green + Orange Accent
        hero: "bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-orange hover:bg-forest-moss hover:-translate-y-0.5 btn-glow",
        heroOutline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:border-accent",
        accent: "bg-accent text-accent-foreground font-semibold shadow-md hover:bg-orange-warm hover:shadow-lg hover:-translate-y-0.5",
        accentOutline: "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground",
        forest: "bg-forest text-primary-foreground font-semibold shadow-md hover:bg-forest-moss hover:shadow-lg hover:-translate-y-0.5",
        forestOutline: "border-2 border-forest bg-transparent text-forest hover:bg-forest hover:text-primary-foreground",
        minimal: "text-foreground hover:text-accent underline-offset-4 hover:underline decoration-accent",
        // Legacy support
        gold: "bg-accent text-accent-foreground font-semibold shadow-md hover:bg-orange-warm hover:shadow-lg hover:-translate-y-0.5",
        goldOutline: "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground",
        evergreen: "bg-forest-evergreen text-primary-foreground font-semibold shadow-md hover:bg-forest-moss hover:shadow-lg hover:-translate-y-0.5",
        evergreenOutline: "border-2 border-forest-evergreen bg-transparent text-forest-evergreen hover:bg-forest-evergreen hover:text-primary-foreground",
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
