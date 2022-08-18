import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    user: null
  }

  const userDetails = createSlice({
    name: "user",
    initialState,
    reducers: {
      login: (state, action) => {
        state.user = action.payload
      },
      logout: (state) => {
        state.user = null
      }
    }
  })
  
export const {login, logout} = userDetails.actions

export default userDetails.reducer