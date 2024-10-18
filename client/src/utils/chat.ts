
import { io } from "socket.io-client";
import { store } from "../store/store";
import { addMsg } from "../store/features/messageSlice";
import { addChatBox, ChatBox, addMember } from "../store/features/chatBoxSlice";

const socket = io('http://localhost:3000');

// const dispatch = useDispatch<useAppDispatch>()

const sendMsg = async (msg: string, roomId : string) => {

    const payload = {
        msg,
        roomId,
        sender : socket.id
    }
    socket.emit('send-msg', payload)
}



const createRoom = async (roomName: string) => {

    const roomId = Math.floor(Math.random()*100000000).toString()
    const memberId = { memberId : socket.id || '' }

    socket.emit('join-room', roomId)

    const payload : ChatBox = {
        roomName : roomName,
        roomId : roomId,
        members : [memberId]
    }

    store.dispatch(addChatBox(payload))
}

const joinRoom = (roomId : string) => {
    socket.emit('join-room', roomId)

    

    const payload : ChatBox = {
        roomName : roomId,
        roomId : roomId,
        members : []
    }
    store.dispatch(addChatBox(payload))
      
}

const addMemberFunc = (roomId : string, memberId : string) => {
    let payload = {
        roomId, 
        memberId
    }
    store.dispatch(addMember(payload))
}

socket.on('receive-msg', (msg) => {
    console.log(msg);
    store.dispatch(addMsg(msg))
})

socket.on('member-added', (payload) => {
    const { roomId, memberId } = payload
    addMemberFunc(roomId, memberId)
})

export { 
    socket,
    sendMsg,
    createRoom,
    joinRoom,
}