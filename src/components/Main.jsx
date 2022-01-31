import React, {useEffect, useState} from 'react';
import './main.css'
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
    const [bg, setBg] = useState('btn-outline-light')
    const [btn, setBtn] = useState('bg-light')
    const [message, setMessage] = useState('Please search a city 👀')

    const [icon, setIcon] = useState('02d')
    const [text, setText] = useState('text-black')
    const [light, setLight] = useState('main-container')
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

        setMessage('')

    });


    return (<>

            <div className='container    mb-3 mt-5 '>
                <div className='d-flex justify-content-between text-center m-5'>
                    {/*--------------------------*/}
                    <a onClick={()=>{
                        setBtn('btn-outline-dark')
                        setBg('bg-dark')
                        setText('text-white')
                        setLight('dark-container')
                        document.body.style.backgroundColor = 'black'
                    }} href="#">
                        <i className="fas fs-3 fa-moon">
                            Dark
                        </i>
                    </a>

                    {/*--------------------------*/}
                    <a onClick={()=>{
                        setBtn('btn-outline-light')
                        setBg('bg-light')
                        setText('text-black')
                        document.body.style.backgroundColor = 'white'
                    }} href="#">
                        <i className="fas  fs-3 fa-sun">
                            light
                        </i>
                    </a>
                </div>
                <div className="mb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 align-items-center d-flex">

                                <input type="text"
                                       onChange={(event) => setSearch(event.target.value)}
                                       className={`form-control  ${bg} ${btn} w-100  m-2text-dark`}
                                       id="city"
                                       placeholder="Search City or Country"/>
                                {/*<button className='btn m-2 btn-outline-info'*/}
                                {/*        type={"submit"}>Search*/}
                                {/*</button>*/}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={`container ${light} pb-5`}>
                <div className='row'>
                    <div className="col-sm-12 ">
                        <div className="container d-flex justify-content-around">
                            <div className="container m-2">
                                <h3 className='text-center'>{message.toUpperCase()}</h3>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="container h-50 bg-transparent">
                            <ul className="list-group ">
                                <li className="list-group-item  d-flex justify-content-start flex-column align-items-center bg-transparent">
                                    <h4 className={`${text}`} style={{marginLeft: '15px'}}>
                                        {search.toUpperCase()}
                                    </h4>
                                    <h1 className={`text-black ${text}`} style={{marginLeft: '15px'}}>
                                        {Math.ceil(temp)}°
                                    </h1>
                                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                                         className='m-auto w-50' alt=""/>
                                    <h4 className={text} style={{marginLeft: '15px'}} className=''>{description}</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-8 d-flex justify-content-center align-items-center">
                        <table
                            className='table  table-bordered w-75 text-uppercase table-hover m-4'>
                            <tbody>
                            <tr>
                                <td className='fs-5'><h3 className={`${text}`}>Humidity</h3></td>
                                <td><h3 className={`${text}`}>{humidity}%</h3></td>
                            </tr>
                            <tr>
                                <td><h3 className={`${text}`}>Wind</h3></td>
                                <td><h3 className={`${text}`}>{wind} - kph</h3></td>
                            </tr>
                            <tr>
                                <td><h3 className={`${text}`}>Pressure</h3></td>
                                <td><h3 className={`${text}`}>{pressure} - hPa</h3></td>
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