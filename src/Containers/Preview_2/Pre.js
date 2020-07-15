import React from 'react';
//import {wedding} from '../../assets/images/wedding.jpeg';
import right from '../../assets/images/right-arrow.svg';
import './Pre.css';

const pre = (props) => {
    return(
        <div className="Bridal">
           
            <img src="https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/the-smiling-sabyasachi-bride-in-red-202003-1584254473.jpg" alt="wedding"/>
            <div className="Tag">
            <h1>Bridal Collection</h1>
            <p>Brides get their look with two major weapons first their confidence and their outfits..Slay it bride with the best collections with us!</p>
            <button>Bride-to-be<img src={right} className="Images"/></button>
            </div>

            </div>
            
    );
}

export default pre;