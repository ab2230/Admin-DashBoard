import './ForCollection.scss';
import Sidebar from '../../componets/sidebar/Sidebar';
import Navbar from '../../componets/navbar/Navbar';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const ForCollection = ({inputs,title,url}) => {

  const [file,setFile] = useState("");
  const [formValues,setFormValues] = useState([{ file:"", episodeName: "", episodeLength : "", description2:""}])

  const navigate = useNavigate();
  const handleSubmit=()=>{
    var form = document.querySelector('form');
    var data = new FormData(form);
    axios.post(url,data);
    alert("Podcast is uploaded successfully")
    navigate('/');
  }

  
  let handleChange = (i, e) => {
    console.log(i);
      let newFormValues = [...formValues];
      newFormValues[i][e.target.name] = e.target.value;
      console.log(newFormValues);
      setFormValues(newFormValues);
    }
  
  let addFormFields = () => {
      setFormValues([...formValues, { file:"", episodeName: "", episodeLength : "",description2:""}])
    }
  
  let removeFormFields = (i) => {
      let newFormValues = [...formValues];
      newFormValues.splice(i, 1);
      setFormValues(newFormValues)
  }

  let handleChangeForEpisode = (index,e)=>{
    console.log(e)
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
                         <option>Society</option>
                         <option>Culture</option>
                         <option>Education</option>
                         <option>Arts</option>
                         <option>Business</option>
                         <option>Spirituality</option>
                         <option>Religion</option>
                         <option>Comedy</option>
                         <option>Music</option>
                         <option>News</option>
                         <option>Health</option>
                         <option>Fitness</option>
                         <option>Sports</option>
                         <option>Christianity</option>
                         <option>Books</option>
                         <option>Film</option>
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
                    <input type='file' id='music' name='file' multiple onChange={(e)=>handleChangeForEpisode(index,e)} />
              </div>
              
                  <div className="formInput">
                    <label>Episode Name</label>
                    <input type='text' name='episodeName' placeholder="episode name" value={formValue.episodeName||''} onChange={e => handleChange(index, e)} />
                  </div>

                  <div className="formInput">
                    <label>Episode Length</label>
                    <input type='text' name='episodeLength' placeholder="episode length" value={formValue.episodeLength ||''} onChange={e => handleChange(index, e)} />
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

export default ForCollection
