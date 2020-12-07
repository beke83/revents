import React from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEvent, createEvent } from "../eventActions";
import { Formik, Form } from "formik";
import * as Yup from "yup"; //to create validation
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryData } from "../../../app/api/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();

  //used to get the event which then populates the form
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

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

  const validationSchema = Yup.object({
    title: Yup.string().required("Title required"),
    category: Yup.string().required("Category required"),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          //if selectedEvent is not null then we update event
          //if null then we are creating a new event
          //any thing updated in the ...values will override the ...selectedEvent
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "Ben",
                  attendees: [],
                  hostPhotoURL: "assets/user.png",
                })
              );
          history.push("/events");
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className='ui form'>
            <Header sub color='teal' content='Event Details' />
            <MyTextInput name='title' placeholder='Event title' />
            <MySelectInput
              name='category'
              placeholder='Event category'
              options={categoryData}
            />
            <MyTextArea
              name='description'
              placeholder='Event description'
              rows={3}
            />
            <Header sub color='teal' content='Event Location Details' />
            <MyTextInput name='city' placeholder='Event city' />
            <MyTextInput name='venue' placeholder='Event venue' />
            <MyDateInput
              name='date'
              placeholderText='Event date'
              timeFormat='HH:mm'
              showTimeSelect
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:mm a'
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type='submit'
              floated='right'
              positive
              content='Submit'
            />
            <Button
              disabled={isSubmitting}
              as={Link}
              to='/events'
              type='submit'
              floated='left'
              negative
              content='Cancel'
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}
