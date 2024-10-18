import { useState } from "react";
import "./App.css";
import ChatBoxContainer from "./components/ChatBox/ChatBoxContainer";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import RoomId from "./components/RoomId";

function App() {

  const [currRoom, setCurrRoom] = useState('')

  return (
    
    <div className="flex">
      <RoomId />
      <div className="flex h-[70vh] w-[60vw] border-2 border-white/30 ">
        <ChatBoxContainer setCurrRoom={setCurrRoom}/>
        <ChatScreen currRoom={currRoom}/>
      </div>
    </div>
  );
}

export default App;
