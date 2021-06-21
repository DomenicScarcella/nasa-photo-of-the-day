import React from 'react';
import styled from 'styled-components'

const StyledHead = styled.div`
    p span.h {
        font-size: 6em;
        font-weight: bold;
        &:hover {
            color: blue;
        }
    }
    p span.t {
        font-size: 3.6em;
        font-style: italic;
        &:hover {
            color: blue;
        }
    }
    p span.n {
        font-size: 2.4em;
        &:hover {
            color: blue;
        }
    }
`
export default function Header(props) {
    const {nasaData} = props
    return (
        <StyledHead>
            <p><span className='h'>NASA Photo of the Day</span></p>
            <p><span className='t'>'{nasaData.title}'</span></p>
            {nasaData.copyright ?             
            <p><span className='n'>Photo by {nasaData.copyright}</span></p> : ''}
        </StyledHead>
    )
}
