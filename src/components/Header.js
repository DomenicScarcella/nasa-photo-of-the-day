import React from 'react';

export default function Header(props) {
    const {nasaData} = props
    return (
        <div className='header'>
            <h1>NASA Photo of the Day</h1>
            <div className='titleName'>
                <h3>'{nasaData.title}'<br />Photo by {nasaData.copyright}<br />{nasaData.date}</h3>
            </div>
        </div>
    )
}
