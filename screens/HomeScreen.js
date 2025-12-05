import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 26, marginBottom: 30 }}>Choose a Destination</Text>

      <Button
        title="Go to Paris"
        onPress={() =>
          navigation.navigate('Details', { place: 'Paris', rating: 5 })
        }
      />

      <View style={{ height: 15 }} />

      <Button
        title="Go to London"
        onPress={() =>
          navigation.navigate('Details', { place: 'London', rating: 4 })
        }
      />

      <View style={{ height: 15 }} />

      <Button
        title="Go to Tokyo"
        onPress={() =>
          navigation.navigate('Details', { place: 'Tokyo', rating: 5 })
        }
      />
    </View>
  );
}

