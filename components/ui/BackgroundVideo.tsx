"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface BackgroundVideoProps {
  src: string;
  poster?: string;
}

export function BackgroundVideo({ src, poster }: BackgroundVideoProps) {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <div aria-hidden="true" className="absolute inset-0">
      {/* Warm gradient — always visible; acts as atmospheric base and as static fallback
          when autoplay is blocked or reduced-motion hides the video */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(243,227,155,0.22) 0%, rgba(244,196,210,0.20) 55%, rgba(233,226,248,0.12) 100%), var(--canvas)",
        }}
      />
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlay={() => setVideoReady(true)}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
          // Mobile: shift visual focus to 62% so the rings sit right of the text column
          "[object-position:62%_center] sm:[object-position:center_center]",
          // Fade in only once autoplay starts — prevents black flash on slow connections
          videoReady ? "opacity-100" : "opacity-0",
          // On reduced-motion devices the video is hidden; the gradient shows instead
          "motion-reduce:hidden"
        )}
        aria-hidden="true"
      />
    </div>
  );
}
