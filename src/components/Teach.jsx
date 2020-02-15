import React from "react";
import teacher from './../images/teacher.jpg'

function Teach() {
    return (
        <div>
            <div className="d-flex container-fluid">
                <img src={teacher} className="adaa-techaer shadow" alt="" />
                <div className="row lg-business bg-light  h-50 my-5 py-4">
                    <div className="col-lg "></div>
                    <div className="col-lg ml-5">
                        <p className=" w-75 w-lg-75 py-2 ml-3 d-flex flex-column">
                            <b className="business-text"> Devenir formateur sur Adaa</b>
                            Nous regroupons sur cette plateforme, les meilleurs Experts de diverses specialtés. Nous vous offrons l'opportunitée, l'environnement technologique les outils nécessaires pour partager votre expertise avec le monde. Vous avez une expertise, rejoignez nous.
                        <button className="btn btn-primary mt-3 font-weight-bold w-75">Devenez formateur</button>
                        </p>
                    </div>
                </div >
            </div>
            <div className="row sm-business container-fluid">
                <div className="col-12 col-lg text-center container">
                    <img src={teacher} className="shadow" alt="" width="100%" />
                </div>
                <div className="col-12 col-lg bg-dark py-1">
                    <p className="d-flex flex-column text-center text-light">
                        <b className="business-text ">Devenir formateur sur Adaa</b>
                        <p>Nous regroupons sur cette plateforme, les meilleurs Experts de diverses specialtés. Nous vous offrons l'opportunitée, l'environnement technologique les outils nécessaires pour partager votre expertise avec le monde. Vous avez une expertise, rejoignez nous.</p>
                        <button className="btn btn-primary mt-3 font-weight-bold">Contactez Adaa</button>
                    </p>
                </div>
            </div >
        </div>

    );
}

export default Teach;