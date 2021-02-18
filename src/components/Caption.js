import React from 'react';

export default function Caption(props) {
    const {nasaData} = props
    return (
        <div className='caption'>
            <h5>{nasaData.explanation}</h5>
        </div>
    )
}
