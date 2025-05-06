import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';
import { USSDCode } from '@/data/ussdCodes';
import CategorySection from './CategorySection';
import Colors from '@/constants/Colors';

interface OperatorScreenProps {
  operatorName: string;
  operatorColor: string;
  operatorLogo?: string;
  codes: USSDCode[];
}

export default function OperatorScreen({ 
  operatorName, 
  operatorColor, 
  codes 
}: OperatorScreenProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const [searchQuery, setSearchQuery] = useState('');

  // Filter codes based on search query
  const filteredCodes = searchQuery.trim() === ''
    ? codes
    : codes.filter(code => 
        code.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        code.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        code.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Group codes by category
  const groupedCodes = filteredCodes.reduce((groups, code) => {
    const category = code.category || 'Autre';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(code);
    return groups;
  }, {} as Record<string, USSDCode[]>);

  // Sort categories
  const categories = Object.keys(groupedCodes).sort();

  return (
    <SafeAreaView 
      style={[
        styles.container, 
        { backgroundColor: Colors[colorScheme].background }
      ]}
    >
      <View style={styles.searchContainer}>
        <View style={[
          styles.searchBox, 
          { 
            backgroundColor: Colors[colorScheme === 'dark' ? 'dark' : 'light'].card,
            borderColor: Colors[colorScheme].cardBorder,
          }
        ]}>
          <Search size={20} color={Colors[colorScheme].tabIconDefault} />
          <TextInput
            style={[styles.searchInput, { color: Colors[colorScheme].text }]}
            placeholder="Rechercher un code..."
            placeholderTextColor={Colors[colorScheme].tabIconDefault}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {filteredCodes.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={[styles.emptyText, { color: Colors[colorScheme].text }]}>
            Aucun code trouvé pour "{searchQuery}"
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {categories.map(category => (
            <CategorySection
              key={category}
              title={category}
              codes={groupedCodes[category]}
              operatorColor={operatorColor}
            />
          ))}
          <View style={styles.footer} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    paddingVertical: 8,
  },
  scrollView: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    height: 100, // Add some space at the bottom for better scrolling
  },
});