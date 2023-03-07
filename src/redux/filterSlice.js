import { createSlice } from '@reduxjs/toolkit';

const filerInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: filerInitialState,
  // Об'єкт редюсерів
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { setFilter } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
