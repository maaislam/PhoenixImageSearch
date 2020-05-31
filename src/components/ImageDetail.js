import React from 'react'
import './ImageDetail.css'



class ImageDetail extends React.Component {


    state = {modal:'fade-out'};

    testFunction = () =>{

      if (this.props.showImage.height > this.props.showImage.width  ){
          return 'large'
      }else {
          return 'huge'
      }
    }

    changeState = () =>{

        if(this.props.showImage){
             this.setState({
                modal:'fade-in'
            });
            return 
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
                
                
                
                <div key={this.props.showImage.id} className = {` ${this.state.modal} test1`} onLoad = {this.changeState} onClick = {this.closeBtn}>
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
            this.setState({
                modal:'fade-out'
              }, () => {
                setTimeout( () => {
                this.props.closeModal();
                }, 500);
              });

          }
        
          
        }


    render() {

        return (


           <div>
                {this.checkImage()}
                
           </div>

        )
    }
}

export default ImageDetail;


