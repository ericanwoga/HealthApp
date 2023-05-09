import React from 'react'
import { Button, Grid } from 'semantic-ui-react'

// The bottom navigation bar
const Navbar = ({ setKeyboardVisible, pages, mainPage, setMainPage, setHeadingPage }) => {
    return (
        <Grid centered textAlign='center' verticalAlign='middle' style={{ paddingTop: '5%' }}>
            <Grid.Column textAlign='center' verticalAlign='middle'>
                <Button.Group compact fluid>
                    {pages.map((page) => {
                        return (
                            <Button
                                style={{ paddingLeft: '2px', paddingRight: '2px' }}
                                basic
                                size='massive'
                                key={page}
                                onClick={() => {
                                    setMainPage(page)
                                    setHeadingPage(false)
                                    setKeyboardVisible('off')
                                }}
                                active={page === mainPage}
                            ><strong>{page}</strong></Button>
                        )
                    })}
                </Button.Group>
            </Grid.Column>
        </Grid>
    )
}

export default Navbar
