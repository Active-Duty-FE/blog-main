import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type InitialState = {
  quote: string
}
const initialState: InitialState = {
  quote: 'abc'
}
const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    updateQuote(state, action: PayloadAction<string>) {
      state.quote = action.payload
    }
  }
})

export default testSlice

export const { updateQuote } = testSlice.actions
