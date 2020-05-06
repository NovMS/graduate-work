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

export default function IzmSech({onSelectValue}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <Cell br bb rowSpan={2}>F<sub>0</sub>/F<sub>1</sub></Cell>
            <Cell colSpan={2}>Значение ε<sub>0</sub> при внезапном изменении сечения потока</Cell>
          </TableRow>
          <TableRow>
            <Cell bb>Расширении</Cell>
            <Cell bb>Сужении</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <Cell br>0</Cell>
            <Cell active onClick={() => onSelectValue(1)}>1</Cell>
            <Cell active onClick={() => onSelectValue(0.5)}>0.5</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.1</Cell>
            <Cell active onClick={() => onSelectValue(0.81)}>0.81</Cell>
            <Cell active onClick={() => onSelectValue(0.45)}>0.45</Cell>
          </TableRow>
   
          <TableRow hover={true}>
            <Cell br>0.2</Cell>
            <Cell active onClick={() => onSelectValue(0.64)}>0.64</Cell>
            <Cell active onClick={() => onSelectValue(0.4)}>0.4</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.3</Cell>
            <Cell active onClick={() => onSelectValue(0.5)}>0.5</Cell>
            <Cell active onClick={() => onSelectValue(0.35)}>0.35</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.4</Cell>
            <Cell active onClick={() => onSelectValue(0.36)}>0.36</Cell>
            <Cell active onClick={() => onSelectValue(0.3)}>0.3</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.5</Cell>
            <Cell active onClick={() => onSelectValue(0.25)}>0.25</Cell>
            <Cell active onClick={() => onSelectValue(0.25)}>0.25</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.6</Cell>
            <Cell active onClick={() => onSelectValue(0.16)}>0.16</Cell>
            <Cell active onClick={() => onSelectValue(0.2)}>0.2</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.7</Cell>
            <Cell active onClick={() => onSelectValue(0.09)}>0.09</Cell>
            <Cell active onClick={() => onSelectValue(0.15)}>0.15</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.8</Cell>
            <Cell active onClick={() => onSelectValue(0.04)}>0.04</Cell>
            <Cell active onClick={() => onSelectValue(0.1)}>0.1</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>1</Cell>
            <Cell active onClick={() => onSelectValue(0)}>0</Cell>
            <Cell active onClick={() => onSelectValue(0)}>0</Cell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

