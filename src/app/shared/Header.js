import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import { Trans } from 'react-i18next';

class Header extends Component {
  render () {
    return (
      <div className="horizontal-menu">
        <nav className="navbar top-navbar default-layout-navbar col-lg-12 col-12 p-0 d-flex flex-row">
          <div className="container">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <Link className="navbar-brand brand-logo" to="/"><img src={require('../../assets/images/logo.png')} alt="logo" /></Link>
              <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../../assets/images/logo-mini.png')} alt="logo" /></Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-end">
              <div className="search-field d-none d-lg-block">
                <form className="d-flex align-items-center h-100" action="#">
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <i className="input-group-text border-0 mdi mdi-magnify"></i>
                    </div>
                    <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects"/>
                  </div>
                </form>
              </div>
              <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleBottomMenu}>
                <span className="mdi mdi-menu"></span>
              </button>
            </div>
          </div>
        </nav>
        <nav className="bottom-navbar">
          <div className="container">
            <ul className="nav page-navigation">
              <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
                <Link className="nav-link" to="/dashboard">
                  <i className="mdi mdi-home menu-icon"></i>
                  <span className="menu-title"><Trans>Dashboard</Trans></span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                  <i className="mdi mdi-file-document-box menu-icon"></i>
                  <span className="menu-title"><Trans>Portfolio</Trans></span></a>
              </li>  
              <li className="nav-item">
                <a className="nav-link" href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                  <i className="mdi mdi-file-document-box menu-icon"></i>
                  <span className="menu-title"><Trans>Investment</Trans></span></a>
              </li>  
              <li className="nav-item">
                <a className="nav-link" href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                  <i className="mdi mdi-file-document-box menu-icon"></i>
                  <span className="menu-title"><Trans>Setting</Trans></span></a>
              </li>     
            </ul>
          </div>
        </nav>
      </div>
    );
  }

  toggleBottomMenu() {
    document.querySelector('.bottom-navbar').classList.toggle('header-toggled');
  }

  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }

  componentDidMount() {
    // Horizontal menu fixed when scrolling
    window.addEventListener('scroll', function() { 
      let navbar = document.querySelector('.horizontal-menu');
      let body = document.querySelector('body');
      if (window.scrollY >= 70) { 
        navbar.classList.add('fixed-on-scroll');
        body.classList.add('horizontal-menu-fixed-on-scroll');
       }
      else { 
        navbar.classList.remove('fixed-on-scroll');
        body.classList.remove('horizontal-menu-fixed-on-scroll');
       }
    });

    // Horizontal menu navigation in mobile menu on click
    let navItemClicked = document.querySelectorAll('.horizontal-menu .page-navigation >.nav-item');
    navItemClicked.forEach(function (el) {
      el.addEventListener('click', function () {
        var result = [],
          node = this.parentNode.firstChild;
        while (node) {
          if (node !== this)
            result.push(node);
          node = node.nextElementSibling || node.nextSibling;
        }
        result.forEach( (el) => el.classList.remove('show-submenu') )
        this.classList.toggle('show-submenu');
      });
    })
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

}

export default withRouter(Header);
