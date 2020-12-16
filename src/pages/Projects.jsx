import React from 'react';
import '../sass/App.scss';

function Projects() {
  return (
    <div>
      <section className="home-b" id="projects">
        <div className="container">
          {/* <!-- Section Titles Start --> */}
          <div className="section__title--container">
            <h2 className="section__title--b">
              A Small Sampling of the Sites I Have Built
            </h2>
            <div className="section__title--bottom-line"></div>
            <p className="lead"></p>
          </div>
        </div>
        {/* <!-- Section Title End --> */}
        <div className="container">
          <div className="gallery">
            {/* <!-- Woven Collections - Shopify --> */}
            <figure className="gallery__item gallery__item--1">
              <img
                src="img/woven.jpg"
                className="gallery__img"
                alt="Woven Collection Hompage"
              />
              <div className="gallery__info">
                <div className="gallery__info--text">
                  <div>
                    <h3>Woven Collections | E-commerce</h3>
                    <h4>Made with Shopify</h4>
                  </div>
                </div>
                <div className="gallery__info--text">
                  <p>
                    This is a simple Shopify e-commerce store. I made minor
                    tweaks to the theme and added and set up a variety of
                    plug-ins to suit the customers needs.
                  </p>
                  <a
                    href="https://wovencollections.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="btn-project">Visit Site</div>
                  </a>
                </div>
              </div>
            </figure>
            <figure className="gallery__item gallery__item--2">
              <img
                src="img/Boston_Film_Project.jpg"
                className="gallery__img"
                alt="Ficticious Boston Film Festival Homepage Screenshot"
              />
              <div className="gallery__info">
                <div className="gallery__info--text">
                  <div>
                    <h3>Film Festival | Project</h3>
                    <h4>An HTML & CSS Project for OpenClassrooms.com</h4>
                  </div>
                </div>
                <div className="gallery__info--text">
                  <p>
                    This site was built from scratch for an OpenClassrooms.com
                    project based on a fictional company that required a site
                    for festival information and pre-registration for attendance
                    via web-form.
                  </p>
                  <a href="Boston Film Festival/index.html" target="_blank">
                    <div className="btn-project">Visit Site</div>
                  </a>
                </div>
              </div>
            </figure>
            <figure className="gallery__item gallery__item--3">
              <img
                src="img/Delta.jpg"
                className="gallery__img"
                alt="Ficticious Luxury Mountain Chalet Realtor Website Screenshot"
              />
              <div className="gallery__info">
                <div className="gallery__info--text">
                  <div>
                    <h3>Delta Realty | Project</h3>
                    <h4>A Wordpress Theme based site with customizations</h4>
                  </div>
                </div>
                <div className="gallery__info--text">
                  <p>
                    A Wordpress based project for a fictional luxury real-estate
                    company. A pre-built theme was chosen and custom CSS styles
                    were applied using a child-theme methodology.
                  </p>
                  <a
                    href="https://dev-mountain-calm-realty.pantheonsite.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="btn-project">Visit Site</div>
                  </a>
                </div>
              </div>
            </figure>
            <figure className="gallery__item gallery__item--4">
              <img
                src="img/Nuno.jpg"
                className="gallery__img"
                alt="A Website Screenshot for a Wordpress Theme Developed Using Bootstrap"
              />
              <div className="gallery__info">
                <div className="gallery__info--text">
                  <div>
                    <h3>Nuno | Animated Template</h3>
                    <h4>HTML | CSS | Bootstrp 4 | PHP</h4>
                  </div>
                </div>
                <div className="gallery__info--text">
                  <p>
                    Built in a guided course with Drew Ryan eomploying a
                    pseudo-parallax fixed window scroll feature and ample yet
                    unobtrusive animations on scroll. The images and structures
                    can be changed to suit any purpose.
                  </p>
                  <a href="nuno/index.html" target="_blank">
                    <div className="btn-project">Visit Site</div>
                  </a>
                </div>
              </div>
            </figure>
            <figure className="gallery__item gallery__item--5">
              <img
                src="img/Trillo.jpg"
                className="gallery__img"
                alt="A CSS 3 Developed Website Screenshot for a fictious Real Estate Company"
              />
              <div className="gallery__info">
                <div className="gallery__info--text">
                  <div>
                    <h3>Trillo</h3>
                    <h4>CSS & SASS</h4>
                  </div>
                </div>
                <div className="gallery__info--text">
                  <p>
                    A guided CSS & Sass project built under the instruction of
                    Jonas Schmedtmann using the latest standards in HTML and
                    CSS.
                  </p>
                  <a href="Trillo/index.html" target="_blank">
                    <div className="btn-project">Visit Site</div>
                  </a>
                </div>
              </div>
            </figure>
            <figure className="gallery__item gallery__item--6">
              <img
                src="img/natours.jpg"
                className="gallery__img"
                alt="A Screenshot of a Website for a Fictitious Nature Travel Company"
              />
              <div className="gallery__info">
                <div className="gallery__info--text">
                  <div>
                    <h3>Natours | Nature Travel Site</h3>
                    <h4>HTML 5 | CSS & SASS | Jquery</h4>
                  </div>
                </div>
                <div className="gallery__info--text">
                  <p>
                    All code by me under the design and instruction of Jonas
                    Schmedtmann
                  </p>
                  <a href="Natours/index.html" target="_blank">
                    <div className="btn-project">Visit Site</div>
                  </a>
                </div>
              </div>
            </figure>
            <figure className="gallery__item gallery__item--7">
              <img
                src="img/omnifood.jpg"
                className="gallery__img"
                alt="A Screenshot of A Website for a fictitious Food Delivery Service"
              />
              <div className="gallery__info">
                <div className="gallery__info--text">
                  <div>
                    <h3>Omnifood</h3>
                    <h4>HTML | CSS |</h4>
                  </div>
                </div>
                <div className="gallery__info--text">
                  <p>
                    coded under the design and directin of Jonas Schmedtmann
                  </p>
                  <a href="Omnifood/index.html" target="_blank">
                    <div className="btn-project">Visit Site</div>
                  </a>
                </div>
              </div>
            </figure>
            <figure className="gallery__item gallery__item--8">
              <img
                src="img/Timeline.jpg"
                className="gallery__img"
                alt="A screenshot for a website of a knowledge tree style portfolio site"
              />
              <div className="gallery__info">
                <div className="gallery__info--text">
                  <div>
                    <h3>A Simple CSS Timeline</h3>
                    <h4>HTML | CSS | JavaScript</h4>
                  </div>
                </div>
                <div className="gallery__info--text">
                  <p>
                    A small time-line project that incorporates Jquery. Built
                    under the guidance of Brad Traversy.
                  </p>
                  <a href="TimeLine/index.html" target="_blank">
                    <div className="btn-project">Visit Site</div>
                  </a>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
