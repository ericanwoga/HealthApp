import React, { useState } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

// The bottom navigation bar
const Navbar = ({pages, mainPage, setMainPage, setHeadingPage}) => {

    return (
        <Grid centered textAlign='center' verticalAlign='middle' style={{paddingTop:'5%'}}>
            <Grid.Column textAlign='center' verticalAlign='middle'>
                <Button.Group compact fluid>
                    {pages.map((page) => {
                        return (
                            <Button
                            basic
                            size='huge'
                            key={page}
                            onClick={() => (setMainPage(page), setHeadingPage(false))}
                            active={page === mainPage}
                            >{page}</Button>
                        )
                    })}
                </Button.Group>
            </Grid.Column>
        </Grid>
    );
};
  
export default Navbar;