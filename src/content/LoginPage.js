import React, { useState } from "react"
import PageModal from "./PageModal"
import { Form, Button, Divider, Input } from 'semantic-ui-react'
import userData from '../userData.json'

const LoginPageContent = ({setLoggedIn, setUser, newUser, setNewUser}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        for (let key in userData.users) {
            if (userData.users[key].email == email && userData.users[key].password == password) {
                setUser(userData.users[key])
                setLoggedIn(true)
            }
        }
    }

    const createAccount = () => {
        
    }

    return (
        newUser ? (
            <Form>
                <Form.Field required>
                    <label>Full Name</label>
                    <Input 
                        placeholder='Full Name'
                        icon='user' 
                        iconPosition='left'
                        onChange={(e) => setPassword(e.value)}
                    />
                </Form.Field> 
                <Form.Field required>
                    <label>E-mail Address</label>
                    <Input 
                        placeholder='E-mail Address' 
                        icon='mail' 
                        iconPosition='left'
                        onChange={(e) => setPassword(e.value)}
                    />
                </Form.Field>                 
                <Form.Field required>
                    <label>Password</label>
                    <Input 
                        placeholder='Password' 
                        icon='lock' 
                        type='password'
                        iconPosition='left'
                        onChange={(e) => setPassword(e.value)}
                    />
                </Form.Field> 

                <Button type='submit' fluid size='large' onClick={() => createAccount(name, email, password)}>
                    Create Account
                </Button>
                <Divider/>
                <Button fluid size='large' onClick={() => setNewUser(false)}>
                    Back to Login
                </Button>
            </Form>
        ) : (
            <Form>
                <Form.Field required>
                    <label>E-mail Address</label>
                    <Input 
                        placeholder='E-mail Address' 
                        icon='mail' 
                        iconPosition='left'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Field>                 
                <Form.Field required>
                    <label>Password</label>
                    <Input 
                        placeholder='Password' 
                        icon='lock' 
                        iconPosition='left'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Field> 

                <Button fluid size='large' onClick={() => login()}>
                    Login
                </Button>
                <Divider/>
                <Button fluid size='large' onClick={() => setNewUser(true)}>
                    New User? Create an Account!
                </Button>
            </Form>
        )
    )
}

const LoginPage = ({loggedIn, setLoggedIn, setUser}) => {

    const [newUser, setNewUser] = useState(false)

    return (
        <PageModal 
            title={newUser ? "Create an Account" : "Log in to Health App"}
            open={!loggedIn}
            setOpen={() => setLoggedIn(false)}
            setClosed={() => setLoggedIn(true)}
            cancelText={"Demo Mode"}
            clickDimmerClose={false}
            content={
                <LoginPageContent
                    loggedIn={loggedIn} 
                    setLoggedIn={setLoggedIn} 
                    setUser={setUser}
                    newUser={newUser}
                    setNewUser={setNewUser}
                />
            }
        />
    )
}

export default LoginPage