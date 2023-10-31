export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string
      TIMEOUT: Number
      ENV: 'test' | 'dev' | 'prod'
    }
  }
}
