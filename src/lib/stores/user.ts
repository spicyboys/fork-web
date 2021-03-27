import { auth } from '$lib/firebase';
import { authState } from 'rxfire/auth';

export const user = authState(auth);
