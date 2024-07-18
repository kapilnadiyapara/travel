import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootState} from '../redux/index';
import {useSelector} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    width: '100%',
    paddingTop: '3%',
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#FFF',
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  innerText: {
    color: 'blue',
    fontSize: 20,
  },
});

const Detail: FC = () => {
  const travelItem = useSelector((state: RootState) => state.item.travelItems);

  return (
    <View style={styles.container}>
      {travelItem.map(x => (
        <>
          <Text key={x?.place}>
            <Text style={styles.baseText} key={`1${x?.place}`}>Place:</Text>{' '}
            <Text style={styles.innerText} key={`2${x?.place}`}>{x?.place}</Text>
            &nbsp;&nbsp;<Text key={`3${x?.place}`} style={styles.baseText}>Price:</Text>{' '}
            <Text style={styles.innerText} key={`4${x?.place}`}>{x?.price}</Text>
          </Text>
        </>
      ))}
    </View>
  );
};

export default Detail;
