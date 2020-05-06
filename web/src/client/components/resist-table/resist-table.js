import React from 'react';
import styled from 'styled-components';

import DrKlapan from './dr-klapan';
import SrOtverst from './sr-otverst';
import Kolena from './kolena';
import Otvoda from './otvoda';
import OtvodaRemark from './otvoda-remark';
import Kollektor from './kollektor';
import Shakhty from './shakhty';
import SrOtverstVyt from './sr-otverst-vyt';
import IzmSech from './izm-sech';
import PryamKanal from './pryam-kanal';
import TrubaVStene from './truba-v-stene';
import DifPiramida from './dif-piramida';
import KonfVSeti from './konf-v-seti';
import Konnich from './konnich';


const Root = styled.div`
  width: 100%;
`;

const ResistTable = ({type, changeResistance, index}) => {
  
  const onSelectValue = (value) => {
    changeResistance({value: value, type: type}, index);
  }

  const renderContent = () => {
    switch (type) {
      case 'Цилиндрическая труба заделанная в стену':
        return (
          <TrubaVStene onSelectValue = {onSelectValue} />
        )
      case 'Диффузор пирамидальный':
        return (
          <DifPiramida onSelectValue = {onSelectValue} />
        )
      case 'Диффузор конический':
        return (
          <Konnich onSelectValue = {onSelectValue} />
        )
      case 'Конфузор':
        return (
          <KonfVSeti onSelectValue = {onSelectValue} />
        )
      case 'Внезапное расширение/сужение поперечного сечения':
        return (
          <IzmSech onSelectValue = {onSelectValue} />
        )
      case 'Дроссель - клапан':
        return (
          <DrKlapan onSelectValue = {onSelectValue} />
        )
      case 'Канал с сеткой/решеткой':
        return (
          <PryamKanal onSelectValue = {onSelectValue} />
        )
      case 'Среднее боковое отверстие приточной сети':
        return (
          <SrOtverst onSelectValue = {onSelectValue} />
        )
      case 'Среднее боковое отверстие вытяжной сети':
        return (
          <SrOtverstVyt onSelectValue = {onSelectValue} />
        )
      case 'Колено с закругленными кромками':
        return (
          <Kolena onSelectValue = {onSelectValue} />
        )
      case 'Отвод гнутый или штампованный':
        return (
          <>
          <Otvoda onSelectValue = {onSelectValue} />
          <OtvodaRemark onSelectValue = {onSelectValue} />
          </>
        )
      case 'Коллектор (барабанный, горизонтальный), сборник горизонтальный':
        return (
          <Kollektor onSelectValue = {onSelectValue} />
        )
      case 'Шахта с зонтом':
        return (
          <Shakhty onSelectValue = {onSelectValue} />
        )
      default:
        return null
    }
  }

  return (
    <Root>
      {
        renderContent()
      }
    </Root>
  );
};

export default ResistTable;
