const firebaseConfig = {
  apiKey: "AIzaSyAkjxZ14Lc1VdSv5TZNF5IA_nYlbisydsY",
  authDomain: "thanks-8d436.firebaseapp.com",
  databaseURL: "https://thanks-8d436.firebaseio.com",
  projectId: "thanks-8d436",
  storageBucket: "thanks-8d436.appspot.com",
  messagingSenderId: "497657853593",
  appId: "1:497657853593:web:70d35d84726dfb102aea08"
};

let firebaseInstance
export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  firebase.initializeApp(firebaseConfig)
  firebaseInstance = firebase

  return firebase
}