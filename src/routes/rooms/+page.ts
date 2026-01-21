import { getActiveRooms } from "$lib/rooms";

export async function load() {
	const rooms = await getActiveRooms();
	return { rooms };
}

