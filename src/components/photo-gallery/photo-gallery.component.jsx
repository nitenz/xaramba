import React from 'react';
import './photo-gallery.styles.scss';
import Photo from '../photo/photo.component';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        photoList: [
          {photos:[{src:'massa',alt:'Pasta picture'}],title:'Pasta',type:'food'},
          {photos:[{src:'pizza',alt:'Pizza picture'}],title:'Pizzas',type:'food'},
          {photos:[{src:'sobremesa',alt:'Dessert picture'}],title:'Sobremesas',type:'food'},
          {photos:[{src:'exterior-0',alt:'Outside picture, entrance'},{src:'exterior-1',alt:'Outside picture, entrance'}],title:'Exterior',type:'stablishment'},
          {photos:[{src:'interior-0',alt:'Outside picture, entrance'},{src:'interior-1',alt:'Outside picture, entrance'}],title:'Interior',type:'stablishment'}
        ]
    }
  }

  handleClick( event ){
    
  }

  render(){
    return (
      <div className="video-content">
        {
          this.state.photoList.forEach(function( item ){
            if( item.food === 'food'){
              <span>{item.tittle}</span>
              item.forEach(function( food ){
                <Photo src={food.src} alt={food.alt} />
              })
            }
          })
        }
      </div>
    );
  }
} 

export default PhotoGallery;