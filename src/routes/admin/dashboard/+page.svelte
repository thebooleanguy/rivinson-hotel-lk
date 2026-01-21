<script lang="ts">
  import { requireAuth } from "$lib/auth";
  import { db } from "$lib/firebase";
  import { doc, updateDoc } from "firebase/firestore";

  export let data;

  requireAuth(() => {});

  async function updateStatus(id: string, status: string) {
    await updateDoc(doc(db, "bookings", id), { status });
  }
</script>

<div class="max-w-6xl mx-auto p-6">
  <h1 class="text-3xl font-bold mb-6">Bookings</h1>

  <table class="w-full border">
    <thead>
      <tr class="bg-gray-100">
        <th class="p-2 border">Name</th>
        <th class="p-2 border">Email</th>
        <th class="p-2 border">Dates</th>
        <th class="p-2 border">Status</th>
        <th class="p-2 border">Action</th>
      </tr>
    </thead>

    <tbody>
      {#each data.bookings as b}
        <tr>
          <td class="p-2 border">{b.name}</td>
          <td class="p-2 border">{b.email}</td>
          <td class="p-2 border">
            {b.checkIn} → {b.checkOut}
          </td>
          <td class="p-2 border font-semibold">{b.status}</td>
          <td class="p-2 border space-x-2">
            <button
              class="bg-green-600 text-white px-3 py-1 rounded"
              on:click={() => updateStatus(b.id, "confirmed")}
            >
              Confirm
            </button>

            <button
              class="bg-red-600 text-white px-3 py-1 rounded"
              on:click={() => updateStatus(b.id, "cancelled")}
            >
              Cancel
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

