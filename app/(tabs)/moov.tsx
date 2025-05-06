import React from 'react';
import { StyleSheet } from 'react-native';
import { getCodesByOperator } from '@/data/ussdCodes';
import OperatorScreen from '@/components/OperatorScreen';
import Colors from '@/constants/Colors';

export default function MoovScreen() {
  const moovCodes = getCodesByOperator('moov');
  
  return (
    <OperatorScreen
      operatorName="Moov"
      operatorColor={Colors.light.moov}
      codes={moovCodes}
    />
  );
}

const styles = StyleSheet.create({});