import { TWEET_COLLECTION } from "/src/firebase";

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
        num_links: 0,
      })
      resolve(true)
    } catch (e) {
      reject(e);
    }
  })
}
