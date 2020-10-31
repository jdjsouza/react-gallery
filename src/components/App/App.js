import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    form: {
      id: '',
      path: '',
      description: '',
      likes: '',
    },
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
        // {
        //   data: []
        // }
        console.log(response);
        this.setState({
          gallery: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'GET FAIL',
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" />
      </div>
    );
  }
}

export default App;
