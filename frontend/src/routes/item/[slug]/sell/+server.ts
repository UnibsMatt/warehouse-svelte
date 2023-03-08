import {sellItem} from "$lib/server/database";


/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  let request_from_page = await request.json();

  sellItem(request_from_page);
  return new Response(JSON.stringify(request_from_page));

}