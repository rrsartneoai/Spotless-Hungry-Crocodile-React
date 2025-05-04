import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author4Alt: 'Sarah Lee - Local Resident',
  author1Src:
    'https://images.unsplash.com/photo-1610568781018-995405522539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM1NTg0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: 'Tourist',
  author2Position: 'Commuter',
  author3Name: 'David Johnson',
  review1:
    'The interactive map made it so easy for me to find bike stations near me. Great job!',
  author4Position: 'Local Resident',
  author1Name: 'John Doe',
  review3:
    'This app saved me so much time exploring the city on two wheels. Highly recommended!',
  author2Src:
    'https://images.unsplash.com/photo-1532675432006-329c6fed7045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM1NTg0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1539698103494-a76dd0436fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM1NTg0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM1NTg0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'John Doe - Cyclist',
  author4Name: 'Sarah Lee',
  author2Alt: 'Jane Smith - Commuter',
  author1Position: 'Cyclist',
  review2:
    'I love the real-time data updates, it helps me plan my bike trips more efficiently.',
  review4:
    "I appreciate the points of interest feature, it's like having a personal guide while biking around town.",
  author3Alt: 'David Johnson - Tourist',
  author2Name: 'Jane Smith',
  heading1: 'Testimonials',
  content1:
    'See what our users have to say about their experience with our bike-sharing map application.',
}

Testimonial.propTypes = {
  author4Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author3Position: PropTypes.string,
  author2Position: PropTypes.string,
  author3Name: PropTypes.string,
  review1: PropTypes.string,
  author4Position: PropTypes.string,
  author1Name: PropTypes.string,
  review3: PropTypes.string,
  author2Src: PropTypes.string,
  author4Src: PropTypes.string,
  author3Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author4Name: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.string,
  review2: PropTypes.string,
  review4: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Name: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
}

export default Testimonial
