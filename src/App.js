import React from 'react';
import './App.less';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Newletter from './components/Newletter';
import Voyages from './components/Voyages';
import Why from './components/Why';
import Parteners from './components/Parteners';
import Footer from './components/Footer'
import Copyright from './components/Copyright'
import Cities from './components/Cities'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <Newletter />
      <Voyages />
      <Cities />
      <Why />
      <Parteners />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;