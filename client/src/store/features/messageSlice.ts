import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Message {
    msg : string;
    roomId : string;
    sender : string;
}

export interface MessageList {
    msgList : Message[];
}

const initialState: MessageList = {
    msgList : []
}

const MessageSlice = createSlice({
    name: 'msg',
    initialState,
    reducers : {
        addMsg: (state, action:PayloadAction<Message>) => {
            state.msgList = [action.payload, ...state.msgList]
        }
    }
})

export default MessageSlice.reducer
export const { addMsg } = MessageSlice.actions