<script>
    import Header from "./lib/Layout/Header/Header.svelte";
    import Sidebar from "./lib/Layout/Sidebar/Sidebar.svelte";
</script>

<Header/>
<main class="p-1">
    <div class="d-flex flex-column flex-sm-row">
        <Sidebar />
        <div class="flex-grow-1 pt-3" aria-describedby="Sidebar">
            <div aria-describedby="Transaction Card List">

            </div>

            <div aria-describedby="Transaction Table View">

            </div>
        </div>
    </div>
</main>
