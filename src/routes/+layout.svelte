<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

<header class="border-b">
	<div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
		<h1 class="text-xl font-semibold tracking-wide">
			Rivinson
			<span class="text-sm text-gray-500 ml-1">Negombo</span>
		</h1>

		<nav class="space-x-6 text-sm">
			<a href="/" class="hover:underline">Home</a>
			<a href="/rooms" class="hover:underline">Rooms</a>
			<a href="#contact" class="hover:underline">Contact</a>
		</nav>
	</div>
</header>

<main>
	{@render children()}
</main>

<footer class="border-t mt-20">
	<div class="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-500">
		<p>© Rivinson, Negombo</p>
	</div>
</footer>

