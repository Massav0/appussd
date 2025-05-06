import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { getAllCodes } from '@/data/ussdCodes';
import Colors from '@/constants/Colors';

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const router = useRouter();
  const allCodes = getAllCodes();
  
  // Count codes by operator
  const countByOperator = {
    mtn: allCodes.filter(code => code.operator === 'mtn').length,
    moov: allCodes.filter(code => code.operator === 'moov').length,
    celtiis: allCodes.filter(code => code.operator === 'celtiis').length,
  };

  return (
    <SafeAreaView 
      style={[
        styles.container, 
        { backgroundColor: Colors[colorScheme].background }
      ]}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: Colors[colorScheme].text }]}>
            Codes USSD Bénin
          </Text>
          <Text style={[styles.subtitle, { color: Colors[colorScheme].text }]}>
            Tous les codes USSD des opérateurs GSM au Bénin
          </Text>
        </View>

        <View style={styles.operatorsContainer}>
          <TouchableOpacity 
            style={[styles.operatorCard, { backgroundColor: '#FFCC00' }]}
            onPress={() => router.push('/mtn')}
          >
            <Text style={[styles.operatorName, { color: '#000' }]}>MTN</Text>
            <Text style={[styles.operatorCount, { color: '#000' }]}>
              {countByOperator.mtn} codes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.operatorCard, { backgroundColor: '#0066B3' }]}
            onPress={() => router.push('/moov')}
          >
            <Text style={[styles.operatorName, { color: '#fff' }]}>Moov</Text>
            <Text style={[styles.operatorCount, { color: '#fff' }]}>
              {countByOperator.moov} codes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.operatorCard, { backgroundColor: '#00A651' }]}
            onPress={() => router.push('/celtiis')}
          >
            <Text style={[styles.operatorName, { color: '#fff' }]}>Celtiis</Text>
            <Text style={[styles.operatorCount, { color: '#fff' }]}>
              {countByOperator.celtiis} codes
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoSection}>
          <Text style={[styles.infoTitle, { color: Colors[colorScheme].text }]}>
            Comment utiliser l'application
          </Text>
          
          <View style={[
            styles.infoCard, 
            { 
              backgroundColor: Colors[colorScheme].card,
              borderColor: Colors[colorScheme].cardBorder,
            }
          ]}>
            <Text style={[styles.infoText, { color: Colors[colorScheme].text }]}>
              1. Sélectionnez votre opérateur (MTN, Moov ou Celtiis)
            </Text>
            <Text style={[styles.infoText, { color: Colors[colorScheme].text }]}>
              2. Recherchez le code USSD dont vous avez besoin
            </Text>
            <Text style={[styles.infoText, { color: Colors[colorScheme].text }]}>
              3. Appuyez sur "Lancer" pour composer directement le code
            </Text>
            <Text style={[styles.infoText, { color: Colors[colorScheme].text }]}>
              4. Ou appuyez sur "Copier" pour copier le code et le composer manuellement
            </Text>
            <Text style={[styles.infoText, { color: Colors[colorScheme].text }]}>
              5. Ajoutez des codes aux favoris pour y accéder rapidement
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: Colors[colorScheme].text }]}>
            © 2025 Codes USSD Bénin
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
    textAlign: 'center',
  },
  operatorsContainer: {
    padding: 16,
  },
  operatorCard: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  operatorName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  operatorCount: {
    fontSize: 16,
  },
  infoSection: {
    padding: 16,
    marginTop: 8,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoCard: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  footer: {
    padding: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    opacity: 0.6,
  },
});