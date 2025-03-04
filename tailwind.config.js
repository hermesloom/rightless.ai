module.exports = {
  theme: {
    extend: {
      animation: {
        "slow-spin": "spin 60s linear infinite",
        "reverse-spin": "reverse-spin 50s linear infinite",
        "pulse-slow": "pulse 10s ease-in-out infinite",
        "rotate-slow": "spin 8s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
};
