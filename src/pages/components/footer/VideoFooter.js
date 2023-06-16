import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Mauricio Silva</h3>
        <p>Descrção do video</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
        </div>
        <div className="videoFooterMusic__text">
            <p>Titulo da música</p>
        </div>
      </div>
      <img
        className='videpFooter__record'
        alt='Imagem de um vinil girando'
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
       />
    </div>
  )
}

export default VideoFooter