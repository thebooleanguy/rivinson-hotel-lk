<script lang="ts">
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from "$lib/firebase";
  import { goto } from "$app/navigation";

  let email = "";
  let password = "";
  let error = "";

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      goto("/admin/dashboard");
    } catch (e) {
      error = "Invalid login";
    }
  }
</script>

<div class="max-w-md mx-auto p-6">
  <h1 class="text-2xl font-bold mb-4">Admin Login</h1>

  {#if error}
    <p class="text-red-500 mb-3">{error}</p>
  {/if}

  <form on:submit|preventDefault={login} class="space-y-4">
    <input class="w-full border p-3 rounded" placeholder="Email" bind:value={email} />
    <input class="w-full border p-3 rounded" type="password" placeholder="Password" bind:value={password} />

    <button class="bg-black text-white w-full py-3 rounded">
      Login
    </button>
  </form>
</div>

