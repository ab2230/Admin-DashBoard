import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import {musicInputs, podcastInputs} from './pages/new/fromSource'
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
          <Route path='listeners'>
            <Route index element={<List/>}/>
            <Route path=':userId' element={<Single/>}/>
          </Route>
          <Route path='audios'>
            <Route index element={<List/>}/>
            <Route path=':audioId' element={<Single/>}/>
            <Route path='newMusic' element={<New inputs={musicInputs} title="Add New Music"/>}/>
            <Route path='newPodcast' element={<New inputs={podcastInputs} title="Add New Podcast"/>}/>
          </Route>
        </Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
