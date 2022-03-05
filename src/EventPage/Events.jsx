import { useState } from 'react';
import { ReactDOM } from 'react-dom';

function Events() {

  const [email, setEmail] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
    alert(`The email you entered was: ${email}`)
  }
  
    return (
      <div>
          
    <div className='email-input'>
      <h2 className='welcome'>We are getting married and are looking forward to spending our big day with you! </h2>


      <form onSubmit={handleSubmit}>
        <label>Please enter your email to RSVP  :  
        <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        <button type='submit'>Submit</button>
      </label>
    </form>

    </div>




    </div>
    )
  
}

// ReactDOM.render(<Events />, document.getElementById('root'));
export default Events

