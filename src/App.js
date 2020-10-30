//REACT & STUFF
import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//LAYOUT COMPONENTS
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

//PAGES
import Home from './components/pages/Home'

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
      </Switch>
      <Footer />
    </BrowserRouter>
  );
    }
}

export default App

