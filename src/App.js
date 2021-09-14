import React, { useReducer, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';
// import SendIcon from '@material-ui/icons/Send';

const formReducer = (state, event) => {

  if(event.reset) {
    return {
      name: '',
      lastName: '',
      age: 0,
      animal: ''
    }
  }

  return {
    ...state,
    [event.name]: event.value
  }
}

const App = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value
    })
  }

  return(
    <div className="wrapper">
      <h1 className="header">CREATE BIRHTDAY CARD</h1>
      
      <form onSubmit={handleSubmit}>
      <fieldset className="fieldsetStyle" disabled={submitting}>

          <label>
            <p>Name <input  placeholder="your first name" name="name" onChange={handleChange} value={formData.name || ''}/></p>
            
            <p>Last Name <input placeholder="your last name" name="lastName" onChange={handleChange} value={formData.lastName || ''}/></p>
            
          </label>
        
         <label>
           <p>Your age <input placeholder="0" type="number" name="age" min="0" max="120" onChange={handleChange} step="1" value={formData.age || ''}/></p>
           
         </label>

         <label>
           <p>Favorite animal 
           <select name="animal" onChange={handleChange} value={formData.animal || ''}>
               <option value=" " selected>select an animal</option>
               <option value="cat">cat</option>
               <option value="dog">dog</option>
               <option value="tiger">tiger</option>
           </select>
           </p>
         </label>

       </fieldset>

        <div className="buttonWrraper">
          <Button variant="contained"  size="small" color="secondary" type="submit" disabled={submitting}  >Submit</Button>
        </div>
        
      </form>

      {submitting && 
       <div>
          
         <p>Happy birthday {formData.name} {formData.lastName} !!! </p>
         
         
         <p> You are {formData.age} years old</p>
         

         <p>All {formData.animal}s of spain are happy with you!!!</p>
        
       </div>
      }
    </div>
  )
}

export default App;