<script>
    import TransactionCardListItem from "./TransactionCardListItem/TransactionCardListItem.svelte";
    import {BudgetStore} from '../../../../Stores/budgetStore.js';

    $:transactionListItems = $BudgetStore;
</script>

<div class="d-flex flex-column flex-sm-row flex-wrap justify-content-around">
    {#each transactionListItems as item (item.id)}
        <div class="my-card">
            <TransactionCardListItem transactionInfo={item} />
        </div>
    {/each}
</div>

<style type="text/scss">
  .my-card {
    width: 75%;
    margin: auto auto 5px;
    position: relative;
  }

  @media (min-width: 768px) {
    .my-card {
      width: 25%;
      margin: 15px;
    }
  }
</style>
