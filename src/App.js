import React from 'react';
import './App.scss';
import Footer from'./footer.js';
import Header from'./header.js' ;
import Left from'./left.js';
import Right from './right.js'



export default class App extends React.Component{
  render(){
    return(
      <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <Left/>
          </div>
        <div>
          <div className="col-lg-6 col-xs-12">
            <Right/>
          </div>
        </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}