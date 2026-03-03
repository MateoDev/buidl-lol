/**
 * BUIDL.LOL Design Tokens
 * Inspired by GitHub, Linear, Midjourney
 */

export const colors = {
  // Backgrounds
  bg: {
    primary: '#0a0a0a',
    secondary: '#111111',
    surface: '#161616',
    elevated: '#1a1a1a',
    hover: '#1f1f1f',
  },

  // Borders
  border: {
    default: '#262626',
    muted: '#1f1f1f',
    emphasis: '#3f3f3f',
  },

  // Text
  text: {
    primary: '#fafafa',
    secondary: '#a1a1aa',
    muted: '#71717a',
    inverse: '#0a0a0a',
  },

  // Brand accent - Blue (hackathon energy)
  accent: {
    primary: '#3b82f6',
    hover: '#2563eb',
    muted: '#3b82f6/20',
    subtle: '#3b82f6/10',
  },

  // Semantic
  success: {
    primary: '#22c55e',
    muted: '#22c55e/20',
  },
  warning: {
    primary: '#f59e0b',
    muted: '#f59e0b/20',
  },
  error: {
    primary: '#ef4444',
    muted: '#ef4444/20',
  },

  // Agent colors (for the fleet)
  agents: {
    organizer: '#3b82f6',   // blue
    teamFormer: '#a855f7',  // purple
    mentor: '#22c55e',      // green
    submission: '#f59e0b',  // amber
    judge: '#ef4444',       // red
  },
} as const;

export const typography = {
  fonts: {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'JetBrains Mono, Menlo, Monaco, "Courier New", monospace',
  },
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

export const spacing = {
  px: '1px',
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
} as const;

export const radius = {
  none: '0',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  glow: '0 0 20px rgba(59, 130, 246, 0.3)',
  glowStrong: '0 0 40px rgba(59, 130, 246, 0.4)',
} as const;

// CSS custom properties export
export const cssVariables = `
  :root {
    /* Backgrounds */
    --bg-primary: ${colors.bg.primary};
    --bg-secondary: ${colors.bg.secondary};
    --bg-surface: ${colors.bg.surface};
    --bg-elevated: ${colors.bg.elevated};
    --bg-hover: ${colors.bg.hover};

    /* Borders */
    --border-default: ${colors.border.default};
    --border-muted: ${colors.border.muted};
    --border-emphasis: ${colors.border.emphasis};

    /* Text */
    --text-primary: ${colors.text.primary};
    --text-secondary: ${colors.text.secondary};
    --text-muted: ${colors.text.muted};

    /* Accent */
    --accent-primary: ${colors.accent.primary};
    --accent-hover: ${colors.accent.hover};

    /* Semantic */
    --success: ${colors.success.primary};
    --warning: ${colors.warning.primary};
    --error: ${colors.error.primary};

    /* Typography */
    --font-sans: ${typography.fonts.sans};
    --font-mono: ${typography.fonts.mono};
  }
`;
