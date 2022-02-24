import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import Keys from '../keys/keys'

const firebaseApp = initializeApp(Keys.firebaseConfig)

const db = getFirestore()

export default db
