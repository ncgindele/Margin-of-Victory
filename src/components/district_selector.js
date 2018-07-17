import React, { Component } from 'react';
import Select from 'react-select';
import CONGRESS_DATA from '../data/2016_congress.js';


export default class DistrictSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {currentDistrict: ''};
        this.districtList = [];
    }


    render(props) {
        const stateData = CONGRESS_DATA.states.find((state) => {
            if (state.key == this.props.currentState.value) {
                return state;
            }
        });
        if (stateData) {
            const list = stateData.races.map((race) => {
                return {"value": race.code, "label": race.code};
            });
            this.districtList = list;
        }
        return (
            <div className="nav-input">
              <Select
                  name="state-selector"
                  value={ this.props.currentDistrict }
                  onChange={event => this.handleChange(event)}
                  options={this.districtList}
                  clearable={false}
                  placeholder="Select District"
                  />
            </div>
        );
    }
    handleChange(selectedOption) {
        this.setState({ currentDistrict: selectedOption });
        this.props.onDistrictChange(selectedOption);
    }
}
