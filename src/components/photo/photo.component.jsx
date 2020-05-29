import React from 'react';
import './photo.styles.scss';

const Photo = ({alt, src}) => (
  <div className="photo-container">
    <img alt={alt} src={ '../../images/' + src} />
  </div>
)

export default Photo;