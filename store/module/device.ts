import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Device, DeviceInfo } from 'type'
export type InitialState = {
  device: Device
  width: number
}
const initialState: InitialState = {
  device: undefined,
  width: 0
}
const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    updateDevice(state, action: PayloadAction<DeviceInfo>) {
      state.device = action.payload.type
    },
    updateWidth(state, action: PayloadAction<DeviceInfo>) {
      state.width = action.payload.width
    }
  }
})
export default deviceSlice
export const { updateDevice, updateWidth } = deviceSlice.actions
