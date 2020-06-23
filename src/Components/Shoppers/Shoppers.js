import React , { Component } from 'react';
import Menu from '../../Containers/Menu/Menu';
import Navigation from '../../Containers/Navigation/Navigation';

class Shoppers extends Component{
    render(){
        return(
            <div>
                <Navigation/>
                <Menu/>
            </div>
        );
    }
}

export default Shoppers;