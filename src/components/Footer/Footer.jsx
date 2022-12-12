import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import {faFacebookF, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
function Footer() {
  return (
      <footer className="pie-pagina" >

          <div className="container-fluid">
              <div className="row">
                  <div className="col box">
                      <h2><u>CONTACTO</u></h2>
                      <article>
                          <i className="fa-brands fa-whatsapp">
                              <FontAwesomeIcon icon={faWhatsapp} />
                              <h3>2266456456</h3>
                          </i>
                      </article>
                      <article>
                          <i className="fa-solid fa-location-dot">
                              <FontAwesomeIcon icon={faLocationDot} />
                              <h3>Balcarce, Buenos Aires. Argentina.</h3>
                          </i>
                      </article>
                  </div>
                  <div className="col box">
                      <h2><u>SEGUINOS</u></h2>

                      <article className="red-social" id="contacto">
                          <a href="#" className="fa fa-facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                          <a href="#" className="fa fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                      </article>
                  </div>
                  <div className="col-sm-6 box">
                      <h2><u>DEJANOS UN COMENTARIO !</u></h2>

                      <article className="red-social" id="contacto">
                          <a href="formulario.html" className="fa-solid fa-comments"><FontAwesomeIcon icon={faComments} /></a>

                      </article>
                  </div>
              </div>
          </div>
          <div className="grupo2">
              <small>&copy; 2022 <b>Cornicione</b> - Todos los derechos reservados.</small>
          </div>
      </footer>
  )
}

export default Footer