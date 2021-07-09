import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"


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
            <Image alt="logo peche tellier" filename={"logo-peche-tellier-small.png"}/>
          </Link>
        </div>
        <div>
          <Link to="/#magasin" activeClassName="active">Magasin</Link>
          <Link to="/appats" activeClassName="active">Appâts</Link>
          <Link to="/articles" activeClassName="active">Articles</Link>
          <Link to="/amorces" activeClassName="active">Amorces</Link>
          <Link to="/contact" activeClassName="active">Contact</Link>
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
