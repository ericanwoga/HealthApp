import React from 'react'
import moment from 'moment'
import { Header } from 'semantic-ui-react'

/*
 * This will return a a list of items and either paginate them or limit them to a certain length.
 *
 * itemList: Sorted Array of React elements (first element )
 * limit: the number of items you would like to display ( will not paginate the results )
 * itemsPerPage: paginates the items and returns 'itemsPerPage' items along with a pagination menu on
 *     the bottom of the list that allows the user to switch to the nect 'itemsPerPage' entries
 */
const DatedItems = ({ itemList, date }) => {
    const datedList = itemList.filter(item => moment(item.key).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD'))

    return (
        <>
            {datedList.length > 0
                ? datedList.map((item) => {
                    return (
                        item
                    )
                })
                : <> <Header size='large'>No entries found for this date!</Header>
                    <Header size='large'>Please select a different date with the above date picker.</Header> </>
            }
        </>
    )
}

export default DatedItems
