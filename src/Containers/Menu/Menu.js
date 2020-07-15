import React from 'react';
import './Menu.css';
import Arrow from '../../assets/images/download.svg';

function menu(){
    return(
        /*{<div className="Menu">
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
        </div>}*/
        <div className = "Styling">
        <div className = "Background">
            <img alt="hi!!" src="https://i.pinimg.com/originals/c7/32/f5/c732f50318bb94db1936642b43e56370.jpg"/>
            <div className="Tag">
            <h1>STYLE AND SMILE!</h1>
            <h3>Shop the lattest trend..</h3>
            </div>
            
        </div>
        <button><img src = {Arrow} alt = "arrow" className="Arrow"/></button>
        </div>


    );
}

export default menu;