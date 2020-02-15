import React from "react";
import business from './../images/business.jpg'

function Business() {
    return (
        <div className="mb-0">
            <div className="d-flex ">
                <img src={business} className="adaa-business shadow" alt="" />
                <div className="row bg-secondary  h-50 mt-5 py-5 px-5 lg-business container-fluid">
                    <div className=" col col-lg ml-5 py-1 px-1">
                        <p className="w-75 ml-5 d-flex flex-column text-light">
                            <b className="business-text "> Adaa for Business</b>
                            <p>Reduisez vos coûts de formation et gagnez en flexibilité, en offrant au membre de votre équipe un accès illimité à plus de 2 000 cours parmi les meilleures d'Adaa.</p>
                            <button className="btn btn-primary mt-3 font-weight-bold w-75">Contactez Adaa</button>
                        </p>
                    </div>
                    <div className="col-lg ">
                    </div>
                </div >
            </div>
            <div className="row sm-business container-fluid">
                <div className="col-12 col-lg text-center container">
                    <img src={business} className="shadow" alt="" width="100%" />
                </div>
                <div className="col-12 col-lg bg-dark py-1">
                    <p className="d-flex flex-column text-center text-light">
                        <b className="business-text "> Adaa for Business</b>
                        <p>Reduisez vos coûts de formation et gagnez en flexibilité, en offrant au membre de votre équipe un accès illimité à plus de 2 000 cours parmi les meilleures d'Adaa.</p>
                        <button className="btn btn-primary mt-3 font-weight-bold">Contactez Adaa</button>
                    </p>
                </div>
            </div >
        </div>

    );
}

export default Business;