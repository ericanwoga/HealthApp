import React, { useState, useEffect } from 'react'
import PageModal from './PageModal'
import { Button, Header } from 'semantic-ui-react'

// A login page that has a list of all users to select from to view different kinds of information displayed.
const LoginPageContent = ({ allUsers, setUserData, setLoggedIn }) => {
    const [userKey, setUserKey] = useState('')

    useEffect(() => {
        for (const key in allUsers) {
            if (key === userKey) {
                const newUserData = allUsers[key]
                setUserData(newUserData)
                setLoggedIn(true)
            }
        }
    }, [userKey, allUsers, setLoggedIn, setUserData])

    const userButtons = []

    Object.keys(allUsers).map((key) => (
        userButtons.push(
            <Button
                fluid
                size='huge'
                active={userKey === key}
                key={key}
                onClick={() => (
                    setUserKey(key)
                )}
                content={allUsers[key].name}
            />
        )
    ))

    return (
        <>
            <Header size='large'>Click on one of the users below to log in as them!</Header>
            <Button.Group style={{ width: '100%' }} vertical buttons={userButtons}/>
        </>
    )
}

const LoginPage = ({ loggedIn, setLoggedIn, setUserData, allUsers, setAllUsers }) => {
    const [newUser, setNewUser] = useState(false)

    return (
        <PageModal
            title={'Log in to Health App'}
            open={!loggedIn}
            setOpen={() => setLoggedIn(false)}
            setClosed={() => setLoggedIn(true)}
            clickDimmerClose={false}
            content={
                <LoginPageContent
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    allUsers={allUsers}
                    setAllUsers={setAllUsers}
                    setUserData={setUserData}
                    newUser={newUser}
                    setNewUser={setNewUser}
                />
            }
        />
    )
}

export default LoginPage
