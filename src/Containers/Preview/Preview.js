import React from 'react';
import './Preview.css';

const preview = (props) => {
    return(
        <div className="Preview">
            <h1>SHOP AHEAD...</h1>
            <h3>Let's celebrate our outfits!!</h3>
            {/*<div className="Images">
            <img src='https://i.ibb.co/ZYW3VTp/brown-brim.png' alt='images'></img>
            <img src='https://i.ibb.co/0s3pdnc/adidas-nmd.png' alt='images'/>
            <img src='https://i.ibb.co/XzcwL5s/black-shearling.png' alt='images'/>
            <img src='https://i.ibb.co/4W2DGKm/floral-blouse.png' alt='images'/>
            </div>*/}
            <div className="Explore">
                <div className="Hat"><button >EXPLORE</button></div>
                <div className="Kid"><button >EXPLORE</button></div>
                <div className="Jacket"><button >EXPLORE</button></div>
                <div className="Shoes"><button >EXPLORE</button></div>
            </div>
        </div>
    );
}

export default preview;