import React from 'react';
import { Header, Button } from 'semantic-ui-react'
  
const UserPage = ({setIsVisible, setLoggedIn, userData}) => {
  return (
    <>
      <Header>{userData.name}</Header>
      <Button fluid onClick={() => (setLoggedIn(false), setIsVisible(false))}>Log Out</Button>
    </>
  );
};
  
export default UserPage;