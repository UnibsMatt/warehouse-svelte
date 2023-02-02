/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({request}) => {
    const values: FormData = await request.formData();
    
    const codice = values.get("codice");
    const descrizione = values.get("descrizione");
    const prezzo_vendita = values.get("prezzo_vendita");
    
    console.log(values)
    
  }
};