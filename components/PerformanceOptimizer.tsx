import { useEffect, useState } from "react";

interface PerformanceMetrics {
  isLowEnd: boolean;
  prefersReducedMotion: boolean;
  connectionSpeed: "slow" | "fast" | "unknown";
  deviceMemory: number;
}

export const usePerformanceOptimization = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isLowEnd: false,
    prefersReducedMotion: false,
    connectionSpeed: "unknown",
    deviceMemory: 4,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateMetrics = () => {
      // Check hardware capabilities
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory =
        (navigator as unknown as { deviceMemory?: number }).deviceMemory || 4;

      // Check for low-end devices
      const isLowEnd = hardwareConcurrency <= 4 || deviceMemory <= 4;

      // Check user preferences
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Check connection speed
      const connection = (
        navigator as unknown as { connection?: { effectiveType: string } }
      ).connection;
      let connectionSpeed: "slow" | "fast" | "unknown" = "unknown";

      if (connection) {
        const effectiveType = connection.effectiveType;
        connectionSpeed = ["slow-2g", "2g", "3g"].includes(effectiveType)
          ? "slow"
          : "fast";
      }

      setMetrics({
        isLowEnd,
        prefersReducedMotion,
        connectionSpeed,
        deviceMemory,
      });
    };

    updateMetrics();

    // Listen for changes
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addEventListener("change", updateMetrics);

    return () => {
      mediaQuery.removeEventListener("change", updateMetrics);
    };
  }, []);

  return metrics;
};

// Performance-aware animation variants
export const getOptimizedAnimationVariants = (metrics: PerformanceMetrics) => {
  const shouldReduceAnimations =
    metrics.prefersReducedMotion ||
    metrics.isLowEnd ||
    metrics.connectionSpeed === "slow";

  return {
    fadeInUp: {
      hidden: { opacity: 0, y: shouldReduceAnimations ? 0 : 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceAnimations ? 0.2 : 0.6,
          ease: "easeOut",
        },
      },
    },
    staggerContainer: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: shouldReduceAnimations ? 0.01 : 0.05,
        },
      },
    },
    staggerItem: {
      hidden: { opacity: 0, y: shouldReduceAnimations ? 0 : 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceAnimations ? 0.1 : 0.3,
        },
      },
    },
  };
};

// Performance-aware particle count
export const getOptimizedParticleCount = (
  metrics: PerformanceMetrics
): number => {
  if (metrics.prefersReducedMotion) return 0;
  if (metrics.isLowEnd || metrics.connectionSpeed === "slow") return 2;
  if (window.innerWidth < 768) return 3;
  return 5;
};

// Debounced resize handler
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
