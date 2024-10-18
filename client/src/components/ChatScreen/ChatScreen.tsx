import React, { useState } from "react";
import { sendMsg } from "../../utils/chat";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface Prop {
    currRoom : string
}

const ChatScreen:React.FC<Prop> = ({currRoom}) => {
    
  const [msg, setMsg] = useState("");
  let messages = useSelector((state: RootState) => state.message.msgList);
    messages = messages.filter((msg) => msg.roomId === currRoom)

    const handleSend = () => {
        if(!currRoom) return
        sendMsg(msg, currRoom)
    }

  return (
    <div className="flex-1 flex flex-col px-2">
      <div className="messageContainer flex-1 flex flex-col-reverse max-h-[70vh] overflow-y-scroll p-4 px-8">
        {messages.map((message, index) => (
          <div key={index} 
            className='mb-3 self-end  w-1/2 text-right'
          >
            <div className="flex-1 text-sm text-white/70">{message.sender}</div>
            <div>{message.msg}</div>
          </div>
        ))}
      </div>
      <div className="w-full flex p-3 gap-3">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="w-full px-3"
        />
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  );
}

export default ChatScreen;
