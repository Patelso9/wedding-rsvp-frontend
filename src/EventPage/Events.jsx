import { useState } from 'react';
import { ReactDOM } from 'react-dom';

function Events() {

  const events = [
    {
      'id':1,
      'eventName' : 'Sangeet',
      'totalAttending' : 5
    },
    {
      'id':2,
      'eventName' : 'Wedding',
      'totalAttending' : 6
    },
    {
      'id':3,
      'eventName' : 'Reception',
      'totalAttending' : 8
    }
  ]

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

    <div className='eventCard'>
      <h2>Event name</h2>
      <h4>Date and time of event</h4>
      <h3>Venue</h3>
      <h3>Number invited</h3>
    </div>

    <table className='event-table'>
      {/* <tr>
        <th>ID</th>
        <th>Event Name</th>
        <th>Total attending</th>
      </tr> */}

      {events.map((event, index) => (
        <tr data-index = {index}>
          <td>{event.id}</td>
          <td><h1>{event.eventName}</h1></td>
          <td> Total attending: {event.totalAttending}</td>
          
          </tr>
      ))

      }
      
      </table>



    </div>
    )
  
}

// ReactDOM.render(<Events />, document.getElementById('root'));
export default Events

