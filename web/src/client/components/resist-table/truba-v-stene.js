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

export default function TrunaVStene({onSelectValue}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <Cell br bb rowSpan={2}>δ/d<sub>0</sub></Cell>
            <Cell colSpan={7}>Значение ε<sub>0</sub> при b/d<sub>0</sub></Cell>
          </TableRow>
          <TableRow>
            <Cell bb>0</Cell>
            <Cell bb>0.002</Cell>
            <Cell bb>0.01</Cell>
            <Cell bb>0.05</Cell>
            <Cell bb>0.2</Cell>
            <Cell bb>0.5</Cell>
            <Cell bb>0.1</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <Cell br>0</Cell>
            <Cell active onClick={() => onSelectValue(0.5)}>0.5</Cell>
            <Cell active onClick={() => onSelectValue(0.57)}>0.57</Cell>
            <Cell active onClick={() => onSelectValue(0.69)}>0.69</Cell>
            <Cell active onClick={() => onSelectValue(0.8)}>0.8</Cell>
            <Cell active onClick={() => onSelectValue(0.92)}>0.92</Cell>
            <Cell active onClick={() => onSelectValue(1)}>1</Cell>
            <Cell active onClick={() => onSelectValue(0.91)}>0.91</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.02 и более</Cell>
            <Cell active onClick={() => onSelectValue(0.5)}>0.5</Cell>
            <Cell active onClick={() => onSelectValue(0.51)}>0.51</Cell>
            <Cell active onClick={() => onSelectValue(0.52)}>0.52</Cell>
            <Cell active onClick={() => onSelectValue(0.65)}>0.65</Cell>
            <Cell active onClick={() => onSelectValue(0.66)}>0.66</Cell>
            <Cell active onClick={() => onSelectValue(0.72)}>0.72</Cell>
            <Cell active onClick={() => onSelectValue(0.72)}>0.72</Cell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

