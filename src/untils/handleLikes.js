import store from "/src/store";
import { LIKES_COLLECTION, TWEET_COLLECTION } from "/src/firebase";
import firebase from "firebase";

export default async (tweet) => {
  try {
    // already isLiked
    if(tweet.isLiked) {
      // Delete retweet doc
      const snapshot = await LIKES_COLLECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', store.state.user.uid).get()
      await snapshot.docs[0].ref.delete()
      // Decrease liked number
      await TWEET_COLLECTION.doc(tweet.id).update({
        num_likes: firebase.firestore.FieldValue.increment(-1)
      })
    } else {
      // not isLiked
      const doc = LIKES_COLLECTION.doc()
      await doc.set({
        id: doc.id,
        from_tweet_id: tweet.id,
        uid: store.state.user.uid,
        created_at: Date.now()
      })
      
      await TWEET_COLLECTION.doc(tweet.id).update({
        num_likes: firebase.firestore.FieldValue.increment(1)
      })
    }
  } catch (e) {
    console.log('handle liked error: ', e);
  }
}
