import React, {Component} from 'react';
import CongressBarGraph from './congress_bar_graph';
import StateSelector from './state_selector';
import DistrictSelector from './district_selector';
import Infobox from './infobox';
import USMap from './us_map.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: {
        value: '',
        label: ''
      },
      currentDistrict: {
        value: '',
        label: ''
      }
    };
    this.assignState = this.assignState.bind(this);
    this.assignDistrict = this.assignDistrict.bind(this);
  }

  assignState(newState) {
    this.setState({
      currentState: newState,
      currentDistrict: {
        value: '',
        label: ''
      }
    });
  }

  assignDistrict(newDistrict) {
    this.setState({currentDistrict: newDistrict});
  }

  render() {
    return (<div>
      <nav className="navbar navbar-dark bg-dark">
        <h1 className="big-name">
          <span className="highlight">Margin of Victory Visualizations:
          </span>
          <em>US House of Representatives (2016)</em>
        </h1>
        <form className="form-inline my-2 mt-4 my-lg-0">
          <label className="mr-sm-2">State:</label>
          <StateSelector className="mr-sm-2" currentState={this.state.currentState} onStateChange={this.assignState}/>
          <label className="mr-sm-2">District:</label>
          <DistrictSelector className="mr-sm-2" currentState={this.state.currentState} currentDistrict={this.state.currentDistrict} onDistrictChange={this.assignDistrict}/>
        </form>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center"></div>
          <div className="col-xl-6">
            <USMap onStateChange={this.assignState}/>
          </div>
          <div className="col-xl-6">
            <CongressBarGraph currentState={this.state.currentState} currentDistrict={this.state.currentDistrict}/>
          </div>
        </div>
        <Infobox currentState={this.state.currentState} currentDistrict={this.state.currentDistrict}/>
      </div>
    </div>);
  }
}
