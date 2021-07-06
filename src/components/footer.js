import React from "react"
import { Link } from "gatsby"

import { FaPhone } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

const Nav = () => (
    <footer>
        <div className="a_propos">
            <h3>à propos</h3>
            <hr />
            <Link to="/">
            <h2>Peche TELLIER</h2>
            </Link>
            <p>
                Magasin d'article de pêche dans l'Aisne, situé à Saint-Quentin, 02100. Tout ce dont vous avez besoin pour vivre de votre passion. Commerçant de père en fils depuis plus de 40ans.
            </p>
        </div>
        <div className="contact">
            <h3>Contact</h3>
            <hr />
            <div className="linksContainer">
                <Link to="https://goo.gl/maps/U9ucoSUHqDi7G7QAA" >
                <div>
                    <FaMapMarkedAlt />
                    <span>7 rue de la chaussée romaine à Saint-Quentin</span>
                </div>
                </Link>

                <div>
                    <FaPhone />
                    <span>03 23 67 22 69</span>
                </div>

                <Link to="https://fr-fr.facebook.com/pechetellier">
                <div>
                    <FaFacebookF />
                    <span>facebook.com/pechetellier</span>
                </div>
                </Link>

            </div>

        </div>
        <div className="informations">
            <h3>Informations</h3>
            <hr />
            <Link to="/" activeClassName="active">Notre magasin</Link> <br />
            <Link to="/amorces" activeClassName="active">Amorces</Link><br />
            <Link to="/appats" activeClassName="active">Appâts</Link><br />
            <Link to="/materiel" activeClassName="active">Matériels</Link><br />
            <Link to="/contact" activeClassName="active">Contact</Link>
        </div>
    </footer>
  )
  

  
  export default Nav
  