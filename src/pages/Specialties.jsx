import React, { ScrollTotopOnMount } from 'react';
import '../sass/App.scss';

// import ScrollableSection from 'react-update-url-on-scroll';

const Specialties = () => {
  return (
    <div>
      {/* <ScrollTotopOnMount /> */}
      {/* <!-- SECTION A: SPECIALTIES --> */}
      <section className="home-a" id="specialties" name={'specialties'}>
        <div className="container">
          {/* <!-- Section Titles Start --> */}
          <div className="section__title--container">
            <h2 className="section__title--a">
              Some of the Web Stuff that I can build
            </h2>
            <div className="section__title--bottom-line"></div>
            <p className="lead"></p>
          </div>
          {/* <!-- Section Title End --> */}
          <div className="home-a--content specials">
            <div className="specials__item">
              <div className="specials__item--icon-box-odd specials__item-box">
                <i className="material-icons md-36">architecture</i>
              </div>
              <div className="specials__text-box">
                <h3>Project Management</h3>
                <p>
                  Need a Website? I will take you from the very start through to
                  the end. Not sure exactly what you need? That's ok! Together
                  we will discuss the goals for your project to maximize your
                  visitors engagment with your site, product, service, or
                  message! If you've already got some ideas, some designs, and
                  materials you'd like to incorporate, rest assured, I will
                  bring them to life on the web! Get in touch below to get
                  started.
                </p>
              </div>
            </div>
            <div className="specials__item">
              <div className="specials__item--icon-box-even specials__item-box">
                <i className="material-icons md-36">palette</i>
              </div>
              <div className="specials__text-box">
                <h3>Full UX/UI Design</h3>
                <p>
                  One of the most important things to consider is how users will
                  interact with your page. User experience is the name of the
                  game here, and I have spent years analyzing and thinking
                  through what makes a website "good". After all, users won't
                  spend much time on a website they deem to be confusing and
                  difficult to navigate. I put extensive effort into building a
                  simple interface that is inviting and engaging!
                </p>
              </div>
            </div>
            <div className="specials__item">
              <div className="specials__item--icon-box-odd specials__item-box">
                <i className="material-icons md-36">code</i>
              </div>
              <div className="specials__text-box">
                <h3>Coding & Development</h3>
                <p>
                  I have years of experience in designing web sites which has
                  translated into figuring out clean and efficient code that
                  will work great for many projects. My incredible passion for
                  education and learning has me adding new skills and coding
                  languages and techniques all the time. I'm currently. Current
                  proficiencies include:
                </p>
                <ul>
                  <li>† HTML5 & CSS3 | Bootstrap | Sass</li>
                  <li>† JavaScript</li>
                  <li>
                    † React.js <sub>coming soon</sub>
                  </li>
                  <li>
                    † Ruby <sub>coming soon</sub>
                  </li>
                  <li>† Wordpress, Shopify, WooCommerce & More</li>
                </ul>
              </div>
            </div>
            <div className="specials__item">
              <div className="specials__item--icon-box-even specials__item-box">
                <i className="material-icons md-36">store</i>
              </div>
              <div className="specials__text-box">
                <h3>E-commerce Solutions</h3>
                <p>
                  Got a website and need to get your product to market? Need a
                  website to get your product to market? I will get you set up
                  in short order!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="tech">
            <div>
              <ion-icon name="logo-html5" className="tech__icons"></ion-icon>
              <p className="tech__title">HMTL 5</p>
            </div>
            <div>
              <ion-icon name="logo-css3" className="tech__icons"></ion-icon>
              <p className="tech__title">CSS 3</p>
            </div>
            <div>
              <ion-icon
                name="logo-javascript"
                className="tech__icons"
              ></ion-icon>
              <p className="tech__title">JavaScript</p>
            </div>
            <div>
              <ion-icon name="logo-sass" className="tech__icons"></ion-icon>
              <p className="tech__title">Sass</p>
            </div>
            <div>
              <ion-icon
                name="logo-wordpress"
                className="tech__icons"
              ></ion-icon>
              <p className="tech__title">Wordpress</p>
            </div>
            <div>
              <ion-icon name="logo-react" className="tech__icons"></ion-icon>
              <p className="tech__title">React</p>
            </div>
            <div>
              <ion-icon
                name="code-slash-outline"
                className="tech__icons"
              ></ion-icon>
              <p className="tech__title">More Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialties;
