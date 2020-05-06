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

export default function Kollektor({onSelectValue}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <Cell bb br>Наименование</Cell>
            <Cell bb>Вход, ε<sub>0</sub></Cell>
            <Cell bb>Выход, ε<sub>1</sub></Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <Cell br>Горизонтальный коллектор</Cell>
            <Cell active onClick={() => onSelectValue(1)}>1</Cell>
            <Cell active onClick={() => onSelectValue(0.5)}>0.5</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>Барабанный коллектор</Cell>
            <Cell active onClick={() => onSelectValue(0.8)}>0.8</Cell>
            <Cell active onClick={() => onSelectValue(0.5)}>0.5</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>Горизонтальный сборник</Cell>
            <Cell active onClick={() => onSelectValue(0.8)}>0.8</Cell>
            <Cell active onClick={() => onSelectValue(0.5)}>0.5</Cell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}

