import React from "react"

function Footer() {
    return (

        <div className="row mt-md-5 pt-md-5 pt-2 pb-md-4 border border-left-0 border-right-0 border-bottom-0 justify-content-center">
            <div className="row container col-lg-3 col-md-6 col-sm-6">
                <div className="col-12 my-1">
                    <div className="col-12 my-1 ">
                        <div className="justify-content-start d-flex flex-column small">
                            <a className="float-right text-body" href="#">Adaa for business</a>
                            <a className="float-right text-body" href="#">Enseigner sur Adaa</a>
                            <a className="float-right text-body" href="#">Application Adaa</a>
                            <a className="float-right text-body" href="#">À propos de Adaa</a>
                            <a className="float-right text-body" href="#">Contacter Adaa</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row col-lg-3 col-md-6 col-sm-6">
                <div className="col-12 my-1 ">
                    <div className="col-12 my-1 ">
                        <div className="justify-content-start d-flex flex-column small">
                            <a className="float-right text-body" href="#"> Carrières</a>
                            <a className="float-right text-body" href="#"> Blog</a>
                            <a className="float-right text-body" href="#"> Aide et support</a>
                            <a className="float-right text-body" href="#"> Affilié </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row col-lg-3 col-md-6 col-sm-6">
                <div className="col-12 my-1 ">
                    <div className="col-12 my-1 ">
                        <div className="d-flex flex-column justify-content-start small">
                            <a className="float-right text-body " href="#"> Plan du site</a>
                            <a className="float-right text-body " href="#"> Cours à l'affiche</a>
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
    );
}

export default Footer;