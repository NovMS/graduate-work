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
`;

export default function OtvodaRemark() {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <Cell bb colSpan={10}>При прямоугольном сечении значения ε<sub>0</sub> следует умножать на следующие значения C:</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <Cell br>b<sub>0</sub>/d<sub>0</sub></Cell>
            <Cell>0.25</Cell>
            <Cell>0.5</Cell>
            <Cell>0.75</Cell>
            <Cell>1</Cell>
            <Cell>1.5</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
            <Cell>4</Cell>
            <Cell>5</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>C</Cell>
            <Cell>1.3</Cell>
            <Cell>1.17</Cell>
            <Cell>1.09</Cell>
            <Cell>1</Cell>
            <Cell>0.9</Cell>
            <Cell>0.85</Cell>
            <Cell>0.86</Cell>
            <Cell>0.9</Cell>
            <Cell>0.95</Cell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}

