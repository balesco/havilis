import React from 'react';
import './App.css';
import './components/Formations'
import Formations from './components/Formations';
import './components/Infos'
import Infos from './components/Infos';
import Consultant from './components/Consultant';
import Categories from './components/Categories';
import Bestof from './components/Bestof';
import Medias from './components/Medias';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Modal from './components/Modal';
import light from './icon/light2.png'
import percent from './icon/percent2.png'
import teacher from './icon/teacher2.png'
import date from './icon/date2.png'
import Copyright from './components/Copyright';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="App-header">
        <div className="container-fluid herder-color">
          <div className="h-100 pt-4 pb-3 text-header">
            <p className="font-weight-bold">
              <h3>
                Voulez-vous des compétences?
              </h3>
              <h3>
                Formez-vous.
              </h3>
            </p>
            <p>
              Decouvrez des formations pratiques, disponibles 7j/7 et 24h/24 à partir de 10$ seulement
            </p>
          </div>
          <div className="input-group search-bar">
            <input type="text" className="form-control" placeholder="Que souhaitez-vous apprendre ?" />
            <div className="input-group-append">
              <button className="btn btn-light text-primary" type="submit" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-search"></i></button>
            </div>
          </div>
          <div className="row bg-primary header-footer h-25">
            <div className="col-lg-3 col-md col-sm px-1 mt-2">
              <span className="d-flex">
                <img className="icon-header" src={light} alt="...." />
                <p className="text-left small align-self-center text-break"><b>+22 Spécialités de formation.</b><br />Developpement web & mobile, Cybersécurité, Marketing digital, Business Intelligence, IoT, Big-data, etc... </p>
              </span>
            </div>
            <div className="col-lg-3 col-md col-sm px-1 mt-2">
              <div>
                <span className="d-flex">
                  <img className="icon-header" src={teacher} alt="...." />
                  <p className="text-left small align-self-center text-break">
                    <b>+10 000 cours en ligne.</b><br /> Des sujets tous d'actualité, traités par des Formateurs, tous Experts dans leurs domaines respectifs
                  </p>
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md col-sm px-1 mt-2">
              <div>
                <span className="d-flex">
                  <img className="icon-header" src={percent} alt="...." />
                  <p className="text-left small align-self-center text-break"><b>Des formations 90% pratiques</b><br />Pour vous aider à booster vos compétences et productivité</p>
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md col-sm px-1 mt-md-2 mb-md-0 mb-2 mt-4">
              <div>
                <span className="d-flex">
                  <img className="icon-header" src={date} alt="...." />
                  <p className="text-left small align-self-center text-break"><b>Formez-vous à votre rythme</b><br />Accès illimité (7j/7 et 24h/24) à vos formations en web et application mobile</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Formations />
      </div>
      <div>
        <Infos />
      </div>
      <div className="slide-courses">
        <Consultant />
      </div>
      <div className="">
        <Categories />
      </div>
      <div className="">
        <Bestof />
      </div>
      <div className="mb-md-5 mb-0">
        <Medias />
      </div>
      <div className="mt-md-5 pt-md-5 pt-0 mt-0">
        <Footer />
        <Copyright />
      </div>
      <Modal />
    </div>
  );
}

export default App;
