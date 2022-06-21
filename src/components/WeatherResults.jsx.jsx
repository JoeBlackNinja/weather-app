import useWeather from "../hooks/useWeather";

const weatherResults = () => {
  const { weatherResult } = useWeather();

  const {name, main} = weatherResult;

  return (
    <div className="contenedor weather">
      <h2>The weather in {name} is:</h2>      
      <p>{Math.round(main.temp - 273)}<span className="span-degree">&#x2103;</span></p>
      <p>Feel like: {Math.round(main.feels_like - 273)}<span className="span-degree2">&#x2103;</span></p>  
      <p>Max: {Math.round(main.temp_max - 273)}<span className="span-degree2">&#x2103;</span></p>
      <p>Min: {Math.round(main.temp_min - 273)}<span className="span-degree2">&#x2103;</span></p>
      <p>Humidity: {Math.round(main.humidity)}</p>
      <p>Pressure: {Math.round(main.pressure )}</p>
    </div>
    );
};

export default weatherResults;
