import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import {musicInputs, podcastInputs, audioBooksInputs, albumInputs} from './pages/new/formSource'
import "./style/dark.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import ForCollection from './pages/new/ForCollection'
import BookCollectionForm from './pages/new/BookCollectionForm'
import AlbumForm from './pages/new/AlbumForm'
import Payment from './pages/payment/Payment'
import StripeDisplayer from './pages/payment/StripeDisplayer'

function App() {

  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode? 'app dark':'app'}>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path='admin'>
                <Route path='payment' element={<Payment/>}/>
                <Route path='stripePay' element={<StripeDisplayer/>}/>
          </Route>
          <Route path='data'>
            <Route index element={<List/>}/>
            <Route path='listeners' element={<List type='listener'/>}>
                <Route path=':userId' element={<Single/>}/>
            </Route>
            <Route path='album' element={<List type='album'/>}/>
            <Route path='musics' element={<List type='music'/>}/>
            <Route path='podcasts' element={<List type='podcast'/>}/>
            <Route path='audiobooks' element={<List type='audiobook'/>}/>
            <Route path=':audioId' element={<Single/>}/>
          </Route>
          <Route path='audios'>
            <Route index element={<List/>}/>
            <Route path='newMusic' element={<New inputs={musicInputs} title="Add New Music" url="http://localhost:8000/music/upload"/>}/>
            <Route path='newAlbum' element={<AlbumForm  inputs={albumInputs} title="Add New Album" url="http://localhost:8000/album/upload"/>}/>
            <Route path='newPodcast' element={<ForCollection inputs={podcastInputs} title="Add New Podcast" url="http://localhost:8000/podcast/upload"/>}/>
            <Route path='newAudiobook' element={<BookCollectionForm inputs={audioBooksInputs} title="Add New Audiobooks" url="http://localhost:8000/audiobook/upload"/>}/>
          </Route>
        </Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
