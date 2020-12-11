import "./App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const [forecast, setForcast] = useState([]);
  useEffect(() => {
    Axios({
      url:
        "https://api.openweathermap.org/data/2.5/onecall?lat=43.676745749002215&lon=-79.41102236930898&units=metric&appid=8ca0c04f956c0e96411ea0b8487e83a3",
      responseType: "json",
    })
      .then((res) => res.data)
      .then(({ daily }) => setForcast(daily))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {forecast.map((data, i) => (
        <WeatherCard key={i} stats={data} />
      ))}
    </div>
  );
}

export default App;
