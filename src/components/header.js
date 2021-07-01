import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    data-scroll
    data-scroll-sticky
    data-scroll-target="#container"
    style={{
      width: `100%`,
      position: `fixed`,
      top: 0,
      left: 0,
      zIndex: 10,
    }}
  >
    <div className="header" style={{ transition: `transform 0.35s ease`, }}>
      <div
        className="links_container"
        style={{
          margin: `0 auto`,
          padding: `0 2em`,
          height: `90px`,
        }}
      >
        <div>
          <Link to="/" className="logo">
            <span>Pêche</span>
            <span>TELLIER</span>
          </Link>
        </div>
        <div>
          <Link to="/#works">Magasin</Link>
          <Link to="/gallery">Additifs</Link>
          <Link to="/#about">Articles</Link>
          <Link to="/#about">Contact</Link>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
