const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-var": "off", // Disables 'no-var' rule
      "@typescript-eslint/no-unused-vars": "off", // Disables 'no-unused-vars' rule
    },
  },
];

export default eslintConfig;
