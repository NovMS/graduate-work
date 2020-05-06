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

export default function Kolena({onSelectValue}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <Cell colSpan={11}>Значение ε<sub>0</sub> при α°</Cell>
          </TableRow>
          <TableRow>
            <Cell bb>0°</Cell>
            <Cell bb>20°</Cell>
            <Cell bb>30°</Cell>
            <Cell bb>45°</Cell>
            <Cell bb>60°</Cell>
            <Cell bb>75°</Cell>
            <Cell bb>90°</Cell>
            <Cell bb>110°</Cell>
            <Cell bb>130°</Cell>
            <Cell bb>150°</Cell>
            <Cell bb>180°</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <Cell bb colSpan={11}>При r/d = 0.05</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell active onClick={() => onSelectValue(0)}>0</Cell>
            <Cell active onClick={() => onSelectValue(0.27)}>0.27</Cell>
            <Cell active onClick={() => onSelectValue(0.39)}>0.39</Cell>
            <Cell active onClick={() => onSelectValue(0.53)}>0.53</Cell>
            <Cell active onClick={() => onSelectValue(0.68)}>0.68</Cell>
            <Cell active onClick={() => onSelectValue(0.79)}>0.79</Cell>
            <Cell active onClick={() => onSelectValue(0.87)}>0.87</Cell>
            <Cell active onClick={() => onSelectValue(0.98)}>0.98</Cell>
            <Cell active onClick={() => onSelectValue(1.05)}>1.05</Cell>
            <Cell active onClick={() => onSelectValue(1.11)}>1.11</Cell>
            <Cell active onClick={() => onSelectValue(1.22)}>1.22</Cell>
          </TableRow>

          <TableRow>
            <Cell bb bt colSpan={11}>При r/d = 0.1</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell active onClick={() => onSelectValue(0)}>0</Cell>
            <Cell active onClick={() => onSelectValue(0.22)}>0.22</Cell>
            <Cell active onClick={() => onSelectValue(0.32)}>0.32</Cell>
            <Cell active onClick={() => onSelectValue(0.42)}>0.42</Cell>
            <Cell active onClick={() => onSelectValue(0.55)}>0.55</Cell>
            <Cell active onClick={() => onSelectValue(0.68)}>0.68</Cell>
            <Cell active onClick={() => onSelectValue(0.7)}>0.7</Cell>
            <Cell active onClick={() => onSelectValue(0.76)}>0.79</Cell>
            <Cell active onClick={() => onSelectValue(0.84)}>0.84</Cell>
            <Cell active onClick={() => onSelectValue(0.9)}>0.9</Cell>
            <Cell active onClick={() => onSelectValue(0.98)}>0.98</Cell>
          </TableRow>

          <TableRow>
            <Cell bb bt colSpan={11}>При r/d = 0.2</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell active onClick={() => onSelectValue(0)}>0</Cell>
            <Cell active onClick={() => onSelectValue(0.14)}>0.14</Cell>
            <Cell active onClick={() => onSelectValue(0.2)}>0.2</Cell>
            <Cell active onClick={() => onSelectValue(0.26)}>0.26</Cell>
            <Cell active onClick={() => onSelectValue(0.34)}>0.34</Cell>
            <Cell active onClick={() => onSelectValue(0.4)}>0.4</Cell>
            <Cell active onClick={() => onSelectValue(0.44)}>0.44</Cell>
            <Cell active onClick={() => onSelectValue(0.5)}>0.5</Cell>
            <Cell active onClick={() => onSelectValue(0.53)}>0.53</Cell>
            <Cell active onClick={() => onSelectValue(0.56)}>0.56</Cell>
            <Cell active onClick={() => onSelectValue(0.62)}>0.62</Cell>
          </TableRow>

          <TableRow>
            <Cell bb bt colSpan={11}>При r/d = 0.3</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell active onClick={() => onSelectValue(0)}>0</Cell>
            <Cell active onClick={() => onSelectValue(0.1)}>0.1</Cell>
            <Cell active onClick={() => onSelectValue(0.14)}>0.14</Cell>
            <Cell active onClick={() => onSelectValue(0.19)}>0.19</Cell>
            <Cell active onClick={() => onSelectValue(0.24)}>0.24</Cell>
            <Cell active onClick={() => onSelectValue(0.28)}>0.28</Cell>
            <Cell active onClick={() => onSelectValue(0.31)}>0.31</Cell>
            <Cell active onClick={() => onSelectValue(0.35)}>0.35</Cell>
            <Cell active onClick={() => onSelectValue(0.37)}>0.37</Cell>
            <Cell active onClick={() => onSelectValue(0.39)}>0.39</Cell>
            <Cell active onClick={() => onSelectValue(0.49)}>0.49</Cell>
          </TableRow>

          <TableRow>
            <Cell bb bt colSpan={11}>При r/d = 0.4</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell active onClick={() => onSelectValue(0)}>0</Cell>
            <Cell active onClick={() => onSelectValue(0.08)}>0.08</Cell>
            <Cell active onClick={() => onSelectValue(0.12)}>0.12</Cell>
            <Cell active onClick={() => onSelectValue(0.16)}>0.16</Cell>
            <Cell active onClick={() => onSelectValue(0.2)}>0.2</Cell>
            <Cell active onClick={() => onSelectValue(0.25)}>0.25</Cell>
            <Cell active onClick={() => onSelectValue(0.28)}>0.28</Cell>
            <Cell active onClick={() => onSelectValue(0.29)}>0.29</Cell>
            <Cell active onClick={() => onSelectValue(0.31)}>0.31</Cell>
            <Cell active onClick={() => onSelectValue(0.33)}>0.33</Cell>
            <Cell active onClick={() => onSelectValue(0.36)}>0.36</Cell>
          </TableRow>
          
          <TableRow>
            <Cell bb bt colSpan={11}>При r/d = 0.5</Cell>
          </TableRow>

          <TableRow hover={true}>
            <Cell active onClick={() => onSelectValue(0)}>0</Cell>
            <Cell active onClick={() => onSelectValue(0.7)}>0.7</Cell>
            <Cell active onClick={() => onSelectValue(0.11)}>0.11</Cell>
            <Cell active onClick={() => onSelectValue(0.14)}>0.14</Cell>
            <Cell active onClick={() => onSelectValue(0.19)}>0.19</Cell>
            <Cell active onClick={() => onSelectValue(0.22)}>0.22</Cell>
            <Cell active onClick={() => onSelectValue(0.24)}>0.24</Cell>
            <Cell active onClick={() => onSelectValue(0.27)}>0.27</Cell>
            <Cell active onClick={() => onSelectValue(0.29)}>0.29</Cell>
            <Cell active onClick={() => onSelectValue(0.31)}>0.31</Cell>
            <Cell active onClick={() => onSelectValue(0.34)}>0.34</Cell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}

