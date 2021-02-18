import React from 'react';
import styled from 'styled-components'

const StyledImg = styled.div`
    width: 100%;
    height: auto;

    .nasaimg img {
        border: 2px solid black;
    }

`

export default function POTD(props) {
    const {nasaData} = props
    return (
        <StyledImg>
            <div className="nasaimg">
                <img src={nasaData.url} alt="Photo of the Day from NASA"></img>
            </div>
        </StyledImg>
    )
    // return (
    //     <div className='potd'>
    //         <img src={nasaData.url} alt="Photo of the Day from NASA"></img>
    //     </div>
    // )
}
