import React, { Component } from 'react';
import {SHOP_DATA} from '../Collection';
import ShopHats from './ShopHats/ShopHats';


class Shop extends Component{
    constructor(){
        super();
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
                      
                       return(
                            shop.items.map((item)=>{
                                return(
                                    <ShopHats key = {item.id} itemlist = {item} />
                                );
                            })
                       );
                        
                    })
                }
                
                </div>
        );
    }
}

export default Shop;