import React from "react";
import bigdata from './../icon/big-data.png'
import dw from './../icon/browser.png'
import blockchain from './../icon/blockchain.png'
import database from './../icon/database.png'
import download from './../icon/download.png'
import tv from './../icon/tv.png'
import malware from './../icon/malware.png'
import photo from './../icon/photography.png'
import ent from './../icon/owner.png'
import sm from './../icon/crm.png'
import bI from './../icon/idea.png'
import dm from './../icon/app.png'

function Bestof() {

    return (
        <div className="justify-content-center">
            <p className="text-center"> <h3 className="font-weight-bold">Catégories populaires.</h3> </p>
            <div className="row justify-content-center">
                <div className="col-lg-2 col-md-4 col-sm-4 border m-md-4 m-2 mx-5 mx-md-4 p-2 shadow col-md col-sm d-flex-inline ">
                    <img className="icon-b mt-1 float-left mr-1" src={bigdata} alt="" />
                    <p className="mt-2 ml-1">Big-data</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 border m-md-4 m-2 mx-5 mx-md-4 p-2 shadow col-md col-sm d-flex">
                    <img className="icon-b mt-1 float-left mr-1" src={blockchain} alt="" />
                    <p className="mt-2 ml-1" >BlockChain.</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 border m-md-4 m-2 mx-5 mx-md-4 p-2 shadow col-md col-sm d-flex">
                    <img className="icon-b mt-1 float-left mr-1" src={bI} alt="" />
                    <p className="mt-2 ml-1" >Business Intelligence</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 border m-md-4 m-2 mx-5 mx-md-4 p-2 shadow col-md col-sm d-flex">
                    <img className="icon-b mt-1 float-left mr-1" src={malware} alt="" />
                    <p className="mt-2 ml-1" >CyberSecurité</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 border m-md-4 m-2 mx-5 mx-md-4 p-2 shadow col-md col-sm d-flex">
                    <img className="icon-b mt-1 float-left mr-1" src={tv} alt="" />
                    <p className="mt-2 ml-1" >Design</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 border m-md-4 m-2 mx-5 mx-md-4 p-2 shadow col-md col-sm d-flex">
                    <img className="icon-b mt-1 float-left mr-1" src={dw} alt="" />
                    <p className="mt-2 ml-1" >Developpement Web</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 border m-md-4 m-2 mx-5 mx-md-4 p-2 shadow col-md col-sm d-flex">
                    <img className="icon-b mt-1 float-left mr-1" src={dm} alt="" />
                    <p className="mt-2 ml-1" >Developpement Mobile</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 border m-md-4 m-2 mx-5 mx-md-4 p-2 shadow col-md col-sm d-flex">
                    <img className="icon-b mt-1 float-left mr-1" src={ent} alt="" />
                    <p className="mt-2 ml-1" >Entreprenariat</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 border m-md-4 m-2 mx-5 mx-md-4 p-2 shadow col-md col-sm d-flex">
                    <img className="icon-b mt-1 float-left mr-1" src={database} alt="" />
                    <p className="mt-2 ml-1" >Gestion des BD</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 border m-md-4 m-2 mx-5 mx-md-4 p-2 shadow col-md col-sm d-flex">
                    <img className="icon-b mt-1 float-left mr-1" src={download} alt="" />
                    <p className="mt-2 ml-1" >Logiciel et ERP.</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 border m-md-4 m-2 mx-5 mx-md-4 p-2 shadow col-md col-sm d-flex">
                    <img className="icon-b mt-1 float-left mr-1" src={photo} alt="" />
                    <p className="mt-2 ml-1" >Photographie</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 border m-md-4 m-2 mx-5 mx-md-4 p-2 shadow col-md col-sm d-flex">
                    <img className="icon-b mt-1 float-left mr-1" src={sm} alt="" />
                    <p className="mt-2 ml-1" >Rélation client</p>
                </div>

            </div>
        </div>
    );
}

export default Bestof;