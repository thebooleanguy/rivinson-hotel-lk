import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "$lib/firebase";

export async function load() {
	const q = query(
		collection(db, "bookings"),
		orderBy("createdAt", "desc")
	);

	const snap = await getDocs(q);

	return {
		bookings: snap.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}))
	};
}

