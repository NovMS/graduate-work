const changeSettings = (payload) => {
  return {
    type: 'CHANGE_SETTINGS',
    payload: payload
  };
};

const changeResistance = (newResistance, index, branch = false) => {
  return {
    type: `CHANGE_RESISTANCE${branch ? '_BRANCH' : ''}`,
    index: index,
    newResistance: newResistance
  };
};

const changeDopResistance = (newResistance, branch=false) => {
  return {
    type: `CHANGE_DOPRESISTANCE${branch ? '_BRANCH' : ''}`,
    newResistance: newResistance
  };
};

const addResistance = (branch=false) => {
  return {
    type: `ADD_RESISTANCE${branch ? '_BRANCH' : ''}`
  };
};

const delResistance = (index, branch=false) => {
  return {
    type: `DEL_RESISTANCE${branch ? '_BRANCH' : ''}`,
    index: index
  };
};

const changeInitialData = (airFlow, length, branch=false) => {
  return {
    type: `CHANGE_INITIALDATA${branch ? '_BRANCH' : ''}`,
    airFlow: airFlow,
    length: length
  };
};

const changeMaterial = (value, branch=false) => {
  return {
    type: `CHANGE_MATERIAL${branch ? '_BRANCH' : ''}`,
    value: value,
  };
};

const changeSection = (value, branch=false) => {
  return {
    type: `CHANGE_SECTION${branch ? '_BRANCH' : ''}`,
    value: value,
  };
};

const changeType = (value1, value2) => {
  return {
    type: 'CHANGE_TYPE',
    value1: value1,
    value2: value2
  };
};

const changeSpeed = (min, max, auto) => {
  return {
    type: 'CHANGE_SPEED',
    min: min,
    max: max,
    auto: auto
  };
};

const changeTemp = (city, inside, outside) => {
  return {
    type: 'CHANGE_TEMP',
    city: city,
    inside: inside,
    outside: outside
  };
};

const changeRegion = (region, branch=false) => {
  return {
    type: `CHANGE_REGION${branch ? '_BRANCH' : ''}`,
    region: region
  };
};

const addLocalRegion = (branch=false) => {
  return {
    type: `ADD_LOCAL_REGION${branch ? '_BRANCH' : ''}`
  };
};

const delLocalRegion = (index, branch=false) => {
  return {
    type: `DEL_LOCAL_REGION${branch ? '_BRANCH' : ''}`,
    index: index
  };
};

const changeHeight = (height) => {
  return {
    type: 'CHANGE_HEIGHT',
    height: height
  };
};

export {
  changeSettings,
  changeHeight,
  changeResistance,
  changeDopResistance,
  addResistance,
  delResistance,
  changeInitialData,
  changeMaterial,
  changeSection,
  changeType,
  changeSpeed,
  changeTemp,
  changeRegion,
  addLocalRegion,
  delLocalRegion
}
