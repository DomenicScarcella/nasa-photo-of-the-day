import React from 'react';

export default function POTD(props) {
    const {nasaData} = props
    return (
        <div className='potd'>
            <img src={nasaData.url} alt="Photo of the Day from NASA"></img>
        </div>
    )
}
