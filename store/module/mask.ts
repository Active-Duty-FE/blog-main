import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type maskVisible = {
  visible: boolean
}
const initialState: maskVisible = {
  visible: false
}
const maskSlice = createSlice({
  name: 'mask',
  initialState,
  reducers: {
    updateMaskVisible(state, action: PayloadAction<boolean>) {
      switch (action.payload) {
        case false:
          document.body.style.overflow = 'auto'
          break
        case true:
          document.body.style.overflow = 'hidden'
          break
        default:
          break
      }
      state.visible = action.payload
    }
  }
})

export default maskSlice
export const { updateMaskVisible } = maskSlice.actions
