import React, {useState} from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { connect } from 'react-redux';
import { changeSection } from '../../actions/settings';

import strih from '../../images/strih.jpg'

const Root = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #C4C4C4;
  border-radius: 25px;
  background-color: white;
  background-image: url(${strih});
`;

const Square = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #C4C4C4;
  background-color: white;
  background-image: url(${strih});
`;

const Section = ({ region, data, changeSection }) => {
  return (
    <Root>
      <FormControlLabel
        name="card-block-section"
        checked={data[region].section.value === "circle"}
        onChange={(evt) => changeSection(evt.target.value)}
        value="circle"
        control={<Radio color="primary"/>}
        label={<Circle />} />
      <FormControlLabel
        name="card-block-section"
        checked={data[region].section.value === "square"}
        onChange={(evt) => changeSection(evt.target.value)}
        value="square"
        control={<Radio color="primary"/>}
        label={<Square />} />
    </Root>
  );
};

const mapStateToProps = ({ settings:{ local: { region, data } } }) => {
  return { region, data };
};

const mapDispatchToProps = {
  changeSection
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
