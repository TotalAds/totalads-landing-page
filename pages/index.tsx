import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Eye,
  MessageSquare,
  Play,
  Search,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Simplified Animation variants for better performance
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// Floating animation component - removed unused component

// Sound simulation function
const playSound = (frequency: number, duration: number) => {
  if (typeof window !== "undefined" && "AudioContext" in window) {
    try {
      const audioContext = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + duration
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch {
      // Fallback to vibration if audio fails
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    }
  }
};

// Testimonial data
const testimonials = [
  {
    quote:
      "LeadSnipper's API is incredibly reliable and fast. We integrated it in under an hour and it's been extracting perfect data ever since.",
    author: "Sarah Chen",
    role: "Lead Developer, TechCorp",
    rating: 5,
  },
  {
    quote:
      "The AI-powered extraction is phenomenal. We're getting 95% accuracy on contact data extraction across thousands of websites daily.",
    author: "Michael Rodriguez",
    role: "CTO, DataFlow Solutions",
    rating: 5,
  },
  {
    quote:
      "Best lead intelligence API we've used. The ICP scoring feature helped us build a game-changing lead qualification system.",
    author: "Emily Watson",
    role: "Founder, LeadGen Pro",
    rating: 5,
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showClickEffect, setShowClickEffect] = useState(false);
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });

  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; vx: number; vy: number }>
  >([]);
  const [magneticElements, setMagneticElements] = useState<HTMLElement[]>([]);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [backgroundParticles, setBackgroundParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; speed: number }>
  >([]);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  // Advanced scroll-based transforms
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Advanced scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
      setIsScrolling(true);

      // Clear scrolling state after delay
      setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Optimized background particle system
  useEffect(() => {
    const generateBackgroundParticles = () => {
      // Reduce particles on mobile for better performance
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const isLowEnd =
        typeof window !== "undefined" && navigator.hardwareConcurrency <= 4;
      const particleCount = isMobile || isLowEnd ? 2 : 4;

      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x:
          Math.random() *
          (typeof window !== "undefined" ? window.innerWidth : 1200),
        y:
          Math.random() *
          (typeof window !== "undefined" ? window.innerHeight : 800),
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.2 + 0.1,
      }));
      setBackgroundParticles(newParticles);
    };

    generateBackgroundParticles();
    window.addEventListener("resize", generateBackgroundParticles);
    return () =>
      window.removeEventListener("resize", generateBackgroundParticles);
  }, []);

  // Optimized background particle animation with reduced motion support
  useEffect(() => {
    let animationFrameId: number;

    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Skip particle animation if user prefers reduced motion
      return;
    }

    const animateParticles = () => {
      setBackgroundParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: particle.y - particle.speed,
          x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 0.2,
          // Reset particle when it goes off screen
          ...(particle.y < -10
            ? {
                y:
                  (typeof window !== "undefined" ? window.innerHeight : 800) +
                  10,
                x:
                  Math.random() *
                  (typeof window !== "undefined" ? window.innerWidth : 1200),
              }
            : {}),
        }))
      );

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animationFrameId = requestAnimationFrame(animateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Optimized mouse tracking with throttling
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;
    const throttleMs = 16; // ~60fps

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      const newPosition = { x: e.clientX, y: e.clientY };

      // Calculate velocity
      const velocity = {
        x: newPosition.x - lastMousePosition.current.x,
        y: newPosition.y - lastMousePosition.current.y,
      };

      setMousePosition(newPosition);
      setMouseVelocity(velocity);
      lastMousePosition.current = newPosition;

      // Optimized magnetic effect with requestAnimationFrame
      if (magneticElements.length > 0) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          magneticElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.sqrt(
              Math.pow(newPosition.x - centerX, 2) +
                Math.pow(newPosition.y - centerY, 2)
            );

            if (distance < 100) {
              const strength = (100 - distance) / 100;
              const deltaX = (newPosition.x - centerX) * strength * 0.2;
              const deltaY = (newPosition.y - centerY) * strength * 0.2;

              element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${
                1 + strength * 0.05
              })`;
            } else {
              element.style.transform = "translate(0px, 0px) scale(1)";
            }
          });
        });
      }

      // Reduced particle generation
      if (Math.abs(velocity.x) > 8 || Math.abs(velocity.y) > 8) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: newPosition.x,
          y: newPosition.y,
          vx: velocity.x * 0.05,
          vy: velocity.y * 0.05,
        };
        setParticles((prev) => [...prev.slice(-10), newParticle]); // Reduced max particles
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      setClickPosition({ x: e.clientX, y: e.clientY });
      setShowClickEffect(true);
      setTimeout(() => setShowClickEffect(false), 600);

      // Play click sound (only if not muted)
      try {
        playSound(800, 0.1);
      } catch {
        // Silently fail if audio context is not available
      }

      // Enhanced haptic feedback (only on mobile)
      if (navigator.vibrate && "ontouchstart" in window) {
        navigator.vibrate([30, 20, 30]);
      }

      // Reduced particle explosion for better performance
      if (!prefersReducedMotion) {
        for (let i = 0; i < 8; i++) {
          // Reduced from 16 to 8
          const angle = (i / 8) * Math.PI * 2;
          const velocity = 3 + Math.random() * 3; // Reduced velocity
          const newParticle = {
            id: Date.now() + Math.random() + i,
            x: e.clientX,
            y: e.clientY,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity,
          };
          setParticles((prev) => [...prev.slice(-15), newParticle]); // Limit total particles
        }
      }

      // Removed screen shake effect for accessibility
    };

    // Register magnetic elements
    const updateMagneticElements = () => {
      const elements = document.querySelectorAll(
        "[data-magnetic]"
      ) as NodeListOf<HTMLElement>;
      setMagneticElements(Array.from(elements));
    };

    updateMagneticElements();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [magneticElements]);

  return (
    <>
      <Head>
        <title>
          LeadSnipper API - AI-Powered Lead Intelligence for Developers
        </title>
        <meta
          name="description"
          content="Developer-friendly API for extracting business intelligence from websites. Build powerful lead generation tools with AI-powered data extraction. 50 free API calls to get started."
        />
        <meta
          name="keywords"
          content="lead intelligence API, business data extraction, developer API, lead generation tools, AI data scraping, contact extraction API"
        />
        <meta
          property="og:title"
          content="LeadSnipper API - AI-Powered Lead Intelligence for Developers"
        />
        <meta
          property="og:description"
          content="Developer-friendly API for extracting business intelligence from websites. Build powerful lead generation tools with AI-powered data extraction."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#a855f7" />
        <link rel="canonical" href="https://leadsnipper.com" />
      </Head>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/90 border-b border-white/10 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-18">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{
                  boxShadow: "0 8px 25px rgba(168, 85, 247, 0.4)",
                  scale: 1.05,
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </motion.div>
              </motion.div>
              <div>
                <span className="text-2xl font-bold text-white">
                  LeadSnipper
                </span>
                <div className="text-xs text-gray-300 font-medium">
                  AI-Powered Lead Intelligence
                </div>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <motion.a
                href="#features"
                className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium text-sm relative group py-2"
                whileHover={{ y: -1 }}
              >
                Features
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
              <motion.a
                href="#workflow"
                className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium text-sm relative group py-2"
                whileHover={{ y: -1 }}
              >
                How It Works
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
              <motion.a
                href="#pricing"
                className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium text-sm relative group py-2"
                whileHover={{ y: -1 }}
              >
                Pricing
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
              <motion.a
                href="#testimonials"
                className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium text-sm relative group py-2"
                whileHover={{ y: -1 }}
              >
                Success Stories
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 hover:border-purple-400/40 hover:text-purple-400 transition-all duration-300"
                >
                  Sign In
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Start Free Trial
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Advanced Cursor System */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          x: { type: "spring", stiffness: 1000, damping: 35 },
          y: { type: "spring", stiffness: 1000, damping: 35 },
          scale: { duration: 0.2 },
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>
      </motion.div>

      {/* Velocity-based cursor trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <motion.div
          className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70"
          animate={{
            scale:
              Math.min(
                Math.abs(mouseVelocity.x) + Math.abs(mouseVelocity.y),
                20
              ) / 10,
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Dynamic Particle System */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed w-1 h-1 bg-purple-400 rounded-full pointer-events-none z-30"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: particle.x + particle.vx * 50,
            y: particle.y + particle.vy * 50,
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          onAnimationComplete={() => {
            setParticles((prev) => prev.filter((p) => p.id !== particle.id));
          }}
        />
      ))}

      {/* Enhanced Click Effects */}
      {showClickEffect && (
        <>
          {/* Main ripple */}
          <motion.div
            className="fixed pointer-events-none z-30"
            style={{
              left: clickPosition.x - 30,
              top: clickPosition.y - 30,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-16 h-16 border-2 border-purple-400 rounded-full" />
          </motion.div>

          {/* Secondary ripple */}
          <motion.div
            className="fixed pointer-events-none z-30"
            style={{
              left: clickPosition.x - 20,
              top: clickPosition.y - 20,
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full" />
          </motion.div>

          {/* Burst particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed w-2 h-2 bg-purple-400 rounded-full pointer-events-none z-30"
              style={{
                left: clickPosition.x - 4,
                top: clickPosition.y - 4,
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [1, 1, 0],
                x: Math.cos((i / 8) * Math.PI * 2) * 40,
                y: Math.sin((i / 8) * Math.PI * 2) * 40,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.05,
              }}
            />
          ))}
        </>
      )}

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating action button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          data-magnetic
          className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center text-white font-bold text-xl relative overflow-hidden group"
          whileHover={{
            scale: 1.2,
            boxShadow: "0 25px 50px rgba(168, 85, 247, 0.5)",
            rotateY: 15,
          }}
          whileTap={{ scale: 0.8, rotateY: -15 }}
          animate={{
            y: [0, -8, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.3s ease",
          }}
          onClick={() => {
            playSound(1200, 0.15);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 border-2 border-white/30 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.span
            className="relative z-10"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↑
          </motion.span>

          {/* Sparkle effects */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${20 + Math.cos((i / 6) * Math.PI * 2) * 15}px`,
                top: `${20 + Math.sin((i / 6) * Math.PI * 2) * 15}px`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.button>
      </motion.div>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
        {/* Optimized Background Particle System */}
        {backgroundParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-10"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full bg-purple-400/20 rounded-full blur-sm" />
          </motion.div>
        ))}

        {/* Scroll-responsive background elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: backgroundY }}
        >
          {/* Dynamic grid pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: isScrolling
                ? scrollDirection === "down"
                  ? ["0px 0px", "50px 50px"]
                  : ["50px 50px", "0px 0px"]
                : "0px 0px",
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        {/* Animated background particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        {/* Enhanced Hero Section with Scroll Effects */}
        <motion.section
          ref={heroRef}
          className="relative overflow-hidden pt-24 pb-20 min-h-screen flex items-center"
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
        >
          {/* Advanced Animated background elements */}
          <div className="absolute inset-0">
            {/* Animated gradient orbs */}
            <motion.div
              className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-gradient-to-r from-pink-500/10 to-purple-500/15 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/12 to-pink-600/8 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
            />

            {/* Floating geometric shapes */}
            <motion.div
              className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl rotate-45"
              animate={{
                rotate: [45, 225, 45],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-r from-pink-500/25 to-purple-500/25 rounded-full"
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Enhanced Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            {/* Animated dots pattern */}
            <div className="absolute inset-0 opacity-30">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          <motion.div style={{ y }} className="relative container mx-auto px-4">
            {/* Split-Screen Layout */}
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[85vh] py-8">
              {/* Left Side - Hero Text */}
              <motion.div
                className="text-left lg:text-left"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h1
                  variants={staggerItem}
                  className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tight"
                >
                  <motion.div
                    className="overflow-hidden mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <motion.span
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white"
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: "easeOut",
                      }}
                    >
                      TURN ANY WEBSITE INTO
                    </motion.span>
                  </motion.div>

                  <motion.div
                    className="overflow-hidden mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    <motion.span
                      className="block relative"
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                        ACTIONABLE BUSINESS
                      </span>
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-2xl -z-10"
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.span>
                  </motion.div>

                  <motion.div
                    className="overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <motion.span
                      className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 font-black"
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.7,
                        ease: "easeOut",
                      }}
                    >
                      INTELLIGENCE
                    </motion.span>
                  </motion.div>
                </motion.h1>

                <motion.p
                  variants={staggerItem}
                  className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed font-light max-w-2xl"
                >
                  <motion.span
                    className="text-purple-300 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    Extract 12+ comprehensive data points
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    {" "}
                    including{" "}
                  </motion.span>
                  <motion.span
                    className="text-pink-300 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                  >
                    contacts, social profiles, company details, tech stack
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                  >
                    {" "}
                    and revenue data from any website using our{" "}
                  </motion.span>
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                  >
                    AI-powered API
                  </motion.span>
                  <motion.span
                    className="block mt-2 text-gray-400 text-sm md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                  >
                    Get complete business intelligence in seconds - perfect for
                    sales teams, lead generation, and market research
                  </motion.span>
                </motion.p>

                <motion.div
                  variants={staggerItem}
                  className="flex flex-col sm:flex-row gap-3 mb-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setIsHovering(true)}
                    onHoverEnd={() => setIsHovering(false)}
                  >
                    <Button
                      data-magnetic
                      size="lg"
                      className="group relative bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-bold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden rounded-lg border-2 border-purple-400/30"
                      style={{ transition: "transform 0.3s ease" }}
                    >
                      {/* Enhanced animated background effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-transparent"
                        initial={{ x: "-100%", skewX: -20 }}
                        whileHover={{ x: "100%", skewX: -20 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />

                      {/* Enhanced pulsing glow effect */}
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-purple-500/60 to-pink-500/60 rounded-2xl blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Sparkle effects */}
                      <motion.div
                        className="absolute top-2 right-4 w-2 h-2 bg-white rounded-full"
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.5,
                        }}
                      />
                      <motion.div
                        className="absolute bottom-3 left-6 w-1 h-1 bg-white rounded-full"
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 1,
                        }}
                      />

                      <span className="relative z-10 flex items-center tracking-wide">
                        🚀 START FREE TRIAL
                        <motion.div
                          className="ml-4"
                          animate={{
                            x: [0, 8, 0],
                            rotate: [0, 15, -15, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowRight className="w-7 h-7" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setIsHovering(true)}
                    onHoverEnd={() => setIsHovering(false)}
                  >
                    <Button
                      data-magnetic
                      variant="outline"
                      size="lg"
                      className="group relative border-2 border-purple-400/40 text-white hover:border-purple-400 hover:text-purple-300 px-8 py-3 text-base font-semibold backdrop-blur-xl bg-white/5 hover:bg-purple-500/20 transition-all duration-300 overflow-hidden rounded-lg"
                      style={{ transition: "transform 0.3s ease" }}
                    >
                      {/* Enhanced animated background effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10"
                        initial={{ scale: 0, rotate: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1, rotate: 2, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />

                      {/* Enhanced border glow effect */}
                      <motion.div
                        className="absolute -inset-1 border-2 border-purple-400/0 rounded-2xl"
                        whileHover={{
                          borderColor: "rgba(168, 85, 247, 0.6)",
                          boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Floating particles */}
                      <motion.div
                        className="absolute top-2 left-4 w-1 h-1 bg-purple-400 rounded-full"
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <span className="relative z-10 flex items-center tracking-wide">
                        <motion.div
                          className="mr-4"
                          whileHover={{
                            scale: 1.4,
                            rotate: 360,
                            color: "#a855f7",
                          }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          <Play className="w-6 h-6" />
                        </motion.div>
                        📚 VIEW API DOCS
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Side - Interactive Demo */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Demo Container */}
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4 shadow-2xl">
                  {/* URL Input Demo */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm ml-2">
                        API Demo
                      </span>
                    </div>

                    <div className="bg-slate-900/80 rounded-lg p-3 border border-purple-500/30">
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-400 text-sm">POST</span>
                        <span className="text-gray-300 text-sm font-mono">
                          api.leadsnipper.com/extract
                        </span>
                      </div>
                      <div className="mt-2 text-gray-400 text-xs">
                        <span className="text-pink-400">URL:</span>{" "}
                        https://example-company.com
                      </div>
                    </div>
                  </motion.div>

                  {/* Processing Animation */}
                  <motion.div
                    className="mb-4 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    <motion.div
                      className="inline-flex items-center space-x-2 text-purple-300"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-purple-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-purple-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-purple-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      />
                      <span className="text-sm ml-2">AI Processing...</span>
                    </motion.div>
                  </motion.div>

                  {/* Results Header */}
                  <motion.div
                    className="mb-3 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                  >
                    <div className="inline-flex items-center space-x-2 text-green-400 text-sm font-semibold">
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span>✅ 12+ Data Points Extracted</span>
                    </div>
                  </motion.div>

                  {/* Results Demo */}
                  <motion.div
                    className="space-y-2 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-slate-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2 }}
                  >
                    {[
                      {
                        icon: "🏢",
                        label: "Company Name",
                        value: "TechCorp Inc",
                        delay: 2.2,
                      },
                      {
                        icon: "📧",
                        label: "Contact Email",
                        value: "contact@techcorp.com",
                        delay: 2.3,
                      },
                      {
                        icon: "📞",
                        label: "Phone Number",
                        value: "+1-555-0123",
                        delay: 2.4,
                      },
                      {
                        icon: "👤",
                        label: "CEO/Founder",
                        value: "John Smith",
                        delay: 2.5,
                      },
                      {
                        icon: "👥",
                        label: "Team Size",
                        value: "50-100 employees",
                        delay: 2.6,
                      },
                      {
                        icon: "🌐",
                        label: "Industry",
                        value: "Software Development",
                        delay: 2.7,
                      },
                      {
                        icon: "📍",
                        label: "Location",
                        value: "San Francisco, CA",
                        delay: 2.8,
                      },
                      {
                        icon: "💰",
                        label: "Revenue Range",
                        value: "$1M - $10M",
                        delay: 2.9,
                      },
                      {
                        icon: "🔗",
                        label: "LinkedIn",
                        value: "linkedin.com/company/techcorp",
                        delay: 3.0,
                      },
                      {
                        icon: "🐦",
                        label: "Twitter",
                        value: "@techcorp",
                        delay: 3.1,
                      },
                      {
                        icon: "⚡",
                        label: "Tech Stack",
                        value: "React, Node.js, AWS",
                        delay: 3.2,
                      },
                      {
                        icon: "📈",
                        label: "Founded",
                        value: "2018",
                        delay: 3.3,
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-2 bg-slate-800/60 rounded-lg border border-purple-500/20"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: item.delay }}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-base">{item.icon}</span>
                          <span className="text-gray-400 text-xs">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-white text-xs font-medium">
                          {item.value}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Floating particles around demo */}
                  <div className="absolute -inset-4 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          opacity: [0.2, 1, 0.2],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <section
          id="features"
          className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900/20 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.1, 0.8, 0.1],
                  scale: [1, 2, 1],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10 pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6"
              >
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 leading-tight">
                  Everything You Need for{" "}
                  <motion.span
                    className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent relative inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Lead Intelligence
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl -z-10"
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.span>
                </h2>
              </motion.div>

              <motion.p
                className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our comprehensive suite of features empowers developers to build
                sophisticated{" "}
                <span className="text-purple-300 font-semibold">
                  lead generation applications
                </span>{" "}
                with advanced{" "}
                <span className="text-pink-300 font-semibold">
                  AI-driven insights
                </span>{" "}
                and real-time business intelligence extraction.
              </motion.p>

              {/* Stats row */}
              <motion.div
                className="flex flex-wrap justify-center gap-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {[
                  { number: "99.9%", label: "Accuracy Rate" },
                  { number: "<2s", label: "Response Time" },
                  { number: "12+", label: "Data Points" },
                  { number: "24/7", label: "API Uptime" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-700">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Floating particles inside card */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.5, 1],
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          delay: Math.random(),
                        }}
                      />
                    ))}
                  </div>

                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Search className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                        AI-Powered Data Extraction
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        Extract comprehensive business intelligence from any
                        website using advanced AI algorithms with{" "}
                        <span className="text-purple-300 font-semibold">
                          99.9% accuracy
                        </span>
                        .
                      </CardDescription>
                    </motion.div>

                    {/* Feature highlights */}
                    <motion.div
                      className="mt-4 space-y-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {[
                        "Smart Content Recognition",
                        "Multi-page Analysis",
                        "Real-time Processing",
                      ].map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center text-xs text-purple-300"
                        >
                          <div className="w-1 h-1 bg-purple-400 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </motion.div>
                  </CardHeader>

                  {/* Hover effect border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/60 rounded-xl transition-all duration-500"
                    initial={false}
                  />
                </Card>
              </motion.div>

              <motion.div
                variants={staggerItem}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10 hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-700">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Floating particles inside card */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-pink-400/60 rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.5, 1],
                          x: [0, 10, 0],
                        }}
                        transition={{
                          duration: 2.5 + Math.random(),
                          repeat: Infinity,
                          delay: Math.random(),
                        }}
                      />
                    ))}
                  </div>

                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                      whileHover={{
                        scale: 1.2,
                        rotate: -360,
                        boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <MessageSquare className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-pink-200 transition-colors duration-300">
                        Contact Intelligence
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        Extract email addresses, phone numbers, social profiles,
                        and decision-maker information with{" "}
                        <span className="text-pink-300 font-semibold">
                          AI-powered precision
                        </span>
                        .
                      </CardDescription>
                    </motion.div>

                    {/* Feature highlights */}
                    <motion.div
                      className="mt-4 space-y-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {[
                        "Email & Phone Extraction",
                        "Social Profile Mapping",
                        "Decision Maker ID",
                      ].map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center text-xs text-pink-300"
                        >
                          <div className="w-1 h-1 bg-pink-400 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </motion.div>
                  </CardHeader>

                  <motion.div
                    className="absolute inset-0 border-2 border-pink-500/0 group-hover:border-pink-500/60 rounded-xl transition-all duration-500"
                    initial={false}
                  />
                </Card>
              </motion.div>

              <motion.div
                variants={staggerItem}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-700">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Floating particles inside card */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.5, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 3 + Math.random(),
                          repeat: Infinity,
                          delay: Math.random(),
                        }}
                      />
                    ))}
                  </div>

                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                      whileHover={{
                        scale: 1.2,
                        rotate: 180,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Workflow className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                        ICP Lead Scoring
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        Automatically score and qualify leads based on your
                        Ideal Customer Profile criteria with{" "}
                        <span className="text-blue-300 font-semibold">
                          AI-powered matching algorithms
                        </span>
                        .
                      </CardDescription>
                    </motion.div>

                    {/* Feature highlights */}
                    <motion.div
                      className="mt-4 space-y-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {[
                        "Custom ICP Profiles",
                        "Automated Scoring",
                        "Lead Qualification",
                      ].map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center text-xs text-blue-300"
                        >
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </motion.div>
                  </CardHeader>

                  <motion.div
                    className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/60 rounded-xl transition-all duration-500"
                    initial={false}
                  />
                </Card>
              </motion.div>

              <motion.div
                variants={staggerItem}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-700">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Floating particles inside card */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-green-400/60 rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.5, 1],
                          y: [0, -15, 0],
                        }}
                        transition={{
                          duration: 2.2 + Math.random(),
                          repeat: Infinity,
                          delay: Math.random(),
                        }}
                      />
                    ))}
                  </div>

                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <BarChart3 className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-green-200 transition-colors duration-300">
                        Developer-Friendly API Design
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        Built by developers, for developers. Our RESTful API
                        features{" "}
                        <span className="text-green-300 font-semibold">
                          intuitive endpoints
                        </span>
                        , comprehensive SDKs, and detailed documentation that
                        gets you up and running in{" "}
                        <span className="text-green-300 font-semibold">
                          under 5 minutes
                        </span>
                        .
                      </CardDescription>
                    </motion.div>

                    {/* Feature highlights */}
                    <motion.div
                      className="mt-4 space-y-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      {[
                        "OpenAPI 3.0 Specification",
                        "Multiple Language SDKs",
                        "Interactive API Explorer",
                        "Webhook Support",
                      ].map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center text-xs text-green-300"
                        >
                          <div className="w-1 h-1 bg-green-400 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </motion.div>

                    {/* Simplified API Example */}
                  </CardHeader>

                  <motion.div
                    className="absolute inset-0 border-2 border-green-500/0 group-hover:border-green-500/60 rounded-xl transition-all duration-500"
                    initial={false}
                  />
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <motion.div
                className="inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-purple-300 text-sm font-semibold">
                  💰 PRICING PLANS
                </span>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Perfect Plan
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Start free and scale seamlessly. Every plan includes our core
                AI-powered extraction with no setup fees or hidden costs.
              </p>

              {/* Pricing Toggle */}
              <motion.div
                className="flex items-center justify-center mt-8 p-1 bg-slate-800/50 rounded-lg border border-slate-700/50 w-fit mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <button className="px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-md transition-all">
                  Monthly
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all">
                  Annual
                  <span className="ml-1 text-xs text-green-400">
                    (Save 20%)
                  </span>
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-7xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {/* Free Tier */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full relative overflow-hidden border border-slate-700/50 backdrop-blur-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="text-center pb-6 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      Starter
                    </CardTitle>
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      ₹0
                      <span className="text-sm text-gray-400 font-normal">
                        /month
                      </span>
                    </div>
                    <CardDescription className="text-gray-400 text-sm">
                      Perfect for testing & prototyping
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3 relative">
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      <span>
                        <strong>50</strong> API calls/month
                      </span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      Basic data extraction
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      Standard response time
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      Community support
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      API documentation
                    </div>

                    <div className="pt-4">
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 shadow-lg">
                        Start Free
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Professional Tier */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full relative overflow-hidden border-2 border-purple-500/60 backdrop-blur-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 group">
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-xs font-bold tracking-wide">
                    ⭐ MOST POPULAR
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="text-center pb-6 pt-10 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-400/50">
                      <span className="text-2xl">💼</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      Professional
                    </CardTitle>
                    <div className="text-3xl font-bold text-purple-300 mb-2">
                      ₹999
                      <span className="text-sm text-gray-400 font-normal">
                        /month
                      </span>
                    </div>
                    <CardDescription className="text-gray-400 text-sm">
                      For growing businesses & teams
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3 relative">
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      <span>
                        <strong>2,000</strong> API calls/month
                      </span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      AI-enhanced extraction
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      ICP lead scoring
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      Priority processing
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      Email support
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      Advanced analytics
                    </div>

                    <div className="pt-4">
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg font-semibold">
                        Start Professional
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Pay-per-use */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full relative overflow-hidden border border-slate-700/50 backdrop-blur-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="text-center pb-6 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-pink-500/30">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      Pay-as-you-go
                    </CardTitle>
                    <div className="text-3xl font-bold text-pink-400 mb-2">
                      ₹0.50
                      <span className="text-sm text-gray-400 font-normal">
                        /call
                      </span>
                    </div>
                    <CardDescription className="text-gray-400 text-sm">
                      Flexible pricing for any scale
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3 relative">
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                      No monthly commitment
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                      All professional features
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                      Credit-based billing
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                      Volume discounts
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                      Instant activation
                    </div>

                    <div className="pt-4">
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white border-0 shadow-lg">
                        Buy Credits
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enterprise Tier */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full relative overflow-hidden border border-slate-700/50 backdrop-blur-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="text-center pb-6 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      Enterprise
                    </CardTitle>
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      Custom
                      <span className="text-sm text-gray-400 font-normal block">
                        pricing
                      </span>
                    </div>
                    <CardDescription className="text-gray-400 text-sm">
                      For large-scale operations
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3 relative">
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      Unlimited API calls
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      Dedicated infrastructure
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      Custom integrations
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      24/7 priority support
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      SLA guarantees
                    </div>

                    <div className="pt-4">
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-lg">
                        Contact Sales
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Additional Info Section */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  🎯 All Plans Include
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    99.9% Uptime SLA
                  </div>
                  <div className="flex items-center justify-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Real-time Analytics
                  </div>
                  <div className="flex items-center justify-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Comprehensive Documentation
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <p className="text-purple-300 text-sm">
                    💡 <strong>Free Trial:</strong> Start with our free tier -
                    no credit card required. Upgrade anytime as your needs grow.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Workflow Section */}
        <section
          id="workflow"
          className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <motion.div
                className="inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-purple-300 text-sm font-semibold">
                  🚀 HOW IT WORKS
                </span>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Get Started in{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  3 Simple Steps
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                From a single API call to comprehensive business intelligence -
                our streamlined process delivers results in seconds, not hours.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {/* Step 1 */}
              <motion.div
                variants={staggerItem}
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 h-full relative overflow-hidden group-hover:border-purple-500/30 transition-all duration-500">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-500">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                        <span className="text-lg font-bold text-purple-400">
                          01
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      Send API Request
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      Make a simple POST request with the target website URL and
                      optional parameters like ICP profiles or extraction
                      preferences.
                    </p>

                    {/* Code snippet preview */}
                    <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                      <code className="text-xs text-purple-300 font-mono">
                        POST /api/extract
                        <br />
                        {"{ url: 'company.com' }"}
                      </code>
                    </div>
                  </div>

                  {/* Connecting arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-500/50 rotate-45"></div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                variants={staggerItem}
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 h-full relative overflow-hidden group-hover:border-pink-500/30 transition-all duration-500">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-pink-500/25 transition-all duration-500">
                        <MessageSquare className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-500/30">
                        <span className="text-lg font-bold text-pink-400">
                          02
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      AI Processing
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      Our advanced AI engine analyzes the website content,
                      extracts business intelligence, and structures data
                      according to your specifications.
                    </p>

                    {/* Processing indicators */}
                    <div className="space-y-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></div>
                        Analyzing content structure...
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <div
                          className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                        Extracting business data...
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <div
                          className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"
                          style={{ animationDelay: "1s" }}
                        ></div>
                        Generating insights...
                      </div>
                    </div>
                  </div>

                  {/* Connecting arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-pink-500/50 to-transparent"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-500/50 rotate-45"></div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                variants={staggerItem}
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 h-full relative overflow-hidden group-hover:border-green-500/30 transition-all duration-500">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-500">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                        <span className="text-lg font-bold text-green-400">
                          03
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      Get Structured Results
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      Receive comprehensive JSON response with business data,
                      contact information, lead intelligence, and actionable
                      insights.
                    </p>

                    {/* Result preview */}
                    <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                      <code className="text-xs text-green-300 font-mono">
                        {"{"}
                        <br />
                        &nbsp;&nbsp;&quot;company&quot;: &quot;TechCorp&quot;,
                        <br />
                        &nbsp;&nbsp;&quot;email&quot;: &quot;contact@...&quot;,
                        <br />
                        &nbsp;&nbsp;&quot;leadScore&quot;: 85
                        <br />
                        {"}"}
                      </code>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Performance Stats */}
            <motion.div
              className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center p-6 bg-slate-800/30 backdrop-blur-xl rounded-xl border border-slate-700/50">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  &lt;3s
                </div>
                <div className="text-sm text-gray-400">
                  Average Response Time
                </div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 backdrop-blur-xl rounded-xl border border-slate-700/50">
                <div className="text-3xl font-bold text-pink-400 mb-2">12+</div>
                <div className="text-sm text-gray-400">
                  Data Points Extracted
                </div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 backdrop-blur-xl rounded-xl border border-slate-700/50">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  99.9%
                </div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Response Showcase Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <motion.div
                className="inline-block px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-green-300 text-sm font-semibold">
                  📊 API RESPONSE
                </span>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Complete{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Business Intelligence
                </span>{" "}
                Response
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                See exactly what data you get back from our API - comprehensive
                business intelligence in a structured JSON format.
              </p>
            </motion.div>

            {/* API Response Example */}
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden">
                {/* Response Header */}
                <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-400 font-mono">
                      200 OK • Response Time: 2.3s
                    </div>
                  </div>
                </div>

                {/* Response Body */}
                <div className="p-6 max-h-96 overflow-y-auto">
                  <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                    <code>
                      {`{
  "success": true,
  "data": {
    "title": "TechCorp - Leading Software Solutions",
    "description": "Enterprise software solutions for modern businesses",
    "contactDetails": {
      "email": "contact@techcorp.com",
      "phone": "+1-555-0123",
      "address": "123 Tech Street, San Francisco, CA 94105",
      "socialMedia": {
        "linkedin": "https://linkedin.com/company/techcorp",
        "twitter": "https://twitter.com/techcorp"
      }
    },
    "aboutData": {
      "companyName": "TechCorp Solutions",
      "industry": "Software Development",
      "foundedYear": "2015",
      "employeeCount": "50-200",
      "revenue": "$10M-$50M",
      "headquarters": "San Francisco, CA"
    },
    "businessIntelligence": {
      "companyType": "enterprise",
      "industry": ["Software Development", "SaaS", "Enterprise Solutions"],
      "businessModel": "B2B",
      "targetMarket": ["Enterprise clients", "Mid-market companies"],
      "keyServices": [
        "Custom Software Development",
        "Cloud Solutions",
        "API Integration",
        "Technical Consulting"
      ],
      "competitiveAdvantages": [
        "8+ years of experience",
        "Fortune 500 client base",
        "24/7 support"
      ],
      "technologies": ["React", "Node.js", "AWS", "Docker"],
      "marketPosition": "established",
      "confidence": 92
    },
    "enhancedContactInfo": {
      "emails": ["contact@techcorp.com", "sales@techcorp.com"],
      "phones": ["+1-555-0123", "+1-555-0124"],
      "addresses": ["123 Tech Street, San Francisco, CA 94105"],
      "socialMedia": {
        "linkedin": "https://linkedin.com/company/techcorp",
        "twitter": "https://twitter.com/techcorp",
        "github": "https://github.com/techcorp"
      }
    },
    "extractedEntities": {
      "people": ["John Smith - CEO", "Jane Doe - CTO"],
      "organizations": ["TechCorp Solutions", "AWS", "Microsoft"],
      "locations": ["San Francisco", "California", "United States"],
      "products": ["CloudSync Pro", "DataFlow API", "SecureVault"]
    },
    "sentiment": {
      "overall": "positive",
      "confidence": 88
    },
    "aiProcessingTime": 2300,
    "processingTime": 2300,
    "aiEnhanced": true
  },
  "meta": {
    "aiEnhanced": true,
    "processingTime": 2300,
    "timestamp": "2024-01-15T10:30:00Z",
    "requestId": "req_abc123def456"
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Key Features Grid */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-slate-800/30 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Company Data
                </h3>
                <p className="text-sm text-gray-400">
                  Complete business information, industry classification, and
                  company metrics
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Contact Info
                </h3>
                <p className="text-sm text-gray-400">
                  Emails, phones, addresses, and social media profiles
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  AI Insights
                </h3>
                <p className="text-sm text-gray-400">
                  Business intelligence, market analysis, and lead scoring
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Real-time</h3>
                <p className="text-sm text-gray-400">
                  Fresh data extraction with sub-3 second response times
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <motion.div
                className="inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-purple-300 text-xs font-bold tracking-wide">
                  💬 TESTIMONIALS
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Trusted by{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Developers Worldwide
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                See how development teams are building amazing lead generation
                tools with our API.
              </p>
            </motion.div>

            {/* Testimonial Carousel */}
            <motion.div
              className="max-w-3xl mx-auto mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <Card className="shadow-2xl backdrop-blur-xl bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl">
                <CardContent className="text-center">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <CheckCircle className="w-5 h-5 text-purple-400 mx-0.5" />
                          </motion.div>
                        )
                      )}
                    </div>
                    <blockquote className="text-lg md:text-xl text-white font-medium mb-6 leading-relaxed italic">
                      &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                    </blockquote>
                    <div>
                      <div className="font-bold text-lg text-white mb-1">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Enhanced Testimonial indicators */}
              <div className="flex justify-center mt-6 space-x-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      playSound(600, 0.1);
                    }}
                    onMouseEnter={() => playSound(400, 0.05)}
                    className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-purple-500 scale-125"
                        : "bg-gray-500 hover:bg-purple-400/50"
                    }`}
                    whileHover={{
                      scale: 1.3,
                      boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
                    }}
                    whileTap={{ scale: 0.8 }}
                  >
                    {/* Active indicator ring */}
                    {index === currentTestimonial && (
                      <motion.div
                        className="absolute inset-0 border border-purple-400 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-purple-500/20 rounded-full blur-sm"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 2, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem} className="text-center">
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-lg p-4 border border-slate-700/50">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    10K+
                  </div>
                  <div className="text-gray-400 font-medium text-sm">
                    Developers
                  </div>
                </div>
              </motion.div>
              <motion.div variants={staggerItem} className="text-center">
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-lg p-4 border border-slate-700/50">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    5M+
                  </div>
                  <div className="text-gray-400 font-medium text-sm">
                    API Calls
                  </div>
                </div>
              </motion.div>
              <motion.div variants={staggerItem} className="text-center">
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-lg p-4 border border-slate-700/50">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    99.9%
                  </div>
                  <div className="text-gray-400 font-medium text-sm">
                    Uptime
                  </div>
                </div>
              </motion.div>
              <motion.div variants={staggerItem} className="text-center">
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-lg p-4 border border-slate-700/50">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    &lt;2s
                  </div>
                  <div className="text-gray-400 font-medium text-sm">
                    Response
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0">
            {/* Main gradient orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
                x: [0, -80, 0],
                y: [0, 40, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            />

            {/* Floating elements */}
            <motion.div
              className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-3xl backdrop-blur-sm border border-white/10"
              animate={{
                rotate: [0, 360],
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full backdrop-blur-sm border border-white/10"
              animate={{
                x: [0, 40, 0],
                y: [0, -20, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />

            {/* Enhanced particle system */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          <motion.div
            className="relative container mx-auto px-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            {/* Badge */}
            <motion.div
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-purple-300 text-xs font-bold tracking-wide">
                🚀 START BUILDING TODAY
              </span>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform Your Business with{" "}
                <motion.span
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  AI-Powered Intelligence
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl -z-10 rounded-lg"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-base md:text-lg mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Join{" "}
                <span className="text-purple-300 font-semibold">
                  10,000+ developers
                </span>{" "}
                who trust LeadSnipper to extract comprehensive business
                intelligence and build next-generation lead generation
                applications.
              </motion.p>

              {/* Stats Row */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-lg p-3 border border-slate-700/50">
                  <div className="text-xl font-bold text-purple-400 mb-1">
                    50M+
                  </div>
                  <div className="text-xs text-gray-400">Websites Analyzed</div>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-lg p-3 border border-slate-700/50">
                  <div className="text-xl font-bold text-pink-400 mb-1">
                    &lt;3s
                  </div>
                  <div className="text-xs text-gray-400">Average Response</div>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-lg p-3 border border-slate-700/50">
                  <div className="text-xl font-bold text-green-400 mb-1">
                    99.9%
                  </div>
                  <div className="text-xs text-gray-400">Uptime SLA</div>
                </div>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => playSound(800, 0.1)}
                >
                  <Button
                    data-magnetic
                    size="lg"
                    className="group relative bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden rounded-xl"
                    style={{ transition: "transform 0.3s ease" }}
                  >
                    {/* Animated background shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Pulsing glow */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl blur-lg"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <span className="relative z-10 flex items-center">
                      🚀 Start Building Free
                      <motion.div
                        className="ml-2"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => playSound(600, 0.1)}
                >
                  <Button
                    data-magnetic
                    variant="outline"
                    size="lg"
                    className="group relative border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-bold backdrop-blur-sm transition-all duration-500 overflow-hidden rounded-xl"
                    style={{ transition: "transform 0.3s ease" }}
                  >
                    {/* Hover background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />

                    {/* Border glow effect */}
                    <motion.div
                      className="absolute -inset-1 border-2 border-white/0 rounded-xl"
                      whileHover={{
                        borderColor: "rgba(255, 255, 255, 0.4)",
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <span className="relative z-10 flex items-center">
                      <motion.div
                        className="mr-2"
                        whileHover={{
                          scale: 1.2,
                          rotate: 360,
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <Play className="w-5 h-5" />
                      </motion.div>
                      📖 View Documentation
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="flex items-center justify-center text-green-400 text-base font-semibold">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>
                    50 Free API Calls • No Credit Card Required • Instant Access
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5"></div>
                    SOC 2 Compliant
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1.5"></div>
                    GDPR Ready
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-1.5"></div>
                    Enterprise Grade
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-1.5"></div>
                    24/7 Support
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="md:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    LeadSnipper
                  </span>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                  AI-powered lead intelligence API for developers building the
                  next generation of lead generation tools.
                </p>
                <div className="flex space-x-3">
                  <motion.div
                    className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 cursor-pointer border border-purple-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Users className="w-4 h-4 text-purple-400" />
                  </motion.div>
                  <motion.div
                    className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center hover:bg-pink-500/30 transition-all duration-300 cursor-pointer border border-pink-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageSquare className="w-4 h-4 text-pink-400" />
                  </motion.div>
                  <motion.div
                    className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300 cursor-pointer border border-blue-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-blue-400 text-xs font-bold">𝕏</span>
                  </motion.div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-base mb-4 text-purple-400">
                  🚀 Product
                </h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>
                    <a
                      href="#features"
                      className="hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#api"
                      className="hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      API Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#integrations"
                      className="hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Integrations
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-base mb-4 text-pink-400">
                  🏢 Company
                </h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>
                    <a
                      href="#about"
                      className="hover:text-pink-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-pink-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blog"
                      className="hover:text-pink-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-pink-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#careers"
                      className="hover:text-pink-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-pink-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-pink-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-pink-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-base mb-4 text-blue-400">
                  💬 Support
                </h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>
                    <a
                      href="#help"
                      className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#docs"
                      className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#privacy"
                      className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#terms"
                      className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-slate-800/50 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-6 text-xs text-slate-400">
                  <span>&copy; 2025 LeadSnipper. All rights reserved.</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>All systems operational</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <span>Built with</span>
                    <span className="text-red-400">♥</span>
                    <span>for developers</span>
                  </div>

                  <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-3 py-1 border border-slate-700/50">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span className="text-xs text-slate-400">API v2.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
