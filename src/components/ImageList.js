
import React from 'react';
import './ImageList.css';
import ImageGrid from './ImageGrid';

class ImageList extends React.Component {

    

    renderList = () => {

        return this.props.images.map(image => 

             <ImageGrid 
                image = {image} 
                key = {image.id} 
                onImageSelect = {this.props.onImageSelect} 
                onImageReady = {this.props.onImageReady}
                />
         );
        

    }
    

    render() {

        
        return (
           
            <div className = "image__list" >
                {this.renderList()}
            </div>
        );
    };
};

export default ImageList;
