import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "$lib/firebase";

export async function getActiveRooms() {
	const q = query(
		collection(db, "rooms"),
		where("active", "==", true)
	);

	const snapshot = await getDocs(q);

	return snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data()
	}));
}

