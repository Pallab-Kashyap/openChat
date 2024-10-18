import  express  from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from 'cors'
import connectDB from './config/db'
import dotenv from 'dotenv'

const app = express();
connectDB()
dotenv.config()

const server = createServer(app)
export const io = new Server(server, {
    cors : {
        origin: "*"
    }
})

app.use(express.json())

app.use(cors({
    origin: "*"
}))







server.listen(3000, () => console.log('server started'))