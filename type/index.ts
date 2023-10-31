export type Post = string

export type Device = 'mobile' | 'pc' | undefined

export type Movement = 'toRight' | 'toLeft' | 'toTransparent' | 'storm'

export type DeviceInfo = {
  type: Device
  width: number
}

export interface CheckDevice {
  (): DeviceInfo
}

export type Response<T = any> = {
  data: T
  code: number
}
