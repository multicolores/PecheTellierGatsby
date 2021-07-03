import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BigImage from "../components/big_image"

import { FaPhone } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact_container">
        <div className="hero">
            <div className="bg_image">
                <div className="img_container_loco" data-scroll data-scroll-speed="-1.7">
                    <BigImage alt="image de fond d'un brochet" filename={"pike-bg.jpg"} />
                </div>
            </div>
            <h1>Nos coordonnées</h1>
        </div>
        <div className="items_container">
            <div>
                <FaPhone />
                <div className="text">
                    <h3>Téléphone</h3>
                    <span>03 23 67 22 69</span>
                </div>

            </div>
            <div>
                <FaMapMarkedAlt />
                <div className="text">
                    <h3>Adresse</h3>
                    <span>7 rue de la chaussée romaine</span>
                </div>
            </div>
            <div>
                <FaFacebookF />
                <div className="text">
                    <h3>Facebook</h3>
                    <span>facebook.com/pechetellier</span>
                </div>

            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.956655695268!2d3.2763020815745834!3d49.843271944406894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e81866e9dbfc81%3A0x607bd3ba82a7c808!2s7%20Rue%20de%20la%20Chauss%C3%A9e%20Romaine%2C%2002100%20Saint-Quentin!5e0!3m2!1sfr!2sfr!4v1625239152844!5m2!1sfr!2sfr" title="carte" loading="lazy"></iframe>

    </section>

  </Layout>
)
export default Contact
