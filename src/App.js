import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import {musicInputs, podcastInputs, audioBooksInputs} from './pages/new/formSource'
import "./style/dark.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
function App() {

  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode? 'app dark':'app'}>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path='data'>
            <Route index element={<List/>}/>
            <Route path='listeners' element={<List type='listeners'/>}>
                <Route path=':userId' element={<Single/>}/>
            </Route>
            <Route path='musics' element={<List type='musics'/>}/>
          </Route>
          <Route path='audios'>
            <Route index element={<List/>}/>
            <Route path=':audioId' element={<Single/>}/>
            <Route path='newMusic' element={<New inputs={musicInputs} title="Add New Music" url="http://localhost:8000/music/upload"/>}/>
            <Route path='newPodcast' element={<New inputs={podcastInputs} title="Add New Podcast" url="http://localhost:8000/podcast/upload"/>}/>
            <Route path='newAudiobook' element={<New inputs={audioBooksInputs} title="Add New Audiobooks" url="http://localhost:8000/audiobook/upload"/>}/>
          </Route>
        </Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
