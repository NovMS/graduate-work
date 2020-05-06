import React, {useState} from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

import { connect } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';

import { changeSettings } from '../../actions/settings';

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';

import DataTable from './../data-table/data-table'

import { postQuery } from '../../services/query-service';

import IconButton from '@material-ui/core/IconButton';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TableChartIcon from '@material-ui/icons/TableChart';

import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const TableButton = styled(Button)`
  width: 30%;
  font-size: 0.75em;
`;

const Table = ({ settings, changeSettings }) => {
  const [isOpen, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const getResultTable = async() => {
    setLoading(true);
    const newSettings = await postQuery(`/getResultTable`, { settings: JSON.stringify(settings) });
    changeSettings(newSettings);
    setLoading(false);
    setSuccess(true);
  }
  
  return (
    <Root>
      <Tooltip title="Вычислить" arrow>
        <IconButton disabled={loading} color="primary" onClick={() => getResultTable()}>
          <ChromeReaderModeIcon fontSize="small"/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Просмотр" arrow>
        <IconButton disabled={loading} color="primary" onClick={() => setOpen(true)}>
          <VisibilityIcon fontSize="small"/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Выгрузить" arrow>
        <IconButton disabled={loading} color="primary" onClick={() => getResultTable()}>
          <TableChartIcon fontSize="small"/>
        </IconButton>
      </Tooltip>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        message='Расчет выполнен'
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={() => setSuccess(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <Dialog maxWidth={false} onClose={() => setOpen(false)} open={isOpen}>
        <DataTable />
      </Dialog>
    </Root>
  );
};

const mapStateToProps = ({ settings }) => {
  return { settings };
};

const mapDispatchToProps = {
  changeSettings
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
