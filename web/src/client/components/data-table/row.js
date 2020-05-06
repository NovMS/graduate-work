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
  width: ${props => props.width};
  border-right: 1px solid #C4C4C4;
  &:last-child {
    border-right: 0;
  }
`;

const Row = () => {
  return (
    <Root>
      <Cell width={tibleSize.cw1}><Typography>1</Typography></Cell>
      <Cell width={tibleSize.cw2}><Typography>11</Typography></Cell>
      <Cell width={tibleSize.cw3}><Typography>56</Typography></Cell>
      <Cell width={tibleSize.cw4}><Typography>456</Typography></Cell>
      <Cell width={tibleSize.cw5}><Typography>52</Typography></Cell>
      <Cell width={tibleSize.cw6}><Typography>52</Typography></Cell>
      <Cell width={tibleSize.cw7}><Typography>89</Typography></Cell>
      <Cell width={tibleSize.cw8}><Typography>5</Typography></Cell>
      <Cell width={tibleSize.cw9}><Typography>21</Typography></Cell>
      <Cell width={tibleSize.cw10}><Typography>56</Typography></Cell>
      <Cell width={tibleSize.cw11}><Typography>23</Typography></Cell>
      <Cell width={tibleSize.cw12}><Typography>78</Typography></Cell>
      <Cell width={tibleSize.cw13}><Typography>Сталь</Typography></Cell>
    </Root>
  );
};

export default Row;
