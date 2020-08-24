import React, { Component } from 'react';
import {SHOP_DATA} from '../Collection';
import ShopHats from './ShopHats/ShopHats';
import { connect } from 'react-redux';

class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {
            shopdata: SHOP_DATA
        }
    }
    render(){
        const {shopdata} = this.state;
        return(
            <div>
                {   
                    shopdata.map((shop) => {
                        if(shop.routeName === this.props.currentRoutename){
                      
                       return(
                            shop.items.map((item)=>{
                                return(
                                    <ShopHats key = {item.id} itemlist = {item} />
                                );
                            })
                       );
                        }
                        if(this.props.currentRoutename===null)
                        {
                            return(
                                shop.items.map((item)=>{
                                    return(
                                        <ShopHats key = {item.id} itemlist = {item} />
                                    );
                                })
                            );
                        }
                    })
                }
                
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

export default connect(mapStateToProps)(Shop);