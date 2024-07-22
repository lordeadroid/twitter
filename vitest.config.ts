import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 10000,
      coverage: {
        reporter: ["text", "html"],
        thresholds: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
        include: ["src"],
        exclude: [
          "*.config.ts",
          "tests/**/*",
          "src/utils/**/*",
          "**/*.module.css",
          "**/*.types.ts",
          "**/*.cjs",
          "**/*.d.ts",
          "**/*.css.ts.vanilla.js",
          "**/__tests__/**",
          "src/utils/mocks/**",
          "src/utils/integrations/**",
          "src/App.tsx",
          "src/Routes.tsx",
          "src/hooks/**",
          "src/main.tsx",
          "src/styles/**",
          "src/store/**",
          "src/init.ts",
          "src/api/**",
          "src/types/**",
        ],
        all: true,
      },
      globals: true,
      environment: "jsdom",
      setupFiles: [
        "./setup-tests.ts",
        "./src/utils/mocks/resize-observer.ts",
        "./src/utils/mocks/match-media.ts",
      ],
      exclude: ["dist/*", ".turbo/*", "node_modules/*"],
      include: ["tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
  })
);
