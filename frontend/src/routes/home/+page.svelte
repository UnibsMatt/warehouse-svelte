<script>
  export let data;
  let { items } = data;
  import { goto } from "$app/navigation";
  import {
    ButtonGroup,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Radio,
    TableSearch,
  } from "flowbite-svelte";

  let searchTerm = "";
  $: filteredItems = items.filter(
    (item) =>
      item.descrizione.toLowerCase().includes(searchTerm.toLowerCase()) === true
  );

  function radioCheck(event){
    let sorted = filteredItems;    
    console.log(event.currentTarget.value)
    switch (event.currentTarget.value)
    {

      case "uuid":
      sorted = filteredItems.sort((p1, p2) => (p1.uuid > p2.uuid) ? 1 : (p1.uuid < p2.uuid) ? -1 : 0);
    
        break;
        
      case "buy": 
      sorted = filteredItems.sort((p1, p2) => (p1.prezzo_acquisto < p2.prezzo_acquisto) ? 1 : (p1.prezzo_acquisto > p2.prezzo_acquisto) ? -1 : 0);
    
        break;
        
      case "sell":
      sorted = filteredItems.sort((p1, p2) => (p1.prezzo_vendita < p2.prezzo_vendita) ? 1 : (p1.prezzo_vendita > p2.prezzo_vendita) ? -1 : 0);
    
        break;
        
      default: break;
        
    }
    
    filteredItems = sorted;

    }
  
    

</script>

<div class="w-full items-center block m-10">
  <div class="mb-10">
    <Breadcrumb aria-label="Default breadcrumb example">
      <BreadcrumbItem href="/" home>Logout</BreadcrumbItem>
      <BreadcrumbItem href="/home">Home</BreadcrumbItem>
    </Breadcrumb>
  </div>
  <div class="mb-10">
    <ButtonGroup>
      <Button on:click={() => goto("/item")}>Aggiungi elemento</Button>
      <Button on:click={() => goto("/sales")}>Report vendite</Button>
    </ButtonGroup>
  </div>

  <Radio class="m-5" inline name="example" value="uuid" on:change={radioCheck}>UUID</Radio>
  <Radio class="m-5" inline name="example" value="buy" on:change={radioCheck}>Acquisto</Radio>
  <Radio class="m-5" inline name="example" value="sell" on:change={radioCheck}>Vendita</Radio>

  <TableSearch
    placeholder="Ricerca per descrizione"
    hoverable={true}
    bind:inputValue={searchTerm}
  >
    <TableHead>
      <TableHeadCell>Codice</TableHeadCell>
      <TableHeadCell>Categoria</TableHeadCell>
      <TableHeadCell>Descrizione</TableHeadCell>
      <TableHeadCell>Aquistato</TableHeadCell>
      <TableHeadCell>Venduto</TableHeadCell>
      <TableHeadCell>In stock</TableHeadCell>
      <TableHeadCell>Action</TableHeadCell>
    </TableHead>
    <TableBody>
      {#each filteredItems as item}
        <TableBodyRow>
          <TableBodyCell>{item.codice}</TableBodyCell>
          <TableBodyCell>{item.categoria}</TableBodyCell>
          <TableBodyCell>{item.descrizione}</TableBodyCell>
          <TableBodyCell>{item.prezzo_acquisto} €</TableBodyCell>
          <TableBodyCell>{item.prezzo_vendita} €</TableBodyCell>
          <TableBodyCell>{item.quantita}</TableBodyCell>
          <TableBodyCell>
          <Button>Sell one</Button>
          </TableBodyCell>

        </TableBodyRow>
        
      {/each}
    </TableBody>
  </TableSearch>
</div>
