import React from 'react';
import './Menu.css';

function menu(){
    return(
        <div className="Menu">
            <div className="Formals" >
                <h1>WALK IN STYLE!!!</h1>
                <p>DEFINE YOURSELF IN THE BEST OUTFITS!</p>
                <div className="Button"> 
                <button><span>SHOP NOW</span></button></div>
            </div>
            <div className="Sale">
                <h1>
                    UPTO 50% off!!!
                </h1>
                <p>COME UP WITH THE LOWEST PRICE!!</p>
                <div className="Button"> 
                <button><span>SHOP NOW</span></button></div>
            </div>
            <div className="Seasonal">
                <h1>
                    SEASONAL!!!
                </h1>
                <p>STYLE ACCORDING TO THE SEASONS!!</p>
                <div className="Button"> 
                <button><span>SHOP NOW</span></button></div>
            </div>
            <div className="Kid">
                <h1>
                    Dance on your feet!!
                </h1>
                <p>
                    pick up your style and fly high.....
                </p>
                <div className="Button"> 
                <button><span>SHOP NOW</span></button></div>
            </div>
        </div>
    );
}

export default menu;