import React,{Component} from 'react';
import './Preview.css';
import {SHOP_DATA} from '../../Components/Collection/Collection';
import { connect } from 'react-redux';
import { toggleRedirectHandler } from '../../Redux/Cart/cart.action';
import { Redirect } from 'react-router-dom';

class Preview extends Component {
    constructor(props){
        super(props);
        this.state={
            shopdata: SHOP_DATA
        }
        

    }
    handlerClick = id => {
        
        this.state.shopdata.map((shop) => {
            if(id===shop.id){
                let routename = shop.routeName;
            return(
                this.props.toggleRedirectHandler(routename)
            );
            }
            
        
        })
          
    }
    render(){  
        let redirect = this.props.currentRoutename === null ? null : <Redirect to = {"/"+this.props.currentRoutename}/>    
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
                <div className="Hat"><button type="button" onClick={()=> this.handlerClick(1)}>EXPLORE</button></div>
                <div className="Jacket" ><button type="button" onClick={() => this.handlerClick(3)}>EXPLORE</button></div>        
                <div className="Shoes" ><button type="button" onClick={() => this.handlerClick(2)}>EXPLORE</button></div>
                {redirect}
            </div>
           
        </div>
    );
}
}

let mapStateToProps = function mapStateToProps({cart}){
    console.log(cart.routename);
    return{
        currentRoutename : cart.routename
}
}

const mapDispatchToProps = dispatch => ({
    toggleRedirectHandler : routename => dispatch(toggleRedirectHandler(routename))
})



export default connect(mapStateToProps,mapDispatchToProps)(Preview);