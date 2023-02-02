import {getItems} from "$lib/server/database";

export async function load({ params }) {
  return {
    items: await getItems()    
  } 
}