import React, {useState} from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { changeResistance, addResistance, delResistance } from '../../actions/settings';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import IconButton from '@material-ui/core/IconButton';
import TableChartIcon from '@material-ui/icons/TableChart';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import TextField from '@material-ui/core/TextField';

import Tooltip from '@material-ui/core/Tooltip';

import Dialog from '@material-ui/core/Dialog';

import ResistTable from '../resist-table/resist-table';

const Root = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Controls = styled.div`
  width: 230px;
  margin: 0 auto;
  display: flex;
  margin-top: 8px;
`;

const ResistanceInput = styled(FormControl)`
  width: 230px;
  margin: 0 auto;
`;

const NumInput = styled(TextField)`
  width: 70px;
  margin-right: auto;
  text-align: center;
`

const Resistance = ({ changeResistance, addResistance, delResistance, methods: { value, type, index, length } }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Root>
      <ResistanceInput>
        <InputLabel id="card-block-resistance">Тип</InputLabel>
        <Select
          labelId="card-block-resistance"
          value={type}
          onChange={(evt) => changeResistance({type: evt.target.value, value: value}, index)}
        >
          <MenuItem value={'Другое'}>Другое</MenuItem>
          <MenuItem value={'Цилиндрическая труба заделанная в стену'}>Цилиндрическая труба заделанная в стену</MenuItem>
          <MenuItem value={'Диффузор пирамидальный'}>Диффузор пирамидальный</MenuItem>
          <MenuItem value={'Диффузор конический'}>Диффузор конический</MenuItem>
          <MenuItem value={'Конфузор'}>Конфузор</MenuItem>
          <MenuItem value={'Внезапное расширение/сужение поперечного сечения'}>Внезапное расширение/сужение поперечного сечения</MenuItem>
          <MenuItem value={'Дроссель - клапан'}>Дроссель - клапан</MenuItem>
          <MenuItem value={'Канал с сеткой/решеткой'}>Канал с сеткой/решеткой</MenuItem>
          <MenuItem value={'Среднее боковое отверстие приточной сети'}>Среднее боковое отверстие приточной сети</MenuItem>
          <MenuItem value={'Среднее боковое отверстие вытяжной сети'}>Среднее боковое отверстие вытяжной сети</MenuItem>
          <MenuItem value={'Колено с закругленными кромками'}>Колено с закругленными кромками</MenuItem>
          <MenuItem value={'Отвод гнутый или штампованный'}>Отвод гнутый или штампованный</MenuItem>
          <MenuItem value={'Коллектор (барабанный, горизонтальный), сборник горизонтальный'}>Коллектор (барабанный, горизонтальный), сборник горизонтальный</MenuItem>
          <MenuItem value={'Шахта с зонтом'}>Шахта с зонтом</MenuItem>
        </Select>
      </ResistanceInput>
      <Controls>
        <NumInput value={value}
                  label="ε"
                  onChange={(evt) => {
                    if (evt.target.value.match(/^\d+$/) || evt.target.value.length == 0) {
                      changeResistance({value: evt.target.value, type: type}, index);
                    }
                  }}
                  onBlur={() => {
                    if (value.length == 0) {
                      changeResistance({value: 0, type: type}, index)
                    }
                  }}
                  />
        {
          type != 'Другое' ?
          <Tooltip arrow title="Таблица значений">
            <IconButton onClick={() => setOpen(true)} color="primary">
              <TableChartIcon />
            </IconButton>
          </Tooltip> : null
        }

        {
          (length != 1) ?
          <Tooltip arrow title="Удалить сопротивление">
            <IconButton color="primary" onClick={() => delResistance(index)}>
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip> : null
        }
        {
          (length == index+1) ?
          <Tooltip arrow title="Добавить еще сопротивление">
            <IconButton color="primary" onClick={() => addResistance()}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Tooltip> : null
        }
      </Controls>
      <Dialog maxWidth={false} onClose={() => setOpen(false)} open={isOpen}>
        <ResistTable type={type} changeResistance={changeResistance} index={index}/>
      </Dialog>
    </Root>
  );
};

const mapStateToProps = ({ settings:{ local: { resistance } } }) => {
  return { resistance };
};

const mapDispatchToProps = {
  changeResistance,
  addResistance,
  delResistance
};

export default connect(mapStateToProps, mapDispatchToProps)(Resistance);
