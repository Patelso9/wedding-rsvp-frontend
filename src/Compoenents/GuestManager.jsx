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
    
    const [eventName, setEventName] = useState("");
    const [location, setLocation] = useState("")
    const [rsvpEvents, setRsvpEvents] = useState([]);
  
  
    const handleSubmitEvent = (e) =>{
      e.preventDefault();
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
  
    const handleSubmitGuest = (e) =>{
      e.preventDefault();
      const rsvpGuest = {guestName, guestEmail, totalInvited, attending}
      console.log("Guest data: ", guestName, guestEmail, totalInvited, attending)
      fetch("http://localhost:8080/guests",{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body:JSON.stringify(rsvpGuest)
    }).then(() => {
      console.log("New guest added")
    })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/guests")
        .then(res=>res.json())
        .then((result)=>{
          setRsvpGuests(result);
        })
      },[]);

    useEffect(()=>{
        fetch("http://localhost:8080/events")
        .then(res=>res.json())
        .then((result)=>{
          setRsvpEvents(result);
        })
      },[]);



  return (
    <div>

    <h2>Welcome to our wedding website!</h2>
    <h3>Can't wait to celebrate our big day with you!</h3>

    



    <hr/>
    <h1>Enter Guest & Event details below</h1>


        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
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
        <h1>Create Guest</h1>
 
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
            label="Total invited"
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
        

        
      <Button 
        variant="outlined"
        onClick={handleSubmitGuest}
      >Submit Guest</Button>

      </div>

      <div>

        <h1>Event List</h1>
        
        {rsvpEvents.map(rsvpEvent=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={rsvpEvent.id}>
                Event {rsvpEvent.id}: {rsvpEvent.eventName}
                <br />Location: {rsvpEvent.location}
             </Paper>   
        ))}

    </div>
      <div>

        <h1>Guest List</h1>
        
        {rsvpGuests.map(rsvpGuest=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={rsvpGuest.id}>
                Id: {rsvpGuest.id}
                <br />Name: {rsvpGuest.guestName}
                <br />Email: {rsvpGuest.guestEmail}
                <br />Total guests invited: {rsvpGuest.totalInvited}
                <br />Able to attend: {rsvpGuest.attending}
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