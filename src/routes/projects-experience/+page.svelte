<script lang="ts">
	import TimelineCard from '$lib/components/TimelineCard/TimelineCard.svelte';
	import TimelineDetailOverlay from '$lib/components/TimelineCard/TimelineDetailOverlay.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { items, title } from '@data/timeline';
	import type { TimelineItem } from '$lib/types';
	import { isExperience } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';

	let result: Array<TimelineItem> = [...items];
	let hoveredItemSlug: string | null = null;

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		if (isBlank(query)) {
			result = items;
			return;
		}

		result = items.filter((it) => {
			const nameMatch = it.name.toLowerCase().includes(query);
			const descMatch = it.description.toLowerCase().includes(query);
			const companyMatch = isExperience(it) && it.company.toLowerCase().includes(query);

			return nameMatch || descMatch || companyMatch;
		});
	};
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="col items-center relative mt-10 flex-1">
		{#if result.length === 0}
			<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
				<UIcon icon="i-carbon-development" classes="text-3.5em" />
				<p class="font-300">Could not find anything...</p>
			</div>
		{:else}
			<div
				class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"
			/>
			{#each result as item, index (item.slug)}
				<div
					class="timeline-item-container relative"
					on:mouseenter={() => (hoveredItemSlug = item.slug)}
					on:mouseleave={() => (hoveredItemSlug = null)}
					role="presentation"
				>
					<div
						class={`flex ${
							index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
						} relative items-center w-full my-[10px]`}
					>
						<div class="flex-1 hidden lg:flex" />
						<div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
							<UIcon icon="i-carbon-condition-point" classes="" />
						</div>
						<div class="flex-1 col items-stretch">
							<TimelineCard {item} />
						</div>
					</div>

					<!-- Overlay rendered per item, shown when this item is hovered -->
					{#if hoveredItemSlug === item.slug}
						<TimelineDetailOverlay {item} side={index % 2 !== 0 ? 'left' : 'right'} />
					{/if}
				</div>
			{/each}
		{/if}
	</div>
</SearchPage>
