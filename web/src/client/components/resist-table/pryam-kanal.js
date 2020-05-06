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

export default function PryamKanal({onSelectValue}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <Cell br bb rowSpan={2}>Элемент системы</Cell>
            <Cell colSpan={13}>Значение ε<sub>0</sub> при F<sub>отв</sub>/F<sub>0</sub></Cell>
          </TableRow>
          <TableRow>
            <Cell bb>0.2</Cell>
            <Cell bb>0.3</Cell>
            <Cell bb>0.4</Cell>
            <Cell bb>0.5</Cell>
            <Cell bb>0.6</Cell>
            <Cell bb>0.7</Cell>
            <Cell bb>0.8</Cell>
            <Cell bb>0.9</Cell>
            <Cell bb>1</Cell>
            <Cell bb>1.2</Cell>
            <Cell bb>1.4</Cell>
            <Cell bb>1.6</Cell>
            <Cell bb>1.8</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <Cell br>Канал с сеткой/решеткой</Cell>
            <Cell>-</Cell>
            <Cell>-</Cell>
            <Cell active onClick={() => onSelectValue(4)}>4</Cell>
            <Cell active onClick={() => onSelectValue(2.65)}>2.65</Cell>
            <Cell active onClick={() => onSelectValue(1.97)}>1.97</Cell>
            <Cell active onClick={() => onSelectValue(1.58)}>1.58</Cell>
            <Cell active onClick={() => onSelectValue(1.32)}>1.32</Cell>
            <Cell active onClick={() => onSelectValue(1.14)}>1.14</Cell>
            <Cell>-</Cell>
            <Cell>-</Cell>
            <Cell>-</Cell>
            <Cell>-</Cell>
            <Cell>-</Cell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

