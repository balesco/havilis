import React from "react";

function Calendar() {

    return (
        <div className="Calendar w-50">
            <ul class="nav justify-content-start my-0 py-0">
                <li class="nav-item">
                    <a class="nav-link small text-light" href="#"><i class="fas fa-plane-departure mr-2"></i>Flight</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link small text-light" href="#"><i class="fas fa-bed mr-2"></i>Hotels</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link small d-flex text-light" href="#"><p className="d-flex flex-column mr-2"><i class="fas fa-plane-departure"></i><i class="fas fa-bed"></i></p> Hotel+Fligth</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link small text-light" href="#"><i class="fas fa-car mr-2"></i>Car rental</a>
                </li>
            </ul>
            <nav class="nav my-0">
                <a class="nav-link small text-light" href="#">Aller-Retour</a>
                <a class="nav-link small text-light" href="#">Aller simple</a>
                <a class="nav-link small text-light" href="#">Multi-destinations</a>
            </nav>
            <form className="m-2 p-2">
                <div class="row my-1">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Ville de départ" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="ville de destination" />
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col">
                        <input type="date" class="form-control" placeholder="date de depart" />
                    </div>
                    <div class="col">
                        <input type="date" class="form-control" />
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col">
                        <select className="form-control" name="" id="">
                            <option value="">1 adulte</option>
                        </select>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="form-group col">
                                <div class="custom-control custom-checkbox mt-2">
                                    <input type="checkbox" class="custom-control-input" id="customCheck" name="example1" />
                                    <label class="custom-control-label text-light" for="customCheck">Vol direct</label>
                                </div>
                            </div>
                            <div class="form-group col">
                                <select id="inputState" class="mt-2">
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col d-flex">
                        <button className="btn btn-warning text-light font-weight-bold mr-5">Chercher Vols</button>
                        <button className="btn btn-outline-light text-light font-weight-bold">Chercher Vols + Hotels</button>
                        <p className="ml-2 mt-2 text-light"><i class="fas fa-check mr-1"></i>Prix Havilis garanti.</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Calendar;