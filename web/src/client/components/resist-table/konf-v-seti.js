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

export default function KonfVSeti({onSelectValue}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <Cell br bb rowSpan={2}>L/d</Cell>
            <Cell colSpan={4}>Значение ε<sub>0</sub> при α°</Cell>
          </TableRow>
          <TableRow>
            <Cell bb>10°</Cell>
            <Cell bb>20°</Cell>
            <Cell bb>30°</Cell>
            <Cell bb>40°</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <Cell br>0.1</Cell>
            <Cell active onClick={() => onSelectValue(0.41)}>0.41</Cell>
            <Cell active onClick={() => onSelectValue(0.34)}>0.34</Cell>
            <Cell active onClick={() => onSelectValue(0.27)}>0.27</Cell>
            <Cell active onClick={() => onSelectValue(0.24)}>0.24</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.15</Cell>
            <Cell active onClick={() => onSelectValue(0.39)}>0.39</Cell>
            <Cell active onClick={() => onSelectValue(0.29)}>0.29</Cell>
            <Cell active onClick={() => onSelectValue(0.22)}>0.22</Cell>
            <Cell active onClick={() => onSelectValue(0.18)}>0.18</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.6</Cell>
            <Cell active onClick={() => onSelectValue(0.29)}>0.29</Cell>
            <Cell active onClick={() => onSelectValue(0.2)}>0.2</Cell>
            <Cell active onClick={() => onSelectValue(0.15)}>0.15</Cell>
            <Cell active onClick={() => onSelectValue(0.13)}>0.13</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br> Свыше 0.6</Cell>
            <Cell active onClick={() => onSelectValue(0.1)}>0.1</Cell>
            <Cell active onClick={() => onSelectValue(0.1)}>0.1</Cell>
            <Cell active onClick={() => onSelectValue(0.1)}>0.1</Cell>
            <Cell active onClick={() => onSelectValue(0.1)}>0.1</Cell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}

