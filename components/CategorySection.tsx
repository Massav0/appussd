import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useColorScheme } from 'react-native';
import { USSDCode } from '@/data/ussdCodes';
import CodeCard from './CodeCard';
import Colors from '@/constants/Colors';

interface CategorySectionProps {
  title: string;
  codes: USSDCode[];
  operatorColor: string;
}

export default function CategorySection({ title, codes, operatorColor }: CategorySectionProps) {
  const colorScheme = useColorScheme() ?? 'light';

  if (codes.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={[
        styles.title, 
        { color: operatorColor }
      ]}>
        {title}
      </Text>
      
      {codes.map((code) => (
        <CodeCard key={code.id} code={code} operatorColor={operatorColor} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 8,
  },
});