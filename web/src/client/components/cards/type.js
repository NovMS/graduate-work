import React, {useState} from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { connect } from 'react-redux';
import { changeType } from '../../actions/settings';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div`
  width: 260px;
  display: flex;
  padding-right: 10px;
  justify-content: space-between;
`;

const Control = styled(FormControlLabel)`
  width: 49%;
  margin: 0;
`;

const Type = ({ global, changeType }) => {
  return (
    <Root>
      <Block>
        <Control
          name="card-block-type"
          checked={global.type.value1 === "out"}
          onChange={(evt) => changeType(evt.target.value, global.type.value2)}
          value="out"
          control={<Radio color="primary"/>}
          label="Вытяжная" />
        <Control
          name="card-block-type"
          checked={global.type.value1 === "in"}
          onChange={(evt) => changeType(evt.target.value, global.type.value2)}
          value="in"
          control={<Radio color="primary"/>}
          label="Приточн." />
      </Block>

      <Block>
        <Control
          name="card-block-type2"
          checked={global.type.value2 === "natural"}
          onChange={(evt) => changeType(global.type.value1, evt.target.value)}
          value="natural"
          control={<Radio color="primary"/>}
          label="Естеств." />
        <Control
          name="card-block-type2"
          checked={global.type.value2 === "mechanical"}
          onChange={(evt) => changeType(global.type.value1, evt.target.value)}
          value="mechanical"
          control={<Radio color="primary"/>}
          label="Механич." />
      </Block>
    </Root>
  );
};

const mapStateToProps = ({ settings:{ global } }) => {
  return { global };
};

const mapDispatchToProps = {
  changeType
};

export default connect(mapStateToProps, mapDispatchToProps)(Type);
