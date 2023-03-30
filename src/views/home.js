import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import FeatureCard from '../components/feature-card'
import FooterGray from '../components/footer-gray'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lucas Thorley</title>
        <meta property="og:title" content="Lucas Thorley" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <div className="home-container01">
              <Link to="/" className="home-navlink Large">
                <span>L</span>
                <span>ucas Thorley</span>
              </Link>
              <div className="home-menu">
                <Link to="/" className="home-navlink1 Large">
                  Home
                </Link>
                <Link to="/portfolio" className="home-navlink2 Large">
                  Portfolio
                </Link>
                <Link to="/contact-me" className="home-navlink3 Large">
                  Contact Me
                </Link>
              </div>
              <div className="home-container02">
                <div className="home-container03">
                  <PrimaryPinkButton
                    button="CONTACT ME"
                    className="home-component1"
                  ></PrimaryPinkButton>
                </div>
                <div data-role="BurgerMenu" className="home-burger-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu1">
          <svg viewBox="0 0 1024 1024" className="home-icon2">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container04">
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon4">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <Link to="/" className="home-navlink4">
                About
              </Link>
              <Link to="/portfolio" className="home-navlink5">
                Features
              </Link>
              <Link to="/contact-me" className="home-navlink6">
                Pricing
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container05">
          <div className="home-card">
            <h1 className="home-text02 HeadingOne">Lucas Thorley</h1>
            <h1 className="home-text03">CG/FX Artist</h1>
            <span id="top" className="home-text04">
              <span>
                {' '}
                I am proficient in most of the industry standard tools.
              </span>
              <br></br>
              <span>
                I work regularly with clients, all gaining me 5 star reviews.
              </span>
            </span>
            <div className="home-container06">
              <div className="home-container07">
                <a href="#skills" className="home-link">
                  <PrimaryPinkButton
                    button="See Reviews + Skills"
                    className="home-component2"
                  ></PrimaryPinkButton>
                </a>
              </div>
            </div>
            <div className="home-container08">
              <img
                alt="image"
                src="/playground_assets/cubstudio%20grey-600w.png"
                className="home-image"
              />
              <img
                alt="image"
                src="/playground_assets/ramjam%20grey-600w.png"
                className="home-image01"
              />
              <img
                alt="image"
                src="/playground_assets/norsefactory%20grey-200h.png"
                className="home-image02"
              />
              <img
                alt="image"
                src="/playground_assets/dme%20grey-600w.png"
                className="home-image03"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/neuron%20bg-1500h.png"
        className="home-image04"
      />
      <section className="home-features">
        <FeatureCard
          text="Get your product or object modelled in 3D"
          title="Components"
          new_prop="Models"
          image_src="/playground_assets/cube1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Add Visual Effects to your new or existing video"
          title="Less Code"
          new_prop="FX"
          image_src="/playground_assets/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Give some extra OOMPH to your video"
          title="Fully Responsive"
          new_prop="Compositing"
          image_src="/playground_assets/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section className="home-testimonials">
        <div className="home-container09">
          <div className="home-container10">
            <div className="home-container11">
              <h2 className="home-text08 HeadingOne">Work with me</h2>
              <p className="home-text09">
                Work with me on Commission/Freelance, Short-Term, or Long-Term.
              </p>
              <p className="home-text10">
                <br className="home-text11"></br>
                <span className="home-text12">
                  &quot;He met all deadlines and was a pleasure to work with.
                  The finalized product exceeded my expectations!&quot;
                </span>
                <br className="home-text13"></br>
                <br className="home-text14"></br>
                <span className="home-text15">
                  &quot;Professionalism, attention to detail, and [...]
                  high-quality results exceeded my expectations. [...]
                  Communication skills and [...] ability to meet deadlines&quot;
                </span>
                <br className="home-text16"></br>
                <br className="home-text17"></br>
                <span className="home-text18">
                  &quot;Extremely efficient and easy to work with. Delivered on
                  all things we wanted and was very fast.&quot;
                </span>
                <br className="home-text19"></br>
                <br className="home-text20"></br>
                <span className="home-text21">
                  &quot;Made a great job beyond expectation, communication was
                  fast and flawless.&quot;
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container12">
              <div id="skills" className="home-container13">
                <div className="home-container14">
                  <img
                    alt="image"
                    src="/playground_assets/pp-200h.png"
                    className="home-image05"
                  />
                </div>
                <div className="home-container15">
                  <img
                    alt="image"
                    src="/playground_assets/maya-200h.png"
                    className="home-image06"
                  />
                </div>
                <div className="home-container16">
                  <img
                    alt="image"
                    src="/playground_assets/blender-200h.png"
                    className="home-image07"
                  />
                </div>
              </div>
              <div className="home-container17">
                <div className="home-container18">
                  <img
                    alt="image"
                    src="/playground_assets/nuke-200h.png"
                    className="home-image08"
                  />
                </div>
                <div className="home-container19">
                  <img
                    alt="image"
                    src="/playground_assets/houdini-200h.png"
                    className="home-image09"
                  />
                </div>
                <div className="home-container20">
                  <img
                    alt="image"
                    src="/playground_assets/unity-200h.png"
                    className="home-image10"
                  />
                </div>
              </div>
              <div className="home-container21">
                <div className="home-container22">
                  <img
                    alt="image"
                    src="/playground_assets/ps-200h.png"
                    className="home-image11"
                  />
                </div>
                <div className="home-container23">
                  <img
                    alt="image"
                    src="/playground_assets/davinci-200h.png"
                    className="home-image12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image13"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <FooterGray rootClassName="footer-gray-root-class-name"></FooterGray>
    </div>
  )
}

export default Home
