import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import PaidIcon from '@mui/icons-material/Paid';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{textDecoration:'none'}} >
        <span className='logo'>Admin</span>
        </Link>
        </div>
      <hr/>
      <div className='center'>
          <ul>
              <p className="title">MAIN</p>
              <Link to='/' style={{textDecoration:'none'}}>
              <li>
                <DashboardIcon className='icon'/>
                <span>DashBoard</span>
              </li>
              </Link>
              <p className="title">LISTS</p>
              <Link to="/listeners" style={{textDecoration:'none'}}>
              <li>
                <PersonIcon className='icon'/>
                <span>Listeners</span>
              </li>
              </Link>
              <li>
                <TheaterComedyIcon className='icon'/>
                <span>Content Creators</span>
              </li>
              <li>
                <LibraryMusicIcon className='icon'/>
                <span>Music</span>
              </li>
              <li>
                <PodcastsIcon className='icon'/>
                <span>Podcast</span>
              </li>
              <li>
                <AutoStoriesIcon className='icon'/>
                <span>AudioBook</span>
              </li>
              <p className="title">USEFUL</p>
              <li>
                <PaidIcon className='icon'/>
                <span>Make Payment</span>
              </li>
              <li>
                <DynamicFeedIcon className='icon'/>
                <span>Stats</span>
              </li>
              <li>
                <NotificationsIcon className='icon'/>
                <span>Notification</span>
              </li>
              <li>
                <SettingsIcon className='icon'/>
                <span>Settings</span>
              </li>
              <p className="title">ADMIN</p>
              <li>
                <AdminPanelSettingsIcon className='icon'/>
                <span>Profile</span>
              </li>
              <li>
                <ExitToAppIcon className='icon'/>
                <span>logout</span>
              </li>
          </ul>
        </div>
      <div className='bottom'>
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
