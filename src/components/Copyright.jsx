import React from "react"
import logo from './../icon/iata.png'

function Copyright() {
    return (
        <div className="Copyright pt-2 px-5 pb-3 container-fluid d-inline-flex">
            <img className="" src={logo} alt="" width="90px" height="45px" />
            <p className="flex-grow-1 text-right small align-self-center"> © 2020 Adaa SAS. </p>
        </div>
    );
} export default Copyright