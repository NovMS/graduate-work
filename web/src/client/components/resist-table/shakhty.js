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

export default function Shakhty({onSelectValue}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <Cell colSpan={12}>Значение ε<sub>0</sub> при h/d<sub>0</sub></Cell>
          </TableRow>
          <TableRow>
            <Cell bb>0.1</Cell>
            <Cell bb>0.2</Cell>
            <Cell bb>0.25</Cell>
            <Cell bb>0.3</Cell>
            <Cell bb>0.35</Cell>
            <Cell bb>0.4</Cell>
            <Cell bb>0.5</Cell>
            <Cell bb>0.6</Cell>
            <Cell bb>0.63</Cell>
            <Cell bb>0.8</Cell>
            <Cell bb>0.9</Cell>
            <Cell bb>1</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <Cell active onClick={() => onSelectValue(2.63)}>2.63</Cell>
            <Cell active onClick={() => onSelectValue(1.83)}>1.83</Cell>
            <Cell>-</Cell>
            <Cell active onClick={() => onSelectValue(1.53)}>1.53</Cell>
            <Cell>-</Cell>
            <Cell active onClick={() => onSelectValue(1.39)}>1.39</Cell>
            <Cell active onClick={() => onSelectValue(1.31)}>1.31</Cell>
            <Cell active onClick={() => onSelectValue(1.19)}>1.19</Cell>
            <Cell>-</Cell>
            <Cell active onClick={() => onSelectValue(1.08)}>1.08</Cell>
            <Cell active onClick={() => onSelectValue(1.07)}>1.07</Cell>
            <Cell active onClick={() => onSelectValue(1.05)}>1.05</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell active onClick={() => onSelectValue(4)}>4</Cell>
            <Cell active onClick={() => onSelectValue(2.3)}>2.3</Cell>
            <Cell active onClick={() => onSelectValue(1.9)}>1.9</Cell>
            <Cell active onClick={() => onSelectValue(1.6)}>1.6</Cell>
            <Cell active onClick={() => onSelectValue(1.4)}>1.4</Cell>
            <Cell active onClick={() => onSelectValue(1.3)}>1.3</Cell>
            <Cell active onClick={() => onSelectValue(1.15)}>1.15</Cell>
            <Cell>-</Cell>
            <Cell active onClick={() => onSelectValue(1.1)}>1.1</Cell>
            <Cell>-</Cell>
            <Cell active onClick={() => onSelectValue(1)}>1</Cell>
            <Cell>-</Cell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}

