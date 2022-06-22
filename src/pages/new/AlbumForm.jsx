import './ForCollection.scss';
import Sidebar from '../../componets/sidebar/Sidebar';
import Navbar from '../../componets/navbar/Navbar';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


const AlbumForm = ({inputs,title,url}) => {

  const [file,setFile] = useState("");
  const [formValues,setFormValues] = useState([{ file:"", trackName: "", trackLength : "", description2:""}])
  
  const navigate = useNavigate();
  const handleSubmit=()=>{
    var form = document.querySelector('form');
    var data = new FormData(form);
    axios.post(url,data)
    navigate('/data/album');
  }

  let handleChange = (i, e) => {
      let newFormValues = [...formValues];
      newFormValues[i][e.target.name] = e.target.value;
      console.log(newFormValues);
      setFormValues(newFormValues);
    }
  
  let addFormFields = () => {
      setFormValues([...formValues, { file:"", trackName: "", trackLength : "",description2:""}])
    }
  
  let removeFormFields = (i) => {
      let newFormValues = [...formValues];
      newFormValues.splice(i, 1);
      setFormValues(newFormValues)
  }

  let handleChangeForMusic = (index,e)=>{
    let newFormValues = [...formValues];
    newFormValues[index][e.target.name] = e.target.files[0];
    console.log(newFormValues);
    setFormValues(newFormValues);
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
                      
                          <div className='formInput'>
                              <label>Description</label>
                              <textarea name="description1"></textarea>
                         </div>
                      
                    


                      <br/>
        <div className='collection'>   
         {formValues.map((formValue, index) => (
            <div className="form-inline" key={index}>
              <div className="formInput">
                    <input type='file' id='music' name='file' multiple onChange={(e)=>handleChangeForMusic(index,e)} />
              </div>
              
                  <div className="formInput">
                    <label>Track Name</label>
                    <input type='text' name='trackName' placeholder="track name" value={formValue.trackName||''} onChange={e => handleChange(index, e)} />
                  </div>

                  <div className="formInput">
                    <label>Track Length</label>
                    <input type='text' name='trackLength' placeholder="track length" value={formValue.trackLength ||''} onChange={e => handleChange(index, e)} />
                  </div>

                  <div className="formInput">
                    <label>Description</label>
                    <input type='text' name='description2' placeholder="description" value={formValue.description2 ||''} onChange={e => handleChange(index, e)} />
                  </div>

              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
          </div>
          <button className='submitButton'>Submit</button>
          </div>         
               
             
         </form>
             </div>
          </div>
      </div>
    </div>
  )
}

export default AlbumForm
