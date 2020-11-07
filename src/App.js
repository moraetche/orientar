//REACT & STUFF
import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//LAYOUT COMPONENTS
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

//PAGES
import Home from './components/pages/Home'
import Area from './components/pages/Area'
import Carrera from './components/pages/Carrera'

//AREAS
import Ingenieria from './components/pages/areas/Ingenieria'
import Medicina from './components/pages/areas/Medicina'

//MATERIALIZE
import M from 'materialize-css'

export class App extends Component {
  componentDidMount = () =>{
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
        <Route exact path="/ingenieria" component={Ingenieria} />
        <Route exact path="/medicina" component={Medicina} />
        <Route exact path="/:area" component={Area} />
        <Route exact path="/:area/:carrera" component={Carrera} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
    }
}

export default App

