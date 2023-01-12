import {writable} from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

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

export const BudgetStore = writable(initial);
