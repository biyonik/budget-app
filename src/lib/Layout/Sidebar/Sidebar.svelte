<script>
    import TransactionForm from "./TransactionForm/TransactionForm.svelte";
    import ViewType from "./ViewType/ViewType.svelte";
    import Search from "./Search/Search.svelte";
</script>

<div class="d-flex flex-column mt-3 rounded p-3" id="sidebar">
    <ViewType />
    <Search />
    <TransactionForm aria-describedby="Transaction Form" />
</div>

<style>
    #sidebar {
        background-color: #c5cbd8;
    }
</style>
