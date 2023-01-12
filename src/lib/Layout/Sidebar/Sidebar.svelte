<div class="d-flex flex-column mt-3 rounded p-3" id="sidebar">
    <div class="d-flex flex-sm-column justify-content-around" aria-describedby="View Type Area">
        <button type="button" class="btn btn-primary mb-2">Card View</button>
        <button type="button" class="btn btn-dark mb-2">Table View</button>
    </div>

    <div aria-describedby="Search And Filter Area">
        <div class="mt-3">
            <input type="text" aria-describedby="Search" placeholder="Search for transactions" class="form-control">
        </div>
        <select class="form-select mt-3">
            <option value="ALL" selected>All Transactions</option>
            <option value="INCOME">Income</option>
            <option value="EXPENSE">Expenses</option>
            <option value="INVESTMENT">Investment</option>
        </select>
    </div>
</div>

<style>
    #sidebar {
        background-color: #c5cbd8;
    }
</style>
