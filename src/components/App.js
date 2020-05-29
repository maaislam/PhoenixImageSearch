
import React from 'react';


import SearchBar from './SearchBar';
import PopupMessage from './PopupMessage';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import Pagination from './Pagination';
import LoadingAnim from './LoadingAnim'
import ImageDetail from './ImageDetail';

class App extends React.Component {

    state = {images: [], errorMessage: '', totalResults: 0, currentPage:1, searchTerm: '',loading:false, selectedImage:null};

    
     onSearchQuerry =  async(term) => {
        
                this.setState({loading:true,currentPage:1});
                
                try{
                   
                    const response = await unsplash.get('/search/photos', {

                        params: {
                                query: term,
                                per_page: 20,
                                
                                }
                        

                    });
                   
                    this.setState({images:response.data.results, totalResults: 50, searchTerm: response.config.params.query,loading:false});
     
                }catch (error) {
                    this.setState({errorMessage: error});
                
                }

        
    };

    
    
    nextPage = async(pageNumber) => {
        this.setState({loading:true});
        try{
            
            const response = await unsplash.get('/search/photos', {

                params: {
                        query: this.state.searchTerm,
                        per_page: 20,
                        page: pageNumber
                        }
            });
            
            this.setState({images:response.data.results, currentPage: pageNumber,loading:false } );
            
            console.log (response);
        
        }catch (error) {
            this.setState({errorMessage: error});
        
        }


    };

    onImageSelect = (image) => {

        this.setState({selectedImage:image});
        console.log(image);

    };

    closeModal= ()=>{
        this.setState({selectedImage:null}); 
    }

    renderContent = () => {

        if(this.state.images && !this.state.errorMessage && !this.state.loading){
            return(
              
                    
            <ImageList images = {this.state.images} onImageSelect = {this.onImageSelect}/>  
                
            )
        }else if(this.state.errorMessage){
            return(
            <div>
              <PopupMessage ErrorMsg = {` ${this.state.errorMessage}`} />
            </div>
            )
        }else if (this.state.loading){
            return(
            <div>
            <LoadingAnim message = "Please Wait Fetching Images"/>
            </div>
            )
        }
    };

    render() {
            const numberOfPages = Math.floor(50 / 20);
        return (
            <div >
                <ImageDetail showImage = {this.state.selectedImage} closeModal = {this.closeModal}/>
                <div style = {{padding:'0 5rem'}}>
                
                    <SearchBar onEnterPress = {this.onSearchQuerry} onSearchClick = {this.onSearchQuerry}/>
                    
                    {this.renderContent()}

                    {this.state.totalResults > 20 ? <Pagination pages={numberOfPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
                </div>
            </div>
        );
    }
}

export default App;
