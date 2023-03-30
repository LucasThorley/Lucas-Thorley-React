import React from 'react'

import PropTypes from 'prop-types'

import './primary-blue-button1.css'

const PrimaryBlueButton1 = (props) => {
  return (
    <div className="primary-blue-button1-container">
      <button className="primary-blue-button1-button button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

PrimaryBlueButton1.defaultProps = {
  button: 'Button',
}

PrimaryBlueButton1.propTypes = {
  button: PropTypes.string,
}

export default PrimaryBlueButton1
