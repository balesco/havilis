import React from "react"

function Infos() {

    return (
        <div className="container-fluid my-md-5 my-3 px-2 py-md-5 py-2 bg-light">
            <div className="row justify-content-center mx-1">
                <div className="col-lg m-1 pt-3 border col-md-6 col-sm-12 bg-primary d-flex shadow">
                    <div className="d-flex"><i class="fas fa-history icon-info text-light mr-3 mt-1"></i></div>
                    <p className="text-light">
                        <h4 className="">
                            <b className="info-text font-weight-bold">
                                Avancez à votre rythme <br /><br />
                            </b>
                        </h4>
                        De façon illimitée, où que vous soyez et quand vous voulez (7j/7 et 24h/24) accedez en toute liberté à vos formations.
                    </p>
                </div>
                <div className="col-lg m-1 pt-3 border col-md-6 col-sm-12 bg-primary d-flex shadow">
                    <div className="d-flex"><i class="fas fa-user-tie icon-info text-light mr-3 mt-1"></i></div>
                    <p className="text-light ">
                        <h4>
                            <b className="info-text font-weight-bold">
                                Formez-vous avec les meilleurs Experts du secteur
                            </b>
                        </h4>
                        Pour la même formation, nous offrons une diversitée de choix conçue par différents Experts.
                    </p>
                </div>
                <div className="col-lg m-1 pt-3 border col-md-6 col-sm-12 bg-primary d-flex shadow">
                    <div className="d-flex"><i class="far fa-play-circle icon-info text-light mr-3 mt-1"></i></div>
                    <p className="text-light ">
                        <h4>
                            <b className="info-text font-weight-bold">
                                Profitez des supports de qualité (videos, docs, forum)
                            </b>
                        </h4>
                        Constituez votre bibliothèque personnelle consultable en tout temps, ceci sans aucune restriction.
                    </p>
                </div>
                <div className="col-lg m-1 pt-3 border col-md-6 col-sm-12 bg-primary d-flex shadow">
                    <div className="d-flex"><i class="fas fa-credit-card icon-info text-light mr-3 mt-1"></i></div>
                    <p className="text-light">
                        <h4>
                            <b className="info-text font-weight-bold">
                                Payez avec le moyen de votre choix<br />
                            </b>
                        </h4>
                        Cartes bancaires (Visa, MasterCard,...), Mobile money (Orange Money, MTN Mobile Money, Airtel Money,Tigo Cash,...), etc...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Infos