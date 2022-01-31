import React from "react";
import logo from './1.svg'

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="60"
                         height="60"/>
                </a>
                <h1 className="nav-brand">React weather</h1>
            </div>
        </nav>
    )
}
export default Header