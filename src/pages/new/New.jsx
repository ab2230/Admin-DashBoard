import './new.scss';
import Sidebar from '../../componets/sidebar/Sidebar';
import Navbar from '../../componets/navbar/Navbar';
import { useState } from 'react';
import axios from 'axios';

const New = ({inputs,title}) => {

  const [file,setFile] = useState("");
  const [music,setMusic] = useState(null);
  
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
                <form method='POST' action="http://localhost:8000/upload" encType='multipart/form-data'>
                 <div className="formInput">
                    <input type='file' id='photo' name='photo'  onChange={(e)=>setFile(e.target.files[0])} style={{display:'none'}}/>
                  </div>
                  <div className="formInput">
                  <label htmlFor='music'>
                  <img src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/music_add-512.png" alt=""/>
                  </label>
                    <input type='file' id='music' name='file' onChange={(e)=>setMusic(e.target.files[0])} style={{display:'none'}}/>
                  </div>


                  {inputs.map((input)=>{
                    return(
                    <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder}/>
                  </div>
                  )})}


                  <button>Add</button>
                </form>
                </div>
          </div>
      </div>
    </div>
  )
}

export default New
