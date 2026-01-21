import { auth } from "$lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export function requireAuth(callback: () => void) {
	onAuthStateChanged(auth, (user) => {
		if (!user) {
			window.location.href = "/admin/login";
		} else {
			callback();
		}
	});
}

