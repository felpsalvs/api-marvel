/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_KEY: string
  readonly VITE_PRIVATE_KEY: string
  readonly VITE_HASH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}