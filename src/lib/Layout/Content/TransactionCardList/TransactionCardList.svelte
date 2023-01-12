<script>
    import TransactionCardListItem from "./TransactionCardListItem/TransactionCardListItem.svelte";
</script>

<div class="d-flex flex-column flex-sm-row flex-wrap justify-content-around">
    <div class="my-card">
        <TransactionCardListItem />
    </div>

    <div class="my-card">
        <TransactionCardListItem />
    </div>

    <div class="my-card">
        <TransactionCardListItem />
    </div>

    <div class="my-card">
        <TransactionCardListItem />
    </div>

    <div class="my-card">
        <TransactionCardListItem />
    </div>
</div>

<style type="text/scss">
    .my-card {
      width: 75%;
      margin: auto auto 5px;
      position:relative;
    }

    @media (min-width:768px) {
      .my-card {
        width: 25%;
        margin: 15px;
      }
    }
</style>
