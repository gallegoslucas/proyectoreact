import React from 'react'
import "./Footer.css"

function Footer() {
  return (
      <footer className="pie-pagina" >

          <div className="container-fluid">
              <div className="row">
                  <div className="col box">
                      <h2><u>CONTACTO</u></h2>
                      <article>
                          <i className="fa-brands fa-whatsapp">
                              <h3>2266456456</h3>
                          </i>
                      </article>
                      <article>
                          <i className="fa-solid fa-location-dot">
                              <h3>Balcarce, Buenos Aires. Argentina.</h3>
                          </i>
                      </article>
                  </div>
                  <div className="col box">
                      <h2><u>SEGUINOS</u></h2>

                      <article className="red-social" id="contacto">
                          <a href="#" className="fa fa-facebook"></a>
                          <a href="#" className="fa fa-instagram"></a>
                      </article>
                  </div>
                  <div className="col-sm-6 box">
                      <h2><u>DEJANOS UN COMENTARIO !</u></h2>

                      <article className="red-social" id="contacto">
                          <a href="formulario.html" className="fa-solid fa-comments"></a>

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