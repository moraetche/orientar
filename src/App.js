//REACT & STUFF
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//LAYOUT COMPONENTS
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

//PAGES
import Home from './components/pages/Home'
import Notfound from './components/pages/Notfound'
// import Area from './components/pages/Area'

//AREAS
import Ingenieria from './components/pages/areas/Ingenieria'
import Medicina from './components/pages/areas/Medicina'
import Sociales from './components/pages/areas/Sociales'
import Naturales from './components/pages/areas/Naturales'
import Exactas from './components/pages/areas/Exactas'
import Economicas from './components/pages/areas/Economicas'
import Artes from './components/pages/areas/Artes'
import Arquitectura from './components/pages/areas/Arquitectura'
import Humanidades from './components/pages/areas/Humanidades'

//CARRERAS
import Abogacia from './components/pages/carreras/Abogacia'
import Bioquimica from './components/pages/carreras/Bioquimica'
import Csfisicas from './components/pages/carreras/Csfisicas' 
import Diseniografico from './components/pages/carreras/Diseniografico'
import Filosofia from './components/pages/carreras/Filosofia'
import Ingagronoma from './components/pages/carreras/Ingagronoma'
import Ingindustrial from './components/pages/carreras/Ingindustrial'
import Licenciaturaecon from './components/pages/carreras/Licenciaturaecon'
import Medicinacarrera from './components/pages/carreras/Medicinacarrera'
import Odontologia from './components/pages/carreras/Odontologia'
import Politicas from './components/pages/carreras/Politicas'
import Psicologia from './components/pages/carreras/Psicologia'
import Veterinaria from './components/pages/carreras/Veterinaria'

//MATERIALIZE
import M from 'materialize-css'

export class App extends Component {
  componentDidMount = () => {
    M.AutoInit();
  }
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
        </>
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/arquitectura" component={Arquitectura} />
          <Route exact path="/arquitectura/Diseniografico" component={Diseniografico} />

          <Route exact path="/artes" component={Artes} />
          <Route exact path="/artes/Diseniografico" component={Diseniografico} />

          <Route exact path="/economicas" component={Economicas} />
          <Route exact path="/economicas/Licenciaturaecon" component={Licenciaturaecon} />

          <Route exact path="/exactas" component={Exactas} />
          <Route exact path="/exactas/Csfisicas" component={Csfisicas} />

          <Route exact path="/humanidades" component={Humanidades} />
          <Route exact path="/humanidades/Filosofia" component={Filosofia} />
          <Route exact path="/humanidades/Psicologia" component={Psicologia} />

          <Route exact path="/ingenieria" component={Ingenieria} />
          <Route exact path="/ingenieria/Ingagronoma" component={Ingagronoma} />
          <Route exact path="/ingenieria/Ingindustrial" component={Ingindustrial} />

          <Route exact path="/medicina" component={Medicina} />
          <Route exact path="/medicina/Bioquimica" component={Bioquimica} />
          <Route exact path="/medicina/Medicinacarrera" component={Medicinacarrera} />
          <Route exact path="/medicina/Odontologia" component={Odontologia} />
          <Route exact path="/medicina/Veterinaria" component={Veterinaria} />

          <Route exact path="/naturales" component={Naturales} />
          <Route exact path="/naturales/Ingagronoma" component={Ingagronoma} />
          <Route exact path="/naturales/Veterinaria" component={Veterinaria} />

          <Route exact path="/sociales" component={Sociales} />
          <Route exact path="/sociales/Abogacia" component={Abogacia} />
          <Route exact path="/sociales/Politicas" component={Politicas} />
          
          <Route exact path="/*" component={Notfound} />

          {/*<Route exact path="/:area" component={Area} />*/}
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App

