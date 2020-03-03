import React from 'react'
import Voyage from './Voyage';
import photo from '../formation_images/vols.png'
import photo1 from '../formation_images/chambre.png'
import photo2 from '../formation_images/voiture.png'
import photo3 from '../formation_images/voiture.png'
import photo4 from '../formation_images/carahib.jpg'
import photo5 from '../formation_images/canada.jpg'
import City from './City';

function Voyages() {
    return (
        <div className="px-5 py-2 Voyages">
            <h4 className="">Découvrez nos deals</h4>
            <div className="row mt-0 mb-3 pt-0 pb-2">
                <div className="col-lg-4 col-md-6 col-sm col">
                    <Voyage img={photo} title="Decouvrez les offres" name="À la recherche de vols moins chers ?" desc="Trouvez le vôtre maintenant" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm col">
                    <Voyage img={photo1} title="Decouvrez les offres" name="Vous désirez un cadre paisible ?" desc="Trouvez le confort et le calme qu'il vous faut" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm col">
                    <Voyage img={photo3} title="Decouvrez les offres" name="Envie de louer une voiture à petit prix ?" desc="Trouvez la voiture qu'il vous faut pour votre séjours" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm col">
                    <Voyage img={photo} title="Decouvrez les offres" name="voyage au carhibe" desc="le voyage de votre rêve" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm col">
                    <Voyage img={photo1} title="Decouvrez les offres" name="voyage au carhibe" desc="le voyage de votre rêve" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm col">
                    <Voyage img={photo3} title="Decouvrez les offres" name="voyage au carhibe" desc="le voyage de votre rêve" />
                </div>
            </div>
            <h1 className="bg-secondary text-light shadow my-5 px-4 py-2"><b>Les villes</b></h1>
            <div className="row my-3 py-5 bg-white ">
                <div className="col-lg-2 col-md-6 col-sm col">
                    <City img={photo} name="Shangaye" />
                </div>
                <div className="col-lg-2 col-md-6 col-sm col">
                    <City img={photo1} name="Douala" />
                </div>
                <div className="col-lg-2 col-md-6 col-sm col">
                    <City img={photo3} name="Ottawa" />
                </div>
                <div className="col-lg-2 col-md-6 col-sm col">
                    <City img={photo5} name="Paris" />
                </div>
                <div className="col-lg-2 col-md-6 col-sm col">
                    <City img={photo4} name="Geneve" />
                </div>
                <div className="col-lg-2 col-md-6 col-sm col">
                    <City img={photo2} name="Madrid" />
                </div>
            </div>
            <ul class="pagination justify-content-end">
                <li class="page-item"><a class="page-link" href="javascript:void(0);"><i class="fas fa-chevron-left"></i></a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">...</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);"><i class="fas fa-chevron-right"></i></a></li>
            </ul>
        </div>
    );
}
export default Voyages;