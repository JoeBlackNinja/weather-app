import { useState, createContext } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({children}) => {

    const [searching,setSearching] = useState({
        city:'',
        country:''        
    });
    const [weatherResult, setWeatherResult] = useState({});
    const [stateSpinner,setStateSpinner] = useState(false);
    const [error,setError] = useState();

    const dataSeeker = (e) => {
        setSearching({
            ...searching,
            [e.target.name] : e.target.value
        })
    }

    const CheckWeather = async (datum) => {
        setError();
        try {
            setStateSpinner(true);
            const { city, country } = datum;     
            let latLon = {lat:'',lon:''};
            const appId = import .meta.env.VITE_API_KEY;
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;

            const weather_ = await fetch(url).
            then(res => res.json()).
            then(data => latLon={lat:data[0].lat, lon:data[0].lon});

            const urlWeather = `http://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${appId}`;
            const weather_api = await fetch(urlWeather).
            then(res => res.json()).
            then(data => setWeatherResult(data)) 
        } catch (error) {
            setError(`Check you typing.. we can't find any coincidence`);
            console.log('cassdasd');
        } finally {
            setStateSpinner(false);
        }
    }
    
    return(
        <WeatherContext.Provider
            value={{
                searching,
                dataSeeker,
                CheckWeather,
                weatherResult,
                stateSpinner,
                error
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export {WeatherProvider}

export default WeatherContext;