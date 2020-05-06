const roughnessTable = require('./../../table-values/roughness');
const material = require('./../../table-values/material');
const {circleDiameters, crossSections} = require('./../../table-values/diameters');
const rTable = require('./../../table-values/r-table');
const pTable = require('./../../table-values/p-table');

const getResultTable = async (req, res) => {
  let settings  = JSON.parse(req.body.settings);
  const avgSpeed = (settings.global.speed.min + settings.global.speed.max) / 2;
  let errors = [];

  settings.local.data.map((item, i) => {
    if (item.material.value && item.initialData.airFlow && item.section.value && item.initialData.length) {
      const materialValue = material(item.material.value);
      const roughness = getRoughness(avgSpeed, materialValue);
      const F = item.initialData.airFlow / (3600 * avgSpeed);
      const {fFact, diameter, sizes} = getDiameter(item.section.value, F);
      const VFact = item.initialData.airFlow / (3600 * fFact);
      const Ps = ((353/(273+settings.global.temp.inside)) * VFact * VFact)/2;
      const R = getR(VFact, diameter);
      const Rnl = R * roughness * (+item.initialData.length);
      const delP = settings.global.height * (getP(5) - getP(settings.global.temp.inside)) * 9.81;
      const sumR = Rnl + ( Rnl * Ps) + (+item.dopResistance);
  
      item.diameter = diameter;
      item.roughness = roughness;
      item.speed = VFact.toFixed(4);
      item.r = R;
      item.ps = Ps.toFixed(4);
      item.rnl = Rnl.toFixed(4);
      item.z = (Rnl * Ps).toFixed(4);
      item.fullR = (Rnl + ( Rnl * Ps)).toFixed(4);
      item.sumR = sumR.toFixed(4);
      item.sizes = sizes ? sizes : null;

      if (delP < sumR) {
        errors.push(`Участок ${i+1}: необходимо будет установить вентилятор или дифлектор`)
      }
    } else {
      errors.push(`Участок ${i+1}: введены не все данные`)
    }    
  })

  settings.global.errors = errors;
  return settings;
}

const getRoughness = (avgSpeed, materialValue) => {
  let roughness = 1;
  if (materialValue >= 1) {
    let preKey = 0.2;
    for (const key in roughnessTable) {
      if (roughnessTable[key] && roughnessTable[key][materialValue]){
        roughness = roughnessTable[key][materialValue];
      }     
      if (avgSpeed <= key) {
        if (roughnessTable[key] && roughnessTable[key][materialValue]){
          if ((key - avgSpeed) > (avgSpeed - preKey)) {
            roughness = roughnessTable[preKey][materialValue];
          }
        }
        break;
      }
      preKey = key;
    }
  }
  return roughness;
}

const getP = (temp) => {
  let p = '';
  let preKey;
  for (let key in pTable) {
    p = pTable[key];
    if (temp <= +key) {
      if (preKey && (+key - temp) > (temp - (+preKey))) {
        p = pTable[preKey];
      }
      break;
    }
    preKey = key;
  }
  return +p;
}

const getDiameter = (section, F) => {
  let fFact = 0;
  let diameter = '';
  let preKey;
  let sizes;
  if (section == 'circle') {
    for (let key in circleDiameters) {
      diameter = circleDiameters[key];
      fFact = key;
      if (F <= +key) {
        if (preKey && (+key - F) > (F - (+preKey))) {
          diameter = circleDiameters[preKey];
          fFact = preKey;
        }
        break;
      }
      preKey = key;
    }
  } else if (section == 'square') {  
    for (let key in crossSections) {
      diameter = crossSections[key];
      fFact = key;
      if (F <= +key) {
        if (preKey && (+key - F) > (F - (+preKey))) {
          diameter = crossSections[preKey];
          fFact = preKey;
        }
        break;
      }
      preKey = key;
    }
    sizes = diameter;
    let ab = diameter.split('х');
    diameter = (2*(+ab[0])*(+ab[1]))/((+ab[0])+(+ab[1]));    
  }
  
  return {diameter, fFact, sizes};
}

const getR = (VFact, diameter) => {
  let r = 0;
  let diameters = 0;
  let preKey;  

  for (let key in rTable) {
    diameters = rTable[key];
    if (VFact <= +key) {
      if (preKey && (+key - VFact) > (VFact - (+preKey))) {
        diameters = rTable[preKey];
      }
      break;
    }
    preKey = key;
  }

  preKey = null;

  for (let key in diameters) {
    r = diameters[key];
    if (diameter <= +key) {
      if (preKey && (+key - diameter) > (diameter - (+preKey))) {
        r = diameters[preKey];
      }
      break;
    }
    preKey = key;
  }

  return r;
}

module.exports = getResultTable;
