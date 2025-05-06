import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Alert } from 'react-native';
import { useColorScheme } from 'react-native';
import { Copy, Phone } from 'lucide-react-native';
import * as Clipboard from 'expo-clipboard';
import { Linking } from 'react-native';
import Colors from '@/constants/Colors';
import { USSDCode } from '@/data/ussdCodes';
import FavoriteButton from './FavoriteButton';

interface CodeCardProps {
  code: USSDCode;
  operatorColor: string;
}

export default function CodeCard({ code, operatorColor }: CodeCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(code.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const dialCode = async () => {
    try {
      if (Platform.OS === 'web') {
        Alert.alert('Info', 'La fonctionnalité de numérotation n\'est pas disponible sur le web.');
        return;
      }
      
      // Format the USSD code for dialing
      const formattedCode = code.code.replace('#', encodeURIComponent('#'));
      await Linking.openURL(`tel:${formattedCode}`);
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de lancer le code USSD');
    }
  };

  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor: Colors[colorScheme].card,
        borderColor: Colors[colorScheme].cardBorder,
      }
    ]}>
      <View style={styles.codeContainer}>
        <View>
          <Text style={[styles.codeTitle, { color: Colors[colorScheme].text }]}>
            {code.title}
          </Text>
          <Text style={[styles.codeText, { color: operatorColor }]}>
            {code.code}
          </Text>
          <Text style={[styles.description, { color: Colors[colorScheme].text }]}>
            {code.description}
          </Text>
          {code.cost && (
            <Text style={[styles.cost, { color: Colors[colorScheme].text }]}>
              Coût: {code.cost}
            </Text>
          )}
        </View>
        <FavoriteButton code={code} />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: operatorColor }]} 
          onPress={copyToClipboard}
        >
          <Copy size={16} color="#fff" />
          <Text style={styles.buttonText}>{copied ? 'Copié!' : 'Copier'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: operatorColor }]} 
          onPress={dialCode}
        >
          <Phone size={16} color="#fff" />
          <Text style={styles.buttonText}>Lancer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  codeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  codeText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
  cost: {
    fontSize: 12,
    opacity: 0.8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 4,
    fontWeight: '500',
  },
});