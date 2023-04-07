import React from 'react'
import { Header, Button, Divider } from 'semantic-ui-react'
import PageItem from '../../PageItem'

// User heading page.

const UserPageContents = ({ setIsVisible, setLoggedIn, userData }) => {
    return (
        <>
            <Header textAlign='left'>Name: {userData.name}</Header>
            <Header textAlign='left'>Email: {userData.email}</Header>
            <Divider/>
            <Button fluid onClick={() => {
                setLoggedIn(false)
                setIsVisible(false)
            }}>Log Out</Button>
        </>
    )
}

const UserPage = ({ setIsVisible, setLoggedIn, userData }) => {
    return (
        <>
            <PageItem title={'Information'} content={<UserPageContents userData={userData} setLoggedIn={setLoggedIn} setIsVisible={setIsVisible}/>}/>
        </>
    )
}

export default UserPage
