import React from 'react';
import styled from 'styled-components'

const StyledCap = styled.div`
    width: 50vw;
    min-width: 444px;
    margin-left: auto;
    margin-right: auto;
    p {
        font-size: 1.6em;
        font-weight: bold;
        margin: 1.6em 0;
        &:hover {
            color: blue;
        }
    }
`

export default function Caption(props) {
    const {nasaData} = props
    let newNasaData = nasaData
    if (nasaData.explanation) {
        newNasaData = newNasaData.explanation.split('. ')
    }
    return (
        <StyledCap>
            {nasaData.explanation ? newNasaData.map ((sentence) =>
            <p>{sentence}.</p>) : ''
            }
        </StyledCap>
    )
    // return (
    //     <div className='caption'>
    //         <h5>{nasaData.explanation}</h5>
    //     </div>
    // )
}
