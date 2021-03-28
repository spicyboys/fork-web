import type { ReadOnlyFormData, Request, Response } from '@sveltejs/kit';
import * as cookie from 'cookie';
import { auth } from '$lib/firebaseAdmin';

export async function post(request: Request): Promise<Response> {
	const body = request.body as ReadOnlyFormData;

	// Get the ID token passed and the CSRF token.
	const idToken = body['idToken'];

	// Set session expiration to 5 days.
	const expiresIn = 60 * 24 * 5 * 1000;

	try {
		const sessionCookie = await new Promise<string>((resolve, reject) =>
			auth.createSessionCookie(idToken, { expiresIn }).then(resolve, reject)
		);

		return {
			headers: {
				'set-cookie': cookie.serialize('session', sessionCookie, {
					maxAge: expiresIn,
					httpOnly: true,
					path: '/'
				})
			},
			body: { status: 'success' }
		};
	} catch (e) {
		return {
			status: 401,
			body: 'Unauthorized'
		};
	}
}

export async function del(): Promise<Response> {
	return {
		headers: {
			'set-cookie': cookie.serialize('session', '__deleted__', {
				maxAge: 0,
				httpOnly: true,
				path: '/'
			})
		},
		body: { status: 'Logged Out' }
	};
}
