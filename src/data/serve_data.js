import CONGRESS_DATA from './2016_congress.js';

export function getCandidates(districtCode) {
  // Provides candidates in a given congressional district
  if (!districtCode) {
    return [];
  }
  const foundState = CONGRESS_DATA.states.find((state) => {
    return districtCode.substring(0, 2) == state.key;
  });
  const foundRace = foundState.races.find((race) => {
    return race.code == districtCode;
  });
  return foundRace
    ? foundRace.candidates : [];
}

export function getDistrictsFromState(currentState) {
  // Provides a list of congressional districts given a state
  const stateData = CONGRESS_DATA.states.find((state) => {
    if (state.key == currentState) {
      return state;
    }
  });
  if (stateData) {
    const list = stateData.races.map((race) => {
      return {"value": race.code, "label": race.code};
    });
    return list;
  } else {
    return [];
  }
}

export function getBarData(party, stateProp, distProp) {
  /* Returns bargraph data when passed political party, currently selected
   state, and currently selected district arguments. Adjustments to the display
   opacity are made on the basis of active/unactive status */
  const currentState = (stateProp ? stateProp.value : null);
  const currentDistrict = (distProp ? distProp.value : null);
  let data = [];
  let state;
  let race;
  let stateOpacity;
  let defaultOpacity;
  if (currentDistrict) {
    stateOpacity = 0.37;
    defaultOpacity = 0.1;
  } else if (currentState) {
    stateOpacity = 1;
    defaultOpacity = 0.15;
  } else {
    stateOpacity = 1;
    defaultOpacity = 1;
  }
  const satisfyParty = (candidate, party) => {
    if (candidate.party == party) {
      return true;
    } else if (party == null && candidate.party != 'Republican' && candidate.party != 'Democrat') {
      return true;
    } else {
      return false;
    }
  }
  for (var i = 0; i < CONGRESS_DATA.states.length; i++) {
    // for each state
    state = CONGRESS_DATA.states[i];
    for (var j = 0; j < state.races.length; j++) {
      //for each race
      race = state.races[j]
      if (satisfyParty(race.candidates[0], party)) {
        if (currentState == state.key) {
          if (currentDistrict == race.code) {
            data.push({x: race.rank, y: race.margin});
          } else {
            data.push({x: race.rank, y: race.margin, opacity: stateOpacity});
          }
        } else {
          data.push({x: race.rank, y: race.margin, opacity: defaultOpacity});
        }
      }
    }
  }
  return data;
}
