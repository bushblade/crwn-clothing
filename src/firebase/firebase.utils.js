import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import config from './config'

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

if (process.env.REACT_ENV !== 'production') {
  auth.useEmulator('http://localhost:9099')
  firestore.useEmulator('localhost', 8080)
}

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export async function checkAndCreateUserProfileDocument(userAuthObject) {
  if (!userAuthObject) return
  const userRef = firestore.doc(`users/${userAuthObject.uid}`)

  const snapshot = await userRef.get()

  const { displayName, email } = userAuthObject
  if (!snapshot.exists) {
    try {
      await userRef.set({
        displayName,
        email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
    } catch (err) {
      console.error(err)
    }
    // check for no displayName - ie. user signed up with email and password
    // add the display name from the updated userAuth
  } else if (!snapshot.data().displayName) {
    await userRef.update({
      displayName,
    })
  }
  return userRef
}

export default firebase
