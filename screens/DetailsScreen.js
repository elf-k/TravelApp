import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Details Screen</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
