import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    const getPhoto = () => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=B8W6DT7uOEhrfEYvOKISZ5FQdhqaUnCbpwZORdPm`)
        .then((res) => {
          setNasaData(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])

  return (
    <div className="App">
      <div classname="header">
        <h1>NASA Photo of the Day</h1>
      </div>
      <div classname="photo">
        <img src="res.data.hdurl"></img>
      </div>
    </div>
  );
}

export default App;
