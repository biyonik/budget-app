<form class="mt-3 p-1">
    <div class="mt-2 mb-2 text-center text-danger fw-bolder fs-4">
        Add New Transaction
    </div>
    <div class="mb-2">
        <input type="text" class="form-control" required autocomplete="off" placeholder="Transaction name" name="name" id="name">
    </div>
    <div class="mb-2">
        <input type="number" class="form-control" required autocomplete="off" placeholder="Transaction amount" name="amount" id="amount">
    </div>
    <div class="mb-2">
        <select name="type" id="type" required class="form-select">
            <option value="INCOME" selected>Income</option>
            <option value="EXPENSE">Expenses</option>
            <option value="INVESTMENT">Investment</option>
        </select>
    </div>
    <div class="mb-2">
        <input type="date" required autocomplete="off" placeholder="Date" class="form-control" name="date" id="date">
    </div>
    <div class="form-text text-wrap text-danger">
        Success or Error Messages
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
</form>
