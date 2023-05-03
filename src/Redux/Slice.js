import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  eml: '',
  password: '',
  githubUsername: '',
  githubData: null,
 
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    loginSuccess: (state, action) => {
      state.githubData = action.payload;
      state.error = null;
    },
    loginFailure: (state) => {
      state.githubData = null;
     
    },
  },
});

export const { updateField, loginSuccess, loginFailure } = loginSlice.actions;
export default loginSlice.reducer;
