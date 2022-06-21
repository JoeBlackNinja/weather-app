import Form from './Form';
import useWeather from '../hooks/useWeather';
import WeatherResults from './WeatherResults.jsx';
import Spinner from './Spinner';
import Alert from '../components/Alert';

const WeatherApp = () => {

  const { weatherResult, stateSpinner, error } = useWeather();

  return (
    <div className="dos-columnas">
        <Form/>
        {weatherResult.name && !stateSpinner ? error ? <Alert/> :<WeatherResults/>:
        stateSpinner ? <Spinner/> : error && <Alert/>
        }
    </div>
  )
}

export default WeatherApp