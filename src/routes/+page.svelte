<script>
	import emblaCarouselSvelte from "embla-carousel-svelte";
	import Autoplay from "embla-carousel-autoplay";

	let options = { loop: true };
	let plugins = [Autoplay({ delay: 4000 })];
</script>

<section class="relative">
	<div class="embla" use:emblaCarouselSvelte={{ options, plugins }}>
		<div class="embla__container">
			{#each [
				"hotel-front-1.jpg",
				"front-desk-1.jpg",
				"food-1.jpg",
				"room-1.jpg",
				"tea-1.jpg"
			] as photo}
				<div class="embla__slide">
					<img src={`/photos/${photo}`} alt="" />
				</div>
			{/each}
		</div>
	</div>

	<!-- overlay -->
	<div class="absolute inset-0 bg-black/40"></div>

	<!-- hero content -->
	<div class="absolute inset-0 flex items-center justify-center text-center">
		<div class="text-white max-w-xl px-6">
			<h2 class="text-4xl md:text-5xl font-light leading-tight">
				A peaceful stay<br />in the heart of Negombo
			</h2>

			<p class="mt-4 text-lg text-white/90">
				Comfort, simplicity, and coastal calm
			</p>

			<a
				href="/rooms"
				class="inline-block mt-6 bg-white text-black px-6 py-3 rounded-full text-sm tracking-wide"
			>
				View Rooms
			</a>
		</div>
	</div>
</section>

