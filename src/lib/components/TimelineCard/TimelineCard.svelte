<script lang="ts">
	import type { TimelineItem } from '$lib/types';
	import { isExperience } from '$lib/types';
	import { computeExactDuration, getMonthName } from '$lib/utils/helpers';
	import Card from '../Card/Card.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';
	import Chip from '../Chip/Chip.svelte';
	import CardDivider from '../Card/CardDivider.svelte';

	export let item: TimelineItem;

	const exactDuration = computeExactDuration(item.period.from, item.period.to);

	const from = `${getMonthName(item.period.from.getMonth())} ${item.period.from.getFullYear()}`;
	const to = item.period.to
		? `${getMonthName(item.period.to.getMonth())} ${item.period.to.getFullYear()}`
		: 'Present';

	const period = `${from} - ${to}`;

	// Determine the href based on item type
	const href = isExperience(item)
		? `${base}/experience/${item.slug}`
		: `${base}/projects/${item.slug}`;

	// Build info chips based on item type
	const info = isExperience(item)
		? [
				{ label: item.company, icon: 'i-carbon-building' },
				{ label: item.location, icon: 'i-carbon-location' },
				{ label: item.contract, icon: 'i-carbon-hourglass' }
			]
		: [{ label: item.type, icon: 'i-carbon-assembly-cluster' }];
</script>

<Card margin="0px 0px 20px 0px" tiltDegree={2} {href} color={item.color}>
	<div class="col md:flex-row items-start gap-5 md:gap-1">
		<CardLogo
			src={getAssetURL(item.logo)}
			alt={isExperience(item) ? item.company : item.name}
			size={55}
		/>
		<div class="col ml-0 md:ml-[20px] gap-3 w-full">
			<div class="col">
				<h3
					class="flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"
				>
					<CardTitle title={item.name} />
					{#if !isExperience(item) && item.links.length > 0}
						<div class="row gap-1">
							{#each item.links as link}
								<CardLink label={link.label ?? ''} to={link.to} />
							{/each}
						</div>
					{/if}
				</h3>
				<div class="row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300">
					{#each info as chip}
						<Chip>
							<UIcon icon={chip.icon} />
							<span class="m-l-1">{chip.label}</span>
						</Chip>
					{/each}
				</div>
			</div>
			<div class="text-[var(--text)] text-[0.9em]">
				<div class="row items-center gap-2">
					<UIcon icon="i-carbon-calendar" classes="text-1.25em" />
					{period}
				</div>
				<CardDivider />
				<div class="row items-center gap-2">
					<UIcon icon="i-carbon-time" classes="text-1.25em" />
					{exactDuration}
				</div>
				<CardDivider />
			</div>
			<div class="timeline-description text-[0.9em]">{item.shortDescription}</div>
			<div class="flex flex-row flex-wrap mt-5">
				{#each item.skills as skill}
					<ChipIcon
						logo={getAssetURL(skill.logo)}
						name={skill.name}
						href={`${base}/skills/${skill.slug}`}
					/>
				{/each}
			</div>
		</div>
	</div>
</Card>
