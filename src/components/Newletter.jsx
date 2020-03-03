import React from 'react'


function Newletter() {
    return (
        <div className="py-3 mt-5 container-fluid">
            <div className="d-flex flex-row-reverse justify-content-center bg-secondary">
                <div className="mt-3">
                    <form action="">
                        <div className="form-group d-flex">
                            <input type="text" name="" id="" className="news-input w-75" placeholder="Votre email" />
                            <button className="text-body mr-5 news-btn">S'abonner</button>
                        </div>
                    </form>
                </div>
                <div className="mr-auto d-flex flex-grow-1 text-light">
                    <i class="fas fa-paper-plane news-mail-icon"></i>
                    <p className="d-flex flex-column small mt-2">
                        Soyez le prémier à recévoir
                        <b><i class="fas fa-check text-light mt-1 mr-1"></i>Réductions sur les vols   <i class="fas fa-check text-light ml-2 mt-1 mr-1"></i>Codes promos   <i class="fas fa-check text-light ml-2 mt-1 mr-1"></i>Offres exclusives</b>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Newletter