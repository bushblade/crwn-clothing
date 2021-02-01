import { useState, useEffect } from 'react'
import { auth } from './firebase.utils'

export function useGoogleUser() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setCurrentUser)
    return unsubscribe
  }, [])
  return currentUser
}
