import { useState, useEffect } from 'react'
import { auth, checkAndCreateUserProfileDocument } from './firebase.utils'

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // add the user to the database if we have a new user
        checkAndCreateUserProfileDocument(userAuth).then((userRef) => {
          // listen for changes in the database
          if (userRef) {
            userRef.onSnapshot((snapShot) => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data(),
              })
            })
          }
        })
      } else {
        setCurrentUser(null)
      }
    })
    return unsubscribe
  }, [])
  return currentUser
}
