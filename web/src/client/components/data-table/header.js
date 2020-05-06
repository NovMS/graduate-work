import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import tibleSize from './table-size'

const Root = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #C4C4C4;
  background-color: white;
`;

const Cell = styled.div`
  padding: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  border-right: 1px solid #C4C4C4;
  &:last-child {
    border-right: 0;
  }
`;

const Header = () => {
  return (
    <Root>
      <Cell width={tibleSize.cw1}><Typography>№ участка</Typography></Cell>
      <Cell width={tibleSize.cw2}><Typography>Расход воздуха L,м3/ч</Typography></Cell>
      <Cell width={tibleSize.cw3}><Typography>Длина участка l, м</Typography></Cell>
      <Cell width={tibleSize.cw4}><Typography>Диаметр D, мм</Typography></Cell>
      <Cell width={tibleSize.cw5}><Typography>Скорость воздуха U, м/с</Typography></Cell>
      <Cell width={tibleSize.cw6}><Typography>Удельное сопротивление, R</Typography></Cell>
      <Cell width={tibleSize.cw7}><Typography>Скор. давление, hд, Па</Typography></Cell>
      <Cell width={tibleSize.cw8}><Typography>КМС</Typography></Cell>
      <Cell width={tibleSize.cw9}><Typography>Полное сопротивление, Rl+Z</Typography></Cell>
      <Cell width={tibleSize.cw10}><Typography>Суммарное сопротивление, (Rl+Z)</Typography></Cell>
      <Cell width={tibleSize.cw11}><Typography>Доп. сопротивление, Па</Typography></Cell>
      <Cell width={tibleSize.cw12}><Typography>Размеры сечения, мм</Typography></Cell>
      <Cell width={tibleSize.cw13}><Typography>Материал возд-да на участке</Typography></Cell>
    </Root>
  );
};

export default Header;
