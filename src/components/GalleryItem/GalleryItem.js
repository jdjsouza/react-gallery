import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  state = {
    showPic: true,
  };

  toggleClick = () => {
    console.log('In toggleClick');
    this.setState({
      showPic: this.state.showPic === false,
    });
  };

  togglePic = () => {
    if (this.state.showPic === true) {
      return (
        <img
          onClick={this.toggleClick}
          className="thePic"
          src={this.props.item.path}
          alt={this.props.item.description}
        />
      );
    } else {
      return (
        <div className="theDescCont" onClick={this.toggleClick}>
          <p className="theDesc">{this.props.item.description}</p>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="myGallery">
        <div>{this.togglePic()}</div>
        <button onClick={() => this.props.putLike(this.props.item)}>Ain't it purty?</button>
        <p>{this.props.item.likes} people said it's purty!</p>
      </div>
    );
  }
}

export default GalleryItem;
