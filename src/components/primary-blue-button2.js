import React from 'react'

import PropTypes from 'prop-types'

import './primary-blue-button2.css'

const PrimaryBlueButton2 = (props) => {
  return (
    <div className="primary-blue-button2-container">
      <button className="primary-blue-button2-button button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

PrimaryBlueButton2.defaultProps = {
  button: 'Button',
}

PrimaryBlueButton2.propTypes = {
  button: PropTypes.string,
}

export default PrimaryBlueButton2
