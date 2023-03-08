import { fail, redirect } from "@sveltejs/kit";
import {addItem} from "$lib/server/database";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({request}) => {
    const values: FormData = await request.formData();
    
    const codice = values.get("codice");
    const categoria = values.get("categoria");
    const descrizione = values.get("descrizione");
    const prezzo_acquisto = values.get("prezzo_acquisto");
    const quantita = values.get("quantita");

    
    if (!categoria) {
      return fail(400, {invalidCat: true});
    }
    
    if (!codice || Number.isNaN(Number.parseInt(codice.toString()))) {
      
      return fail(400, {invalidCode: true});
    }
    
    if (!prezzo_acquisto || Number.isNaN(Number.parseInt(prezzo_acquisto.toString())) || Number.parseInt(prezzo_acquisto.toString()) <= 0){
      
      return fail(400, {invalidBuy: true});
    }
    
    if (!quantita || Number.isNaN(Number.parseInt(quantita.toString()))  || Number.parseInt(quantita.toString()) <= 0 ){
      
      return fail(400, {invalidQuantity: true});
    }
    addItem(values);
    throw redirect(302, "/home");
  }
};