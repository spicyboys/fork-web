import * as cookie from 'cookie';
import { auth } from '$lib/firebaseAdmin';
import type * as admin from 'firebase-admin';

type Context = {
	user: { token: string } | null;
};

export async function getContext({ headers }): Promise<Context> {
	const cookies = cookie.parse(headers.cookie || '');

	const sessionCookie = cookies.session || '';

	try {
		const decodedClaims = await new Promise<admin.auth.DecodedIdToken>((resolve, reject) =>
			auth.verifySessionCookie(sessionCookie, true).then(resolve).catch(reject)
		);
		const token = await auth.createCustomToken(decodedClaims.uid);
		return { user: { token } };
	} catch (e) {
		return { user: null };
	}
}

type Session = {
	user: { token: string } | null;
};

export function getSession({ context }: { context: Context }): Session {
	return {
		user: context.user
	};
}
