import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard/component";

const openWeathURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=43.68&lon=-79.41&appid=8ca0c04f956c0e96411ea0b8487e83a3";

const OneCallAPI = async () => {
  const apiRes = await fetch(openWeathURL).catch((error) =>
    console.error(error)
  );
  const resJSON = await apiRes.json();
  return resJSON;
};

function App() {
  const [forecast, setForcast] = useState('initial');
  useEffect(() => {
    OneCallAPI().then((res) => setForcast(res));
  }, []);

  return (
    <div className="App">
      <WeatherCard temp={12} />
      <WeatherCard temp={28} />
      <WeatherCard temp={40} />
      <WeatherCard temp={-5} />
      <WeatherCard temp={-10} />
      <WeatherCard temp={-20} />
    </div>
  );
}

export default App;
