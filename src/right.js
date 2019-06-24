import React from 'react';
import './right.module.scss';
import shoe from './images/shoe.jpg'

export default class Right extends React.Component{
    render(){
        return(
            <div >
                <img src={shoe} className="img-responsive" />
            </div> 
        );
    }

} 