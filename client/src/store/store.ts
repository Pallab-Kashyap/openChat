import { configureStore } from "@reduxjs/toolkit";
import MessageSlice from './features/messageSlice'
import ChatBoxSlice from './features/chatBoxSlice'

export const store = configureStore({
    reducer : {
        chatBox : ChatBoxSlice,
        message : MessageSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch 