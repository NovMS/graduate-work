import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

import Type from './type';
import Speed from './speed';
import Temp from './temp';
import InitialData from './initial-data';
import Material from './material';
import Section from './section';
import Resistance from './resistance';
import DopResistance from './dop-resistance';
import Height from './height';

const Root = styled.div`
  width: ${props => props.width};
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow ease-out 0.2s;
  padding: 10px;
  margin-right: 2%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  &:nth-child(3n) {
    margin-right: 0;
  }
  &:hover {
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
    transition: box-shadow ease-out 0.2s;
  }
`;

const Title = styled(Typography)`
  border-bottom: 2px solid #C4C4C4;
  padding: 5px;
  width: 100%;
  padding-top: 0;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const CardBlock = ({ content, width, title, methods }) => {

  const renderContent = () => {
    switch (content) {
      case 'type':
        return (
          <Type />
        )
      case 'speed':
        return (
          <Speed />
        )
      case 'temp':
        return (
          <Temp />
        )
      case 'initialData':
        return (
          <InitialData />
        )
      case 'material':
        return (
          <Material />
        )
      case 'section':
        return (
          <Section />
        )
      case 'resistance':
        return (
          <Resistance methods={methods} />
        )
      case 'dopResistance':
        return (
          <DopResistance />
        )
      case 'height':
        return (
          <Height />
        )
      default:
        return null
    }
  }

  return (
    <Root width={width}>
      <Title>{title}</Title>
      {
        renderContent()  
      }
    </Root>
  );
};

export default CardBlock;
