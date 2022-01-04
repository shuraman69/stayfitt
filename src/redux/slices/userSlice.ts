import {createSlice} from '@reduxjs/toolkit'


interface InitialStateI {
 token: string | null
}

const initialState: InitialStateI = {
 token: null
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   setToken(state, action) {
    state.token = action.payload.data
   }
  }
 }
)

export default userSlice.reducer
export const {setToken} = userSlice.actions
