<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<!-- Download Button -->
			<div class="download-section">
				<a href={data} download>
					<Chip size={'1.25em'}>
						<UIcon icon="i-carbon-download" />
						<span class="ml-1">Download PDF</span>
					</Chip>
				</a>
			</div>

			<!-- PDF Preview -->
			<div class="preview-container">
				<iframe src={data} title="Resume Preview" class="resume-preview" />
			</div>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		margin-top: 20px;
		width: 100%;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
		padding: 0 20px;

		.download-section {
			display: flex;
			justify-content: center;

			a {
				color: inherit;
			}
		}

		.preview-container {
			width: 100%;
			height: 80vh;
			min-height: 600px;
			border: 1px solid var(--border);
			border-radius: 8px;
			overflow: hidden;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		}

		.resume-preview {
			width: 100%;
			height: 100%;
			border: none;
		}
	}
</style>
