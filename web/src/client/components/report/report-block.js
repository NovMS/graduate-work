import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Table from './table';

const Root = styled.div`
  width: 25%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-top: 0;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid rgba(0,0,0,0.2);
`;

const Content = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

const TitleContent = styled.div`
  width: 100%;
  padding: 8px;
  text-align: center;
  background-color: white;
  border-bottom: 2px solid #C4C4C4;
  margin-bottom: 8px;
  margin-top: 10px;
  &:first-child{
    margin-top: 0;
  }
`;

const TitleContentText = styled(Typography)`
  font-size: 0.95em;
`;

const EmptyErrors = styled(Typography)`
  margin: 0 auto;
  color: #C4C4C4;
`

const ReportBlock = ({ global }) => {
  return (
    <Root>
      <Title><Typography>Сводный отчет</Typography></Title>
      <Content>
        <TitleContent><TitleContentText>Таблица</TitleContentText></TitleContent>
        <Table />
        <TitleContent><TitleContentText>Ошибки</TitleContentText></TitleContent>
        {
          global.errors.length > 0 ?
          <>
          {
          global.errors.map((item,i) =>{
            return (
              <Typography key={i}>{item}</Typography>
            )
          })
          }
          </> : <EmptyErrors>Нет ошибок</EmptyErrors>
        }
      </Content>
    </Root>
  );
};

const mapStateToProps = ({ settings:{ global } }) => {
  return { global };
};

export default connect(mapStateToProps)(ReportBlock);
