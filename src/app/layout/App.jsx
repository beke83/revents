import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";

function App() {
  return (
    <>
      <Route path='/' exact component={HomePage} />
      <Route
        path={"/(.+)"}  //anything that has a / + something render the component 
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route path='/events' exact component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
