import React from 'react';
import './photo-gallery.styles.scss';
import Photo from '../photo/photo.component';

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

  handleClick( event ){
    var ImgWithZoom = [];

    if( this.state.zoomImage && event.currentTarget.className !== 'zoom' ){
      ImgWithZoom = this.state.imageZoomed[0];
      ImgWithZoom.className='';
    }else if( this.state.zoomImage && event.currentTarget.className === 'zoom'){
      event.currentTarget.className = '';
      this.setState({zoomImage:false,imageZoomed: [] });
    }else{
      const  aux = [];
      aux.push( event.currentTarget ); 
      event.currentTarget.className = 'zoom';
      this.setState({zoomImage:true,imageZoomed: aux });
    }
  }

  render(){
    var items = [],
    that = this,
    i = 0;

    this.state.photoList.forEach(function( item ){
      if( item.type === 'food'){
        item.photos.forEach(function( food ){
          items.push( <Photo key={i} src={food.src} alt={food.alt} handleClick={that.handleClick.bind(that)}/> )
          i++;
        })
      }
    })
    
    return (
      <div className="photo-gallery">
        { items }
      </div>
    );
  }
} 

export default PhotoGallery;