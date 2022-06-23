import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ListIcon from '@mui/icons-material/List';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper"> 
      <div className="search">
        <input type='text' placeholder='Search...'/>
        <SearchIcon/>
      </div>
      <div className="items">
        <div className="item">
            <LanguageIcon className='icon'/>
            English
        </div>
        <div className="item">
            <DarkModeIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>
        </div>
        <div className="item">
           <img src={'http://192.168.85.229:8000/images/'+'awede.jpg'} className='avatar'alt=""/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
