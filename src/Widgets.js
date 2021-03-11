import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
function Widgets() {
    const newsArticle=(heading,subtitle)=>(
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />

            </div>
            {newsArticle('This is news','Top news - 9999 readers')}
            {newsArticle('Corona: UK updated','Top news - 868')}
            {newsArticle('Tesla hits new highs', 'Cars & auto - 300 readers')}
            {newsArticle('Bitcoin Breaks $22k','Crypto - 8000 readers')}
            {newsArticle('Is Redux too good?','Code - 123 readers')}
            {newsArticle('Google launches new product','Top new - 6503 readers')}
        </div>
    )
}

export default Widgets
