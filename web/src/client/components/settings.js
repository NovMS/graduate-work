import React, {useState} from 'react';
import styled from 'styled-components';

import Main from './main';
import Global from './global';
import Branches from './branches';

import { Typography } from '@material-ui/core';

const Root = styled.div`
  width: 75%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;


const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid rgba(0,0,0,0.2);
` 

const TitleLink = styled(Typography)`
  margin-right: 20px;
  cursor: pointer;
  color: ${props => props.active ? '#1976d2' : 'black'};
  &:hover {
    color: #1976d2;
  }
  &:last-child {
    margin-right: 0;
  }
`

const Settings = () => {

  const [menu, setMenu] = useState('global');

  return (
    <Root>
      <Title>
        <TitleLink onClick={() => setMenu('global')} active={menu == 'global' ? 'true' : null}>Вся система</TitleLink>
        <TitleLink onClick={() => setMenu('main')} active={menu == 'main' ? 'true' : null}>Основная магистраль</TitleLink>
        <TitleLink onClick={() => setMenu('branches')} active={menu == 'branches' ? 'true' : null}>Ответвление</TitleLink>
      </Title>
      {
        menu == 'global' ? <Global /> :
        menu == 'main' ? <Main /> : 
        menu == 'branches' ? <Branches /> : null
      }
    </Root>
  );
};

export default Settings;
