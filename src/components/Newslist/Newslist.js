import React from 'react';
import NewsCard from '../NewsCard/NewsCard';


const Newslist = ({newsinfo}) => {
    return (
        <div > {
            newsinfo.map((article, i) => {
                return <NewsCard key = {
                    i
                }
                author = {
                    newsinfo[i].author
                }
                title = {
                    newsinfo[i].title
                }
                publishedAt = {
                    newsinfo[i].publishedAt
                }
                description = {
                    newsinfo[i].description
                }
                url = {
                    newsinfo[i].url
                }
                />
            })
        } </div>
    )
}

export default Newslist;