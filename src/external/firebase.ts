import { initializeApp } from "firebase/app"
import "firebase/firestore"
import { getAnalytics, isSupported } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyB5wsJmFBdnYMG8GwjzuYTmfXT2j7Sxv6A",
  authDomain: "wedding-rsvp-671ef.firebaseapp.com",
  projectId: "wedding-rsvp-671ef",
  storageBucket: "wedding-rsvp-671ef.appspot.com",
  messagingSenderId: "111276647576",
  appId: "1:111276647576:web:9ab71c385bf8f6f1389ced",
  measurementId: "G-3XS37REZL4",
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

const initAnalytics = async () => {
  const canUseAnayltics = await isSupported()
  if (canUseAnayltics) {
    return getAnalytics(app)
  }
}

initAnalytics()

export default app
