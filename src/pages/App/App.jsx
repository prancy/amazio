import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css'
import Catalog from '../../components/Catalog/Catalog';
import Checkout from '../../components/Checkout/Checkout';
import Confirmation from '../../components/Confirmation/Confirmation';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  /*----- methods -------*/

  addItem(props){
    console.log(props)
    fetch('/products', { 
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ product: this })
    })
  }

  /*-------- lifecycle methods ------------*/
  componentDidMount() {
    fetch('/products').then(res => res.json())
    .then(data => this.setState({
      products: data
    })) 
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => <Catalog products={this.state.products} addItem={this.addItem}/> } />
          <Route path='/checkout' render={() => <Checkout />} />
          <Route path='/confirmation' render={() => <Confirmation /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
