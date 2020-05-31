
import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {

    state = {searchTerm: ''}

    onInputChange = (event) =>{

        this.setState({searchTerm: event.target.value});
    };

    onButtonClick = (event) => {
        event.preventDefault();
        
        this.props.onSearchClick(this.state.searchTerm)
        
    };

    onKeyPress = (event) => {

        if(event.key === 'Enter'){
            this.props.onEnterPress(this.state.searchTerm);
        }
    };

    render() {
        return (
            <div className="ui segment fluid action input search-container">
                
                <input 
                    type="text" 
                    placeholder="Search Image..."
                    value = {this.state.searchTerm} 
                    onChange = {this.onInputChange}
                    onKeyUp = {this.onKeyPress}>      
                </input>
                <div onClick = {this.onButtonClick} className="ui button search-btn">Search</div>
            </div>
        );
    }
}

export default SearchBar;
