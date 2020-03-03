import React from "react"
import logo from './../icon/logo-online.png'
import shopping from './../icon/shopping.svg'
function Topbar() {

    return (
        <div className="Topbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary text-light">
                <a class="navbar-brand text-light" href="#">Havilis</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav d-flex">
                        <a class="nav-item nav-link active text-light" href="#">Vols <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link text-light" href="#">Hôtels</a>
                        <a class="nav-item nav-link text-light" href="#">Vol+Hôtel</a>
                        <a class="nav-item nav-link text-light" href="#">Location de voitures</a>
                        <a class="nav-item nav-link text-light" href="#">Navettes et transferts</a>
                        <a class="nav-item nav-link text-light" href="#">Decouvertes et Experiences</a>
                    </div>
                    <a class="btn btn-light text-body border rounded ml-auto" href="#">Connexion</a>
                    <a className="btn text-light mr-1 btn-text ml-3" href="#" data-toggle="modal" data-target="#exampleModalCenter">Mon compte | Mes voyages</a>
                    <a className="btn btn-primary text-light btn-text float-rigth" data-toggle="modal" data-target="#exampleModalCenter">S'inscrire</a>
                    <a className="ml-1" data-toggle="modal" data-target="#exampleModalCenter">Aide</a>
                </div>
            </nav>
        </div>
    );
}

export default Topbar;