import React, {useState} from 'react';
import styled from 'styled-components';

import CardBlock from './cards/card-block';

const Root = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const Global = () => {

  return (
    <Root>
      <CardBlock content='type' width='32%' title='Тип системы вентиляции'/>
      <CardBlock content='speed' width='32%' title='Диапазон изменения скорости'/>
      <CardBlock content='temp' width='32%' title='Температура'/>
      <CardBlock content='height' width='32%' title='Высота воздушного столба'/>
    </Root>
  );
};

export default Global;
