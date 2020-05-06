import React from 'react';
import styled from 'styled-components';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Root = styled.table`
  width: 100%;
`;

const Cell = styled(TableCell)`
  text-align: center;
  border-left: ${props => props.bl ? '1px solid rgba(224, 224, 224, 1)' : '0'};
  border-right: ${props => props.br ? '1px solid rgba(224, 224, 224, 1)' : '0'};
  border-bottom: ${props => props.bb ? '1px solid rgba(224, 224, 224, 1)' : '0'};
  border-top: ${props => props.bt ? '1px solid rgba(224, 224, 224, 1)' : '0'};
  cursor: ${props => props.active ? 'pointer' : 'auto'};
  &:hover {
    text-decoration: ${props => props.active ? 'underline' : 'none'};
  } 
`;

export default function SrOtverstVyt({onSelectValue}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <Cell colSpan={9} br>Значение ε<sub>0</sub> (выход) при V<sub>0</sub>/V<sub>1</sub></Cell>
            <Cell colSpan={5}>Значение ε<sub>0</sub> (проход) при V<sub>2</sub>/V<sub>1</sub></Cell>
          </TableRow>
          <TableRow>
            <Cell bb>0.4</Cell>
            <Cell bb>0.6</Cell>
            <Cell bb>0.8</Cell>
            <Cell bb>1</Cell>
            <Cell bb>1.2</Cell>
            <Cell bb>1.4</Cell>
            <Cell bb>1.6</Cell>
            <Cell bb>1.8</Cell>
            <Cell bb br>2</Cell>
            <Cell bb>0.4</Cell>
            <Cell bb>0.5</Cell>
            <Cell bb>0.6</Cell>
            <Cell bb>0.8</Cell>
            <Cell bb>1</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <Cell active onClick={() => onSelectValue(1.8)}>1.8</Cell>
            <Cell active onClick={() => onSelectValue(1.7)}>1.7</Cell>
            <Cell active onClick={() => onSelectValue(1.7)}>1.7</Cell>
            <Cell active onClick={() => onSelectValue(1.8)}>1.8</Cell>
            <Cell active onClick={() => onSelectValue(1.9)}>1.9</Cell>
            <Cell active onClick={() => onSelectValue(2.1)}>2.1</Cell>
            <Cell active onClick={() => onSelectValue(2.3)}>2.3</Cell>
            <Cell active onClick={() => onSelectValue(2.6)}>2.6</Cell>
            <Cell active onClick={() => onSelectValue(3)} br>3</Cell>
            <Cell active onClick={() => onSelectValue(0.06)}>0.06</Cell>
            <Cell active onClick={() => onSelectValue(0.01)}>0.01</Cell>
            <Cell active onClick={() => onSelectValue(-0.03)}>-0.03</Cell>
            <Cell active onClick={() => onSelectValue(-0.06)}>-0.06</Cell>
            <Cell active onClick={() => onSelectValue(-0.03)}>-0.03</Cell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

