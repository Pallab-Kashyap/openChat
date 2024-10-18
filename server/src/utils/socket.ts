import { io } from "..";

interface Payload {
    msg : string;
    roomId : string;
    sender : string;
}

io.on('connection', (socket) => {
    console.log('connected');

    socket.on('disconnect', (socket) => {
        console.log(socket);
    })

    //Send msg
    socket.on('send-msg', (payload: Payload) => {
        io.to(payload.roomId).emit('receive-msg', payload)

    })

    //Create/join room
    socket.on('join-room', (roomId) => {
        socket.join(roomId)
    })
})