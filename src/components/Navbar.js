import React, { useState } from 'react';
import { Button, Grid } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const Navbar = ({pages}) => {
    const [activeItem, setActiveItem] = useState()

    return (
        <Grid centered style={{paddingBottom:'20px'}}>
            <Button.Group fluid>
                {pages.map((page) => {
                    return (
                        <Button
                        basic
                        size='big'
                        as={NavLink}
                        to={'/' + page.toLowerCase()}
                        key={page}
                        onClick={() => setActiveItem(page)}
                        active={page === activeItem}
                        >{page}</Button>
                    )
                })}
            </Button.Group>
        </Grid>
    );
};
  
export default Navbar;