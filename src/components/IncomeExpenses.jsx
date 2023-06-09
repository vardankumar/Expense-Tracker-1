import React, {useContext} from 'react'
import { GlobalContext } from '../context/globalContext'


export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext) 

  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc + item) , 0).toFixed(2)
  const expenses = amounts.filter(item => item < 0).reduce((acc, item) => (acc + item) , 0).toFixed(2)



  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <h1 className="money plus" id="money-plus">+${income}</h1>
        </div>
        <div>
            <h4>Expenses</h4>
            <h1 className="money minus" id="money-minus">-${Math.abs(expenses)}</h1>
        </div>
    </div>
  )
}
