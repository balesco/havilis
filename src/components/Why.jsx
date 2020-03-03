import React from 'react'

function Why() {
    return (
        <div id="carousel-Why" class="carousel slide mt-5 pb-5 bg-why container-fluid" data-ride="carousel">
            <p className="text-center text-light"><h1>About Us</h1></p>
            <div class="carousel-inner my-5">
                <div class="carousel-item active">
                    <div className="row text-light">
                        <div className="col d-flex text-center mx-4 flex-column">
                            <i class="fas fa-rocket why-icon"></i>
                            <h4 className="mt-3 text-body font-weight-bold">Contrôle de bagages à main</h4>
                            <p className="w-5 text-center text-body">Besoin de savoir si votre bagage à main rentrera à bord? Scannez votre sac avec votre téléphone pour vérifier s'il correspond aux exigences de votre compagnie aérienne.</p>
                        </div>
                        <div className="col d-flex text-center mx-4 flex-column">
                            <i class="fas fa-plane why-icon"></i>
                            <h4 className="mt-3 text-body font-weight-bold">Suivez les vol en direct</h4>
                            <p className="w-5 text-center text-body">Toutes le informations sur n'importe quel vol, partout dans monde entier, peu importe où que vous soyez.</p>
                        </div>
                        <div className="col d-flex text-center mx-4 flex-column">
                            <i class="fas fa-shield-alt why-icon"></i>
                            <h4 className="mt-3 text-body font-weight-bold">Code Réduction aux Abonnés</h4>
                            <p className="w-5 text-center text-body">Économisez encore plus sur votre voyage en réservant dans l'application avec nos codes de réduction exclusifs uniquement pour les abonnées.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="row text-light">
                        <div className="col d-flex text-center mx-4 flex-column">
                            <i class="fas fa-medal why-icon"></i>
                            <h4 className="mt-3 text-body font-weight-bold">Faites tous vos réservations</h4>
                            <p className="w-5 text-center text-body">Demandez à l'avance toutes vos cartes d'embarquement en une seule fois, puis nous effectuons tous les enregistrements pour vous lorsqu'ils s'ouvrent et vous envoyons par e-mail chaque carte d'embarquement.</p>
                        </div>
                        <div className="col d-flex text-center mx-4 flex-column">
                            <i class="fas fa-crown why-icon"></i>
                            <h4 className="mt-3 text-body font-weight-bold">Ne manquez pas les alertes vols</h4>
                            <p className="w-5 text-center text-body">Mises à jour gratuites et en temps réel de vos horaires de vol, du numéro de la porte d'embarquement, de la ceinture pour récupérer vos bagages, etc.</p>
                        </div>
                        <div className="col d-flex text-center mx-4 flex-column">
                            <i class="far fa-comments why-icon"></i>
                            <h4 className="mt-3 text-body font-weight-bold">Plus d'options de voyage.</h4>
                            <p className="w-5 text-center text-body">Compare plus des milliers d'options d'hébergement, plus de 500 sociétés de location de voitures et plus de 100 compagnies aériennes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Why;