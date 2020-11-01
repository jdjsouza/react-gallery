import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {
  render() {
    const theList = this.props.pics.map((item) => {
      return <GalleryItem key={item.id} item={item} putLike={this.props.putLike} />;
    });
    return <div className="imageContainer">{theList}</div>;
  }
}

export default GalleryList;
