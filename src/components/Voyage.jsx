import React from 'react'

function Voyage({ title, name, desc, img }) {
    return (
        <div className="border shadow my-4">
            <img className="img-fluid" src={img} alt="..." />
            <div className="d-flex flex-column bg-white border px-2 border-left-0 border-right-0 border-bottom-0">
                <h4 className="text-body font-weight-bold voy-name">{name}</h4>
                <p>{desc}</p>
                <p className="text-right">
                    <button className="btn btn-dark">{title}</button>
                </p>
            </div>
        </div>
    );
}
export default Voyage;