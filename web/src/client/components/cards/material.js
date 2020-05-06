import React, {useState} from 'react';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { connect } from 'react-redux';
import { changeMaterial } from '../../actions/settings';

const Root = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const MaterialInput = styled(FormControl)`
  width: 230px;
  margin: 0 auto;
`;

const Material = ({ region, data, changeMaterial }) => {
  return (
    <Root>
      <MaterialInput>
        <InputLabel id="card-block-material">Материал</InputLabel>
        <Select
          labelId="card-block-material"
          value={data[region].material.value}
          onChange={(evt) => changeMaterial(evt.target.value)}
        >
          <MenuItem value={'Листовая сталь'}>Листовая сталь</MenuItem>
          <MenuItem value={'Винипласт'}>Винипласт</MenuItem>
          <MenuItem value={'Асбестоцементные плиты или трубы'}>Асбестоцементные плиты или трубы</MenuItem>
          <MenuItem value={'Фанера'}>Фанера</MenuItem>
          <MenuItem value={'Шлакоалебастровые плиты'}>Шлакоалебастровые плиты</MenuItem>
          <MenuItem value={'Шлакобетонные плиты'}>Шлакобетонные плиты</MenuItem>
          <MenuItem value={'Кирпич'}>Кирпич</MenuItem>
          <MenuItem value={'Штукатурка'}>Штукатурка</MenuItem>
          <MenuItem value={'Гибкий растянутый'}>Гибкий растянутый</MenuItem>
          <MenuItem value={'Гибкий полусложенный'}>Гибкий полусложенный</MenuItem>
        </Select>
      </MaterialInput>
    </Root>
  );
};

const mapStateToProps = ({ settings:{ local: { region, data } } }) => {
  return { region, data };
};

const mapDispatchToProps = {
  changeMaterial
};

export default connect(mapStateToProps, mapDispatchToProps)(Material);
