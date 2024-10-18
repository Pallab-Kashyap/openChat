import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Member {
    memberId : string;
}

export interface ChatBox {
    roomId : string;
    roomName : string;
    members : Member[];
}

interface ChatBoxList  {
    chatboxes : ChatBox[]
}

const initialState : ChatBoxList = {
    chatboxes : []
}

const ChatBoxSlice = createSlice({
    name: 'chatBox',
    initialState,
    reducers : {
        addChatBox : (state, action:PayloadAction<ChatBox>) => {
            state.chatboxes = [action.payload,...state.chatboxes]
        },

        addMember : (state, action) => {
            const { roomId, memberId } = action.payload

            state.chatboxes.map((chatBox) => {
                if(chatBox.roomId != roomId) return chatBox
                
                chatBox.members.push(memberId)

                return chatBox
            })
        },

        removeMember : (state, action) => {
            const { roomId, memberId } = action.payload

            state.chatboxes.map((chatBox) => {
                if(chatBox.roomId != roomId) return chatBox
                
                const newMembers = chatBox.members.filter((member) => member.memberId != memberId)

                chatBox.members = newMembers

                return chatBox
            })
        }
    }

})

export default ChatBoxSlice.reducer
export const { addChatBox, addMember, removeMember } = ChatBoxSlice.actions