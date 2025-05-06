import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Phone, Wifi, Bookmark, Home } from 'lucide-react-native';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: true,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="mtn"
        options={{
          title: 'MTN',
          headerStyle: {
            backgroundColor: '#FFCC00',
          },
          headerTintColor: '#000',
          tabBarIcon: ({ color }) => <Phone size={24} color={color} />,
          tabBarActiveTintColor: '#FFCC00',
        }}
      />
      <Tabs.Screen
        name="moov"
        options={{
          title: 'Moov',
          headerStyle: {
            backgroundColor: '#0066B3',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => <Wifi size={24} color={color} />,
          tabBarActiveTintColor: '#0066B3',
        }}
      />
      <Tabs.Screen
        name="celtiis"
        options={{
          title: 'Celtiis',
          headerStyle: {
            backgroundColor: '#00A651',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => <Phone size={24} color={color} />,
          tabBarActiveTintColor: '#00A651',
        }}
      />
      <Tabs.Screen
        name="favoris"
        options={{
          title: 'Favoris',
          tabBarIcon: ({ color }) => <Bookmark size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}