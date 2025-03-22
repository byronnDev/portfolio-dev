/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly GITHUB_TOKEN: string;
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
