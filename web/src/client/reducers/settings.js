const defaultData = {
  initialData: {
    airFlow: '',
    length: ''
  },
  material: {
    value: 'Листовая сталь' 
  },
  section: {
    value: 'circle'
  },
  diameter: null,
  speed: null,
  roughness: null,
  r: null,
  ps: null,
  rnl: null,
  z: null,
  fullR: null,
  addR: null,
  sumR: null,
  sizes: null,
  resistance: [{type: 'Другое', value: 0}],
  dopResistance: 0,
  branchesRegion: 0,
  branches: {
    region: -1,
    data: []
  }
}

const defaultState = () => {
  return {
    global: {
      type: {
        value1: 'out',
        value2: 'natural'
      },
      speed: {
        auto: true,
        min: 1,
        max: 1.5
      },
      temp: {
        city: 'Не выбран',
        inside: 20,
        outside: 5
      },
      height: 0,
      errors: []
    },
    local: {
      region: 0,
      data: [defaultData]
    }
  };
};

const updateSettings = (state, action) => {

  if (state === undefined) {
    return defaultState();
  }

  let region = state.settings.local.region;
  let regionBranch = state.settings.local.data[region].branches.region;

  switch (action.type) {
    
    case 'CHANGE_SETTINGS':
      return {
        ...state.settings,
        ...action.payload
      };
    break;
    
    case 'CHANGE_HEIGHT':
      let newValuesHeight = {...state.settings.global};
      newValuesHeight.height = action.height;
      return {
        ...state.settings,
        global: newValuesHeight
      };
    break;

    case 'CHANGE_RESISTANCE':
      let newValues = [...state.settings.local.data[state.settings.local.region].resistance];
      newValues[action.index] = action.newResistance;
      let allResistanceChange = [...state.settings.local.data];
      allResistanceChange[state.settings.local.region].resistance = newValues;
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: allResistanceChange
        }
      };
    break;

    case 'CHANGE_RESISTANCE_BRANCH':
      let newValuesBranch = [...state.settings.local.data[region].branches.data[regionBranch].resistance];
      newValuesBranch[action.index] = action.newResistance;
      let allResistanceChangeBranch = [...state.settings.local.data];
      allResistanceChangeBranch[region].branches.data[regionBranch].resistance = newValues;
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: allResistanceChangeBranch
        }
      };
    break;

    case 'CHANGE_DOPRESISTANCE':
      let newValuesDopResistance = [...state.settings.local.data];
      newValuesDopResistance[state.settings.local.region].dopResistance = action.newResistance;
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: newValuesDopResistance
        }
      };
    break;

    case 'CHANGE_DOPRESISTANCE_BRANCH':
      let newValuesDopResistanceBranch = [...state.settings.local.data];
      newValuesDopResistanceBranch[region].branches.data[regionBranch].dopResistance = action.newResistance;
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: newValuesDopResistanceBranch
        }
      };
    break;

    case 'ADD_RESISTANCE':
      let allResistanceAdd = [...state.settings.local.data];
      allResistanceAdd[state.settings.local.region].resistance.push({type: 'Другое', value: 0})
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: allResistanceAdd
        }
      };
    break;

    case 'ADD_RESISTANCE_BRANCH':
      let allResistanceAddBranch = [...state.settings.local.data];
      allResistanceAddBranch[region].branches.data[regionBranch].resistance.push({type: 'Другое', value: 0})
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: allResistanceAddBranch
        }
      };
    break;

    case 'DEL_RESISTANCE':
      let allResistanceDel = [...state.settings.local.data];
      allResistanceDel[state.settings.local.region].resistance = [...allResistanceDel[state.settings.local.region].resistance.slice(0, action.index), ...allResistanceDel[state.settings.local.region].resistance.slice(action.index+1)];
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: allResistanceDel
        }
      };
    break;

    case 'DEL_RESISTANCE_BRANCH':
      let allResistanceDelBranch = [...state.settings.local.data];
      allResistanceDelBranch[region].branches.data[regionBranch].resistance = [...allResistanceDelBranch[region].branches.data[regionBranch].resistance.slice(0, action.index), ...allResistanceDelBranch[region].branches.data[regionBranch].resistance.slice(action.index+1)];
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: allResistanceDelBranch
        }
      };
    break;

    case 'CHANGE_INITIALDATA':
      let newValuesInitialData = [...state.settings.local.data];
      newValuesInitialData[state.settings.local.region].initialData.airFlow = action.airFlow;
      newValuesInitialData[state.settings.local.region].initialData.length = action.length;
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: newValuesInitialData
        }
      };
    break;

    case 'CHANGE_INITIALDATA_BRANCH':
      let newValuesInitialDataBranch = [...state.settings.local.data];
      newValuesInitialDataBranch[region].branches.data[regionBranch].initialData.airFlow = action.airFlow;
      newValuesInitialDataBranch[region].branches.data[regionBranch].initialData.length = action.length;
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: newValuesInitialDataBranch
        }
      };
    break;
    
    case 'CHANGE_MATERIAL':
      let newValuesMaterial = [...state.settings.local.data];
      newValuesMaterial[state.settings.local.region].material.value = action.value;;
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: newValuesMaterial
        }
      };
    break;

    case 'CHANGE_MATERIAL_BRANCH':
      let newValuesMaterialBranch = [...state.settings.local.data];
      newValuesMaterialBranch[region].branches.data[regionBranch].material.value = action.value;;
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: newValuesMaterialBranch
        }
      };
    break;

    case 'CHANGE_SECTION':
      let newValuesSection = [...state.settings.local.data];
      newValuesSection[state.settings.local.region].section.value = action.value;;
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: newValuesSection
        }
      };
    break;

    case 'CHANGE_SECTION_BRANCH':
      let newValuesSectionBranch = [...state.settings.local.data];
      newValuesSectionBranch[region].branches.data[regionBranch].section.value = action.value;
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: newValuesSectionBranch
        }
      };
    break;

    case 'CHANGE_TYPE':
      let newValuesType = {...state.settings.global};
      newValuesType.type.value1 = action.value1;
      newValuesType.type.value2 = action.value2;
      if (state.settings.global.speed.auto) {
        if ((action.value1 == 'out') && (action.value2 == 'natural')) {
          newValuesType.speed.min = 1;
          newValuesType.speed.max = 1.5;
        }
        if ((action.value1 == 'out') && (action.value2 == 'mechanical')) {
          newValuesType.speed.min = 3;
          newValuesType.speed.max = 6;
        }
        if ((action.value1 == 'in') && (action.value2 == 'natural')) {
          newValuesType.speed.min = 1;
          newValuesType.speed.max = 2;
        }
        if ((action.value1 == 'in') && (action.value2 == 'mechanical')) {
          newValuesType.speed.min = 2;
          newValuesType.speed.max = 6;
        }
      }
      return {
        ...state.settings,
        global: newValuesType
      };
    break;

    case 'CHANGE_SPEED':
      let newValuesSpeed = {...state.settings.global};
      newValuesSpeed.speed.auto = action.auto;
      if (action.auto) {
        if ((state.settings.global.type.value1 == 'out') && (state.settings.global.type.value2 == 'natural')) {
          newValuesSpeed.speed.min = 1;
          newValuesSpeed.speed.max = 1.5;
        }
        if ((state.settings.global.type.value1 == 'out') && (state.settings.global.type.value2 == 'mechanical')) {
          newValuesSpeed.speed.min = 3;
          newValuesSpeed.speed.max = 6;
        }
        if ((state.settings.global.type.value1 == 'in') && (state.settings.global.type.value2 == 'natural')) {
          newValuesSpeed.speed.min = 1;
          newValuesSpeed.speed.max = 2;
        }
        if ((state.settings.global.type.value1 == 'in') && (state.settings.global.type.value2 == 'mechanical')) {
          newValuesSpeed.speed.min = 2;
          newValuesSpeed.speed.max = 6;
        }
      } else {
        newValuesSpeed.speed.min = action.min;
        newValuesSpeed.speed.max = action.max;
      }
      return {
        ...state.settings,
        global: newValuesSpeed
      };
    break;

    case 'CHANGE_TEMP':
      let newValuesTemp = {...state.settings.global};
      newValuesTemp.temp.city = action.city;
      newValuesTemp.temp.inside = action.inside;
      newValuesTemp.temp.outside = action.outside;
      return {
        ...state.settings,
        global: newValuesTemp
      };
    break;

    case 'CHANGE_REGION':
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          region: action.region
        }
      };
    break;

    case 'CHANGE_REGION_BRANCH':
      let newValuesRegionBranch = [...state.settings.local.data];      
      newValuesRegionBranch[region].branches.region = action.region;
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: newValuesRegionBranch
        }
      };
    break;

    case 'ADD_LOCAL_REGION':
      let newValuesLocal = [...state.settings.local.data];
      newValuesLocal.push(defaultData)
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          region: newValuesLocal.length - 1,
          data: newValuesLocal
        }
      };
    break;

    case 'ADD_LOCAL_REGION_BRANCH':      
      let newValuesLocalBranch = [...state.settings.local.data];
      newValuesLocalBranch[region].branches.data.push(defaultData);
      newValuesLocalBranch[region].branches.region = newValuesLocalBranch[region].branches.data.length - 1;
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: newValuesLocalBranch
        }
      };
    break;

    case 'DEL_LOCAL_REGION':
      let newValuesLocalDel = [...state.settings.local.data];
      newValuesLocalDel = [...newValuesLocalDel.slice(0, action.index), ...newValuesLocalDel.slice(action.index+1)];
      let newRegion = state.settings.local.region;
      if ((state.settings.local.region + 1) == state.settings.local.data.length) {
        newRegion -= 1; 
      }
      
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          region: newRegion,
          data: newValuesLocalDel
        }
      };
    break;

    case 'DEL_LOCAL_REGION_BRANCH':
      let newValuesLocalDelBranch = [...state.settings.local.data];
      newValuesLocalDelBranch[region].branches.data = [...newValuesLocalDelBranch[region].branches.data.slice(0, action.index), ...newValuesLocalDelBranch[region].branches.data.slice(action.index+1)];
      console.log((regionBranch), state.settings.local.data[region].branches.data.length);
      
      if ((regionBranch + 1) == state.settings.local.data[region].branches.data.length) {
        newValuesLocalDelBranch[region].branches.region -= 1;
        console.log(13);
        
      }
      
      return {
        ...state.settings,
        local: {
          ...state.settings.local,
          data: newValuesLocalDelBranch
        }
      };
    break;


    default:
      return state.settings;
  }
};

export default updateSettings;