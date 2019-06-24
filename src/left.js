import React from 'react';
import style from './left.module.scss';


export default class Left extends React.Component{
    render(){
        return(
            <div className={style.leftcontainer} >
                    <h1>Our new<br/> website is on<br/> its way</h1>
                    <p className={style.para}>sign up to be the first <br/>to know when we launch</p>
                    <input type="email" placeholder="enter your email here*"/>
                    <br/>
                    <button type="button" className={style.btn}>Notify Me</button>
                    <br/>
                    <section className={style.socialicon_wrapper}>
                        <i className="fab fa-instagram "></i>	
                        <i className="fab fa-pinterest-p "></i>
                        <i className="fab fa-facebook-f "></i>    
                    </section>        
            </div>
        );
    }
}
               