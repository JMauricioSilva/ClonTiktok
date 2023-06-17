import './App.css';
import Videos from "./pages/Videos";

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Videos 
          likes = {100}
          messages = {200}
          shares = {300}
          user = "Mauricio Silva"
          description = "Gato goleiro"
          music = "Musica épica"
          url = "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Videos
          likes = {400}
          messages = {500}
          shares = {600}
          user = "Arthur Silva"
          description = "Gato goleiro"
          music = "Musica épica"
          url= "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
         />
      </div>
    </div>
  );
}

export default App;
