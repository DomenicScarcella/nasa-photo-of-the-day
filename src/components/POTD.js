import React from 'react';
import styled from 'styled-components'

const StyledImg = styled.div`
    background-color: lightblue;
    img {
        border: 6px solid white;
        margin: 12px;
        &:hover {
            border: 6px solid blue;
        }
    }
`

export default function POTD(props) {
    const {nasaData} = props
    return (
        <StyledImg>
            <img src={nasaData.url} alt="Photo of the Day from NASA"></img>
        </StyledImg>
    )
    // return (
    //     <div className='potd'>
    //         <img src={nasaData.url} alt="Photo of the Day from NASA"></img>
    //     </div>
    // )
}
