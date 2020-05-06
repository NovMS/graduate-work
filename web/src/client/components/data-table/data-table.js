import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import tibleSize from './table-size';

const Root = styled(TableContainer)`
  width: auto;
`;

const Cell = styled(TableCell)`
  width: ${props => props.width ? props.width : 'auto'};
  padding: 5px;
  text-align: center;
`;

const DataTable = ({data, global}) => {
  return (
    <Root component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <Cell>№</Cell>
            <Cell>Расход воздуха L,м3/ч</Cell>
            <Cell>Длина участка l, м</Cell>
            <Cell>Диаметр/сечение, мм</Cell>
            <Cell>Скорость воздуха U, м/с</Cell>
            <Cell>Шероховатость стенок, n</Cell>
            <Cell>Удельное сопротивление, R</Cell>
            <Cell>Скор. давление, hд, Па</Cell>
            <Cell width="50px">КМС</Cell> 
            <Cell>Потери на трение Rnl, Па</Cell> 
            <Cell>Потери на местн. сопрот., Z</Cell> 
            <Cell>Полное сопротивление</Cell>
            <Cell>Доп. сопротивление, Па</Cell>
            <Cell>Суммарное сопротивление</Cell>
            <Cell>Материал возд-да на участке</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          data.map((item, i) => {
            let kms = 0;
            item.resistance.map((res) => {
              kms += +res.value;
            })
            return(
              <TableRow>
                <Cell component="th" scope="row">{i+1}</Cell>
                <Cell>{item.initialData.airFlow}</Cell>
                <Cell>{item.initialData.length}</Cell>
                <Cell>{item.sizes ? item.sizes: item.diameter}</Cell>
                <Cell>{item.speed}</Cell>
                <Cell>{item.roughness}</Cell>
                <Cell>{item.r}</Cell>
                <Cell>{item.ps}</Cell>
                <Cell>{kms}</Cell>
                <Cell>{item.rnl}</Cell>
                <Cell>{item.z}</Cell>
                <Cell>{item.fullR}</Cell>
                <Cell>{item.dopResistance}</Cell>
                <Cell>{item.sumR}</Cell>
                <Cell>{item.material.value}</Cell>
              </TableRow>
            )
          })
        }
        </TableBody>
      </Table>
    </Root>
  );
}

const mapStateToProps = ({ settings:{ local: { data }, global } }) => {
  return { data, global };
};

export default connect(mapStateToProps)(DataTable);
