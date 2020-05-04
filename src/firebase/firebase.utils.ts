import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

var config = {
	apiKey: "AIzaSyAsS6jQ6VwT3ZCVL2VBwq87qC57fqjfmhI",
	authDomain: "react-store-b933b.firebaseapp.com",
	databaseURL: "https://react-store-b933b.firebaseio.com",
	projectId: "react-store-b933b",
	storageBucket: "react-store-b933b.appspot.com",
	messagingSenderId: "156426680462",
	appId: "1:156426680462:web:4ee9be9bd430968cfe71df",
	measurementId: "G-227KKQHLCZ",
}
// Initialize Firebase
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
	prompt: "select_account",
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
