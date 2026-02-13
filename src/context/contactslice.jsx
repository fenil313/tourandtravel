import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    formData: { name: '', email: '', message: '' },
    isPaid: false,
    loading: false
  },
  reducers: {
    updateForm: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setPaymentSuccess: (state) => {
      state.isPaid = true;
    },
    resetForm: (state) => {
      state.formData = { name: '', email: '', message: '' };
      state.isPaid = false;
    }
  }
});

export const { updateForm, setPaymentSuccess, resetForm } = contactSlice.actions;
export default contactSlice.reducer;