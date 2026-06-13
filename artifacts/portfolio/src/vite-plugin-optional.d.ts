declare module "@replit/vite-plugin-runtime-error-modal" {
  import type { Plugin } from "vite";

  export default function runtimeErrorModal(): Plugin;
}

declare module "@replit/vite-plugin-cartographer" {
  import type { Plugin } from "vite";

  export function cartographer(options?: { root?: string }): Plugin;
}
