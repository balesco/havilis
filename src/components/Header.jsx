import React from "react";
import img from '../images/teacher.png'
import france from '../images/france.png'
import dubai from '../images/dubai.png'
import rang from '../images/range-rover.png'
import Calendar from './Calendar';
function Header() {
    return (
        <div className="Header">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators indic">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <Calendar />
                    <div className="carousel-item active h-75">
                        <div className="w-100 filtre-c">
                        </div>
                        <img className="d-block w-100" src={img} alt="First slide" />
                        <div className="carousel-caption text-light d-none d-md-block text-body caption border border-right-0 border-top-0 border-bottom-0 ">
                            <h5 className="text-light">Profitez d'experiences et decouvertes exceptionnelles </h5>
                            <button className="btn btn-light mt-3 text-body">Decouvrir les offres</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="w-100 h-100 filtre-c">
                        </div>
                        <img className="d-block w-100" src={dubai} alt="Second slide" />
                        <div className="carousel-caption text-light d-none d-md-block text-body caption border border-right-0 border-top-0 border-bottom-0 ">
                            <h5 className="text-light">Profitez d'experiences et decouvertes exceptionnelles </h5>
                            <button className="btn btn-light mt-3 text-body">Decouvrir les offres</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="w-100 h-100 filtre-c">
                        </div>
                        <img className="d-block w-100" src={france} alt="Third slide" />
                        <div className="carousel-caption text-light d-none d-md-block text-body caption border border-right-0 border-top-0 border-bottom-0 ">
                            <h5 className="text-light">À la recherche de vols moins chers ? </h5>
                            <p className="small text-light"><b className="small">Trouvez le vôtre maintenant</b></p>
                            <button className="btn btn-light mt-3 text-body">Réserver maintenant</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="w-100 h-100 filtre-c">
                        </div>
                        <img className="d-block w-100" src={rang} alt=" slide" />
                        <div className="carousel-caption text-light d-none d-md-block text-body caption border border-right-0 border-top-0 border-bottom-0 ">
                            <h5 className="text-light">Trouvez la voiture qu'il vous faut pour votre séjours</h5>
                            <button className="btn btn-light mt-3 text-body">Decouvrir les offres</button>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev carousel-icon-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next carousel-icon-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="bg-light text-body">
                <p className="text-center font-weight-bold mt-2">Trouvez des vols, réservez des chambres d'hôtel & destinations et trouvez une voiture pour votre séjours  </p>
                <div class="row justify-content-center mb-3">
                    <div class="col-md col-12 p-md-2 p-3 mx-md-3 d-flex text-center w-25 small"><i class="fas fa-check text-success mt-md-1 mr-md-1"></i>De nombreuses combinaisons de vols</div>
                    <div class="col-md col-12 p-md-2 p-3 mx-md-3 d-flex text-center w-25 small"><i class="fas fa-check text-success mt-md-1 mr-md-1"></i>Zero frais d'annulation sur les réservations faites le même jour (valide sur la majorité des vols)</div>
                    <div class="col-md col-12 p-md-2 p-3 mx-md-3 d-flex text-center w-25 small"><i class="fas fa-check text-success mt-md-1 mr-md-1"></i>Réservez sur plus de 100 compagnies aeriennes </div>
                    <div class="col-md col-12 p-md-2 p-3 mx-md-3 d-flex text-center w-25 small"><i class="fas fa-check text-success mt-md-1 mr-md-1"></i>Profitez des meilleurs deals sur les vols, séjours et activités</div>
                </div>
            </div>
        </div>
    );
}
export default Header;