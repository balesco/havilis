import React from "react";
import bigdata from './../icon/big-data2.svg'
import ai from './../icon/ai.svg'
import brain from './../icon/brain.svg'
import blockchain from './../icon/blockchain.svg'
import conding from './../icon/drone.svg'
import database from './../icon/database.svg'
import download from './../icon/download.svg'
import tv from './../icon/tv.svg'
import project from './../icon/project-management.svg'
import photography from './../icon/photography.svg'
import market from './../icon/market.svg'
import malware from './../icon/malware.svg'

function Categories() {
    return (

        <div className="bg-primary pt-1 text-white">
            <div className="py-5 mb-4 container-fluid bg-categories justify-content-center">
                <div className="row justify-content-center d-flex">
                    <div className="col-lg-2 col-md-2 col-2 my-3 mx-1 text-center"><img alt="....." src={bigdata} class="icon-c" /></div>
                    <div className="col-lg-2 col-md-2 col-2 my-3 mx-1 text-center"><img alt="....." src={ai} class="icon-c" /></div>
                    <div className="col-lg-2 col-md-2 col-2 my-3 mx-1 text-center"><img alt="....." src={brain} class="icon-c" /></div>
                    <div className="col-lg-2 col-md-2 col-2 my-3 mx-1 text-center"><img alt="....." src={blockchain} class="icon-c" /></div>
                    <div className="col-lg-2 col-md-2 col-2 my-3 mx-1 text-center"><img alt="....." src={conding} class="icon-c" /></div>
                </div>
                <div className="row justify-content-center d-flex ">
                    <div className="col-lg-2 col-md-2 col-2 my-3 mx-1 text-center"><img alt="....." src={database} class="icon-c" /></div>
                    <div className="col-6 my-3 text-center align-self-center">
                        <p className="text-center">
                            <h4>Besoin d'assistance pour choisir vos formations ?</h4>
                            <p className="small"> Bénéficiez de l'assistance gratuite de nos Experts conseillers en repondant à quelques questions.</p>
                        </p>
                        <button className="btn btn-primary">Démarrez</button>
                    </div>
                    <div className="col-lg-2 col-md-2 col-2 my-3 mx-1 text-center"><img alt="....." src={download} class="icon-c" /></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-2 col-2 my-3 mx-1 text-center"><img alt="....." src={tv} class="icon-c" /></div>
                    <div className="col-lg-2 col-md-2 col-2 my-3 mx-1 text-center"><img alt="....." src={project} class="icon-c" /></div>
                    <div className="col-lg-2 col-md-2 col-2 my-3 mx-1 text-center"><img alt="....." src={photography} class="icon-c" /></div>
                    <div className="col-lg-2 col-md-2 col-2 my-3 mx-1 text-center"><img alt="....." src={malware} class="icon-c" /></div>
                    <div className="col-lg-2 col-md-2 col-2 my-3 mx-1 text-center"><img alt="....." src={market} class="icon-c" /></div>
                </div>
            </div>
        </div>

    );
}

export default Categories;