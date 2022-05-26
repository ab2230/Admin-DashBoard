import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

const Widget = ({type}) => {

  let data;
   switch(type){
     case 'user':
       data={
         title:'LISTENERS',
         link:'See all Users',
         icon:(
           <PersonIcon className="icon"/>
         )
       }
       break;
     case 'music':
       data={
        title:'MUSICS',
        link:'See all Musics',
        icon:(
          <LibraryMusicIcon className="icon"/>
        )
       } 
       break; 
     case 'podcast':
       data={
        title:'PODCASTS',
        link:'See all Podcasts',
        icon:(
          <PodcastsIcon className="icon"/>
        )
       }
       break;
     case 'audiobook':
       data={
        title:'AUIDOBOOKS',
        link:'See all Audiobooks',
        icon:(
          <AutoStoriesIcon className="icon"/>
        )
       }
       break;
       case 'creator':
        data={
         title:'Content Creators',
         link:'See all users',
         icon:(
           <TheaterComedyIcon className="icon"/>
         )
        }
        break; 
     default:
       break;
   }
  return (
    <div className='widget'>
      <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">12345</span>
          <span className='link'>{data.link}</span>
      </div>
      <div className="right">
          <div className="numberOf">
              <KeyboardArrowUpIcon/>
              20
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
