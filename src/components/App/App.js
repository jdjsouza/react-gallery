import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    galleryItem: {
      id: '',
      path: '',
      description: '',
      likes: '',
    },
    galleryList: [],
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
        this.setState({
          galleryList: [...response.data],
        });
      })
      .catch((err) => {
        console.log(err);
        alert('GET FAIL');
      });
  }

  putLike = (event) => {
    axios({
      method: 'PUT',
      url: `gallery/like/${event.id}`,
    })
      .then((response) => {
        this.getGallery();
      })
      .catch((error) => {
        alert(`Put Error`);
        console.log('put Error', error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList
          pics={this.state.galleryList}
          // random stuff here
          putLike={this.putLike}
        />
      </div>
    );
  }
}

export default App;
