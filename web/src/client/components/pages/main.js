import React from 'react';
import styled from 'styled-components';

import Header from '../header';
import Settings from '../settings'

import ReportBlock from '../report/report-block';

import DataTable from '../data-table/data-table';

const Root = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(245, 245, 245);
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  height: calc(100vh - 50px);
`;

const Main = () => {
	return (
	  <Root>
	    <Header page="main"/>
	    <Content>
        <Settings />
        <ReportBlock />
	    </Content>
	  </Root>
  )
}

export default Main;
