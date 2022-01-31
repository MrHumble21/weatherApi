import React, {useEffect, useState} from 'react';
import './main.css'
import sun from './sun.svg'
import clear from './clear.svg'
import cloudy from './cloudy.svg'
import snow from './snow.svg'
import rain from './rain.svg'

import Header from './Header'
import axios from "axios";

const Main = () => {
    const [city, setCity] = useState('tashkent')
    const [temp, setTemp] = useState('')
    const [search, setSearch] = useState('')
    const [humidity, setHumidity] = useState('')
    const [wind, setWind] = useState('')
    const [pressure, setpressure] = useState('')
    const [unix, setUnix] = useState('')
    const [description, setDescription] = useState('')

    const [icon, setIcon]=useState('02d')
    // ------------------------------------------------------
    // const []

    console.log(search)

    useEffect(async () => {
        const daily = await axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2db5fac2922568ea481cbaed3ce4389b`
        );

        setTemp(daily.data.main['temp'])
        setHumidity(daily.data.main['humidity'])
        setpressure(daily.data.main['pressure'])
        setWind(daily.data.wind['speed'])
        setDescription(daily.data.weather[0].description)

        setIcon(daily.data.weather[0].icon)

    });


    return (<>

            <div className='container  mb-3 mt-5 '>
                <div className="mb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 align-items-center d-flex">

                                <input type="text"
                                       onChange={(event) => setSearch(event.target.value)}
                                       className="form-control  btn-outline-info w-100  m-2text-dark"
                                       id="city"
                                       placeholder="Search..."/>
                                {/*<button className='btn m-2 btn-outline-info'*/}
                                {/*        type={"submit"}>Search*/}
                                {/*</button>*/}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container main-container pb-5">
                <div className='row'>
                    <div className="col-sm-12 ">
                        <div className="container d-flex justify-content-around">
                            <div className="container m-2">
                                <h3>Current weather</h3>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="container h-50 bg-transparent">
                            <ul className="list-group ">
                                <li className="list-group-item  d-flex justify-content-start flex-column align-items-center bg-transparent">
                                    <h4 style={{marginLeft: '15px'}}>
                                        {search.toUpperCase()}
                                    </h4>
                                    <h1 style={{marginLeft: '15px'}}>
                                        {Math.ceil(temp)}°
                                    </h1>
                                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                                         className='m-auto w-100' alt=""/>
                                    <h4 style={{marginLeft: '15px'}} className=''>{description}</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-8 d-flex justify-content-center align-items-center">
                        <table
                            className='table table-light table-bordered w-75 text-uppercase table-hover m-4'>
                            <tbody>
                            <tr>
                                <td className='fs-5'>Humidity</td>
                                <td><b>{humidity}%</b></td>
                            </tr>
                            <tr>
                                <td>Wind</td>
                                <td><b className='fs-5'>{wind}</b> - <b>kph</b></td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>{pressure} - hPa</td>
                            </tr>
                            </tbody>
                        </table>


                    </div>
                </div>


            </div>

        </>

    );
}


export default Main