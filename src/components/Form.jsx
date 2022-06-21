import useWeather from '../hooks/useWeather'
import { useState } from 'react';

const Form = () => {

  const { searching, dataSeeker, CheckWeather } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(searching).includes('')){
      alert('All field might be filled')
      return
    }
    CheckWeather(searching);
  }

  return (
    <div className="contenedor">
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="city">City</label>
          <input 
            type="text" 
            id="city" 
            name="city" 
            onChange={dataSeeker}
            value={searching.city}
          />
        </div>
        <div className="campo">
          <label htmlFor="country">Country</label>
          <select 
            id="country" 
            name="country"
            onChange={dataSeeker}
            value={searching.country}
          >
            <option value="">Choose a country</option>
            <option value="US">United States</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="ES">España</option>
          </select>
        </div>
        <input
          type='submit'
          value='Weather Consult'
        />
      </form>
    </div>
  );
};

export default Form;
