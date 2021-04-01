import type * as admin from 'firebase-admin';

export type Context = {
	user: admin.auth.DecodedIdToken | null;
};
