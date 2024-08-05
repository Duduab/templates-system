import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  templates: [
    { id: '1', name: 'Landing Page 1', category: 'Landing' },
    { id: '2', name: 'Landing Page 2', category: 'Landing' },
    { id: '3', name: 'Landing Page 3', category: 'Landing' },
    { id: '4', name: 'Landing Page 4', category: 'Landing' },
    { id: '5', name: 'Landing Page 5', category: 'Landing' },
    { id: '6', name: 'Business Website 1', category: 'Business' },
    { id: '7', name: 'Business Website 2', category: 'Business' },
    { id: '8', name: 'Business Website 3', category: 'Business' },
    { id: '9', name: 'Business Website 4', category: 'Business' },
    { id: '10', name: 'Business Website 5', category: 'Business' },
    { id: '11', name: 'Portfolio 1', category: 'Portfolio' },
    { id: '12', name: 'Portfolio 2', category: 'Portfolio' },
    { id: '13', name: 'Portfolio 3', category: 'Portfolio' },
    { id: '14', name: 'Portfolio 4', category: 'Portfolio' },
    { id: '15', name: 'Portfolio 5', category: 'Portfolio' },
    // Add more templates
  ],
  userInputs: {},
};

const templateSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    setTemplates(state, action) {
      state.templates = action.payload;
    },
    saveUserInputs(state, action) {
        console.log(action.payload);
      state.userInputs = action.payload;
    },
  },
});

export const { setTemplates, saveUserInputs } = templateSlice.actions;
export default templateSlice.reducer;
