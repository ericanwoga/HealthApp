import React from 'react'
import { Header, Button, Divider } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import PageItem from '../../PageItem'

// User heading page.

const UserPageContent = ({ setIsVisible, setLoggedIn, userData }) => {
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
            <PageItem title={'Information'} content={<UserPageContent userData={userData} setLoggedIn={setLoggedIn} setIsVisible={setIsVisible}/>}/>
        </>
    )
}

UserPageContent.propTypes = {
    setIsVisible: PropTypes.func,
    setLoggedIn: PropTypes.func,
    userData: PropTypes.object
}

UserPage.propTypes = {
    setIsVisible: PropTypes.func,
    setLoggedIn: PropTypes.func,
    userData: PropTypes.object
}

export default UserPage
