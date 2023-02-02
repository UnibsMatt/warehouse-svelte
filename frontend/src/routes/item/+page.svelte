<script>
    export let data;
    console.log(data);
    import {
        Label,
        Input,
        Textarea,
        Button,
        Modal,
        Select,
    } from "flowbite-svelte";
    import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
    let defaultModal = false;
    let categoriaSelezionata;
    let categoriaProdotto = [
        { value: "schermo", name: "Schermo" },
        { value: "audio", name: "Audio" },
        { value: "accessori", name: "Accessori" },
    ];

</script>

<div class="w-full items-center block m-10">
    <form method="POST">
        
        <div class="mb-10">
            <Breadcrumb aria-label="Default breadcrumb example">
                <BreadcrumbItem href="/home" home>Home</BreadcrumbItem>
                <BreadcrumbItem>Nuovo elemento</BreadcrumbItem>
            </Breadcrumb>
        </div>

        <div class="grid grid-cols-1 gap-4 content-center">
            <div class="mb-6">
                <Label for="categoria" class="block mb-2">Categoria</Label>
                <Select
                    name="categoria"
                    class="mt-2"
                    items={categoriaProdotto}
                    bind:value={categoriaSelezionata}
                    placeholder="Selezionare categoria"
                />
            </div>
            <div class="mb-6">
                <Label for="codice" class="block mb-2">Codice prodotto</Label>
                <Input id="codice" name="codice" placeholder="Codice prodotto" />
            </div>
            <div class="mb-6">
                <Label for="descrizione" class="block mb-2"
                    >Descrizione prodotto</Label
                >
                <Textarea id="descrizione" name="descrizione" placeholder="Descrizione prodotto" />
            </div>
            <div class=" grid grid-cols-3">
                <div class="m-2">
                    <Label for="prezzo_vendita" class="block mb-2"
                        >Prezzo di vendita</Label
                    >
                    <Input id="prezzo_vendita" name=prezzo_vendita placeholder="€" />
                </div>
                <div class="m-2">
                    <Label for="prezzo_acquisto"  class="block mb-2"
                        >Prezzo d'acquisto</Label
                    >
                    <Input id="prezzo_acquisto" name="prezzo_acquisto" placeholder="€" />
                </div>
                <div class="m-2">
                    <Label for="quantità"  class="block mb-2"
                        >Quantita disponibile</Label
                    >
                    <Input id="quantità" name="quantità" placeholder="Pz." />
                </div>
            </div>
            <Button on:click={() => (defaultModal = true) }>Aggiungi</Button>
            <Modal
                title="Aggiungere il prodotto al database?"
                bind:open={defaultModal}
                autoclose
            >
                <p
                    class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                >
                    Il prodotto verrà aggiunto al database
                </p>
                <svelte:fragment slot="footer">
                    <Button
                        >Aggiungi</Button
                    >
                    <Button color="alternative">Cancella</Button>
                </svelte:fragment>
                
            </Modal>
        </div>
    </form>
</div>
