import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="header-navbar-interactive">
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="header-desktop-menu"
        ></div>
        <nav className="header-nav">
          <div className="header-container">
            <Link to="/" className="header-navlink Large">
              <span className="">L</span>
              <span className="">ucas Thorley</span>
            </Link>
            <div className="header-menu">
              <Link to="/" className="header-navlink1 Large">
                Home
              </Link>
              <Link to="/portfolio" className="header-navlink2 Large">
                Portfolio
              </Link>
              <Link to="/contact-me" className="header-navlink3 Large">
                Contact Me
              </Link>
            </div>
            <div className="header-container1">
              <div className="header-container2">
                <Link to="/contact-me" className="header-navlink4">
                  <PrimaryPinkButton
                    button="CONTACT ME"
                    className="header-component"
                  ></PrimaryPinkButton>
                </Link>
              </div>
              <div data-role="BurgerMenu" className="header-burger-menu">
                <svg viewBox="0 0 1024 1024" className="header-icon">
                  <path
                    d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-thq="thq-mobile-menu" className="header-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="header-nav1"
          >
            <div className="header-container3">
              <div data-thq="thq-close-menu" className="header-menu-close">
                <svg viewBox="0 0 1024 1024" className="header-icon2">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="header-nav2"
            >
              <span className="header-text2">About</span>
              <span className="header-text3">Portfolio</span>
              <span className="header-text4">Contact Me</span>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
