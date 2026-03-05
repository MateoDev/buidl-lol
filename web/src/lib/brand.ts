/**
 * buidl.lol Brand System
 * 
 * Inspiration: Late night food scene in Hong Kong/NY
 * - Neon signs glowing in the dark
 * - Warm ambers and cool cyans
 * - Professional but with energy
 * - Modern, minimal, technical
 */

export const brand = {
  // Primary colors - Neon warmth
  colors: {
    // Backgrounds (dark like late night streets)
    bg: {
      primary: '#09090b',      // Near black
      secondary: '#18181b',    // Zinc 900
      elevated: '#1f1f23',     // Card surfaces
      glass: 'rgba(24, 24, 27, 0.8)', // Glassmorphism
    },

    // Accent - Neon orange/amber (like Hong Kong signs)
    accent: {
      primary: '#f97316',      // Orange 500 - main CTA
      hover: '#ea580c',        // Orange 600
      muted: 'rgba(249, 115, 22, 0.15)', // Glow bg
      glow: '0 0 30px rgba(249, 115, 22, 0.4)',
    },

    // Secondary - Cyan (neon contrast)
    secondary: {
      primary: '#06b6d4',      // Cyan 500
      muted: 'rgba(6, 182, 212, 0.15)',
    },

    // Text
    text: {
      primary: '#fafafa',
      secondary: '#a1a1aa',
      muted: '#71717a',
    },

    // Borders
    border: {
      default: '#27272a',
      muted: '#1f1f23',
      emphasis: '#3f3f46',
    },

    // Agent colors (each agent has distinct identity)
    agents: {
      architect: '#f97316',    // Orange - creative, building
      evaluator: '#8b5cf6',    // Purple - analytical, judging
      treasurer: '#10b981',    // Emerald - money, trust
      guide: '#06b6d4',        // Cyan - helpful, calm
      herald: '#ec4899',       // Pink - marketing, attention
      matchmaker: '#f59e0b',   // Amber - connection, warmth
    },
  },

  // Typography
  fonts: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },

  // Spacing follows 8px grid
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
  },

  // Border radius - rounded but not too soft
  radius: {
    sm: '0.375rem',  // 6px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    full: '9999px',
  },

  // Effects
  effects: {
    glowOrange: '0 0 30px rgba(249, 115, 22, 0.4)',
    glowCyan: '0 0 30px rgba(6, 182, 212, 0.4)',
    glass: 'backdrop-blur-xl bg-zinc-900/80',
  },
} as const;

// CSS-in-JS helpers
export const gradients = {
  heroText: 'bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500',
  neonGlow: 'bg-gradient-to-r from-orange-500/20 via-transparent to-cyan-500/20',
  cardBorder: 'bg-gradient-to-r from-orange-500/50 to-cyan-500/50',
};
