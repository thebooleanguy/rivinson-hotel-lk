<script>
	import emblaCarouselSvelte from "embla-carousel-svelte";
	import Autoplay from "embla-carousel-autoplay";

	let options = { loop: true };
	let plugins = [Autoplay()];
</script>

<div class="embla" use:emblaCarouselSvelte={{ options, plugins }}>
	<div class="embla__container">
		<div class="embla__slide">
			<img src="photos/hotel-front-1.jpg" alt="" />
		</div>
		<div class="embla__slide"><img src="photos/front-desk-1.jpg" alt="" /></div>
		<div class="embla__slide"><img src="photos/food-1.jpg" alt="" /></div>
		<div class="embla__slide"><img src="photos/room-1.jpg" alt="" /></div>

		<div class="embla__slide"><img src="photos/tea-1.jpg" alt="" /></div>
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
		height: 800px;
	}
	.embla__slide {
		background: #ccc;
		flex: 0 0 100%;
		min-width: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
