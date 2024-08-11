/* eslint-disable prettier/prettier */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {lightTheme} from '../theme/CustomTheme';

type initialType = {
  themeColor: any;
};
export type typePassword = {user_name: string; password: string};
const initialState: initialType = {
  themeColor: lightTheme,
};

const userInfoSlice = createSlice({
  name: 'userInfoSlice',
  initialState,
  reducers: {
    setThemeColor: (state: initialType, action: PayloadAction<string>) => {
      state.themeColor = action.payload;
    },
  },
});

export const {setThemeColor} = userInfoSlice.actions;
export default userInfoSlice.reducer;
