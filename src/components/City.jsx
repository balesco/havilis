import React from 'react'

function City({ name, img }) {
    return (
        <div className="border shadow my-2">
            <p className="text-right text-body bg-light mt-1 font-weight-bold city-name"><b>{name}</b></p>
            <img className="img-fluid" src={img} alt="..." />
        </div>
    );
}
export default City;