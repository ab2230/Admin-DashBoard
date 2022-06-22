import './new.scss';
import Sidebar from '../../componets/sidebar/Sidebar';
import Navbar from '../../componets/navbar/Navbar';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const New = ({inputs,title,url}) => {

  const [file,setFile] = useState("");
  const [music,setMusic] = useState(null);
  const navigate = useNavigate();

  const handleSubmit=()=>{
    var form = document.querySelector('form');
    var data = new FormData(form);
    axios.post(url,data);
      
    navigate('/data/musics');
    

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
                    :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} 
                    alt=""/>
                  </label>
              </div>


              <div className="right">
                <form method='POST' onSubmit={handleSubmit} action={url} encType='multipart/form-data'>
                 <div className="formInput">
                    <input type='file' id='photo' name='photo'  onChange={(e)=>setFile(e.target.files[0])} style={{display:'none'}}/>
                  </div>
                  <div className="formInput">
                  <label htmlFor='music'>
                  <img src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/music_add-512.png" alt=""/>
                  </label>
                    <input type='file' id='music' name='file' onChange={(e)=>setMusic(e.target.files[0])} style={{display:'none'}}/>
                    <div className='list-of-selected'>
                            {music!==null?music.name:''}
                    </div>
                  </div>


                  {inputs.map((input)=>{
                    return(
                    <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} name={input.name} placeholder={input.placeholder}/>
                  </div>
                  )})}

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
                      
                  <button>Add</button>
                </form>
                </div>
          </div>
      </div>
    </div>
  )
}

export default New
