import React, {Component} from 'react';
import {getDistrictsFromState} from '../data/serve_data.js'
import {getCandidates} from '../data/serve_data.js';

const Infobox = (props) => {
  function renderDistricts() {
    let districts = [];
    if (props.currentDistrict.value != "") {
      districts.push(props.currentDistrict)
    } else if (props.currentState.value != "") {
      districts = getDistrictsFromState(props.currentState.value);
    }
    let output = districts.map((districtCode) => {
      return (<tbody key={'tbody' + districtCode.value}>
        {renderCandidates(districtCode)}
      </tbody>);
    });
    return output.length != 0 ? output : <tbody></tbody>;
  }
  function renderCandidates(displayDistrict) {
    var candidates = getCandidates(displayDistrict.value);
    const output = candidates.map((val, index) => {
      let partyClass = val.party;
      return (<tr key={index} className="d-flex">
        <td className="district-label col-2">{
            index == 0  ? displayDistrict.value
              : ""
          }</td>
        <td className={partyClass + " col-2"}>{val.party}</td>
        <td className="col-4">{val.name}</td>
        <td className="col-2">{val.votes}</td>
        <td className="col-2">{val.share}%</td>
      </tr>);
    });
    return output.length != 0 ? output : <tr></tr>;
  }
  return (<div>
    <table className="table">
      <thead className="thead-dark">
        <tr className="d-flex">
          <th className="state-label col-2" scope="col">{props.currentState.label}</th>
          <th scope="col" className="col-2">Party</th>
          <th scope="col" className="col-4">Candidate</th>
          <th scope="col" className="col-2">Votes</th>
          <th scope="col" className="col-2">Share</th>
        </tr>
      </thead>
      {renderDistricts()}
    </table>
  </div>);
};

export default Infobox;
