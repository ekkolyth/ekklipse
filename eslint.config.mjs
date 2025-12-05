import js from "@eslint/js";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "convex/_generated/**",
      "src/routeTree.gen.ts",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    ...js.configs.recommended,
    rules: {
      // Add any custom rules here if needed
    },
  },
];

export default eslintConfig;
