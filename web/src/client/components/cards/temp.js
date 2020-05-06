import React, {useState} from 'react';
import styled, {css} from 'styled-components';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import { changeTemp } from '../../actions/settings';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const InputTemp = styled(TextField)`
  width: 110px;
  ${props => props.first && css`
      margin-right: 30px;
  `}
`;

const Temp = ({ global, changeTemp }) => {
  return (
    <Root>

      <InputTemp
        first="true"
        label="Мин. снаружи"
        value={global.temp.outside}
        onChange={(evt) => {
          if (evt.target.value.match(/^\d+$/) || evt.target.value.length == 0) {
            changeTemp(global.temp.city, global.temp.inside, evt.target.value)
          }
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">°C</InputAdornment>,
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <InputTemp
        label="Средн. внутри"
        value={global.temp.inside}
        onChange={(evt) => {
          if (evt.target.value.match(/^\d+$/) || evt.target.value.length == 0) {
            changeTemp(global.temp.city, evt.target.value, global.temp.outside);
          }
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">°C</InputAdornment>,
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Root>
  );
};

const mapStateToProps = ({ settings:{ global } }) => {
  return { global };
};

const mapDispatchToProps = {
  changeTemp
};

export default connect(mapStateToProps, mapDispatchToProps)(Temp);

{/* <City>
<InputCity>
  <InputLabel id="card-block-temp">Город</InputLabel>
  <Select
    labelId="card-block-temp"
    value={global.temp.city}
    onChange={(evt) => changeTemp(evt.target.value, global.temp.inside, global.temp.outside)}
  >
    <MenuItem value={'Не выбран'}>Не выбран</MenuItem>
    <MenuItem value={'Москва'}>Москва</MenuItem>
    <MenuItem value={'Ижевск'}>Ижевск</MenuItem>
  </Select>
</InputCity>
</City> */}
