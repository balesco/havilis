import React from "react";
import './Formation'
import Formation from "./Formation";
import cm from './../formation_images/CM.jpg'
import java from './../formation_images/java.jpg'
import ds from './../formation_images/DS.jpg'
import wd from './../formation_images/wd.jpg'
import dp from './../formation_images/dp.jpg'
import jv from './../formation_images/jv.jpg'
import ao from './../formation_images/ao.jpg'
import devA from './../formation_images/devA.jpg'
import ph from './../formation_images/photographie.jpg'
import tb from './../formation_images/tb.jpg'
function Formations() {
    return (
        <div className="formations mt-md-5 mt-2">
            <p className="ml-4 w-75 text-md-left lg-business"><b><h4 className="font-weight-bold d-flex">Venez comme vous êtes: Boostez vos compétences et productivité</h4></b>Suivant vos sujets d'apprentissage, choissez parmi plus de 10 000 formations <br />réparties en plus de 22 spécialités.</p>
            <p className="sm-business"><b><h4 className="font-weight-bold px-4">Venez comme vous êtes: Boostez vos compétences et productivité</h4></b><p className="px-4">Suivant vos sujets d'apprentissage, choissez parmi plus de 10 000 formations réparties en plus de 22 spécialités.</p></p>
            <div className="row px-2">
                <div className="col-lg-12 col-md col-sm">
                    <ul class="nav mb-2 mx-2 border border-top-0 border-left-0 border-right-0">
                        <li class="nav-item">
                            <a class="nav-link text-body font-weight-bold active" href="#">Tous</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black-50 font-weight-bold" href="#">Developpement Web</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black-50 font-weight-bold" href="#">Social Media Management</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black-50 font-weight-bold" href="#">Photographie</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black-50 font-weight-bold" href="#">Developpement Mobile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black-50 font-weight-bold" href="#">Design et graphisme</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black-50 font-weight-bold" href="#">Trading</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black-50 font-weight-bold" href="#">CyberSécurité</a>
                        </li>
                    </ul>
                    <div id="carouselExampleInterval6" className="mx-2 carousel slide lg-slide" data-ride="carousel">
                        <div className="carousel-inner px-3">
                            <div className="carousel-item shadow-none active" data-interval="60000">
                                <div className="row">
                                    <div className="col-lg px-2">
                                        <Formation img={ds} name="Créer un E-commerce qui CARTONNE en Dropshipping" teacher="Steve Bleriot" fee="12.99" />
                                    </div>
                                    <div className="col-lg px-2">
                                        <Formation img={wd} name="Devenir Web Designer -formation compléte" teacher="Maxime Yamsi" fee="10" />
                                    </div>
                                    <div className="col-lg px-2">
                                        <Formation img={cm} name="Community management & réseaux sociaux, les bonnes..." teacher="William Abdoulaye" fee="19.5" />
                                    </div>
                                    <div className="col-lg px-2">
                                        <Formation img={jv} name="Devenez un developpeur de jeux videos: Formation comp.." teacher="Willson D" fee="20" />
                                    </div>
                                    <div className="col-lg px-2">
                                        <Formation img={dp} name="Developpement python: Formation-initiation" teacher="Harold Tamo" fee="10.99" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item shadow-none" data-interval="60000">
                                <div className="row">
                                    <div className="col-lg px-2">
                                        <Formation img={java} name="Developpement orient objet : initialisation (JAVA)" teacher="Gabriel Tendong" fee="15.5" />
                                    </div>
                                    <div className="col-lg px-2">
                                        <Formation img={devA} name="Devenez developpeur mobile : Android & Kotlin" teacher="Diop Mouhammed" fee="24.99" />
                                    </div>
                                    <div className="col-lg px-2">
                                        <Formation img={ph} name="Formation à la photographie pour les débutants" teacher="David Bongo" fee="11" />
                                    </div>
                                    <div className="col-lg px-2">
                                        <Formation img={ao} name="Art oratoire: S'approprier l'art de parler en public" teacher="Brice Kamgang" fee="29.99" />
                                    </div>
                                    <div className="col-lg px-2">
                                        <Formation img={tb} name="Excel: Créer votre tableau de bord interactif de A à Z" teacher="Patrick Mbenoun" fee="10.99" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev text-dark mr-5 pr-5 pb-5" href="#carouselExampleInterval6" role="button" data-slide="prev">
                            <div className="border rounded-circle mr-5 mb-5 px-3 py-2 bg-light">
                                <i class="fas fa-chevron-left"></i>
                                <span className="sr-only">Previous</span>
                            </div>
                        </a>
                        <a className="carousel-control-next text-dark ml-5 pl-5 pb-5" href="#carouselExampleInterval6" role="button" data-slide="next">
                            <div className="border rounded-circle ml-5 mb-5 px-3 py-2 bg-light">
                                <i class="fas fa-chevron-right "></i>
                                <span className="sr-only">Next</span>
                            </div>
                        </a>
                    </div>
                    <div id="small-formations" class="carousel slide sm-slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item shadow-none active" data-interval="10000">
                                <Formation img={ds} name="Créer un E-commerce qui CARTONNE en Dropshipping" teacher="Steve Bleriot" fee="12.99" />
                            </div>
                            <div className="carousel-item shadow-none" data-interval="10000">
                                <Formation img={wd} name="Devenir Web Designer -formation compléte" teacher="Maxime Yamsi" fee="10" />
                            </div>
                            <div className="carousel-item shadow-none" data-interval="10000">
                                <Formation img={cm} name="Community management & réseaux sociaux, les bonnes..." teacher="William Abdoulaye" fee="19.5" />
                            </div>
                            <div className="carousel-item shadow-none" data-interval="10000">
                                <Formation img={jv} name="Devenez un developpeur de jeux videos: Formation comp.." teacher="Willson D" fee="20" />
                            </div>
                            <div className="carousel-item shadow-none" data-interval="10000">
                                <Formation img={dp} name="Developpement python: Formation-initiation" teacher="Harold Tamo" fee="10.99" />
                            </div>
                            <div className="carousel-item shadow-none" data-interval="10000">
                                <Formation img={java} name="Developpement orient objet : initialisation (JAVA)" teacher="Gabriel Tendong" fee="15.5" />
                            </div>
                            <div className="carousel-item shadow-none" data-interval="10000">
                                <Formation img={devA} name="Devenez developpeur mobile : Android & Kotlin" teacher="Diop Mouhammed" fee="24.99" />
                            </div>
                            <div className="carousel-item shadow-none" data-interval="10000">
                                <Formation img={ph} name="Formation à la photographie pour les débutants" teacher="David Bongo" fee="11" />
                            </div>
                            <div className="carousel-item shadow-none" data-interval="10000">
                                <Formation img={ao} name="Art oratoire: S'approprier l'art de parler en public" teacher="Brice Kamgang" fee="29.99" />
                            </div>
                            <div className="carousel-item shadow-none" data-interval="10000">
                                <Formation img={tb} name="Excel: Créer votre tableau de bord interactif de A à Z" teacher="Patrick Mbenoun" fee="10.99" />
                            </div>
                            <a className="carousel-control-prev text-dark pb-5" href="#small-formations" role="button" data-slide="prev">
                                <div className="border rounded-circle mr-2 mb-5 px-3 py-2 bg-light">
                                    <i class="fas fa-chevron-left"></i>
                                    <span className="sr-only">Previous</span>
                                </div>
                            </a>
                            <a className="carousel-control-next text-dark pb-5" href="#small-formations" role="button" data-slide="next">
                                <div className="border rounded-circle ml-2 mb-5 px-3 py-2 bg-light">
                                    <i class="fas fa-chevron-right "></i>
                                    <span className="sr-only">Next</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Formations;