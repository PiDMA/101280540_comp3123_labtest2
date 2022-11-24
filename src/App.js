import React, {useState} from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=891537be097f6f8ac107f7936ed04a9a`

  const searchLocatiion = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  }
  // let iconCode = data.weather[0].icon;
  // let iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <div className="app">
    <div className='search'>
      <input 
        type='text' 
        className='search-bar' 
        placeholder='Search by City' 
        onChange={(event) => setLocation(event.target.value)} 
        onKeyPress={searchLocatiion} 
      />
    </div>
    
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className='description'>
          {data.name != undefined &&
            <img src= {`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img>
          }
            {data.weather ? <h3>{data.weather[0].description}</h3> : null}
          </div> 
        </div>
      
      {data.name != undefined &&
        <div className='bottom'>
          <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            {data.main ? <p className='bold'>{data.main.humidity.toFixed()}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}km/h</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      }
      </div>
    </div>
  );
}

export default App;

