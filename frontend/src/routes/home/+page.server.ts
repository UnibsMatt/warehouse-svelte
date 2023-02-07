import {getItems} from "$lib/server/database";

export async function load({ params }) {
  return {
    items: await getItems()    
  } 
}


/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({request}) => {
    const values: FormData = await request.formData();
    console.log(values)
  }
}
