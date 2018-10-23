import React, { Component, Fragment } from "react";
import { Route, BrowserRouter } from 'react-router-dom'
import List from "./components/List"
import Details from "./components/Details"
import store from "./stores/UiStore";

class App extends Component {

  render() {
   
    return (
      <BrowserRouter>
        <Fragment>
        
          
          <List store={store} />
          
          <Route path="/:id" render={() => <Details store={store} />} />

        </Fragment>


      </BrowserRouter>
    );
  }
}

export default App;
