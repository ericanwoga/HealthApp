import React, { useState } from 'react'
import { Pagination, Grid } from 'semantic-ui-react'

/*
 * This will return a a list of items and either paginate them or limit them to a certain length.
 *
 * itemList: Sorted Array of React elements (first element )
 * limit: the number of items you would like to display ( will not paginate the results )
 * itemsPerPage: paginates the items and returns 'itemsPerPage' items along with a pagination menu on
 *     the bottom of the list that allows the user to switch to the nect 'itemsPerPage' entries
 */
const PaginatedItems = ({ itemList, limit, itemsPerPage }) => {
    console.log(itemList.slice((1 - 1) * 4, 1 * 4))
    const [activePage, setActivePage] = useState(1)
    itemsPerPage = itemsPerPage > 0 ? itemsPerPage : 10

    return (
        <>
            {limit
                ? itemList.slice((activePage - 1) * itemsPerPage, limit)
                : (<>
                    {itemList.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)}
                    <Grid verticalAlign='center' columns={1}>
                        <Grid.Column>
                            <Pagination
                                onPageChange={(e, { activePage }) => setActivePage(activePage)}
                                boundaryRange={0}
                                defaultActivePage={activePage}
                                ellipsisItem={null}
                                firstItem={null}
                                lastItem={null}
                                siblingRange={2}
                                totalPages={Math.ceil(itemList.length / itemsPerPage)}
                            />
                        </Grid.Column>
                    </Grid>
                </>
                )
            }
        </>
    )
}

export default PaginatedItems
