import React from "react"

function Formation({ name, teacher, fee, img }) {
    return (
        <div className="h-100">
            <figure className="">
                <img className="img-fluid rounded" src={img} alt="" />
            </figure>
            <div className="px-2">
                <p className="d-flex flex-column">
                    <b> {name}</b>
                    <span className="text-black-50 small mt-1">{teacher}</span>
                    <span className="text-warning mt-1 small d-flex"><b className="mt-2"></b> <i class="fas fa-star align-self-center small"></i><i class="fas fa-star align-self-center small"></i><i class="fas fa-star align-self-center small"></i><i class="fas fa-star align-self-center small"></i><i class="fas fa-star-half-alt align-self-center small mr-2"></i> <p className="text-black-50 align-self-center mt-3">4/5 (12 avis)</p></span>
                    <b className="mt-1">{fee} $US</b>
                </p>
            </div>
        </div>
    );
}

export default Formation;