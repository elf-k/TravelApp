import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { place, rating } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28, marginBottom: 20 }}>
        Welcome to {place}
      </Text>

      {/* Challenge */}
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        {rating === 5
          ? '⭐ This is a top-rated location!'
          : '⭐ A great place to explore!'}
      </Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

