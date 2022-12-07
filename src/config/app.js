import dotenv from "dotenv"

dotenv.config()

const env = process.env.NODE_ENV

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000

const config = {
  app: {
    port: PORT,
  },
}

export default config
