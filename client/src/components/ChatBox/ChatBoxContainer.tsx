
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useEffect, useState } from 'react'

interface prop {
    setCurrRoom : any
}

const ChatBoxContainer: React.FC<prop> = ({setCurrRoom}) => {

  const [active, setActive] = useState('')
  const chatBoxes = useSelector((state : RootState) => state.chatBox.chatboxes)

  useEffect(() => {
    if(chatBoxes.length > 0){
      setCurrRoom(chatBoxes[0].roomId)
      setActive(chatBoxes[0].roomId)
    } 
  },[])

  const handleRoomClick = (roomId: string) => {
    setCurrRoom(roomId)
    setActive(roomId)
  }

  return (
    <div className='p-5 border-r-2 border-white/30'>
        {chatBoxes.map((chatBox, index) => (
         <div key={index}
            onClick={() => handleRoomClick(chatBox.roomId)}
            className={`mb-4 cursor-pointer ${active === chatBox.roomId ? 'text-white' : 'text-white/40'}`}
         >{chatBox.roomName}</div>   
        ))}
    </div>
  )
}

export default ChatBoxContainer