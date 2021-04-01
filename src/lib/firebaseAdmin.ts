import * as admin from 'firebase-admin';

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.applicationDefault()
	});
}

export const db = admin.firestore();
export const auth = admin.auth();
