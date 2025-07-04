
import { useState } from 'react'
function useOnlineStatus(status = false) {
  const [onlineStatus, setOnlineStatus] = useState(status)
  function changeStatus() {
    setOnlineStatus(prev => !prev)

  }

}