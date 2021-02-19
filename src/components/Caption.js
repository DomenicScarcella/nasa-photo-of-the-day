import React from 'react';
import styled from 'styled-components'

const StyledCap = styled.div`
    p {
        font-size: 1.6em;
        font-weight: bold;
        margin: 1.6em 25%;
        &:hover {
            color: blue;
        }
    }
`

export default function Caption(props) {
    const {nasaData} = props
    return (
        <StyledCap>
            <p>{nasaData.explanation}</p>
        </StyledCap>
    )
    // return (
    //     <div className='caption'>
    //         <h5>{nasaData.explanation}</h5>
    //     </div>
    // )
}
