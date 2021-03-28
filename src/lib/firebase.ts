import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: 'AIzaSyCgxd_Ecei2RFo8sg9Ss4Dz9e_BlteNiiU',
		authDomain: 'fork-befcd.firebaseapp.com',
		projectId: 'fork-befcd',
		storageBucket: 'fork-befcd.appspot.com',
		messagingSenderId: '10745776339',
		appId: '1:10745776339:web:fe92722748f665ae2c6c26',
		measurementId: 'G-N9DB63JBBL'
	});
}

export const analytics = (): firebase.analytics.Analytics => firebase.analytics();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();