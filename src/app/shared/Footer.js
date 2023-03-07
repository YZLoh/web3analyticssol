import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Made with <i className="mdi mdi-heart text-danger"></i></span>
          </div>
        </div>
        
      </footer>
    );
  }
}

export default Footer;