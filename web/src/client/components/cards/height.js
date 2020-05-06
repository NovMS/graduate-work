import React from 'react';
import styled from 'styled-components';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import { changeHeight } from '../../actions/settings';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const InputHeight = styled(TextField)`
  width: 220px;
`;

const Height = ({ global, changeHeight }) => {
  return (
    <Root>      
      <InputHeight
        label="Высота"
        value={global.height}
        onChange={(evt) => {
          if (evt.target.value.match(/^\d+$/) || evt.target.value.length == 0) {
            changeHeight(evt.target.value)
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

const mapStateToProps = ({ settings:{ global } }) => {
  return { global };
};

const mapDispatchToProps = {
  changeHeight
};

export default connect(mapStateToProps, mapDispatchToProps)(Height);
