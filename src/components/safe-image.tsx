"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type SafeImageProps = ImageProps & {
  fallbackClassName?: string;
};

export function SafeImage({ fallbackClassName, className, alt, ...props }: SafeImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={cn(
          "bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-navy-950",
          fallbackClassName ?? className,
        )}
        aria-label={typeof alt === "string" ? alt : undefined}
        role="img"
      />
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
