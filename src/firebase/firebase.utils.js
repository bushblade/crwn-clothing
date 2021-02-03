import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import config from './config'

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export async function createUserProfileDocument(
  userAuthObject,
  additionalData
) {
  if (!userAuthObject) return
  const userRef = firestore.doc(`users/${userAuthObject.uid}`)

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuthObject
    try {
      await userRef.set({
        displayName,
        email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        ...additionalData,
      })
    } catch (err) {
      console.error(err)
    }
  }
  return userRef
}

export default firebase
