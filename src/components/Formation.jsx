import React from "react"

function Formation({ name, teacher, fee, img, note }) {
    let int_note = parseInt(note);
    let half = note % int_note;
    let off = parseInt(5 - (int_note + half));
    let star = [];
    let off_stars = [];
    for (let index = 0; index < int_note; index++) {
        star[index] = <i class="fas fa-star align-self-center small"></i>;
    }
    for (let index = 0; index < off; index++) {
        off_stars[index] = <i class="fas fa-star align-self-center text-black-50 small"></i>;
    }
    let half_stars = [];
    if (half > 0) {
        half_stars[0] = <i class="fas fa-star-half-alt align-self-center small"></i>;
    }
    return (
        <div className="h-100">
            <figure className="">
                <img className="img-fluid rounded" src={img} alt="" />
            </figure>
            <div className="px-2">
                <p className="d-flex flex-column">
                    <b> {name}</b>
                    <span className="text-black-50 small mt-1">{teacher}</span>
                    <span className="text-warning d-inline-flex"><b className="mt-2"></b>{star}{half_stars}{off_stars}<p className="text-black-50 align-self-center ml-2 mt-3">{note}/5 (12 avis)</p></span>
                    <b className="mt-1">{fee} $US</b>
                </p>
            </div>
        </div>
    );
}

export default Formation;