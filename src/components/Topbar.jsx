import React from "react"
import logo from './../icon/logo-online.png'
import shopping from './../icon/shopping.svg'
function Topbar() {

    return (
        <div className="">
            <nav className="navbar d-flex flex-row-reverse lg-menu navbar-expand-sm bg-white navbar-light">
                <ul className="navbar-nav container-fluid">
                    <li className="nav-item active App-logo justify-content-start">
                        <span className="">
                            <img className="float-left rounded logo" src={logo} alt="..." height="60px"></img>
                        </span>
                    </li>
                    <li className="nav-item d-flex justify-content-center">
                        <span><i class="fas fa-th align-self-center cat-icon"></i></span>
                        <h5 className="align-middle align-self-center cat-text">Catégories</h5>
                    </li>
                    <li className="nav-item mx-sm-5 mt-2">
                        <div class="input-group mb-3 mt-2">
                            <input type="text" class="form-control bg-light border-right-0 search-text" placeholder="Rechercher" />
                            <div class="input-group-append">
                                <button class="btn btn-light border boder-left-0 text-primary" type="submit"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item cat-text d-flex mr-2">
                        <a className="text-secondary mr-3" href="#"> Adaa for Business</a>

                        <a className="text-secondary" href="#"> Enseigner sur Adaa</a>
                    </li>
                    <li className="nav-item mt-2 align-middle">
                        <div className="float-right mr-2">
                            <span className=" mt-3"><img src={shopping} className="shop-icon mr-3" alt="..." /></span>
                            <a className="btn border text-dark mr-1 btn-text" href="#">Se connecter</a>
                            <a className="btn btn-primary text-light btn-text">S'inscrire</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <nav class=" container navbar navbar-expand-lg navbar-light small-menu">
                <a class="navbar-brand" href="#"><img className="rounded" src={logo} alt="..." height="60px"></img></a>
                <button class="navbar-toggler float-right m-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link border border-top-0 border-left-0 border-right-0 mx-3" href="#">Acceuil<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border border-top-0 border-left-0 border-right-0 mx-3" href="#">Catégories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border border-top-0 border-left-0 border-right-0 mx-3" href="#">Adaa for Business</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border border-top-0 border-left-0 border-right-0 mx-3" href="#">Devenez formateur</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border border-top-0 border-left-0 border-right-0 mx-3" href="#">Se connecter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border border-top-0 border-left-0 border-right-0 mx-3" href="#">S'inscrire</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border border-top-0 border-left-0 border-right-0 mx-3" href="#">Contacter Adaa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border border-top-0 border-left-0 border-right-0 mx-3" href="#">Aide et Support</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Topbar;