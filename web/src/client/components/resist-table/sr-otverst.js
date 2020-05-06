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

export default function DrKlapan({onSelectValue}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <Cell br bb rowSpan={3}>F<sub>отв</sub>/F<sub>1</sub></Cell>
            <Cell colSpan={5} br>Значение ε<sub>отв</sub> (вход)</Cell>
            <Cell colSpan={5}>Значение ε<sub>отв</sub> (проход)</Cell>
          </TableRow>
          <TableRow>
            <Cell bb bt colSpan={10}>При Q<sub>отв</sub>/Q<sub>2 </sub></Cell>
          </TableRow>
          <TableRow>
            <Cell bb>0.1</Cell>
            <Cell bb>0.2</Cell>
            <Cell bb>0.3</Cell>
            <Cell bb>0.4</Cell>
            <Cell bb br>0.5</Cell>
            <Cell bb>0.1</Cell>
            <Cell bb>0.2</Cell>
            <Cell bb>0.3</Cell>
            <Cell bb>0.4</Cell>
            <Cell bb>0.5</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <Cell br>0.1</Cell>
            <Cell active onClick={() => onSelectValue(0.8)}>0.8</Cell>
            <Cell active onClick={() => onSelectValue(1.3)}>1.3</Cell>
            <Cell active onClick={() => onSelectValue(1.4)}>1.4</Cell>
            <Cell active onClick={() => onSelectValue(1.4)}>1.4</Cell>
            <Cell active onClick={() => onSelectValue(1.4)} br>1.4</Cell>
            <Cell active onClick={() => onSelectValue(0.1)}>0.1</Cell>
            <Cell active onClick={() => onSelectValue(-0.1)}>-0.1</Cell>
            <Cell active onClick={() => onSelectValue(-0.8)}>-0.8</Cell>
            <Cell active onClick={() => onSelectValue(-2.6)}>-2.6</Cell>
            <Cell active onClick={() => onSelectValue(-6.6)}>-6.6</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.2</Cell>
            <Cell active onClick={() => onSelectValue(-1.4)}>-1.4</Cell>
            <Cell active onClick={() => onSelectValue(0.9)}>0.9</Cell>
            <Cell active onClick={() => onSelectValue(1.3)}>1.3</Cell>
            <Cell active onClick={() => onSelectValue(1.4)}>1.4</Cell>
            <Cell active onClick={() => onSelectValue(1.4)} br>1.4</Cell>
            <Cell active onClick={() => onSelectValue(0.1)}>0.1</Cell>
            <Cell active onClick={() => onSelectValue(0.2)}>0.2</Cell>
            <Cell active onClick={() => onSelectValue(-0.01)}>-0.01</Cell>
            <Cell active onClick={() => onSelectValue(-0.6)}>-0.6</Cell>
            <Cell active onClick={() => onSelectValue(-2.1)}>-2.1</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.4</Cell>
            <Cell active onClick={() => onSelectValue(-9.5)}>-9.5</Cell>
            <Cell active onClick={() => onSelectValue(0.2)}>0.2</Cell>
            <Cell active onClick={() => onSelectValue(0.9)}>0.9</Cell>
            <Cell active onClick={() => onSelectValue(1.2)}>1.2</Cell>
            <Cell active onClick={() => onSelectValue(1.3)} br>1.3</Cell>
            <Cell active onClick={() => onSelectValue(0.2)}>0.2</Cell>
            <Cell active onClick={() => onSelectValue(0.3)}>0.3</Cell>
            <Cell active onClick={() => onSelectValue(0.3)}>0.3</Cell>
            <Cell active onClick={() => onSelectValue(0.2)}>0.2</Cell>
            <Cell active onClick={() => onSelectValue(-0.2)}>-0.2</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.6</Cell>
            <Cell active onClick={() => onSelectValue(-21.2)}>-21.2</Cell>
            <Cell active onClick={() => onSelectValue(-2.5)}>-2.5</Cell>
            <Cell active onClick={() => onSelectValue(0.3)}>0.3</Cell>
            <Cell active onClick={() => onSelectValue(1)}>1</Cell>
            <Cell active onClick={() => onSelectValue(1.2)} br>1.2</Cell>
            <Cell active onClick={() => onSelectValue(0.2)}>0.2</Cell>
            <Cell active onClick={() => onSelectValue(0.3)}>0.3</Cell>
            <Cell active onClick={() => onSelectValue(0.4)}>0.4</Cell>
            <Cell active onClick={() => onSelectValue(0.4)}>0.4</Cell>
            <Cell active onClick={() => onSelectValue(0.3)}>0.3</Cell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

