import React from 'react'
import './ImageDetail.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class ImageDetail extends React.Component {


    

    testFunction = () =>{

      if (this.props.showImage.height > this.props.showImage.width  ){
          return 'large'
      }else {
          return 'huge'
      }
    }


    checkImage= () => {

        if (!this.props.showImage){
            return(
                <div>
                    
                </div>
            )
        }else {
            return(
                <div key={this.props.showImage.id} className = "test1"  onClick = {this.closeBtn}>
                    <div className = "test" onClick = {this.closeBtn}>
                        <div className = "ui center aligned segment img__modal">
                            <div style = {{textAlign:'right',cursor:'pointer', color:'rgb(141, 141, 141)'}}><i className = "cls-icon big x icon"></i></div>
                        <img 
                        className={` ui centered ${this.testFunction()} fluid image`} 
                        src={this.props.showImage.urls.regular} 
                        alt = {this.props.showImage.alt_description}/>
                        <h2 className = "center aligned">{this.props.showImage.alt_description}</h2>
                        </div>  
                    </div>
                </div>   
            );
        }


    }


    closeBtn = (event) => {
        
        if(event.target.matches('.test, .x')){
         
        this.props.closeModal();
            
        }
    }



    render() {
        return (
            <div>
                 <ReactCSSTransitionGroup          
                    transitionName="fade"          
                    transitionEnterTimeout={500}          
                    transitionLeaveTimeout={300}>
                    {this.checkImage()}
                 </ReactCSSTransitionGroup>
                
            </div>
        )
    }
}

export default ImageDetail;


