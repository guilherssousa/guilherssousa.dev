import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

import { zenblog } from '@/lib/blog';

export async function GET(context) {

	const posts = await zenblog.posts.list();

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.data.map((post) => ({
			title: post.title,
			description: post.excerpt,
			link: `/blog/${post.slug}/`,
			...post,
		})),
	});
}
