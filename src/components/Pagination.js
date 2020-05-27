import React from 'react';

const Pagination = (props) => {
    let pageLinks = []
    
    for(let i = 1; i <= props.pages + 1; i++ ) {
        let active = props.currentPage === i ? 'active' : '';
        pageLinks.push(<li className={`ui button ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#!">{i}</a></li>)              
    }
    return (
            <div className="ui buttons" style = {{paddingBottom:'2rem'}}>
                <div className="">
                    <ul className="pagination">
                        { props.currentPage > 1 ? <li className="ui button" onClick={() => props.nextPage(props.currentPage - 1)}><a href="#!">Prev</a></li> : ''}
                        {  pageLinks }
                        { props.currentPage < props.pages + 1 ? <li className="ui button" onClick={() => props.nextPage(props.currentPage + 1)}><a href="#!">Next</a></li> : ''} 
                    </ul>
                </div>        
            </div>
    )
}

export default Pagination