import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import OutlineBlueButton from '../components/outline-blue-button'
import BlogCard from '../components/blog-card'
import FooterGray from '../components/footer-gray'
import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container">
      <Helmet>
        <title>Portfolio - Lucas Thorley</title>
        <meta property="og:title" content="Portfolio - Lucas Thorley" />
      </Helmet>
      <Header></Header>
      <div className="portfolio-profile">
        <img
          alt="image"
          src="/playground_assets/profil.jpg"
          className="portfolio-image"
        />
        <div className="portfolio-container1">
          <div className="portfolio-container2">
            <h4 className="portfolio-text">Lucas Thorley</h4>
            <a
              href="https://www.instagram.com/lucasthorley/"
              target="_blank"
              rel="noreferrer noopener"
              className="portfolio-link"
            >
              <OutlineBlueButton
                button="follow"
                className="portfolio-component1"
              ></OutlineBlueButton>
            </a>
          </div>
          <span>
            <span>CGI • VFX</span>
            <br className="Medium"></br>
            <span>For Work/Comissions: Contact Options, Website, or DM</span>
            <br className="Medium"></br>
            <span>linktr.ee/lucasthorley</span>
            <br className="Medium"></br>
            <span>www.lucasthorley.com</span>
          </span>
        </div>
      </div>
      <div className="portfolio-blog-posts">
        <h1 className="portfolio-text09 HeadingTwo">
          <span>Check my latest posts</span>
          <br></br>
        </h1>
        <div className="portfolio-container3">
          <BlogCard
            new_prop="Atmospheric Window Render"
            image_src="/playground_assets/scene_test_comp-200h.png"
            readmore1="https://www.instagram.com/p/CovEflfLXUm/"
            description="Made in Maya, rendered with Arnold, composited with Nuke"
            link_button="https://www.instagram.com/p/CovEflfLXUm/"
          ></BlogCard>
          <BlogCard
            new_prop="Atmospheric Lake Render"
            image_src="/playground_assets/moon%20lake%20comp-200h.png"
            description="Made in Houdini, rendered with Mantra, composited with Nuke"
            link_button="https://www.instagram.com/p/Ck30YXxjjM7/"
          ></BlogCard>
          <BlogCard
            title="MateLabs machine learning"
            new_prop="Atmospheric Deer Render"
            image_src="/playground_assets/road_comp~2-200h.png"
            description="Made in Houdini, rendered with Mantra, composited with Nuke"
            link_button="https://www.instagram.com/p/Ck9ET0xDx5_/"
          ></BlogCard>
          <div className="portfolio-container4">
            <div className="portfolio-card">
              <div className="portfolio-container5">
                <h1 className="portfolio-text12">Want quality 3D models?</h1>
                <span className="portfolio-text13">
                  Leave your worries at the door, I will deliver quality
                  content, at a fast rate, and at a fair price.
                </span>
                <div className="portfolio-container6">
                  <Link to="/contact-me" className="portfolio-navlink button">
                    <span className="portfolio-text14">Read more</span>
                    <svg viewBox="0 0 1024 1024" className="portfolio-icon">
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="portfolio-container7"></div>
            </div>
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default Portfolio
