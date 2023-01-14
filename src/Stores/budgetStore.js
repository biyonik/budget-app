import {writable, derived} from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
import {PersistStore} from "./persistStore.js";

export const Types = {
    INCOME: "INCOME",
    EXPENSE: "EXPENSE",
    INVESTMENT: "INVESTMENT"
}

const initial = [
    {
        id: uuidv4(),
        name: 'Salary',
        type: Types.INCOME,
        amount: 5000,
        date: new Date('01-01-2022')
    },
    {
        id: uuidv4(),
        name: 'Loan',
        type: Types.EXPENSE,
        amount: 2000,
        date: new Date('04-05-2022')
    },
    {
        id: uuidv4(),
        name: 'Gold',
        type: Types.INVESTMENT,
        amount: 1000,
        date: new Date('03-07-2022')
    }
];

export const BudgetStore = PersistStore('transactionValues', initial);

export const countOfIncome = derived(
    BudgetStore,
    $BudgetStore => $BudgetStore.filter((transaction) => transaction.type === Types.INCOME).length
);

export const countOfExpense = derived(
    BudgetStore,
    $BudgetStore => $BudgetStore.filter((transaction) => transaction.type === Types.EXPENSE).length
);

export const countOfInvestment = derived(
    BudgetStore,
    $BudgetStore => $BudgetStore.filter((transaction) => transaction.type === Types.INVESTMENT).length
);

export const amountOfIncome = derived(
    BudgetStore,
    $BudgetStore => $BudgetStore.filter((transaction) => transaction.type === Types.INCOME).reduce((sum, transaction) => {return sum + transaction.amount}, 0)
);

export const amountOfExponse = derived(
    BudgetStore,
    $BudgetStore => $BudgetStore.filter((transaction) => transaction.type === Types.EXPENSE).reduce((sum, transaction) => {return sum + transaction.amount}, 0)
);

export const amountOfInvestment = derived(
    BudgetStore,
    $BudgetStore => $BudgetStore.filter((transaction) => transaction.type === Types.INVESTMENT).reduce((sum, transaction) => {return sum + transaction.amount}, 0)
);
