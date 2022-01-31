import React from "react";
import sun from "./sun.svg";


const Weekly =()=>{
    return(
        <td className='m-2'>
            <div className="container d-flex justify-content-start flex-column align-items-center">
                <img src={sun} width='183' alt=""/>
                <h2 className='m-0 text-uppercase p-2'>
                    day
                </h2>

                <h3 className='m-0 text-uppercase p-2'>
                    cloudy
                </h3>
                <h3 className='m-0 text-uppercase p-2'>
                    15
                </h3>
            </div>
        </td>
    )
}

export default Weekly