import React, { useState, useEffect } from 'react';

import './historico.css';

const apiHistorico = {
    key: "048ed0493d774829bdd144524201011",
    base: "https://api.weatherapi.com/v1/history.json?key=",
    
  }

function Historico(props) {

    const [hisBH0, setHisBH0] = useState([]);
    const [hisBH1, setHisBH1] = useState([]);
    const [hisBH2, setHisBH2] = useState([]);
    const [hisBH3, setHisBH3] = useState([]);
    const [hisBH4, setHisBH4] = useState([]);
    const [hisBH5, setHisBH5] = useState([]);
    const [hisBH6, setHisBH6] = useState([]);

    const [mostrarHisApi0, setMostrarHisApi0] = useState(false);
    const [mostrarHisApi1, setMostrarHisApi1] = useState(false);
    const [mostrarHisApi2, setMostrarHisApi2] = useState(false);
    const [mostrarHisApi3, setMostrarHisApi3] = useState(false);
    const [mostrarHisApi4, setMostrarHisApi4] = useState(false);
    const [mostrarHisApi5, setMostrarHisApi5] = useState(false);
    const [mostrarHisApi6, setMostrarHisApi6] = useState(false);

    let cidade = props.city;
    let diaDoMes = new Date();
    

    useEffect(()=>{
        const historico = () => {
          let dataf= new Date();
          let data;
          
            data = (dataf.getDate() - 0);
            fetch(`${apiHistorico.base}${apiHistorico.key}&q=${props.city}&lang=pt&dt=2020-11-${data}`)
            .then(res => res.json())
            .then(resultado => {
              setHisBH0(resultado);
              setMostrarHisApi0(true);
              console.log(cidade);
          });
        }
    
        historico();
      }, [cidade]);
    
      useEffect(()=>{
        const historico = () => {
          let dataf= new Date();
          let data;
          
            data = (dataf.getDate() - 1);
            fetch(`${apiHistorico.base}${apiHistorico.key}&q=${props.city}&lang=pt&dt=2020-11-${data}`)
            .then(res => res.json())
            .then(resultado => {
              setHisBH1(resultado);
              setMostrarHisApi1(true);
          });
        }
    
        historico();
      }, [cidade]);
    
      useEffect(()=>{
        const historico = () => {
          let dataf= new Date();
          let data;
          
            data = (dataf.getDate() - 2);
            fetch(`${apiHistorico.base}${apiHistorico.key}&q=${props.city}&lang=pt&dt=2020-11-${data}`)
            .then(res => res.json())
            .then(resultado => {
              setHisBH2(resultado);
              setMostrarHisApi2(true);
          });
        }
    
        historico();
      }, [cidade]);
    
      useEffect(()=>{
        const historico = () => {
          let dataf= new Date();
          let data;
          
            data = (dataf.getDate() - 3);
            fetch(`${apiHistorico.base}${apiHistorico.key}&q=${props.city}&lang=pt&dt=2020-11-${data}`)
            .then(res => res.json())
            .then(resultado => {
              setHisBH3(resultado);
              setMostrarHisApi3(true);
          });
        }
    
        historico();
      }, [cidade]);
    
      useEffect(()=>{
        const historico = () => {
          let dataf= new Date();
          let data;
          
            data = (dataf.getDate() - 4);
            fetch(`${apiHistorico.base}${apiHistorico.key}&q=${props.city}&lang=pt&dt=2020-11-${data}`)
            .then(res => res.json())
            .then(resultado => {
              setHisBH4(resultado);
              setMostrarHisApi4(true);
          });
        }
    
        historico();
      }, [cidade]);
    
      useEffect(()=>{
        const historico = () => {
          let dataf= new Date();
          let data;
          
            data = (dataf.getDate() - 5);
            fetch(`${apiHistorico.base}${apiHistorico.key}&q=${props.city}&lang=pt&dt=2020-11-${data}`)
            .then(res => res.json())
            .then(resultado => {
              setHisBH5(resultado);
              setMostrarHisApi5(true);
          });
        }
    
        historico();
      }, [cidade]);
    
      useEffect(()=>{
        const historico = () => {
          let dataf= new Date();
          let data;
          
            data = (dataf.getDate() - 6);
            fetch(`${apiHistorico.base}${apiHistorico.key}&q=${props.city}&lang=pt&dt=2020-11-${data}`)
            .then(res => res.json())
            .then(resultado => {
              setHisBH6(resultado);
              setMostrarHisApi6(true);
          });
        }
    
        historico();
      }, [cidade]);

      const diaDaSemana = (d) => {
        let dia = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    
        let data = new Date();
    
        let i = (data.getDay() + d);
        let a;
          if(i>-1){
            return dia[i];
          } else {
            return dia[7 + i]
          }
          
      }

      if (!mostrarHisApi0 ||
        !mostrarHisApi1 ||
        !mostrarHisApi2 ||
        !mostrarHisApi3 ||
        !mostrarHisApi4 ||
        !mostrarHisApi5 ||
        !mostrarHisApi6) {
            return (
                <div> Carregando </div>
            )
        } else {
            return (
                <>
                  <div className="historico">
        
        <h1 className="titulo">Histórico {cidade}</h1>
        
        <div className="historico-dia">
          <div className="dia-da-semana">{diaDaSemana(0)} { diaDoMes.getDate()}/11</div>
          <div className="historico-temp">
              <p className="red">Máx: {hisBH0.forecast.forecastday[0].day.maxtemp_c} °C</p>
              <p className="blue">Min: {hisBH0.forecast.forecastday[0].day.mintemp_c} °C</p>
          </div>
          <img src={hisBH0.forecast.forecastday[0].day.condition.icon} />
          <div className="historico-chuva">Precipitação: {hisBH0.forecast.forecastday[0].day.totalprecip_mm}mm</div>
        </div>
        <hr/>
        
        <div className="historico-dia">
          <div className="dia-da-semana">{diaDaSemana(-1)} { diaDoMes.getDate() -1}/11</div>
          <div className="historico-temp">
              <p className="red">Máx: {hisBH1.forecast.forecastday[0].day.maxtemp_c} °C</p>
              <p className="blue">Min: {hisBH1.forecast.forecastday[0].day.mintemp_c} °C</p>
          </div>
          <img src={hisBH1.forecast.forecastday[0].day.condition.icon} />
          <div className="historico-chuva">Precipitação: {hisBH1.forecast.forecastday[0].day.totalprecip_mm}mm</div>
        </div>
        <hr/>
        
        <div className="historico-dia">
          <div className="dia-da-semana">{diaDaSemana(-2)} { diaDoMes.getDate() -2}/11</div>
          <div className="historico-temp">
              <p className="red">Máx: {hisBH2.forecast.forecastday[0].day.maxtemp_c} °C</p>
              <p className="blue">Min: {hisBH2.forecast.forecastday[0].day.mintemp_c} °C</p>
          </div>
          <img src={hisBH2.forecast.forecastday[0].day.condition.icon} />
          <div className="historico-chuva">Precipitação: {hisBH2.forecast.forecastday[0].day.totalprecip_mm}mm</div>
        </div>
        <hr/>
        
        <div className="historico-dia">
          <div className="dia-da-semana">{diaDaSemana(-3)} { diaDoMes.getDate() -3}/11</div>
          <div className="historico-temp">
              <p className="red">Máx: {hisBH3.forecast.forecastday[0].day.maxtemp_c} °C</p>
              <p className="blue">Min: {hisBH3.forecast.forecastday[0].day.mintemp_c} °C</p>
          </div>
          <img src={hisBH3.forecast.forecastday[0].day.condition.icon} />
          <div className="historico-chuva">Precipitação: {hisBH3.forecast.forecastday[0].day.totalprecip_mm}mm</div>
        </div>
        <hr/>
        
        <div className="historico-dia">
          <div className="dia-da-semana">{diaDaSemana(-4)} { diaDoMes.getDate() -4}/11</div>
          <div className="historico-temp">
              <p className="red">Máx: {hisBH4.forecast.forecastday[0].day.maxtemp_c} °C</p>
              <p className="blue">Min: {hisBH4.forecast.forecastday[0].day.mintemp_c} °C</p>
          </div>
          <img src={hisBH4.forecast.forecastday[0].day.condition.icon} />
          <div className="historico-chuva">Precipitação: {hisBH4.forecast.forecastday[0].day.totalprecip_mm}mm</div>
        </div>
        <hr/>
        
        <div className="historico-dia">
          <div className="dia-da-semana">{diaDaSemana(-5)} { diaDoMes.getDate() -5}/11</div>
          <div className="historico-temp">
              <p className="red">Máx: {hisBH5.forecast.forecastday[0].day.maxtemp_c} °C</p>
              <p className="blue">Min: {hisBH5.forecast.forecastday[0].day.mintemp_c} °C</p>
          </div>
          <img src={hisBH5.forecast.forecastday[0].day.condition.icon} />
          <div className="historico-chuva">Precipitação: {hisBH5.forecast.forecastday[0].day.totalprecip_mm}mm</div>
        </div>
        <hr/>
        
        <div className="historico-dia">
          <div className="dia-da-semana">{diaDaSemana(-6)} { diaDoMes.getDate() -6}/11</div>
          <div className="historico-temp">
              <p className="red">Máx: {hisBH6.forecast.forecastday[0].day.maxtemp_c} °C</p>
              <p className="blue">Min: {hisBH6.forecast.forecastday[0].day.mintemp_c} °C</p>
          </div>
          <img src={hisBH6.forecast.forecastday[0].day.condition.icon} />
          <div className="historico-chuva">Precipitação: {hisBH6.forecast.forecastday[0].day.totalprecip_mm}mm</div>
        </div>
        
        </div>  
                </>
            )
        }

    
}

export default Historico;