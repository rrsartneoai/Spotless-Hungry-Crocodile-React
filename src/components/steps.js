import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps-actions">
              <button className="thq-button-animated thq-button-filled steps-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text14 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text15 thq-heading-3">01</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text17 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text18 thq-heading-3">02</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text20 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text21 thq-heading-3">03</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text23 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step2Title: 'Real-Time Data Integration',
  step1Title: 'Map Display & Styling',
  step2Description:
    "Connect to public bike-sharing APIs to fetch live data. Use JavaScript's setInterval function to refresh data every 30 seconds. Display live station status and information.",
  step4Title: 'Interactive Features',
  step3Description:
    'Use additional APIs or datasets to display nearby points of interest like bike repair shops, public restrooms, and tourist attractions. Add distinct icons for each category.',
  step3Title: 'Points of Interest',
  step1Description:
    'Use a modern mapping library like Leaflet or Mapbox GL JS to render the map. Design or source custom bicycle markers. Implement dark/light mode toggle and layer controls.',
  step4Description:
    'Implement a collapsible sidebar with layer controls and a searchable station list. Allow user contributions through forms. Integrate real-time weather overlay.',
}

Steps.propTypes = {
  step2Title: PropTypes.string,
  step1Title: PropTypes.string,
  step2Description: PropTypes.string,
  step4Title: PropTypes.string,
  step3Description: PropTypes.string,
  step3Title: PropTypes.string,
  step1Description: PropTypes.string,
  step4Description: PropTypes.string,
}

export default Steps
