import {getItems} from "$lib/server/database";

export function load({ params }) {
  return {
    items: getItems()
    
  };
}