import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { useEffect , useState} from 'react';
import axios from 'axios'
import { Link,useNavigate} from 'react-router-dom';


const Widget = ({type}) => {
  const url='http://localhost:8000/'
  const [number, setNumber] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        if(type!=='listener'){
          const res = await axios.get(url+type);
          setNumber(res.data)
       
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [type]);

  const handleClick = ()=>{
    navigate('/data/'+type+'s')
  }
   
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
   
    <div className='widget' onClick={handleClick}>
       
      <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{number.length}</span>
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
