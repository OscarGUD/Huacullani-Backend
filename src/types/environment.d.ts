declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string
      FRONTEND_URL: string
      PORT: number
    }
  }
}
export {}