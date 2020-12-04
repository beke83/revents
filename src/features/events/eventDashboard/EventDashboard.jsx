import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

//EventDashboard is the parent of EventList
/**using react hooks one of which is useState */
export default function EventDashboard() {
  //two piece of state for useState (react hooks)
  const [events, setEvents] = useState(sampleData);

  //a handler(function) to create an event
  //function handleCreateEvent(event) {
    //using spread operator to copy all the values
    //setEvents([...events, event]); //...events returns a new array of event
  //}

  //func to handle update event
  /** event.map loops over the events */
  //function handleUpdateEvent(updatedEvent) {
    //setEvents(
      //events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    //);
    //selectEvent(null);
  //}

  //func to handle delete
  function handleDeleteEvent(eventId) {
    setEvents(events.filter((evt) => evt.id !== eventId));
  }

  return (
    //passed the properties to the child component(EventList)
    //the properties is the events in the sampleData,js file
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event filters</h2>
      </Grid.Column>
    </Grid>
  );
}
