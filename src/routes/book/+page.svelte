<script lang="ts">
  import { db } from "$lib/firebase";
  import { collection, addDoc } from "firebase/firestore";

  export let data;

  let name = "";
  let email = "";
  let checkIn = "";
  let checkOut = "";
  let success = false;

  async function submitBooking() {
    if (!data.room) return;

    await addDoc(collection(db, "bookings"), {
      roomId: data.room.id,
      name,
      email,
      checkIn,
      checkOut,
      status: "pending",
      createdAt: new Date()
    });

    success = true;
    name = email = checkIn = checkOut = "";
  }
</script>

<div class="max-w-xl mx-auto p-6">
  {#if !data.room}
    <p class="text-red-500">Invalid room selected.</p>
  {:else}
    <h1 class="text-2xl font-bold mb-4">
      Book: {data.room.name}
    </h1>

    {#if success}
      <div class="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
        Booking request sent! We’ll contact you soon.
      </div>
    {/if}

    <form on:submit|preventDefault={submitBooking} class="space-y-4">
      <input
        class="w-full border p-3 rounded"
        placeholder="Your name"
        bind:value={name}
        required
      />

      <input
        class="w-full border p-3 rounded"
        type="email"
        placeholder="Email"
        bind:value={email}
        required
      />

      <input
        class="w-full border p-3 rounded"
        type="date"
        bind:value={checkIn}
        required
      />

      <input
        class="w-full border p-3 rounded"
        type="date"
        bind:value={checkOut}
        required
      />

      <button
        class="bg-black text-white px-6 py-3 rounded-lg w-full"
      >
        Submit Booking
      </button>
    </form>
  {/if}
</div>

