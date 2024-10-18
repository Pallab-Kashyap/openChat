import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { createRoom, joinRoom } from "../utils/chat";

function RoomId() {
  const [roomName, setRoomName] = useState("");
  const [roomAction, setRoomAction] = useState(true);

  const chatRooms = useSelector((state: RootState) => state.chatBox.chatboxes);

  const handleCreateRoom = async () => {
    if(roomAction){
        await createRoom(roomName);
    }
    else {
       joinRoom(roomName)
    }
    
  };

  return (
    <div className="text-left p-5">
      <div className="flex">
        <div
          className={`px-2 ${
            roomAction ? "text-white" : "text-white/30"
          } cursor-pointer`}
          onClick={() => setRoomAction(true)}
        >
          create room
        </div>
        /
        <div
          className={`px-2 ${
            roomAction ? "text-white/30" : "text-white"
          } cursor-pointer`}
          onClick={() => setRoomAction(false)}
        >
          join room
        </div>
      </div>
      {roomAction ? (
        <>
          <input
            type="text"
            id="room"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="enter room name"
            className="mt-5 mb-3 p-2"
          />
          <button className="block m-auto" onClick={handleCreateRoom}>
            create room
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            id="room"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="enter room-id"
            className="mt-5 mb-3 p-2"
          />
          <button className="block m-auto" onClick={handleCreateRoom}>
            join room
          </button>
        </>
      )}

      <div className="mt-8 max-h-80 overflow-y-scroll">
        <table className="table-auto w-full text-left border-collapse border border-gray-300  ">
          <thead className="w-full">
            <tr className="">
              <th className="px-4 py-2 border border-gray-300">name</th>
              <th className="px-4 py-2 border border-gray-300">id</th>
            </tr>
          </thead>
          <tbody className="">
            {chatRooms.map((chatBox,index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-gray-300">
                  {chatBox.roomName}
                </td>
                <td className="px-4 py-2 border border-gray-300 max-w-xs overflow-hidden">
                  {chatBox.roomId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default RoomId;
