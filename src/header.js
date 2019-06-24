import React from 'react';
import style from './header.module.scss';

export default class Header extends React.Component{
    render(){
        return(
            <div className={style.header}>
                <nav className={`navbar navbar-fixed-top ${style.navbarwhite}`}>
                    <div className="container">
                        <div className="navbar-header">
                            <a className={`navbar-brand" ${style.logo}`} href="#">GoShoe</a>
                        </div>
                
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Home</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }    

}