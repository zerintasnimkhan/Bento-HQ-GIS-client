import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counter-slice';
import selectMapReducer from '../features/selectMap/selectMap-slice';


export const store = configureStore({
      reducer: { 
            counter: counterReducer,
            selectMap: selectMapReducer,
      },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;