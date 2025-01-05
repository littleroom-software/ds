interface Content {
  /**
   * Path to `node_modules` where `flowbite-react` is installed
   *
   * ===============================================
   *
   * For monorepo setup where `flowbite-react` is installed in the root `node_modules` but used in `apps/web` directory
   * @example
   * ```
   * // tailwind.config.(js|cjs|mjs) file
   *
   * // cjs
   * const flowbite = require("flowbite-react/tailwind");
   * // esm
   * import flowbite from "flowbite-react/tailwind";
   *
   * {
   *   content: [
   *     // ...
   *     flowbite.content({ base: "../../" })
   *   ],
   *   plugins: [
   *     // ...
   *     flowbite.plugin()
   *   ]
   * }
   * ```
   *
   * @default "./"
   */
  base?: string;
}

function content({ base = "./" }: Content = {}) {
  const path = "node_modules/@nebula/ui/dist/**/*.mjs"

  return `${base}${path}`;
}

export const tailwind = {
  content,
  // plugin: () => require("tailwindcss")("node_modules/@nebula/ui/dist/tailwind.config.js"),
} 
