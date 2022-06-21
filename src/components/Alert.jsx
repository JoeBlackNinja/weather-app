import useWeather from "../hooks/useWeather";

const Alert = () => {
    const {error} = useWeather();
  return (
    <div>
        {error}
    </div>
  )
}

export default Alert