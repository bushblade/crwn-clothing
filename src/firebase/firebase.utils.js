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

export async function checkAndCreateUserProfileDocument(userAuthObject) {
  if (!userAuthObject) return
  const userRef = firestore.doc(`users/${userAuthObject.uid}`)

  const snapshot = await userRef.get()

  const { displayName, email } = userAuthObject
  if (!snapshot.exists) {
    console.log('no snapshot .... creating document')
    try {
      await userRef.set({
        displayName,
        email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
    } catch (err) {
      console.error(err)
    }
    // check for additionalData - ie. user signed up with email and password
  } else if (!snapshot.data().displayName) {
    console.log('adding a displayName')
    await userRef.set({
      displayName,
    })
  }
  return userRef
}

export default firebase
