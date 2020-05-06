import React, {useState} from 'react';
import styled, { css } from 'styled-components';

import { connect } from 'react-redux';
import { changeInitialData } from '../../actions/settings';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const Root = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const InputInitial = styled(TextField)`
  width: 120px;
  ${props => props.first && css`
      margin-right: 30px;
  `}
`;

const InitialData = ({ region, data, changeInitialData }) => {
  return (
    <Root>
      <InputInitial
        first="true"
        label="Расход воздуха"
        value={data[region].initialData.airFlow}
        onChange={(evt) => {
          if (evt.target.value.match(/^\d+$/) || evt.target.value.length == 0) {
            changeInitialData(evt.target.value, data[region].initialData.length)
          }
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">м^3/ч</InputAdornment>,
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <InputInitial
        label="Длина"
        value={data[region].initialData.length}
        onChange={(evt) => {
          if (evt.target.value.match(/^\d+$/) || evt.target.value.length == 0) {
            changeInitialData(data[region].initialData.airFlow, evt.target.value)
          }
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">м</InputAdornment>,
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Root>
  );
};

const mapStateToProps = ({ settings:{ local: { region, data } } }) => {
  return { region, data };
};

const mapDispatchToProps = {
  changeInitialData
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialData);

