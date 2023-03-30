import React from 'react'

import PropTypes from 'prop-types'

import './blog-card.css'

const BlogCard = (props) => {
  return (
    <div className="blog-card-container">
      <img
        alt={props.imgdesc}
        src={props.image_src}
        className="blog-card-image"
      />
      <h5 className="blog-card-text">{props.new_prop}</h5>
      <span>{props.description}</span>
      <div className="blog-card-container1">
        <a
          href={props.link_button}
          target="_blank"
          rel="noreferrer noopener"
          className="blog-card-link button"
        >
          <span className="blog-card-text2">Read More</span>
          <svg viewBox="0 0 1024 1024" className="blog-card-icon">
            <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

BlogCard.defaultProps = {
  imgdesc: 'image',
  link_button: '',
  description: 'Made in Maya, rendered with Arnold, composited with Nuke',
  new_prop: '... Render',
  image_src: 'd2725e7c-e62f-434b-b89f-7e26c3712a79',
}

BlogCard.propTypes = {
  imgdesc: PropTypes.string,
  link_button: PropTypes.string,
  description: PropTypes.string,
  new_prop: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogCard
