interface BackgroundVideoProps {
  src: string;
  poster?: string;
}

export function BackgroundVideo({ src, poster }: BackgroundVideoProps) {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      {/* Gradient shown while video loads or when unavailable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(243,227,155,0.18) 0%, rgba(244,196,210,0.15) 55%, rgba(233,226,248,0.12) 100%), var(--canvas)",
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
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
    </div>
  );
}
