import firebase from "firebase/app"

var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig)
firebase.analytics()
