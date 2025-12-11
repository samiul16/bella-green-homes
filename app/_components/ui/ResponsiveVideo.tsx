import React, { useMemo } from "react";

interface ResponsiveVideoProps {
  src: string; // MP4 source (will auto-generate WebM)
  posterImage?: string; // Poster image URL
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onLoadStart?: () => void;
  onCanPlay?: () => void;
}

/**
 * ResponsiveVideo Component
 *
 * Provides automatic format fallback (WebM + MP4) for better compression.
 * Includes lazy loading, poster images, and optimized metadata handling.
 *
 * The component automatically generates a WebM source from the MP4 filename.
 * Example: /landing/1.mp4 → /landing/1.webm
 *
 * Features:
 * - WebM fallback for 30-40% smaller file sizes
 * - Poster image support for better UX while loading
 * - Lazy loading via preload="metadata"
 * - Optimized attributes for performance
 * - Cross-origin support for better caching
 */
const ResponsiveVideo = React.forwardRef<
  HTMLVideoElement,
  ResponsiveVideoProps
>(
  (
    {
      src,
      posterImage,
      autoPlay = true,
      muted = true,
      loop = true,
      playsInline = true,
      className = "",
      style,
      onLoadStart,
      onCanPlay,
    },
    ref
  ) => {
    // Memoize WebM support check and source generation
    const { supportsWebM, webmSrc } = useMemo(() => {
      if (typeof document === "undefined") {
        return {
          supportsWebM: false,
          webmSrc: src.replace(/\.mp4$/i, ".webm"),
        };
      }

      const video = document.createElement("video");
      const canPlayWebM =
        video.canPlayType("video/webm; codecs=vp9") === "probably" ||
        video.canPlayType("video/webm; codecs=vp8") === "maybe";

      return {
        supportsWebM: canPlayWebM,
        webmSrc: src.replace(/\.mp4$/i, ".webm"),
      };
    }, [src]);

    return (
      <video
        ref={ref}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        poster={posterImage}
        preload="metadata"
        crossOrigin="anonymous"
        className={className}
        style={style}
        onLoadStart={onLoadStart}
        onCanPlay={onCanPlay}
      >
        {/* WebM: Modern codec, ~30-40% smaller than MP4 (only if file exists) */}
        {supportsWebM && <source src={webmSrc} type="video/webm" />}
        {/* MP4: Primary source - works on all modern browsers */}
        <source src={src} type="video/mp4" />
        {/* Fallback text for browsers that don't support HTML5 video */}
        Your browser does not support the video tag.
      </video>
    );
  }
);

ResponsiveVideo.displayName = "ResponsiveVideo";

export default ResponsiveVideo;
