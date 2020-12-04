import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignOutMenu";

export default function NavBar({ setFormOpen }) {
  //use local state to fake authentication for user
  const [authenticated, setAuthenticated] = useState(false);

  //the Navbar is not been provided by a Route so its not not have
  //access to 'useHistory'
  //utilize useHistory hook to navigate back to home page after signout

  const history = useHistory(); //this provides access to the useHistory from react-router-dom

  //
  function handleSignOut(){
    setAuthenticated(false)
    history.push('/');
  }

  return (
    // 'as': meaning the Menu.Item should act 'as' a NavLink
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} exact to='/events' name='Events'></Menu.Item>
        {authenticated && (
          <Menu.Item as={NavLink} exact to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
            <SignedOutMenu setAuthenticated={setAuthenticated} />
          )}
      </Container>
    </Menu>
  );
}
