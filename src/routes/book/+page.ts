import { doc, getDoc } from "firebase/firestore";
import { db } from "$lib/firebase";

export async function load({ url }) {
	const roomId = url.searchParams.get("roomId");

	if (!roomId) {
		return { room: null };
	}

	const roomRef = doc(db, "rooms", roomId);
	const snap = await getDoc(roomRef);

	if (!snap.exists()) {
		return { room: null };
	}

	return {
		room: {
			id: snap.id,
			...snap.data()
		}
	};
}

