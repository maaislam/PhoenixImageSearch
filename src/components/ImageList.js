
import React from 'react';
import './ImageList.css';
import ImageGrid from './ImageGrid';



class ImageList extends React.Component {

    testFunction = () => {

        const images = this.props.images.map(image => 

           <ImageGrid image = {image} key = {image.id} />
        );
        
        return images;

    }
    
    render() {

        
        return (
           
            <div className = "image__list">
                {this.testFunction()}
            </div>
        );
    };
};

export default ImageList;
