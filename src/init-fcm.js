import * as firebase from "firebase/app";
import "firebase/messaging";

// firebase initialzation
const initializedFirebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBPmRWZXJ_ILOgsNPl49RjB82tKZifyTsw",
	authDomain: "tigrow-ac160.firebaseapp.com",
	databaseURL: "https://tigrow-ac160.firebaseio.com",
	projectId: "tigrow-ac160",
	storageBucket: "tigrow-ac160.appspot.com",
	messagingSenderId: "534503635154",
	appId: "1:534503635154:web:6b63e49c93d3b152"

});

const messaging = initializedFirebaseApp.messaging();

// use server validApikey found in projectsetting=> cloud messaging => web push
messaging.usePublicVapidKey(
  "BLzcWQTQjkoaI-pl4fZ1rCXNDe8zOjjU6Qz_Ikya9Cid7o5KZQ9_517OMHArFEStehkqMspXEaTJ6fOzSUxycac"
);

export { messaging };
