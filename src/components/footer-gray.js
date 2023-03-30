import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer-gray.css'

const FooterGray = (props) => {
  return (
    <footer className={`footer-gray-footer ${props.rootClassName} `}>
      <div className="footer-gray-container">
        <div className="footer-gray-container1">
          <div className="footer-gray-container2">
            <span className="footer-gray-text">Lucas Thorley</span>
            <span className="footer-gray-text01">Social</span>
            <div className="footer-gray-container3">
              <a
                href="https://twitter.com/LucasThorley"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-gray-link"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="footer-gray-icon"
                >
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    className=""
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lucasthorley"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-gray-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-gray-icon2"
                >
                  <path
                    d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                    className=""
                  ></path>
                </svg>
              </a>
              <a
                href="https://github.com/lucasthorley"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-gray-link2"
              >
                <svg viewBox="0 0 1024 1024" className="footer-gray-icon4">
                  <path
                    d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"
                    className=""
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@lucasthorley"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-gray-link3"
              >
                <svg viewBox="0 0 1024 1024" className="footer-gray-icon6">
                  <path
                    d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"
                    className=""
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-gray-container4">
            <div className="footer-gray-container5">
              <span className="footer-gray-text02 Large">Me</span>
              <Link to="/" className="footer-gray-navlink Large">
                About Me
              </Link>
              <a
                href="https://www.linkedin.com/in/lucas-thorley-1706b025b/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-gray-link4 Large"
              >
                LinkedIn
              </a>
              <a
                href="https://linktr.ee/lucasthorley"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-gray-text03 Large"
              >
                LinkTree
              </a>
            </div>
            <div className="footer-gray-container6">
              <span className="footer-gray-text04 Large">Legal</span>
              <span className="footer-gray-text05 Large">
                Terms &amp; Conditions
              </span>
              <span className="footer-gray-text06 Large">Privacy Policy</span>
              <span className="footer-gray-text07 Large">Cookie Policy</span>
            </div>
          </div>
        </div>
        <span className="footer-gray-text08 Small">
          <span className="">
            All rights reserved. Copyright © 2023 Lucas Thorley
          </span>
          <span className="">.</span>
        </span>
      </div>
    </footer>
  )
}

FooterGray.defaultProps = {
  rootClassName: '',
}

FooterGray.propTypes = {
  rootClassName: PropTypes.string,
}

export default FooterGray
