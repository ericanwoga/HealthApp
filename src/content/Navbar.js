import React, { useState } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

const Navbar = ({pages, setHeadingPageVisible}) => {
    const [activeItem, setActiveItem] = useState()

    return (
        <Grid centered textAlign='center' verticalAlign='middle' style={{paddingTop:'5%'}}>
            <Grid.Column textAlign='center' verticalAlign='middle'>
                <Button.Group compact fluid>
                    {pages.map((page) => {
                        return (
                            <Button
                            basic
                            size='huge'
                            as={NavLink}
                            to={'/' + page.toLowerCase()}
                            key={page}
                            onClick={() => (setActiveItem(page), setHeadingPageVisible(false))}
                            active={page === activeItem}
                            >{page}</Button>
                        )
                    })}
                </Button.Group>
            </Grid.Column>
        </Grid>
    );
};
  
export default Navbar;