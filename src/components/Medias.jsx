import React from "react";
import Teach from "./Teach";
import Clients from './Clients';
import Business from "./Business";

function Medias() {

    return (
        <div className="justify-content-center bg-white pt-md-5 pt-0 pb-md-2 pb-0 my-md-4 mt-2">
            <div>
                <Teach />
            </div>
            <div className="py-md-5 py-2">
                <Clients />
            </div>
            <div className="m-md-1 m-0">
                <Business />
            </div>
        </div>
    );
}
export default Medias;