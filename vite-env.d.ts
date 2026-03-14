// This file triggers a fresh build on Vercel
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_POSTHOG_KEY: string
  readonly VITE_PUBLIC_POSTHOG_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
