import React from 'react'

const EventComponents = ({ eventName, location }) => {


    return (
        <div className="event-container">
                <div className='event-row'>
                <div className="event">
                    <h4>Event: {eventName} </h4>
                    <p>Location : {location}</p>
                </div>
            </div>
        </div>
    )
}

export default EventComponents