import { items } from '@data/timeline';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const item = items.find((timelineItem) => {
			return timelineItem.slug === params.slug;
		});

		return { item };
	}
}
