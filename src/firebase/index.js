import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO3IeoKxFwvXqxXpwaDuMeCqfA1ASuhR4",
  authDomain: "vue-twitter-clone-coding.firebaseapp.com",
  projectId: "vue-twitter-clone-coding",
  storageBucket: "vue-twitter-clone-coding.appspot.com",
  messagingSenderId: "629861768409",
  appId: "1:629861768409:web:f74b55f551c27265bd32c8",
  measurementId: "G-DWEK3YDMP4"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export const USER_COLLECTION = db.collection("users")
export const TWEET_COLLECTION = db.collection("tweets")
export const COMMENT_COLLECTION = db.collection("comments")
export const RETWEET_COLLECTION = db.collection("retweets")
