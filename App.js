import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState({ lower: 0, upper: 0 });

  function calculate() {
    const parsedAge = parseFloat(age.replace(',', '.'));

    if (isNaN(parsedAge) || parsedAge <= 0) {
      alert('Please enter a valid age.');
      return;
    }

    const lowerLimit = Math.round((220 - parsedAge) * 0.65);
    const upperLimit = Math.round((220 - parsedAge) * 0.85);

    setLimits({ lower: lowerLimit, upper: upperLimit });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="decimal-pad"
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>
        {limits.lower.toFixed(0)} - {limits.upper.toFixed(0)}
      </Text>
      <Button onPress={calculate} title="Calculate" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  },
});