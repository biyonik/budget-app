<script>
    import {BudgetStore, Types} from "../../../../Stores/budgetStore.js";
    import { v4 as uuidv4 } from 'uuid';
    let tName = '', tType = '', tDate = '', tAmount = '', message = '';

    const handleSubmit = async () => {
        if (tName.trim().length > 3 && tName.trim().length < 20) {
            console.log(tDate);
            const newTransaction = {
                id: uuidv4(),
                name: tName.toLocaleLowerCase(),
                type: tType,
                amount: tAmount,
                date: new Date(tDate)
            };
            BudgetStore.update((currentTransactions) => {
                return [newTransaction, ...currentTransactions];
            });
            tName = '';
            tType = Types.INCOME;
            tAmount = '';
            tDate = '';
            message = 'İşlem ekleme başarılı!';
        } else if (tName.trim().length < 4 || tName.trim().length > 20) {
            message = 'İşlem ekleme başarısız!';
        }
    }

</script>

<form class="mt-3 p-1" on:submit|preventDefault={handleSubmit}>
    <div class="mt-2 mb-2 text-center text-danger fw-bolder fs-4">
        Add New Transaction
    </div>
    <div class="mb-2">
        <input type="text"
               bind:value={tName}
               on:input={() => message = ''}
               class="form-control"
               required
               autocomplete="off"
               placeholder="Transaction name"
               name="name"
               id="name">
    </div>
    <div class="mb-2">
        <input type="number"
               bind:value={tAmount}
               class="form-control"
               required
               autocomplete="off"
               placeholder="Transaction amount"
               name="amount"
               id="amount">
    </div>
    <div class="mb-2">
        <select
                bind:value={tType}
                name="type"
                id="type"
                required
                class="form-select">
            <option value="INCOME" selected>Income</option>
            <option value="EXPENSE">Expenses</option>
            <option value="INVESTMENT">Investment</option>
        </select>
    </div>
    <div class="mb-2">
        <input type="date"
               bind:value={tDate}
               required
               autocomplete="off"
               placeholder="Date"
               class="form-control"
               name="date"
               id="date">
    </div>
    <div class="form-text text-wrap text-danger">
        {message}
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
</form>
