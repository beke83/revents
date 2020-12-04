import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";

export default function EventForm({
  setFormOpen,
  setEvents,
  createEvent,
  selectedEvent,
  updateEvent,
}) {
  //giving input some state by using react hook(useState hook)
  //set state using useState hooks
  //if null show empty else show event
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  //destructure
  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    //if selectedEvent is not null then we update event
    //if null then we are creating a new event
    //any thing updated in the ...values will override the ...selectedEvent
    selectedEvent
      ? updateEvent({...selectedEvent, ...values})
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Ben",
          attendees: [],
          hostPhotoURL: "assets/user.png",
        });
    //close the form
    setFormOpen(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    //using spread operator (...) to copy all the values
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the event" : "Create New Event"} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event Title'
            value={values.title}
            name='title'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            value={values.category}
            name='category'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            value={values.description}
            name='description'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            value={values.city}
            name='city'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            value={values.venue}
            name='venue'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            value={values.date}
            name='date'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          as={Link} to='/events'
          type='submit'
          floated='left'
          negative
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}
