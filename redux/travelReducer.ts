import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TravelInitialState {
  travelItems: any[];
}

const initialState: TravelInitialState = {
  travelItems: [],
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      state.travelItems = action.payload;
    },
  },
});

export const {addItem} = itemSlice.actions;
export default itemSlice.reducer;
