import * as firebase from 'firebase/app'

import 'firebase/messaging'

const initializedFirebaseApp = firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  apiKey: 'AIzaSyDHZWNWXFD35Hccue15M0bJvIm0IXf97dk',
  authDomain: 'pokedex-77103.firebaseapp.com',
  databaseURL: 'https://pokedex-77103.firebaseio.com',
  projectId: 'pokedex-77103',
  storageBucket: 'pokedex-77103.appspot.com',
  messagingSenderId: '1007054615980',
  appId: '1:1007054615980:web:6cf057d7477e5bd54b7609'
})

const messaging = initializedFirebaseApp.messaging()
// Project Settings => Cloud Messaging => Web Push certificates
messaging.usePublicVapidKey(
  'BPOqHiaNzxCARBSi3SA20zvkLUqGaIfiDbexA5Od1Y8_LR5ZiSQVqpXoNzDjKhBeMRtJZ9lM1kqi3Lm7e05PAso'
)
export { messaging }
