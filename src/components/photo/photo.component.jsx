import React from 'react';
import './photo.styles.scss';


const Photo = ({alt, src,handleClick}) => (
  <div className="photo-container">
      <img alt={alt} src={require('../../assets/'+src+'.jpg')} onClick={handleClick} />
  </div>
)

export default Photo;