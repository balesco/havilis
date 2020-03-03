import React from 'react'
import Pstore from '../images/ps.jpg'
import Astore from '../images/as.png'

function Parteners({ title, name, desc, img }) {
    return (
        <div className="bg-success pt-1 container-fluid">
            <div className="row bg-light py-5">
                <div className="col mx-5 text-center d-flex flex-column">
                    <b>Remises exclusives sur l'appli Havelis!</b>
                    <p className="text-center">Téléchargez l'application gratuitement et obtenez les meilleures offres où que vous soyez!</p>
                    <div className="d-flex">
                        <img className="img-fluid" src={Pstore} alt="" />
                        <img className="img-fluid" src={Astore} alt="" />
                    </div>
                </div>
                <div className="col mx-5 text-center d-flex flex-column">
                    <b>Suivez-nous et restez informer!</b>
                    <p className="text-center mb-3">Rejoignez-nous ici pour recevoir des offres exclusives et dernières mises à jour:</p>
                    <div className="d-flex justify-content-center mt-4 pt-2">
                        <i class="p-icons mx-3 fab fa-facebook-square"></i>
                        <i class="p-icons mx-3 fab fa-whatsapp"></i>
                        <i class="p-icons mx-3 fab fa-twitter"></i>
                        <i class="p-icons mx-3 fab fa-instagram-square"></i>
                    </div>
                </div>
                <div className="col mx-5 text-center d-flex flex-column">
                    <b>Voyagez au meilleur prix </b>
                    <p className="text-center">
                        Notre agence de voyage vous propose de comparer le prix des billets d'avions parmi plus de 100 compagnies aériennes pour réserver un vol pas cher au tarif le plus intéressant.
                    </p>
                    <div className="d-flex">
                        <img className src="" alt="" />
                        <img className src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Parteners;