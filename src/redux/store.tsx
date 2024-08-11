/* eslint-disable prettier/prettier */
import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import userInfoSlice from './userInfoSlice';

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
    userInfoSlice: userInfoSlice,
  },
  enhancers: getDefaultEnhancers => {
    return getDefaultEnhancers({
      autoBatch: {type: 'tick'},
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
