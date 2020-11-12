import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import './ultimo.css';

const api = {
    key: "048ed0493d774829bdd144524201011",
    base: "https://api.weatherapi.com/v1/forecast.json?key=",
  }

function UltimoRegistro(props) {

  const [clima, setClima ] = useState([]);
  const [temperatura, setTemperatura] = useState([]);
  const [mostraTemp, setMostraTemp] = useState(false);

  const [mostrarApi, setMostrarApi] = useState(false);

  let cidade = props.city;
  let temp = [];

  useEffect(()=>{
    temp = [];
    setTemperatura([]);
    const cidades = () => {
      fetch(`${api.base}${api.key}&q=${props.city}&lang=pt&days=1`)
      .then(res => res.json())
      .then(resultado => {
        setClima(resultado);
        setMostrarApi(true);
        
          
      });
    }

    cidades();

  }, [cidade]);

  useEffect(()=>{
      temp = [];
      if(mostrarApi){
      for(let i = 0; i < 24; i++) {
        temp.push(clima.forecast.forecastday[0].hour[i].temp_c);
      }
      setTemperatura(temp);
      setMostraTemp(true);
      }
      
        
  },[clima]);

  let horas = [];
  const graficoHoras = () => {
    for(let i = 0; i < 24; i++) {
      horas.push(i);
    }
    return horas;
  };


  if(!mostrarApi ||
      !temperatura) {
      return (
          <div>Carregando</div>
      )
  } else {
    return (
        <>
<div className="container-ultimo">
<div className="agora">
  
  <h1 className="agora-cidade">
    Agora em {cidade}
  </h1>

<div className="img-temp">
  <img src={clima.current.condition.icon}/>
  <p>{clima.current.temp_c}°C</p>
</div>

<div className="descricao">
  
  <div className="descricao-text">
      <p>{clima.current.condition.text}</p>
      <p>Sensação {clima.current.feelslike_c}°C</p>
  </div>
  
  <hr />

  <div className="vento">
    <p className="cor">Vento</p>
    <p>{clima.current.wind_dir} - {clima.current.wind_kph}Km/h</p>
  </div>
  <hr/>

  <div className="humidade">
    <p className="cor">Humidade</p>
    <p>{clima.current.humidity}%</p>
  </div>
  <hr/>

  <div className="pressao">
    <p className="cor">Pressão</p>
    <p>{clima.current.pressure_mb}hPa</p>
  </div>

</div>

</div>
{/* PREVISÃO DO TEMPO HOJE */}
<div className="hoje">

<h1 className="hoje-titulo">Previsão {cidade}</h1>

<div className="hoje-prev">

  <div className="hoje-text">{clima.forecast.forecastday[0].day.condition.text}</div>
  <div className="hoje-img">
    <img src={clima.forecast.forecastday[0].day.condition.icon} />
  </div>

</div>

<div className="hoje-temperatura">
  <p className="temp-red">Máx: {clima.forecast.forecastday[0].day.maxtemp_c} °C</p>
  <p className="temp-blue">Min: {clima.forecast.forecastday[0].day.mintemp_c} °C</p>
</div>
<hr/>

<div className="hoje-chuva">
  <p className="cor">Chuva </p>
  <p>{clima.forecast.forecastday[0].day.totalprecip_mm}mm - {clima.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
</div>
<hr/>

<div className="hoje-vento">
  <p className="cor">Vento Máx </p>
  <p>{clima.forecast.forecastday[0].day.maxwind_kph}km/h</p>
</div>
<hr/>

</div>
</div>
<div className="grafico">
  {mostraTemp && 
    <Line 
    data={{
      labels: graficoHoras(),
      datasets: [
        {
        label: 'Temperatura durante o dia',
        data: temperatura,
        }
      ],
    }}
    
    options={{
      maintainAspectRatio: false,
    }}
  />
  
  }

</div>


        </>
    )
  }
    
}

export default UltimoRegistro;