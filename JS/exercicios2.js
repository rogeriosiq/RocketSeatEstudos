let family = {
    incomes: [2500, 3200, 250.45],
    expenses: [320, 420.69, 190]
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const Ok = total >= 0

    let balanceText = 'negativo'

    if (Ok) {
        balanceText = "positivo"

    }

    console.log(`seu saldo é ${balanceText}:${total.toFixed(2)}R$`)
}