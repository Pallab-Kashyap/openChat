"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*"
    }
});
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*"
}));
app.get('/generate-room-id', (req, res) => {
    // let a  = req.body
    const jwtSecret = 'foeijf';
    let roomId = '';
    try {
        roomId = jsonwebtoken_1.default.sign({ userId: 'foehoewhfo' }, jwtSecret, { expiresIn: '7d' });
    }
    catch (error) {
        res.json(error);
        return;
    }
    res.json({ roomId });
});
server.listen(3000, () => console.log('server started'));
