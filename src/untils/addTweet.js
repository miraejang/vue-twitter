import firebase from "firebase";
import { TWEET_COLLECTION, USER_COLLECTION } from "/src/firebase";

export default (tweetBody, currentUser) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = TWEET_COLLECTION.doc()
      doc.set({
        id: doc.id,
        tweet_body: tweetBody,
        uid: currentUser.uid,
        created_at: Date.now(),
        num_comments: 0,
        num_retweets: 0,
        num_likes: 0,
      })
      
      USER_COLLECTION.doc(currentUser.uid).update({
        num_tweets: firebase.firestore.FieldValue.increment(1)
      })

      resolve(true)
    } catch (e) {
      reject(e);
    }
  })
}
