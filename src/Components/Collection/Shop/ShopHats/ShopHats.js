import React from 'react';


const shopHats = props => {
    return (
        <div>
            
                <h1>{props.itemlist.name}</h1>
                 <img alt= {props.itemlist.name} src={props.itemlist.imageUrl}/>
            
        </div>
    );
    }

export default shopHats;