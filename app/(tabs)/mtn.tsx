import React from 'react';
import { StyleSheet } from 'react-native';
import { getCodesByOperator } from '@/data/ussdCodes';
import OperatorScreen from '@/components/OperatorScreen';
import Colors from '@/constants/Colors';

export default function MTNScreen() {
  const mtnCodes = getCodesByOperator('mtn');
  
  return (
    <OperatorScreen
      operatorName="MTN"
      operatorColor={Colors.light.mtn}
      codes={mtnCodes}
    />
  );
}

const styles = StyleSheet.create({});