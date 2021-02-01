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

export default firebase
