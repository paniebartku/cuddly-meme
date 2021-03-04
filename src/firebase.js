import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB-SPbo5qhK6XE-Ilb0uGbZFsB8U4duCiA",
  authDomain: "application-c60bf.firebaseapp.com",
  projectId: "application-c60bf",
  storageBucket: "application-c60bf.appspot.com",
  messagingSenderId: "478770501039",
  appId: "1:478770501039:web:782a34050e121b70b4cb5a"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;