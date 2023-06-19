import React, { useEffect, useState } from "react";
import "./App.css";
import Videos from "./pages/Videos";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Videos
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              user={item.user}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Videos
          likes = {400}
          messages = {500}
          shares = {600}
          user = "Arthur Silva"
          description = "Gato goleiro"
          music = "Musica épica"
          url= "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
         /> */}
      </div>
    </div>
  );
}

export default App;
