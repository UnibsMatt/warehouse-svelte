<script>
  export let data;
  let { items } = data;
  import {goto} from "$app/navigation";
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
    TableSearch,
  } from "flowbite-svelte";

  let searchTerm = "";
  $: filteredItems = items.filter(
    (item) =>
      item.descrizione.toLowerCase().includes(searchTerm.toLowerCase()) === true
  );

  
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
  <TableSearch
    placeholder="Ricerca per descrizione"
    hoverable={true}
    bind:inputValue={searchTerm}
  >
    <TableHead>
      <TableHeadCell>UUID</TableHeadCell>
      <TableHeadCell>Codice</TableHeadCell>
      <TableHeadCell>Categoria</TableHeadCell>
      <TableHeadCell>Descrizione</TableHeadCell>
      <TableHeadCell>Aquistato</TableHeadCell>
      <TableHeadCell>Venduto</TableHeadCell>
      <TableHeadCell>In stock</TableHeadCell>
    </TableHead>
    <TableBody>
      {#each filteredItems as item}
        <TableBodyRow>
          <TableBodyCell>{item.uuid}</TableBodyCell>
          <TableBodyCell>{item.codice}</TableBodyCell>
          <TableBodyCell>{item.categoria}</TableBodyCell>
          <TableBodyCell>{item.descrizione}</TableBodyCell>
          <TableBodyCell>{item.prezzo_acquisto} €</TableBodyCell>
          <TableBodyCell>{item.prezzo_vendita} €</TableBodyCell>
          <TableBodyCell>{item.quantita}</TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </TableSearch>
</div>
