import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USSDCode } from '@/data/ussdCodes';
import CodeCard from '@/components/CodeCard';
import Colors from '@/constants/Colors';

const FAVORITES_STORAGE_KEY = 'ussd_favorites';

export default function FavorisScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const [favorites, setFavorites] = useState<USSDCode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favoritesJson = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
        if (favoritesJson) {
          setFavorites(JSON.parse(favoritesJson));
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();

    // Add listener to reload favorites when the screen comes into focus
    const intervalId = setInterval(loadFavorites, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getOperatorColor = (operator: string) => {
    switch (operator) {
      case 'mtn':
        return Colors.light.mtn;
      case 'moov':
        return Colors.light.moov;
      case 'bbcom':
        return Colors.light.bbcom;
      default:
        return '#888888';
    }
  };

  return (
    <SafeAreaView 
      style={[
        styles.container, 
        { backgroundColor: Colors[colorScheme].background }
      ]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: Colors[colorScheme].text }]}>
          Mes Codes Favoris
        </Text>
      </View>

      {loading ? (
        <View style={styles.centerContent}>
          <Text style={[styles.emptyText, { color: Colors[colorScheme].text }]}>
            Chargement...
          </Text>
        </View>
      ) : favorites.length === 0 ? (
        <View style={styles.centerContent}>
          <Text style={[styles.emptyText, { color: Colors[colorScheme].text }]}>
            Vous n'avez pas encore de codes favoris.
          </Text>
          <Text style={[styles.emptySubtext, { color: Colors[colorScheme].text }]}>
            Ajoutez des codes à vos favoris en cliquant sur l'icône d'étoile.
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {favorites.map((code) => (
            <CodeCard 
              key={code.id} 
              code={code} 
              operatorColor={getOperatorColor(code.operator)} 
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
  header: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.7,
  },
  footer: {
    height: 100, // Add some space at the bottom for better scrolling
  },
});