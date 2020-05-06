import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { changeDopResistance } from '../../actions/settings';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const Root = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const InputResistance = styled(TextField)`
  width: 220px;
`;

const DopResistance = ({ changeDopResistance, region, data}) => {
  return (
    <Root>
      <InputResistance
        label="Доп. сопротивление"
        value={data[region].dopResistance}
        onChange={(evt) => {
          if (evt.target.value.match(/^\d+$/) || evt.target.value.length == 0) {
            changeDopResistance(evt.target.value);
          }
        }}
        onBlur={() => {
          if (data[region].dopResistance.length == 0) {
            changeDopResistance(0)
          }
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">Па</InputAdornment>,
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
  changeDopResistance
};

export default connect(mapStateToProps, mapDispatchToProps)(DopResistance);
