import React, {useState} from 'react';
import styled, { css } from 'styled-components';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import { changeSpeed } from '../../actions/settings';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Controls = styled.div`
  width: 250px;
  display: flex;
`;

const AutoSwitch = styled(FormControlLabel)`
  width: 250px;
  margin: 0;
  margin-bottom: 7px;
  margin-top: -15px;
  margin-left: -20px;
`;

const InputSpeed = styled(TextField)`
  width: 100px;
  ${props => props.first && css`
      margin-right: 30px;
  `}
`;

const Speed = ({ global, changeSpeed }) => {
  return (
    <Root>
      <AutoSwitch
        control={
          <Switch
            checked={global.speed.auto}
            onChange={() => changeSpeed( global.speed.min, global.speed.max,  !global.speed.auto)}
            color="primary"
          />
        }
        label="Автозаполнение"
      />
      <Controls>
        <InputSpeed
          first="true"
          label="Минимум"
          value={global.speed.min}
          disabled={global.speed.auto}
          onChange={(evt) => {
            if (evt.target.value.match(/^\d+$/) || evt.target.value.length == 0) {
              changeSpeed(evt.target.value, global.speed.max)
            }
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end">м/c</InputAdornment>,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputSpeed
          label="Максимум"
          value={global.speed.max}
          disabled={global.speed.auto}
          onChange={(evt) => {
            if (evt.target.value.match(/^\d+$/) || evt.target.value.length == 0) {
              changeSpeed(global.speed.min, evt.target.value)
            }
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end">м/c</InputAdornment>,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Controls>
    </Root>
  );
};

const mapStateToProps = ({ settings:{ global } }) => {
  return { global };
};

const mapDispatchToProps = {
  changeSpeed
};

export default connect(mapStateToProps, mapDispatchToProps)(Speed);

