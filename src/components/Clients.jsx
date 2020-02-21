import React from "react";
import bigdata from './../icon/sabc.png';
import brain from './../icon/GT.png';
import blockchain from './../icon/bgfi.png';
import database from './../icon/olam.png';
import project from './../icon/axa.png';

function Client() {
    return (
        <div>
            <div className="container-fluid border my-md-5 py-md-3 py-0">
                <p className="text-center client-text"><b> Nos clients entreprises : </b> Ils sont satisfaits par nos services</p>
                <div className="row mx-md-5 px-md-5 container d-flex">
                    <div className="col-lg col-md col-3 justify-content-center p-2 mx-2 mx-md-0 p-md-1 " >
                        <div className="w-100 text-center"><img src={bigdata} alt="" className="icon-clients image-fluid" /></div>
                    </div>
                    <div className="col-lg col-md col-3 justify-content-center p-2 mx-2 mx-md-0 p-md-1 " >
                        <div className="w-100 text-center"><img src={brain} alt="" className="icon-clients image-fluid" /></div>
                    </div>
                    <div className="col-lg col-md col-3 justify-content-center p-2 mx-2 mx-md-0 p-md-1 " >
                        <div className="w-100 text-center"><img src={database} alt="" className="icon-clients image-fluid" /></div>
                    </div>
                    <div className="col-lg col-md col-3 justify-content-center p-2 mx-2 mx-md-0 p-md-1 " >
                        <div className="w-100 text-center"><img src={blockchain} alt="" className="icon-clients image-fluid" /></div>
                    </div>
                    <div className="col-lg col-md col-3 justify-content-center p-2 mx-2 mx-md-0 p-md-1 " >
                        <div className="w-100 text-center"><img src={project} alt="" className="icon-clients image-fluid" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client