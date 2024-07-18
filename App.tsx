import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useCallback, useEffect} from 'react';
import Detail from './components/detail';
import LandingPage from './components/landingpage';
import axios from 'axios';
import {AppDispatch, useAppDispatch} from './redux/index';
import {addItem} from './redux/travelReducer';

const Stack = createNativeStackNavigator();

function App() {
  const dispatch: AppDispatch = useAppDispatch();

  const callAPI = useCallback(() => {
    axios({
      url: 'http://localhost:8081/data/travel.json',
      method: 'GET',
    })
      .then((res: any) => {
        dispatch(addItem(res.data));
      })
      .catch((err: any) => {
        console.log('Error', err);
      });
  }, [dispatch]);

  useEffect(() => {
    callAPI();
  }, [callAPI]);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name=" " component={LandingPage} />
          <Stack.Screen name="detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
