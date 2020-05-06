import React, {useState} from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { changeRegion, addLocalRegion, delLocalRegion } from '../actions/settings';

import CardBlock from './cards/card-block';
import { Typography } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const SettingsTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  background-color: white;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  position: relative;
` 

const NumSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NumInput = styled(TextField)`
  width: 30px;
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
`

const AllRegions = styled(Typography)`
  margin-left: 10px;
  margin-right: 10px;
`

const Section = ({ region, data, changeRegion, addLocalRegion, delLocalRegion }) => {

  const onNextClick = () => {
    if ((data[region].branches.region+1) != data[region].branches.data.length) {
      changeRegion(data[region].branches.region+1, true);
    }
  }

  const onDelClick = () => {
    if (data[region].branches.data.length > 1) {
      delLocalRegion(data[region].branches.region, true);
    }
  }

  const onAddClick = () => {
    addLocalRegion(true);
  }

  const onPrevClick = () => {
    if (data[region].branches.region != 0) {
      changeRegion(data[region].branches.region-1, true);
    }
  }

  return (
    <Root>
      <SettingsTitle>
        <NumSection>
          <IconButton size="small" disabled={(data[region].branches.region <= 0)} onClick={() => onPrevClick()}>
            <SkipPreviousIcon fontSize="small"/>
          </IconButton>
          <NumInput value={data[region].branches.region+1}/>
          <Typography>из</Typography>
          <AllRegions>{data[region].branches.data.length}</AllRegions>
          <IconButton size="small" disabled={((data[region].branches.region+1) ==  data[region].branches.data.length)} onClick={() => onNextClick()}>
            <SkipNextIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => onAddClick()}>
          {
            <AddIcon fontSize="small"/>
          }
          </IconButton>
          <IconButton size="small" disabled={(data[region].branches.data.length == 1)} onClick={() => onDelClick()}>
            <DeleteIcon fontSize="small"/>
          </IconButton>
        </NumSection>
      </SettingsTitle>
      {
        data[region].branches.data.length > 0 ? 
        <Content>
          <CardBlock content='initialData' width='32%' title='Исходные данные'/>
          <CardBlock content='material' width='32%' title='Материал воздуховода'/>
          <CardBlock content='section' width='32%' title='Сечение воздуховода'/>
          {
            data[region].resistance.map((item, index) => {
              return(
                <CardBlock key={index}
                          methods={{
                            value: item.value,
                            type: item.type,
                            index,
                            length: data[region].resistance.length
                          }}
                          content='resistance'
                          width='32%'
                          title='Сопротивление'/>
                )
            })
          }
          <CardBlock content='dopResistance' width='32%' title='Дополнительное сопротивление'/>
        </Content> : null
      }

    </Root>
  );
};

const mapStateToProps = ({ settings:{ local: {region, data} } }) => {
  return { region, data };
};

const mapDispatchToProps = {
  changeRegion,
  addLocalRegion,
  delLocalRegion
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
