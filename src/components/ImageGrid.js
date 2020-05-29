import React from 'react';



class ImageGrid extends React.Component {


    constructor(props){
        super(props);

        this.imageRef = React.createRef();
        this.state = {span: 0};
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () =>{

        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height/10);

        this.setState({span})
    }
    onImageClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        
        this.props.onImageSelect(this.props.image);
        
    };

    render() {
        return (
            <div style = {{gridRowEnd: `span ${this.state.span}`}} onClick = {this.onImageClick}>
                <img 
                src={this.props.image.urls.regular} 
                alt={this.props.image.description}
                ref={this.imageRef} />
            </div>
        );
    }
}




export default ImageGrid;
