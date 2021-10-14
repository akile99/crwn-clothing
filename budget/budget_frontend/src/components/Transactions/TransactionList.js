import React, { useState, useEffect } from 'react';
import Transaction from './Transaction.js';
import './Transaction.css';

const TransactionList = (props) => {
	const [transactions, setTransactions] = useState([]);

	const updateTransactions = (value) => {
		props.onChange()
	}
	useEffect(() => {
		try{
		fetch(`${props.host}transactions`, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			  "account_id": props.account_id,
			  "from_date": props.from_date,
			  "to_date": props.to_date
			})
		})
		.then(response => response.json())
      	.then(data => {setTransactions(data)});
      }
      catch (e) {
      	console.log(e)
      }

	},[props.submit, props.account_id, props.host, props.from_date, props.to_date, props.update])

	return (
		<div>
			<div className="outline flex justify-center">
				<p className="date transaction">Date</p> 
				<p className="vendor transaction">Vender</p> 
				<p className='dollar transaction'>&nbsp;&nbsp;</p>	
				<p className="amount transaction">Amount</p> 
				<p className="status transaction">Status</p> 
				<p className="category transaction">Category</p>
				<p className="edit transaction">Edit</p>
			</div>
			{
			transactions.map((data, i) => {
				return (
					<Transaction className="transactions"
					key={transactions[i].transaction_id}
					transaction_id={transactions[i].transaction_id} 
					accountid={transactions[i].accountid}
					date = {transactions[i].date}
					vendor={transactions[i].vendor}
					amount={(Math.round(transactions[i].amount * 100) / 100).toFixed(2)}
					status={transactions[i].status}
					category={transactions[i].category}
					host={props.host}
					onChange={updateTransactions}
					submit={props.submit}
					/>
				);
			})
			}
		</div>
		);
}

export default TransactionList;
