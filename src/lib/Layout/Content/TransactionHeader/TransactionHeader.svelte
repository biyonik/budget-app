<script>
    import {Progress} from 'sveltestrap';
    import {
        BudgetStore,
        countOfIncome,
        countOfExpense,
        countOfInvestment,
        amountOfIncome,
        amountOfExponse,
        amountOfInvestment
    } from "../../../../Stores/budgetStore.js";
</script>

<div class="d-flex flex-column flex-sm-row justify-content-around">
    <div class="t-card d-flex flex-column shadow p-3 mb-5 rounded" aria-describedby="First Card">
        <div class="card-text fs-3 fw-bolder dark-indigo">Income: <span class="text-danger">${$amountOfIncome}</span>
        </div>
        <div class="card-text fs-3 fw-bolder dark-indigo">Transactions: <span
                class="text-danger">{$countOfExpense + $countOfInvestment + $countOfIncome}</span></div>
        <div class="card-text fs-3 fw-bolder dark-indigo">Budget: <span class="text-danger">
            {$amountOfIncome - $amountOfExponse - $amountOfInvestment}
        </span></div>
    </div>

    <div class="t-card d-flex flex-column shadow p-3 mb-5 rounded" aria-describedby="Second Card">
        <div class="card-text fs-2 fw-bolder dark-indigo">
            Investments
        </div>
        <div class="d-flex flex-column ms-1">
            <div class="d-flex align-items-center">
                <div class="bg-primary rounded-circle w-10px h-10px"></div>
                <div class="ms-2 card-text">{$countOfInvestment} transactions</div>
            </div>

            <div class="d-flex align-items-center">
                <div class="bg-warning rounded-circle w-10px h-10px"></div>
                <div class="ms-2 card-text">${$amountOfInvestment}</div>
            </div>
        </div>
        <Progress value={(($amountOfInvestment*100)/$amountOfIncome).toFixed(2)} color="danger" class="mt-1 mb-1"/>
        <span class="font-size-12">
            Investments / Incomes:
            <span class="fw-bolder">{(($amountOfInvestment*100)/$amountOfIncome).toFixed(2)}%</span>
        </span>
    </div>

    <div class="t-card d-flex flex-column shadow p-3 mb-5 rounded" aria-describedby="Thirth Card">
        <div class="card-text fs-2 fw-bolder dark-indigo">
            Expenses
        </div>
        <div class="d-flex flex-column ms-1">
            <div class="d-flex align-items-center">
                <div class="bg-primary rounded-circle w-10px h-10px"></div>
                <div class="ms-2 card-text">{$countOfExpense} transactions</div>
            </div>

            <div class="d-flex align-items-center">
                <div class="bg-warning rounded-circle w-10px h-10px"></div>
                <div class="ms-2 card-text">${$amountOfExponse}</div>
            </div>
        </div>
        <Progress value={(($amountOfExponse*100)/$amountOfIncome).toFixed(2)} color="danger" class="mt-1 mb-1"/>
        <span class="font-size-12">
            Expenses / Incomes:
            <span class="fw-bolder">{(($amountOfExponse*100)/$amountOfIncome).toFixed(2)}%</span>
        </span>
    </div>
</div>

<style type="text/scss">
  .t-card {
    background-color: #C5CBD8;
    max-width: 75%;
    min-width: 25%;
  }

  @media(max-width: 768px) {
    .t-card {
      min-width: 75%;
    }
  }

  @media(max-width: 801px) {
    .card-text {
      font-size: 15px;
    }
  }

  .dark-indigo {
    color: #3B5998;
  }

  .w-10px {
    width: 10px;
  }

  .h-10px {
    height: 10px;
  }

  .font-size-12 {
    font-size: 12px;
  }
</style>
