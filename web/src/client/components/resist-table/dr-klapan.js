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
            <Cell rowSpan={2} br bb>Количество створок, n</Cell>
            <Cell colSpan={10}>Значение ε при α°</Cell>
          </TableRow>
          <TableRow>
            <Cell bb>0°</Cell>
            <Cell bb>10°</Cell>
            <Cell bb>20°</Cell>
            <Cell bb>30°</Cell>
            <Cell bb>40°</Cell>
            <Cell bb>50°</Cell>
            <Cell bb>60°</Cell>
            <Cell bb>70°</Cell>
            <Cell bb>80°</Cell>
            <Cell bb>90°</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <Cell br>1</Cell>
            <Cell active onClick={() => onSelectValue(0.04)}>0.04</Cell>
            <Cell active onClick={() => onSelectValue(0.3)}>0.3</Cell>
            <Cell active onClick={() => onSelectValue(1.1)}>1.1</Cell>
            <Cell active onClick={() => onSelectValue(2.5)}>2.5</Cell>
            <Cell active onClick={() => onSelectValue(8)}>8</Cell>
            <Cell active onClick={() => onSelectValue(20)}>20</Cell>
            <Cell active onClick={() => onSelectValue(60)}>60</Cell>
            <Cell active onClick={() => onSelectValue(200)}>200</Cell>
            <Cell active onClick={() => onSelectValue(1500)}>1500</Cell>
            <Cell active onClick={() => onSelectValue(6000)}>6000</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>2</Cell>
            <Cell active onClick={() => onSelectValue(0.07)}>0.07</Cell>
            <Cell active onClick={() => onSelectValue(0.4)}>0.4</Cell>
            <Cell active onClick={() => onSelectValue(1.1)}>1.1</Cell>
            <Cell active onClick={() => onSelectValue(2.5)}>2.5</Cell>
            <Cell active onClick={() => onSelectValue(5.5)}>5.5</Cell>
            <Cell active onClick={() => onSelectValue(12)}>12</Cell>
            <Cell active onClick={() => onSelectValue(30)}>30</Cell>
            <Cell active onClick={() => onSelectValue(90)}>90</Cell>
            <Cell active onClick={() => onSelectValue(160)}>160</Cell>
            <Cell active onClick={() => onSelectValue(7000)}>7000</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>3</Cell>
            <Cell active onClick={() => onSelectValue(0.12)}>0.12</Cell>
            <Cell active onClick={() => onSelectValue(0.12)}>0.12</Cell>
            <Cell active onClick={() => onSelectValue(0.8)}>0.8</Cell>
            <Cell active onClick={() => onSelectValue(2)}>2</Cell>
            <Cell active onClick={() => onSelectValue(5)}>5</Cell>
            <Cell active onClick={() => onSelectValue(10)}>10</Cell>
            <Cell active onClick={() => onSelectValue(19)}>19</Cell>
            <Cell active onClick={() => onSelectValue(40)}>40</Cell>
            <Cell active onClick={() => onSelectValue(160)}>160</Cell>
            <Cell active onClick={() => onSelectValue(7000)}>7000</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>4</Cell>
            <Cell active onClick={() => onSelectValue(0.12)}>0.12</Cell>
            <Cell active onClick={() => onSelectValue(0.25)}>0.25</Cell>
            <Cell active onClick={() => onSelectValue(0.8)}>0.8</Cell>
            <Cell active onClick={() => onSelectValue(2)}>2</Cell>
            <Cell active onClick={() => onSelectValue(4)}>4</Cell>
            <Cell active onClick={() => onSelectValue(8)}>8</Cell>
            <Cell active onClick={() => onSelectValue(15)}>15</Cell>
            <Cell active onClick={() => onSelectValue(30)}>30</Cell>
            <Cell active onClick={() => onSelectValue(110)}>110</Cell>
            <Cell active onClick={() => onSelectValue(6000)}>6000</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>5</Cell>
            <Cell active onClick={() => onSelectValue(0.15)}>0.15</Cell>
            <Cell active onClick={() => onSelectValue(0.02)}>0.2</Cell>
            <Cell active onClick={() => onSelectValue(0.7)}>0.7</Cell>
            <Cell active onClick={() => onSelectValue(1.8)}>1.8</Cell>
            <Cell active onClick={() => onSelectValue(3.5)}>3.5</Cell>
            <Cell active onClick={() => onSelectValue(7)}>7</Cell>
            <Cell active onClick={() => onSelectValue(19)}>19</Cell>
            <Cell active onClick={() => onSelectValue(28)}>28</Cell>
            <Cell active onClick={() => onSelectValue(80)}>80</Cell>
            <Cell active onClick={() => onSelectValue(5000)}>5000</Cell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

