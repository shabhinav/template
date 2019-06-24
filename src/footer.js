import React from 'react';
import style from'./footer.module.scss';


export default class Footer extends React.Component{
render(){
    return(
        <div className={style.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xs-6">
                        <p>contact-- Telephone. 9999999999 <br/>Email abcdefg@gmail.com</p>
                    </div>
                    <div className="col-lg-6 col-xs-6">
                        <p className={style.footerlefttxt} >Head Office--500 Terry Francois Street<br/>San Francisco, CA 94158 </p>
                    </div>
                </div>
            </div>
            </div>
    );
}

    
}