<script lang="ts">
  export let data;
</script>

<div class="max-w-6xl mx-auto p-6">
  <h1 class="text-3xl font-bold mb-6">Our Rooms</h1>

  {#if data.rooms.length === 0}
    <p class="text-gray-500">No rooms available.</p>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each data.rooms as room}
        <div class="border rounded-xl p-5 shadow-sm">
          <h2 class="text-xl font-semibold">{room.name}</h2>
          <p class="text-gray-600 mt-2">{room.description}</p>

          <div class="mt-4 flex justify-between items-center">
            <span class="font-bold text-lg">
              ${room.price}/night
            </span>

            <a
              href="/book?roomId={room.id}"
              class="bg-black text-white px-4 py-2 rounded-lg text-sm"
            >
              Book
            </a>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

