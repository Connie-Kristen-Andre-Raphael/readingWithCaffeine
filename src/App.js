import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Form from './Form';
import Results from './Results';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '', // to register change of library selection
      selectedLibrary: '', // to grab value of library
      selectedRadius: '',
      coffeeShops: [],
      distanceBetween: '',
      selectedCoffeeShop: '',
    };
  }
  componentDidMount(t) {
    const apiKey = 'rNUBvav2dEGGss4WVvHK64tVGGygn3zB';
    axios({
      url: 'http://www.mapquestapi.com/search/v3/prediction',
      params: {
        q: 'library',
        collection: 'poi',
        key: apiKey,
      },
    }).then((res) => {
      console.log(res.data.results);
    });
  }

  handleUserInputChange = (event) => {
    const userInput = event.target.value;
    console.log(userInput);
    this.setState({ userInput });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted');
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Form
          userInput={this.userInput}
          handleUserInputChange={this.handleUserInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
