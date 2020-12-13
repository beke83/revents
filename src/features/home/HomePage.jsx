import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

// destructure
export default function HomePage() {
  const history = useHistory();
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            style={{ marginButtom: 12 }}
          />
          Re-vents
        </Header>
        <Button onClick={() => history.push("/events")} size='huge' inverted>
          Get Started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
}
