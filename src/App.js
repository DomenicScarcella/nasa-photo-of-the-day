import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import styled from 'styled-components'
import Header from './components/Header.js'
import POTD from './components/POTD.js'
import Caption from './components/Caption.js'

const StyledApp = styled.div`
  background-color: lightyellow;
  width: 100%;
  margin: 0;
  padding: 0;
  min-width: 480px;
  height: auto;
  text-align: center;
  font-size: 62.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
`

function App() {
  const [nasaData, setNasaData] = useState({})

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=B8W6DT7uOEhrfEYvOKISZ5FQdhqaUnCbpwZORdPm`)
      .then((res) => {
        console.log(res)
        setNasaData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <StyledApp>
      <Header nasaData={nasaData} />
      <POTD nasaData={nasaData} />
      <Caption nasaData={nasaData} />
    </StyledApp>
  );
}

export default App;
