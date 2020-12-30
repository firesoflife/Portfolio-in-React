import React from 'react';
import '../sass/App.scss';

const Knowledge = () => {
  return (
    <section className="home-c" id="home-c">
      {/* <!-- Section Title Start --> */}
      <div className="code-timeline">
        <div className="bg-img">
          <div className="section__title--container">
            <h2 className="section__title--b">My Tech Life</h2>
            <div className="section__title--bottom-line"></div>
            <p className="section__title--lead">
              Follow the link below to see a timeline of my education in tech.
              My current proficiencies and future study intentions are listed
            </p>
            <div className="timeline">
              <a
                href="construction.html"
                target="_blank"
                className="btn-timeline"
              >
                <span>Check It Out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
