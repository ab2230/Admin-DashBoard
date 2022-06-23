import React from 'react'
import './musicUpdater.scss'
import Sidebar from '../../componets/sidebar/Sidebar';
import Navbar from '../../componets/navbar/Navbar';
import { useState , useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios';
import { PanoramaSharp } from '@mui/icons-material';

const MusicUpdater = ({inputs,title,url}) => {
  const [file,setFile] = useState("");
  const [music,setMusic] = useState(null);
  const [row, setRow] = useState([]);
  const [lyrics,setLyrics] = useState(null);
  const url2='http://localhost:8000/';
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const getData = async () => {
      try {
          const res = await axios.get(url2+'music/'+location.pathname.split("/")[3]);
          setRow(res.data)

      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  console.log(row);
  const handleSubmit=()=>{
    var form = document.querySelector('form');
    var data = new FormData(form);
    axios.put(url+location.pathname.split("/")[3],data);
      
    navigate('/');
    

  }
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
          <Navbar />
          <div className='top'>
              <h1>{title}</h1>
          </div>
          <div className="bottom">


              <div className="left">
                  <label htmlFor='photo'>
                  <img src={
                    file?URL.createObjectURL(file)
                    :'http://192.168.85.229:8000'+row.image} 
                    alt=""/>
                  </label>
              </div>


              <div className="right">
                <form method='PUT' onSubmit={handleSubmit} action={url+location.pathname.split("/")[3]} encType='multipart/form-data'>
                 <div className="formInput">
                    <input type='file' id='photo' name='photo'  onChange={(e)=>setFile(e.target.files[0])} style={{display:'none'}}/>
                  </div>
                  <div className="formInput">
                  <label htmlFor='music'>
                  <img src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/music_add-512.png" alt=""/>
                  </label>
                    <input type='file' id='music' name='file' onChange={(e)=>setMusic(e.target.files[0])} style={{display:'none'}}/>
                    <div className='list-of-selected'>
                            {music!==null?music.name:row.path}
                    </div>
                  </div>


                    <div className="formInput">
                    <label>Music Name</label>
                    <input type='text' name='musicName' defaultValue={row.title}  placeholder='music name'/>
                  </div>

                  <div className="formInput">
                    <label>Artist Name</label>
                    <input type='text' name='artistName' defaultValue={row.artist_name}  placeholder='artist name'/>
                  </div>

                  <div className="formInput">
                    <label>Email</label>
                    <input type='email' name='email' defaultValue={row.email}  placeholder='email'/>
                  </div>

                  <div className="formInput">
                    <label>Phone Number</label>
                    <input type='text' name='phoneNumber' defaultValue={row.cell}  placeholder=''/>
                  </div>

                  <div className="formInput">
                    <label>Music Length</label>
                    <input type='text' name='musicLength' defaultValue={row.music_length}  placeholder=''/>
                  </div>

                    <label>Category</label>
                     <select name="category" multiple>
                         <option>Tezeta</option>
                         <option>Bati</option>
                         <option>Ambassel</option>
                         <option>Anchihoy</option>
                         <option>Amharic</option>
                         <option>Oromia</option>
                         <option>Tigrey</option>
                         <option>Welayta</option>
                         <option>Somaliya</option>
                         <option>Afro Beat</option>
                         <option>Oldies</option>
                         <option>Ethio-Jazz</option>
                         <option>Ethio-Regga</option>
                         <option>Guragena</option>
                         <option>Zemenawi</option>
                         <option>Traditional</option>
                     </select>
                     <div className="formInput">
                  <label htmlFor='lyrics'>
                  <img src={'http://192.168.85.229:8000/images/'+'lyricsImg.png'} alt=""/>
                  </label>
                    <input type='file' id='lyrics' name='lyrics' onChange={(e)=>setLyrics(e.target.files[0])} style={{display:'none'}}/>
                    <div className='list-of-selected'>
                            {lyrics!==null?lyrics.name:row.lyricsPath}
                    </div>
                  </div>
                  <button>Add</button>
                </form>
                </div>
          </div>
      </div>
    </div>
  )
}

export default MusicUpdater
