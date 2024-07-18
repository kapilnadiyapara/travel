import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#008F68',
    fontSize: 40,
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8,
  },
  image: {
    width: 300,
    height: 260,
    justifyContent: 'center',
  },
});

const LandingPage: FC<{navigation: any}> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Hawaii, Tourisam</Text>
      <Text style={styles.h2}>Travel best places in Hawaii</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('detail')}
      />
    </View>
  );
};

export default LandingPage;
