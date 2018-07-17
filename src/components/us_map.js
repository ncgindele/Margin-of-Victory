import React, { Component } from 'react';
// import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from 'react-usa-map';
import ContinuousColorLegend from 'react-vis/dist/legends/continuous-color-legend';
import US_STATES from '../data/list_of_states.js';
import CUSTOM_FILL from '../data/custom_us.js';


export default class USMap extends Component {
  constructor(props) {
      super(props);
      this.state = {currentState: {value: '', label: ''}};
  }

  handleChange(selectedOption) {
      this.setState({ currentState: selectedOption });
      this.props.onStateChange({"value": selectedOption, "label": US_STATES[selectedOption]});
    }

  render() {
    return (
      <div className="App">
        <div className="text-center">
        <USAMap
          title="Average margin of congressional victory"
          width={740} customize={CUSTOM_FILL} onClick={event => this.handleChange(event.target.dataset.name)} />
        </div>
          <ContinuousColorLegend
            width={640}
            startTitle="Highly Competitive"
            midTitle="Moderately Competitive"
            endTitle="Uncompetitive*"
            startColor="white"
            endColor="black" />
      </div>
    );
  }
}
