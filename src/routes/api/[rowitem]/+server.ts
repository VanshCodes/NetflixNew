/**
 * Retrieves data from the server based on the provided parameters.
 * @param {rowitem} params - Name of the row item(like fetchNetflixSeries).
 * @returns {Promise<Movie[]>} - A promise that resolves to the server response.
 */
import Requests from '@/utils/requests.js';
// import Movie from "@/types/tmdb.types.js"
import instance from '@/utils/axios';
import type { Movie } from '$data/types/tmdb.types.js';

export async function GET({ params }) {
	let rowitem = params.rowitem;

	const API_KEY = await process.env['API_KEY'];
	let requestUrl = await Requests(API_KEY);

	const {
		data: { results }
	}: { data: { results: Movie[] | undefined } } = await instance.get(requestUrl[rowitem].url);
	return new Response(JSON.stringify(results));
}
