//REACT & STUFF
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//LAYOUT COMPONENTS
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

//PAGES
import Home from './components/pages/Home'
function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
      </>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
