import React from "react"
import Formation from "./Formation";
import eh from './../formation_images/eh.jpg'
import dw from './../formation_images/dw.jpg'
import ia from './../formation_images/ia.jpg'
import wp from './../formation_images/wp.jpg'
import gc from './../formation_images/gc.png'
import seo from './../formation_images/seo.jpg'
import vf from './../formation_images/vf.jpg'
import af from './../formation_images/af.jpg'
import pp from './../formation_images/pp.jpg'
import ssl from './../formation_images/ssl.jpg'

function Consultant() {
    return (
        <div className="container-fluid pt-md-4 pt-2 pb-4 " >
            <p className="text-center text-md-left ml-md-2"><h3><b>Les participants consultent</b></h3></p>
            <div id="large-consultats-slide" className="mx-1 carousel slide lg-slide" data-ride="carousel">
                <div className="carousel-inner px-3">
                    <div className="carousel-item shadow-none active" data-interval="60000">
                        <div className="row">
                            <div className="col-lg px-2">
                                <Formation img={eh} note="3.5" name="Hacking Éthique : Maîtrisez les techniques de base" teacher="Hervé Kenfack" fee="13.99" />
                            </div>
                            <div className="col-lg px-2">
                                <Formation img={dw} note="0.5" name="Développeur Web: Formation complète" teacher="Dominique Lanoix" fee="11.99" />
                            </div>
                            <div className="col-lg px-2">
                                <Formation img={ia} note="4" name="Intelligence Artificielle de A à Z" teacher="François Bayegle" fee="10" />
                            </div>
                            <div className="col-lg px-2">
                                <Formation img={wp} note="1" name="Créez son site internet avec WordPress - Initiation" teacher="William Kathleen" fee="24.99" />
                            </div>
                            <div className="col-lg px-2">
                                <Formation img={gc} note="3" name="Gestion des conflits avec confiance et élégance" teacher="Parfait Mombo" fee="11.99" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item shadow-none" data-interval="60000">
                        <div className="row">
                            <div className="col-lg px-2">
                                <Formation img={seo} note="5" name="Développer son trafic grâce au référencement naturel SEO" teacher="Giovani Gali" fee="17.99" />
                            </div>
                            <div className="col-lg px-2">
                                <Formation img={vf} note="3.5" name="Developpez vos ventes avec Facebook" teacher="Boris Nonga" fee="25" />
                            </div>
                            <div className="col-lg px-2">
                                <Formation img={af} note="3.3" name="After Effects CC: Formation Complète" teacher="Idris Djeukemnang" fee="50" />
                            </div>
                            <div className="col-lg px-2">
                                <Formation img={pp} note="4.5" name="Devenez photographe portraitiste professionnel" teacher="Michel Ngassa" fee="19.99" />
                            </div>
                            <div className="col-lg px-2">
                                <Formation img={ssl} note="2.8" name="Social Selling: Prospectez et vendre avec LinkedIn" teacher="Stephane Eteme" fee="14.99" />
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-dark mr-5 pr-5 pb-5" href="#large-consultats-slide" role="button" data-slide="prev">
                    <div className="border rounded-circle mr-5 mb-5 px-3 py-2 bg-light">
                        <i class="fas fa-chevron-left"></i>
                        <span className="sr-only">Previous</span>
                    </div>
                </a>
                <a className="carousel-control-next text-dark ml-5 pl-5 pb-5" href="#large-consultats-slide" role="button" data-slide="next">
                    <div className="border rounded-circle ml-5 mb-5 px-3 py-2 bg-light">
                        <i class="fas fa-chevron-right "></i>
                        <span className="sr-only">Next</span>
                    </div>
                </a>
            </div>
            <div id="small-consultants" class="carousel slide sm-slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item shadow-none active" data-interval="10000">
                        <Formation note="3.5" img={eh} name="Hacking Éthique : Maîtrisez les techniques de base" teacher="Hervé Kenfack" fee="13.99" />
                    </div>
                    <div className="carousel-item shadow-none" data-interval="10000">
                        <Formation note="2" img={dw} name="Développeur Web: Formation complète" teacher="Dominique Lanoix" fee="11.99" />
                    </div>
                    <div className="carousel-item shadow-none" data-interval="10000">
                        <Formation note="4" img={ia} name="Intelligence Artificielle de A à Z" teacher="François Bayegle" fee="10" />
                    </div>
                    <div className="carousel-item shadow-none" data-interval="10000">
                        <Formation note="1" img={wp} name="Créez son site internet avec WordPress - Initiation" teacher="William Kathleen" fee="24.99" />
                    </div>
                    <div className="carousel-item shadow-none" data-interval="10000">
                        <Formation note="3" img={gc} name="Gestion des conflits avec confiance et élégance" teacher="Parfait Mombo" fee="11.99" />
                    </div>
                    <div className="carousel-item shadow-none" data-interval="10000">
                        <Formation note="5" img={seo} name="Développer son trafic grâce au référencement naturel SEO" teacher="Giovani Gali" fee="17.99" />
                    </div>
                    <div className="carousel-item shadow-none" data-interval="10000">
                        <Formation note="3.5" img={vf} name="Developpez vos ventes avec Facebook" teacher="Boris Nonga" fee="25" />
                    </div>
                    <div className="carousel-item shadow-none" data-interval="10000">
                        <Formation note="3.3" img={af} name="After Effects CC: Formation Complète" teacher="Idris Djeukemnang" fee="50" />
                    </div>
                    <div className="carousel-item shadow-none" data-interval="10000">
                        <Formation note="4.5" img={pp} name="Devenez photographe portraitiste professionnel" teacher="Michel Ngassa" fee="19.99" />
                    </div>
                    <div className="carousel-item shadow-none" data-interval="10000">
                        <Formation note="2.8" img={ssl} name="Social Selling: Prospectez et vendre avec LinkedIn" teacher="Stephane Eteme" fee="14.99" />
                    </div>
                    <a className="carousel-control-prev text-dark pb-5" href="#small-consultants" role="button" data-slide="prev">
                        <div className="border rounded-circle mr-2 mb-5 px-3 py-2 bg-light">
                            <i class="fas fa-chevron-left"></i>
                            <span className="sr-only">Previous</span>
                        </div>
                    </a>
                    <a className="carousel-control-next text-dark pb-5" href="#small-consultants" role="button" data-slide="next">
                        <div className="border rounded-circle ml-2 mb-5 px-3 py-2 bg-light">
                            <i class="fas fa-chevron-right "></i>
                            <span className="sr-only">Next</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );

}

export default Consultant;