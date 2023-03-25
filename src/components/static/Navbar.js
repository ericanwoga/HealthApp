import React, { useState } from 'react';
import { Button, Grid } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const Navbar = ({pages, setHeadingPageVisible}) => {
    const [activeItem, setActiveItem] = useState()

    return (
        <Grid centered style={{height:'5%'}}>
            <Button.Group fluid>
                {pages.map((page) => {
                    return (
                        <Button
                        basic
                        size='big'
                        as={NavLink}
                        to={'/' + page.toLowerCase()}
                        key={page}
                        onClick={() => (setActiveItem(page), setHeadingPageVisible(false))}
                        active={page === activeItem}
                        >{page}</Button>
                    )
                })}
            </Button.Group>
        </Grid>
    );
};
  
export default Navbar;