// src/styles/theme.js
const theme = {
  colors: {
    background: "#0f172a", // slate-900
    surface: "#1e293b",    // slate-800
    primary: "#06b6d4",    // cyan-500
    secondary: "#f59e0b",  // amber-500
    text: {
      primary: "#f8fafc",  // slate-50
      secondary: "#cbd5e1", // slate-300
      muted: "#94a3b8",    // slate-400
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'Fira Code', monospace",
  },
  radius: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
    md: "0 4px 6px -1px rgba(0,0,0,0.1)",
    lg: "0 10px 15px -3px rgba(0,0,0,0.1)",
  },
};

export default theme;
