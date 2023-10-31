import type { CheckDevice } from 'type'

const checkDevice: CheckDevice = () => {
  const contentWidth = window.innerWidth
  if (contentWidth <= 820) {
    return {
      type: 'mobile',
      width: contentWidth
    }
  } else {
    return {
      type: 'pc',
      width: contentWidth
    }
  }
}
export default checkDevice
