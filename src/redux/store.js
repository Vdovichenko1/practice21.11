const { configureStore } = require('@reduxjs/toolkit');
const { authSlice } = require('./auth/authSlice');

export const store = configureStore({
  reducer: authSlice.reducer,
});
