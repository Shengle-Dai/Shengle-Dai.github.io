<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import type { TimelineItem } from '$lib/types';
	import UIcon from '../Icon/UIcon.svelte';
	import Chip from '../Chip/Chip.svelte';
	import Screenshot from '../Screenshot/Screenshot.svelte';
	import { getAssetURL } from '$lib/data/assets';

	export let item: TimelineItem;
	export let side: 'left' | 'right';

	let currentScreenshotIndex = 0;
	let selectedScreenshot: { src: string; label: string } | undefined = undefined;

	// Truncate description to reasonable length
	const MAX_DESCRIPTION_LENGTH = 250;
	$: condensedDescription =
		item.description.length > MAX_DESCRIPTION_LENGTH
			? item.description.substring(0, MAX_DESCRIPTION_LENGTH).trim() + '...'
			: item.description;

	function nextScreenshot() {
		if (item.screenshots) {
			currentScreenshotIndex = (currentScreenshotIndex + 1) % item.screenshots.length;
		}
	}

	function prevScreenshot() {
		if (item.screenshots) {
			currentScreenshotIndex =
				currentScreenshotIndex === 0
					? item.screenshots.length - 1
					: currentScreenshotIndex - 1;
		}
	}

	function openFullscreen() {
		if (item.screenshots && item.screenshots[currentScreenshotIndex]) {
			selectedScreenshot = item.screenshots[currentScreenshotIndex];
		}
	}
</script>

<div
	class="detail-overlay hidden lg:block bg-[var(--main)] border-1px border-solid border-[var(--border)] rounded-15px p-20px shadow-xl"
	class:overlay-left={side === 'left'}
	class:overlay-right={side === 'right'}
	transition:fly={{ y: 10, duration: 200 }}
>
	<!-- Screenshots Carousel -->
	{#if item.screenshots && item.screenshots.length > 0}
		<div class="screenshot-section mb-3">
			<div class="relative aspect-video rounded-lg overflow-hidden bg-[var(--main-hover)]">
				<!-- Click to enlarge -->
				<button
					class="w-full h-full cursor-pointer border-0 p-0 bg-transparent"
					on:click={openFullscreen}
				>
					<img
						src={item.screenshots[currentScreenshotIndex].src}
						alt={item.screenshots[currentScreenshotIndex].label}
						class="w-full h-full object-cover"
					/>
				</button>

				<!-- Navigation arrows (only if multiple screenshots) -->
				{#if item.screenshots.length > 1}
					<button
						class="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-[var(--main)] opacity-80 rounded-full hover:opacity-100 border-0 cursor-pointer"
						on:click|stopPropagation={prevScreenshot}
					>
						<UIcon icon="i-carbon-chevron-left" />
					</button>

					<button
						class="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[var(--main)] opacity-80 rounded-full hover:opacity-100 border-0 cursor-pointer"
						on:click|stopPropagation={nextScreenshot}
					>
						<UIcon icon="i-carbon-chevron-right" />
					</button>

					<!-- Indicator dots -->
					<div class="absolute bottom-2 left-1/2 -translate-x-1/2 row gap-1">
						{#each item.screenshots as _, idx}
							<div
								class="w-2 h-2 rounded-full"
								class:bg-[var(--accent)]={idx === currentScreenshotIndex}
								class:bg-[var(--border)]={idx !== currentScreenshotIndex}
							/>
						{/each}
					</div>
				{/if}
			</div>

			<p class="text-center text-[0.8em] text-[var(--tertiary-text)] mt-2">
				{item.screenshots[currentScreenshotIndex].label}
			</p>
		</div>
	{/if}

	<!-- Video Embed -->
	{#if item.video}
		<div class="aspect-video mb-3 rounded-lg overflow-hidden">
			<iframe
				src={item.video}
				class="w-full h-full"
				frameborder="0"
				title="Project video"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	{/if}

	<!-- External Links -->
	{#if item.links.length > 0}
		<div class="row flex-wrap gap-2 mb-3">
			{#each item.links as link}
				<Chip href={link.to}>
					<UIcon icon="i-carbon-link" />
					<span class="ml-1">{link.label}</span>
				</Chip>
			{/each}
		</div>
	{/if}

	<!-- Condensed Description -->
	{#if condensedDescription}
		<div class="overlay-description text-[0.85em] text-[var(--tertiary-text)] mb-3">
			{condensedDescription}
		</div>
	{/if}

	<!-- Skills (first 5) -->
	{#if item.skills.length > 0}
		<div class="row flex-wrap gap-1">
			{#each item.skills.slice(0, 5) as skill}
				<div
					class="text-[0.75em] px-2 py-1 bg-[var(--main-hover)] rounded text-[var(--text)]"
				>
					{skill.name}
				</div>
			{/each}
			{#if item.skills.length > 5}
				<div class="text-[0.75em] px-2 py-1 text-[var(--tertiary-text)]">
					+{item.skills.length - 5} more
				</div>
			{/if}
		</div>
	{/if}
</div>

<!-- Fullscreen screenshot modal -->
<Screenshot screenshot={selectedScreenshot} onClose={() => (selectedScreenshot = undefined)} />

<style lang="scss">
	.detail-overlay {
		position: absolute;
		width: 380px;
		z-index: 20;
		backdrop-filter: blur(10px);
		max-height: 80vh;
		overflow-y: auto;
		top: 0;

		&.overlay-left {
			right: calc(50% + 40px);
		}

		&.overlay-right {
			left: calc(50% + 40px);
		}
	}

	.overlay-description {
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
		line-height: 1.5em;
		max-height: 7.5em;
		position: relative;
	}

	/* Scrollbar styling for overlay */
	.detail-overlay::-webkit-scrollbar {
		width: 6px;
	}

	.detail-overlay::-webkit-scrollbar-track {
		background: transparent;
	}

	.detail-overlay::-webkit-scrollbar-thumb {
		background: var(--border);
		border-radius: 3px;
	}

	.detail-overlay::-webkit-scrollbar-thumb:hover {
		background: var(--border-hover);
	}
</style>
