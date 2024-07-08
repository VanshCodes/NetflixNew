import Requests from '@/utils/requests';

import instance from '@/utils/axios';
import type { Movie } from '$data/types/tmdb.types';

export async function GET() {
	const API_KEY: String | undefined = process.env['API_KEY'];
	if (!API_KEY) {
		return new Response(JSON.stringify([]));
	}
	let requestUrls = Requests(API_KEY);
	const {
		data: { results }
	}: { data: { results: Movie[] } } = await instance.get(requestUrls.fetchNetflixOrignals.url);
	return new Response(JSON.stringify(results));
}
