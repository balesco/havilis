import React from "react"

function Footer() {
    return (
        <div className="container-fluid Footer">
            <div className="row mt-md-5 pt-md-5 pt-2 pb-md-4 border border-left-0 border-right-0 border-bottom-0 justify-content-center footer-filter">
                <div className="row  col-lg-3 col-md-6 col-sm-6 ">
                    <div className="col-12 my-1">
                        <div className="col-12 my-1 ">
                            <h5 className="text-body border border-top-0 border-right-0 border-left-0"><b>À PROPOS</b></h5>
                            <div className="justify-content-start font-weight d-flex flex-column">
                                <a className="float-right text-light " href="#" data-toggle="modal" data-target="#exampleModalCenter">Application Havilis</a>
                                <a className="float-right text-light " href="#" data-toggle="modal" data-target="#exampleModalCenter">À propos de Havilis</a>
                                <a className="float-right text-light " href="#" data-toggle="modal" data-target="#exampleModalCenter">Contacter nous</a>
                                <a className="float-right text-light " href="#" data-toggle="modal" data-target="#exampleModalCenter"> Carrières</a>
                                <a className="float-right text-light " href="#" data-toggle="modal" data-target="#exampleModalCenter"> Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row col-lg-3 col-md-6 col-sm-6">
                    <div className="col-12 my-1 ">
                        <div className="col-12 my-1 ">
                            <h5 className="text-body border border-top-0 border-right-0 border-left-0"><b>Aide</b></h5>
                            <div className="justify-content-start d-flex flex-column">
                                <a className="float-right text-light " href="#" data-toggle="modal" data-target="#exampleModalCenter"> Aide et support</a>
                                <a className="float-right text-light  " href="#" data-toggle="modal" data-target="#exampleModalCenter"> Plan du site</a>
                                <a className="float-right text-light  " href="#" data-toggle="modal" data-target="#exampleModalCenter"> Voyage à l'affiche</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row col-lg-3 col-md-6 col-sm-6">
                    <div className="col-12 my-1 ">
                        <div className="col-12 my-1 ">
                            <h5 className="text-body border border-top-0 border-right-0 border-left-0"><b>Travailler avec nous</b></h5>
                            <div className="d-flex flex-column justify-content-starn">
                                <a className="float-right text-light " href="#" data-toggle="modal" data-target="#exampleModalCenter"> Affilié </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row col-lg-3 col-md-6 col-sm-6">
                    <div className="col-12 my-1 ">
                        <div className="col-12 my-1 ">
                            <h5 className="text-body border border-top-0 border-right-0 border-left-0"><b>Mention Légales</b></h5>
                            <div className="d-flex flex-column justify-content-starn">
                                <a className="float-right text-light " href="#" data-toggle="modal" data-target="#exampleModalCenter">Condition générales de vente</a>
                                <a className="float-right text-light " href="#" data-toggle="modal" data-target="#exampleModalCenter">Politique de confidentialité</a>
                                <a className="float-right text-light " href="#" data-toggle="modal" data-target="#exampleModalCenter">Politique de cookies</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row col-lg-3 col-md-6 col-sm-6">
                    <div className="col-12 my-1 container p-md-5 py-2 px-5">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button className="btn btn-primary text-light" type="button">Langue</button>
                            </div>
                            <select className="form-control" id="sel1">
                                <option>Français</option>
                                <option>Anglais</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;