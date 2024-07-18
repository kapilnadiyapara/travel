import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import travelReducer from './travelReducer';

export const store = configureStore({
  reducer: {
    item: travelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
