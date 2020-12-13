import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useDispatch, useSelector } from "react-redux";
import EventListItemPlaceholder from "./eventListItemPlaceholder";
import EventFilters from "./EventFilters";
import { listenToEventsFromFirestore } from "../../../app/firestore/firestoreService";
import { listenToEvents } from "../eventActions";
import useFirestoreCollection from "../../../app/hooks/useFirestoreCollection";

//EventDashboard is the parent of EventList
/**using react hooks one of which is useState */
export default function EventDashboard() {
  //'useSelector' is used to get the events from the data
  //destructue the event
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);
  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch],
  });

  // this function means just run once then liten to the data
  // but when it unmounts then unsubcribe
  // useEffect(() => {
  //   dispatch(asyncActionStart());
  //   const unsubscribe = getEventFromFirestore(
  //     {
  //       next: (snapshot) => {
  //         dispatch(
  //           listenToEvents(
  //             snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
  //           )
  //         );
  //         dispatch(asyncActionFinish());
  //       },
  //       error: (error) => dispatch(asyncActionFinish(error)),
  //       complete: () => console.log("you will never see this message"),
  //     },
  //     [dispatch]
  //   );
  //   return unsubscribe; //this is called when the component unmounts
  // });

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
    // setEvents(events.filter((evt) => evt.id !== eventId));
  }

  return (
    //passed the properties to the child component(EventList)
    //the properties is the events in the sampleData,js file
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
}
