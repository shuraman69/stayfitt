import {createSlice} from '@reduxjs/toolkit'

type actionPropType = ''

interface InitialStateI {
}

const initialState: InitialStateI = {
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
 }
)

export default userSlice.reducer
export const {} = userSlice.actions
