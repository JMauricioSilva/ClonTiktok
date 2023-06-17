import React, { useRef, useState } from 'react'
import "./videos.css"
import VideoFooter from "./components/footer/VideoFooter"
import VideoSidebar from './components/sidebar/VideoSidebar'


function Videos({likes, messages, shares, user, description, music, url}) {

  const videosRef = useRef(null)
  const [play, setPlay] = useState(false)

  function handdleStart(){

    if(!play){
      videosRef.current.play()
      setPlay(true)

    }else{
      videosRef.current.pause()
      setPlay(false)
    }
    
  }

  return (
    <div className='video'>
        <video
            className='videos__player'
            ref={videosRef}
            onClick={handdleStart}
            loop
            src= {url}
        >
          
        </video>

        <VideoSidebar
          likes = {likes}
          messages = {messages}
          shares = {shares}
         />
        <VideoFooter
         user = {user}
         description = {description}
         music = {music}
         />
    </div>
  )
}

export default Videos