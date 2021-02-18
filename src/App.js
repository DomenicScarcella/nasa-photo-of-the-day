import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './components/Header.js'
import POTD from './components/POTD.js'
import Caption from './components/Caption.js'

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
    <div className="App">
      <Header nasaData={nasaData} />
      <POTD nasaData={nasaData} />
      <Caption nasaData={nasaData} />
    </div>
  );
}

export default App;
