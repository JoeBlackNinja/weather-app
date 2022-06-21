import WeatherApp from './components/WeatherApp';
import { WeatherProvider } from './context/weatherProvider';

function App() {

  return (
    <WeatherProvider>
      <header>
        <h1>Buscador de clima</h1>
      </header>
      <WeatherApp/>
    </WeatherProvider>
  )
}

export default App
