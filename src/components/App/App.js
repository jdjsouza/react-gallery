import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    gallery: [],
  };

  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        console.log(response);
        this.setState({
          galleryList: [...response.data],
        });
      })
      .catch((err) => {
        console.log(err);
        alert('GET FAIL');
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />

        <img src="images/goat_small.jpg" />
      </div>
    );
  }
}

export default App;
