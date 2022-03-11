import axios from 'axios';
import React, { useState, useEffect } from 'react'
import EventComponents from './EventComponents';

const EventSearch = () => {

    const [rsvpEvents, setrsvpEvents] = useState([])
    const [search, setSearch] = useState('')
    // const [search, setSearch] = useState('')
    
    useEffect(() => {

        axios.get(`http://localhost:8080/events/${search}`)
        .then(res => {
            console.log(res.data)
            setrsvpEvents(res.data)
        })
        .catch(err => console.log(err, 'error loading'))
    }, [search])

    const handleChange = async e => {
        e.preventDefault()
        // setrsvpEvents(e.target.value)
        setSearch(e.target.value);
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
      }
    
      const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        handleSubmit();
      }
    };
    return (

        <div>
            <div className='s-box'>
 
            <form className='movie-search'>
              <input text="text" 
                placeholder="Search for event by Id" 
                name="search" 
                onChange={handleChange}
                onKeyPress={handleKeypress}
                />
                </form>
                {/* <hr/> */}
            <div className="comp-card">
                <EventComponents
                  key= {rsvpEvents.eventId}
                  eventName= {rsvpEvents.eventName}
                  location= {rsvpEvents.location}
              />
            </div>
            </div>
        </div>
    )
}

export default EventSearch;
