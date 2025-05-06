import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Bookmark } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USSDCode } from '@/data/ussdCodes';

interface FavoriteButtonProps {
  code: USSDCode;
}

const FAVORITES_STORAGE_KEY = 'ussd_favorites';

export default function FavoriteButton({ code }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the code is already in favorites when component mounts
    const checkFavoriteStatus = async () => {
      try {
        const favoritesJson = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
        if (favoritesJson) {
          const favorites: USSDCode[] = JSON.parse(favoritesJson);
          setIsFavorite(favorites.some(fav => fav.id === code.id));
        }
      } catch (error) {
        console.error('Error checking favorite status:', error);
      }
    };

    checkFavoriteStatus();
  }, [code.id]);

  const toggleFavorite = async () => {
    try {
      const favoritesJson = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
      let favorites: USSDCode[] = favoritesJson ? JSON.parse(favoritesJson) : [];
      
      if (isFavorite) {
        // Remove from favorites
        favorites = favorites.filter(fav => fav.id !== code.id);
      } else {
        // Add to favorites
        favorites.push(code);
      }
      
      await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleFavorite}>
      <Bookmark 
        size={24} 
        color={isFavorite ? '#FFC107' : '#CCCCCC'} 
        fill={isFavorite ? '#FFC107' : 'none'} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});