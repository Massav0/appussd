import React from 'react';
import { StyleSheet } from 'react-native';
import { getCodesByOperator } from '@/data/ussdCodes';
import OperatorScreen from '@/components/OperatorScreen';
import Colors from '@/constants/Colors';

export default function CeltiisScreen() {
  const celtiisCodes = getCodesByOperator('celtiis');
  
  return (
    <OperatorScreen
      operatorName="Celtiis"
      operatorColor={Colors.light.celtiis}
      codes={celtiisCodes}
    />
  );
}

const styles = StyleSheet.create({});