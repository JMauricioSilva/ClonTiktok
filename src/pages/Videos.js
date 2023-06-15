import React, { useRef, useState } from 'react'
import "./videos.css"

function Videos() {

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
            src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z'
        >

        </video>
    </div>
  )
}

export default Videos