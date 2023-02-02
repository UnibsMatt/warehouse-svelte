<script>
    export let data;
    console.log(data);
    import {
        Navbar,
        NavLi,
        NavUl,
        NavHamburger,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        TableSearch,
        Button,
    } from "flowbite-svelte";
    let searchTerm = '';
    let items = [
        { id: 1, maker: "Toyota", type: "ABC", make: 2017, count:10},
        { id: 2, maker: "Ford", type: "CDE", make: 2018 , count:10},
        { id: 3, maker: "Volvo", type: "FGH", make: 2019 , count:10},
        { id: 4, maker: "Saab", type: "IJK", make: 2020 , count:10},
        { id: 2, maker: "Ford", type: "CDE", make: 2018 , count:10},
        { id: 3, maker: "Volvo", type: "FGH", make: 2019 , count:10},
        { id: 4, maker: "Saab", type: "IJK", make: 2020 , count:10},
        { id: 2, maker: "Ford", type: "CDE", make: 2018 , count:10},
        { id: 3, maker: "Volvo", type: "FGH", make: 2019 , count:10},
        { id: 4, maker: "Saab", type: "IJK", make: 2020 , count:10},
    ];
    $: filteredItems = items.filter(
    (item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  function pop_item(item){
    item.count -=1;
    console.log(filteredItems.at(filteredItems.indexOf(item)));
    filteredItems = filteredItems;
  }

</script>

<div class="w-full">
    <Navbar let:hidden let:toggle>
        <NavHamburger on:click={toggle} />
        <NavUl {hidden}>
            <NavLi href="/home" active={true}>Home</NavLi>
            <NavLi href="/item">Aggiungi</NavLi>
            <NavLi href="/logout">Logout</NavLi>
        </NavUl>
    </Navbar>

    <TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
        <TableHead>
          <TableHeadCell>ID</TableHeadCell>
          <TableHeadCell>Maker</TableHeadCell>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Make</TableHeadCell>
          <TableHeadCell>Quantità</TableHeadCell>
        </TableHead>
        <TableBody class="divide-y">
          {#each filteredItems as item}
            <TableBodyRow>
              <TableBodyCell>{item.id}</TableBodyCell>
              <TableBodyCell>{item.maker}</TableBodyCell>
              <TableBodyCell>{item.type}</TableBodyCell>
              <TableBodyCell>{item.make}</TableBodyCell>
              <TableBodyCell>{item.count}</TableBodyCell>
              <Button on:click={pop_item(item)}>Remove</Button>
            </TableBodyRow>
          {/each}
        </TableBody>
      </TableSearch>
</div>
