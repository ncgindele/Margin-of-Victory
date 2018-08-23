import React, {Component} from 'react';
import Select from 'react-select';
import US_STATES from '../data/list_of_states.js';

export default class StateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: {
        value: '',
        label: ''
      }
    };
    this.options = Object.keys(US_STATES).map((key) => {
      return {"value": key, "label": US_STATES[key]}
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({currentState: newProps.currentState});
  }
  render() {
    return (<div className="nav-input">
      <Select name="state-selector" value={this.state.currentState} onChange={event => this.handleChange(event)} options={this.options} clearable={false} placeholder="State" width="75px"/>
    </div>);
  }
  handleChange(selectedOption) {
    this.setState({currentState: selectedOption});
    this.props.onStateChange(selectedOption);
  }
}
