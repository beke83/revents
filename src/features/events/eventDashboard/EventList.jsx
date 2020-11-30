import React from 'react'
import EventListItem from './EventListItem'

export default function EventList({events}) {
    return (
        //loop over each events inside the event array and passed the  
        //the individual event to the the list item
        <>
            {events.map(event => (
                <EventListItem event={event} key={event.id} />
            ))}
        </>
    )
}