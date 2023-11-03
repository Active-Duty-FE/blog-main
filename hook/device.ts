import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { DeviceInfo } from 'type'

const useDevice = () => {
  const [device, setDevice] = useState<DeviceInfo>()
  useEffect(() => {
    const contentWidth = window.innerWidth
    if (contentWidth <= 820) {
      setDevice({
        type: 'mobile',
        width: contentWidth
      })
    } else {
      setDevice({
        type: 'pc',
        width: contentWidth
      })
    }
  }, [])
  return device
}
export default useDevice
