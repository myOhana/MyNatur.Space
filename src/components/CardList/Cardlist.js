import React from 'react';
import Card from '../Card/Card';

const Cardlist = ({eventinformation}) => {
    return (
        <div > {
            eventinformation.map((user, i) => {
                return <Card key = {
                    i
                }
                id = {
                    eventinformation[i].id
                }
                organization = {
                    eventinformation[i].organization
                }
                location = {
                    eventinformation[i].location
                }
                day = {
                    eventinformation[i].day
                }
                date = {
                    eventinformation[i].date
                }
                details = {
                    eventinformation[i].details
                }
                link = {
                    eventinformation[i].link
                }
                />
            })
        } </div>
    )
}

export default Cardlist;