<script>
    import Header from "./lib/Layout/Header/Header.svelte";
    import Sidebar from "./lib/Layout/Sidebar/Sidebar.svelte";
    import TransactionHeader from "./lib/Layout/Content/TransactionHeader/TransactionHeader.svelte";
</script>

<Header/>
<main class="p-1">
    <div class="d-flex flex-column flex-sm-row">
        <Sidebar/>
        <div class="flex-grow-1 pt-3" aria-describedby="Content">
            <TransactionHeader/>
            <div aria-describedby="Transaction Card List">
            </div>

            <div aria-describedby="Transaction Table View">
            </div>
        </div>
    </div>
</main>
