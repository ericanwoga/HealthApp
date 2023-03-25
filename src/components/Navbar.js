import React, { useState } from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Navbar = (input) => {
    const [activeItem, setActiveItem] = useState()

    return (
        <div>
            <Button.Group fluid>
                {input.pages.map((page) => {
                    return (
                        <Button
                        as={Link}
                        to={'/' + page.toLowerCase()}
                        key={page}
                        onClick={() => setActiveItem(page)}
                        active={page === activeItem}
                        >{page}</Button>
                    )
                })}
            </Button.Group>
        </div>
    );
};
  
export default Navbar;