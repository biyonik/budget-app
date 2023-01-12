<script>
    import { Progress } from 'sveltestrap';
</script>

<div class="d-flex flex-column flex-sm-row justify-content-around">
    <div class="t-card d-flex flex-column shadow p-3 mb-5 rounded" aria-describedby="First Card">
        <div class="card-text fs-3 fw-bolder dark-indigo">Income: <span class="text-danger">1</span></div>
        <div class="card-text fs-3 fw-bolder dark-indigo">Transactions: <span class="text-danger">11</span></div>
        <div class="card-text fs-3 fw-bolder dark-indigo">Budget: <span class="text-danger">111</span></div>
    </div>

    <div class="t-card d-flex flex-column shadow p-3 mb-5 rounded" aria-describedby="Second Card">
        <div class="card-text fs-2 fw-bolder dark-indigo">
            Investments
        </div>
        <div class="d-flex flex-column ms-1">
            <div class="d-flex align-items-center">
                <div class="bg-primary rounded-circle w-10px h-10px"></div>
                <div class="ms-2 card-text">5 transactions</div>
            </div>

            <div class="d-flex align-items-center">
                <div class="bg-warning rounded-circle w-10px h-10px"></div>
                <div class="ms-2 card-text">$3000</div>
            </div>
        </div>
        <Progress value={35} color="danger" class="mt-1 mb-1"/>
        <span class="font-size-12">
            Investments / Incomes:
            <span class="fw-bolder">{75}%</span>
        </span>
    </div>

    <div class="t-card d-flex flex-column shadow p-3 mb-5 rounded" aria-describedby="Thirth Card">
        <div class="card-text fs-2 fw-bolder dark-indigo">
            Expenses
        </div>
        <div class="d-flex flex-column ms-1">
            <div class="d-flex align-items-center">
                <div class="bg-primary rounded-circle w-10px h-10px"></div>
                <div class="ms-2 card-text">5 transactions</div>
            </div>

            <div class="d-flex align-items-center">
                <div class="bg-warning rounded-circle w-10px h-10px"></div>
                <div class="ms-2 card-text">$3000</div>
            </div>
        </div>
        <Progress value={35} color="danger" class="mt-1 mb-1"/>
        <span class="font-size-12">
            Expenses / Incomes:
            <span class="fw-bolder">{35}%</span>
        </span>
    </div>
</div>

<style type="text/scss">
    .t-card {
        background-color: #C5CBD8;
        max-width: 75%;
        min-width: 25%;
    }

    @media(max-width:768px) {
      .t-card {
        min-width: 75%;
      }
    }

    @media(max-width:801px) {
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
