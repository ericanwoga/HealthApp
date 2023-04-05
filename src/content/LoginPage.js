import React, { useState, useEffect } from "react"
import PageModal from "./PageModal"
import { Button, Header } from 'semantic-ui-react'

// A login page that has a list of all users to select from to view different kinds of information displayed.
// See index.js to set a user without having to select one each time the app re-renders.
const LoginPageContent = ({allUsers, setUserData, setLoggedIn}) => {
    const [userKey, setUserKey] = useState("")

    useEffect(() => {
        for (let key in allUsers) {
            if (key == userKey) {
                var newUserData = allUsers[key]
                setUserData(newUserData)
                setLoggedIn(true)
            }
        }
    }, [userKey])

    return (
        <>
            <Header size="small">Click on one of the users below to log in as them!</Header>
            <Button.Group fluid vertical>
                {Object.keys(allUsers).map((key) => (
                    <Button
                        active={userKey == key}
                        key={key}
                        onClick={() => (
                            setUserKey(key)
                        )}
                    >
                        {allUsers[key].name}
                    </Button>
                ))}
            </Button.Group>
        </>
    )
}

const LoginPage = ({loggedIn, setLoggedIn, setUserData, allUsers, setAllUsers}) => {

    const [newUser, setNewUser] = useState(false)

    return (
        <PageModal 
            title={"Log in to Health App"}
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