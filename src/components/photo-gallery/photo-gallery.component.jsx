import React from 'react';
import './photo-gallery.styles.scss';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        zoomImage: false,
        imageZoomed: [],
        photoList: [
          {photos:[{src:'massa',alt:'Pasta picture'}],tittle:'Pasta',type:'food'},
          {photos:[{src:'pizza',alt:'Pizza picture'}],tittle:'Pizzas',type:'food'},
          {photos:[{src:'sobremesa',alt:'Dessert picture'}],tittle:'Sobremesas',type:'food'},
          {photos:[{src:'exterior-0',alt:'Outside picture, entrance'},{src:'exterior-1',alt:'Outside picture, entrance'}],tittle:'Exterior',type:'stablishment'},
          {photos:[{src:'interior-0',alt:'Outside picture, entrance'},{src:'interior-1',alt:'Outside picture, entrance'}],tittle:'Interior',type:'stablishment'}
        ]
    }
  }

  render(){
    var items = [],
    i = 0;

    this.state.photoList.forEach(function( item ){
      item.photos.forEach(function( food ){
        items.push( <div key={i} data-src={require('../../assets/'+food.src+'.jpg')}></div> )
        i++;
      })
    })
    
    return (
      <AwesomeSlider>
         { items }
      </AwesomeSlider>
    );
  }
} 

export default PhotoGallery;