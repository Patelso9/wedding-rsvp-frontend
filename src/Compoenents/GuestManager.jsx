import { useState, useEffect } from 'react';
import { ReactDOM } from 'react-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const GuestManager = () => {

    const [guestId, setGuestId]= useState('');
    const [guestName, setGuestName]= useState('');
    const [guestEmail, setGuestEmail]= useState('');
    const [totalInvited, setTotalInvited]= useState('');
    const [attending, setAttending]= useState('');
    const [rsvpGuests, setRsvpGuests] = useState([]);
    
    const [eventId, setEventId] = useState("");
    const [eventName, setEventName] = useState("");
    const [location, setLocation] = useState("")
    const [rsvpEvents, setRsvpEvents] = useState([]);
  
    // POST new Guest
    const handleSubmitGuest = (e) =>{
      e.preventDefault();
      if(!guestId && !guestName && !guestEmail && !totalInvited && !attending) {
        alert("Please enter your information.")
      } else if(!guestId) {
        alert("Please enter your event id.")
      } else if(!guestName) {
        alert("Please enter your name.")
      } else if(!guestEmail) {
        alert("Please enter your email.")
      } else if(!totalInvited) {
        alert("Please enter total guest attending the event.")
      } else if(!attending) {
        alert("Please enter you if will be attending the event.")
      } else { 
      const rsvpGuest = {guestId, guestName, guestEmail, totalInvited, attending}
      console.log("Guest data: ", guestId, guestName, guestEmail, totalInvited, attending)
      fetch("http://localhost:8080/rsvpGuest",{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body:JSON.stringify(rsvpGuest)
    }).then(() => {
      console.log("New guest added")
    })
    }
  }

      //  Post new Event 
    const handleSubmitEvent = (e) =>{
      e.preventDefault();
      if(!location && !eventName) {
        alert("Please enter event's name & location!");
      } else if(!location) {
        alert("Enter event's location!")
      } else if (!eventName) {
        alert("Please enter event's name!")
      } else {
      const rsvpEvent = {eventName, location}
      console.log("Event name: ", eventName, " & Event location: ", location)
      fetch("http://localhost:8080/rsvpEvent",{
      method: "POST", 
      headers: {"Content-Type" : "application/json"},
      body:JSON.stringify(rsvpEvent)
    }).then(() => {
      console.log("New event added")
    })
  }
    }

    // Get all guests
    useEffect(()=>{
        fetch("http://localhost:8080/guests")
        .then(res=>res.json())
        .then((result)=>{
          setRsvpGuests(result);
        })
      },[]);

     // Get All Events & guests invited
    useEffect(()=>{
        fetch(`http://localhost:8080/events`)
        .then(res=>res.json())
        .then((result)=>{
          setRsvpEvents(result);
        })
      },[]);
    
     
  return (
    <div>


        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        
      <div>
        <h1>Please RSVP below</h1>

        <TextField
          required
          id="filled-number"
            label="Event Id"
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            variant="filled"
          value = {guestId}
          onChange = {(e)=>setGuestId(e.target.value)}
        />
 
        <TextField
          required
          id="filled-required"
          label="Name"
          variant="filled"
          value = {guestName}
          onChange = {(e)=>setGuestName(e.target.value)}
        />
        
        <TextField
          required
          id="filled-required"
          label="Email"
          variant="filled"
          value = {guestEmail}
          onChange = {(e)=>setGuestEmail(e.target.value)}
        />
        
        <TextField
          required
          id="filled-number"
            label="Total guests attending"
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            variant="filled"
          value = {totalInvited}
          onChange = {(e)=>setTotalInvited(e.target.value)}
        />

    <TextField
          required
          id="filled-required"
          label="Attending?"
          variant="filled"
          placeholder="True/False"
          value = {attending}
          onChange = {(e)=>setAttending(e.target.value)}
        />

      </div>

      <Button 
        variant="outlined"
        onClick={handleSubmitGuest}
      >Submit Guest</Button>

      <div>

        <h1>Event List</h1>
        
        {rsvpEvents.map(rsvpEvent=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={rsvpEvent.id}>
                Event {rsvpEvent.id}:       {rsvpEvent.eventName}
                <br />Location:       {rsvpEvent.location}
                    {rsvpEvent.guests.map(rsvpEvent=>(
                      <Paper elevation={8} style={{margin:"20px",padding:"19px",textAlign:"left"}} >
                          Id: {rsvpEvent.id}
                          <br />Name:       {rsvpEvent.guestName}
                          <br />Email:       {rsvpEvent.guestEmail}
                          <br />Total guests attending:       {rsvpEvent.totalInvited}
                          {/* <br />Able to attend:       {rsvpEvent.attending} */}
                      </Paper> ))}
             </Paper>   
        ))}

    </div>

    <hr />

    <h1>------ Admin fields below ------</h1>


    <div>
        <h1>Create an event</h1>
        <TextField
          required
          id="filled-required"
          label="Event name"
          variant="filled"
          value = {eventName}
          onChange = {(e)=>setEventName(e.target.value)}
        />
        <TextField
          required
          id="filled-required"
          label="Location"
          variant="filled"
          value = {location}
          onChange = {(e)=>setLocation(e.target.value)}
        />

      <Button 
        variant="outlined"
        onClick={handleSubmitEvent}
      >Submit Event</Button>
       
      </div>

     

      <div>

        <h1>View all Guest</h1>
        
        {rsvpGuests.map(rsvpGuest=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={rsvpGuest.id}>
                Id: {rsvpGuest.id}
                <br />Name:       {rsvpGuest.guestName}
                <br />Email:       {rsvpGuest.guestEmail}
                <br />Total guests invited:       {rsvpGuest.totalInvited}
                <br />Able to attend:       {rsvpGuest.attending ? "Yes" : "No"}
             </Paper>   
        ))}

    </div>
    </Box>

<hr/>



    


    <div>


    </div>



    </div>
  )
}

export default GuestManager