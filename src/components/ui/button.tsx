import * as React from "react";
import type { LucideIcon } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline";
  icon?: LucideIcon;
}

// The "Button" name here must match the { Button } in your imports
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", icon: Icon, children, ...props }, ref) => {
    // Core logic for premium SaaS look
    const baseStyles =
      "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-200 active:scale-95 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-emerald-500 text-white hover:bg-emerald-600 shadow-[0_0_20px_rgba(52,211,153,0.2)]", // emerald-500 accent
      secondary:
        "bg-emerald-950/20 text-emerald-100 border border-emerald-900/40 hover:bg-emerald-950/30", // greenish secondary
      glass:
        "backdrop-blur-md bg-emerald-950/10 text-emerald-100 border border-emerald-900/20 hover:bg-emerald-950/20", // greenish glass
      outline:
        "bg-transparent border border-emerald-800 text-emerald-400 hover:text-emerald-200 hover:border-emerald-600", // greenish outline
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {/* If an icon is passed, it renders here automatically */}
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
