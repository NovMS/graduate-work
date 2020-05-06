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

export default function DifPiramida({onSelectValue}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <Cell br bb rowSpan={2}>F<sub>0</sub>/F<sub>1</sub></Cell>
            <Cell colSpan={10}>Значение ε<sub>0</sub> при α°</Cell>
          </TableRow>
          <TableRow>
            <Cell bb>10</Cell>
            <Cell bb>20</Cell>
            <Cell bb>14</Cell>
            <Cell bb>16</Cell>
            <Cell bb>18</Cell>
            <Cell bb>20</Cell>
            <Cell bb>24</Cell>
            <Cell bb>28</Cell>
            <Cell bb>32</Cell>
            <Cell bb>40</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <Cell br>0.2</Cell>
            <Cell active onClick={() => onSelectValue(0.14)}>0.14</Cell>
            <Cell active onClick={() => onSelectValue(0.17)}>0.17</Cell>
            <Cell active onClick={() => onSelectValue(0.2)}>0.2</Cell>
            <Cell active onClick={() => onSelectValue(0.24)}>0.24</Cell>
            <Cell active onClick={() => onSelectValue(0.28)}>0.28</Cell>
            <Cell active onClick={() => onSelectValue(0.31)}>0.31</Cell>
            <Cell active onClick={() => onSelectValue(0.04)}>0.4</Cell>
            <Cell active onClick={() => onSelectValue(0.49)}>0.49</Cell>
            <Cell active onClick={() => onSelectValue(0.59)}>0.59</Cell>
            <Cell active onClick={() => onSelectValue(0.69)}>0.69</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.25</Cell>
            <Cell active onClick={() => onSelectValue(0.13)}>0.13</Cell>
            <Cell active onClick={() => onSelectValue(0.16)}>0.16</Cell>
            <Cell active onClick={() => onSelectValue(0.18)}>0.18</Cell>
            <Cell active onClick={() => onSelectValue(0.21)}>0.21</Cell>
            <Cell active onClick={() => onSelectValue(0.24)}>0.24</Cell>
            <Cell active onClick={() => onSelectValue(0.27)}>0.27</Cell>
            <Cell active onClick={() => onSelectValue(0.35)}>0.35</Cell>
            <Cell active onClick={() => onSelectValue(0.43)}>0.43</Cell>
            <Cell active onClick={() => onSelectValue(0.52)}>0.52</Cell>
            <Cell active onClick={() => onSelectValue(0.61)}>0.61</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.3</Cell>
            <Cell active onClick={() => onSelectValue(0.11)}>0.11</Cell>
            <Cell active onClick={() => onSelectValue(0.13)}>0.13</Cell>
            <Cell active onClick={() => onSelectValue(0.16)}>0.16</Cell>
            <Cell active onClick={() => onSelectValue(0.19)}>0.19</Cell>
            <Cell active onClick={() => onSelectValue(0.22)}>0.22</Cell>
            <Cell active onClick={() => onSelectValue(0.24)}>0.24</Cell>
            <Cell active onClick={() => onSelectValue(0.31)}>0.31</Cell>
            <Cell active onClick={() => onSelectValue(0.38)}>0.38</Cell>
            <Cell active onClick={() => onSelectValue(0.46)}>0.46</Cell>
            <Cell active onClick={() => onSelectValue(0.53)}>0.53</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.4</Cell>
            <Cell active onClick={() => onSelectValue(0.09)}>0.09</Cell>
            <Cell active onClick={() => onSelectValue(0.1)}>0.1</Cell>
            <Cell active onClick={() => onSelectValue(0.12)}>0.12</Cell>
            <Cell active onClick={() => onSelectValue(0.14)}>0.14</Cell>
            <Cell active onClick={() => onSelectValue(0.16)}>0.16</Cell>
            <Cell active onClick={() => onSelectValue(0.18)}>0.18</Cell>
            <Cell active onClick={() => onSelectValue(0.23)}>0.23</Cell>
            <Cell active onClick={() => onSelectValue(0.28)}>0.28</Cell>
            <Cell active onClick={() => onSelectValue(0.34)}>0.34</Cell>
            <Cell active onClick={() => onSelectValue(0.4)}>0.4</Cell>
          </TableRow>
          
          <TableRow hover={true}>
            <Cell br>0.5</Cell>
            <Cell active onClick={() => onSelectValue(0.07)}>0.07</Cell>
            <Cell active onClick={() => onSelectValue(0.08)}>0.08</Cell>
            <Cell active onClick={() => onSelectValue(0.09)}>0.09</Cell>
            <Cell active onClick={() => onSelectValue(0.1)}>0.1</Cell>
            <Cell active onClick={() => onSelectValue(0.12)}>0.12</Cell>
            <Cell active onClick={() => onSelectValue(0.13)}>0.13</Cell>
            <Cell active onClick={() => onSelectValue(0.17)}>0.17</Cell>
            <Cell active onClick={() => onSelectValue(0.2)}>0.2</Cell>
            <Cell active onClick={() => onSelectValue(0.27)}>0.27</Cell>
            <Cell active onClick={() => onSelectValue(0.28)}>0.28</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell br>0.6</Cell>
            <Cell active onClick={() => onSelectValue(0.05)}>0.05</Cell>
            <Cell active onClick={() => onSelectValue(0.06)}>0.06</Cell>
            <Cell active onClick={() => onSelectValue(0.07)}>0.07</Cell>
            <Cell active onClick={() => onSelectValue(0.07)}>0.07</Cell>
            <Cell active onClick={() => onSelectValue(0.08)}>0.08</Cell>
            <Cell active onClick={() => onSelectValue(0.09)}>0.09</Cell>
            <Cell active onClick={() => onSelectValue(0.11)}>0.11</Cell>
            <Cell active onClick={() => onSelectValue(0.14)}>0.14</Cell>
            <Cell active onClick={() => onSelectValue(0.15)}>0.16</Cell>
            <Cell active onClick={() => onSelectValue(0.19)}>0.19</Cell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

