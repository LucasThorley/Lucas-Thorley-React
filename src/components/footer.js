import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <footer className="footer-footer1">
        <div className="footer-container">
          <div className="footer-container1">
            <span className="footer-text">Lucas Thorley</span>
            <span>Copyright © 2023 Lucas Thorley.</span>
          </div>
          <div className="footer-container2">
            <div className="footer-container3">
              <span className="footer-text2 Large">Pages</span>
              <span className="footer-text3 Large">Privacy</span>
              <span className="footer-text4 Large">T&amp;Cs</span>
              <span className="footer-text5 Large">Cookies</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="footer-image"
        />
      </footer>
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
