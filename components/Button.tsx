import Link from "next/link";
import React from "react";

type ButtonProps = {
  variant?: "primary" | "outline";
  className?: string;
  children: React.ReactNode;
};

export const Button = ({
  variant = "primary",
  className = "",
  children,
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 px-4 py-2 text-sm md:text-base md:px-6 md:py-3";
  const variantClasses = {
    primary: "bg-primary text-white transform hover:scale-105",
    outline:
      "border-2 border-white text-white hover:bg-primary hover:border-primary",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${
    className || ""
  }`;

  return (
    <Link href={"#"} className={buttonClasses}>
      {children}
    </Link>
  );
};
