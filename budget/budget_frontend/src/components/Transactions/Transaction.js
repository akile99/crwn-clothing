import React, { useState } from 'react';
import Search from '../Search/Search.js'
import './Transaction.css';

// const getStingDate = require('./Functions/getStingDate');

const Transaction = (props) => {
	const { transaction_id, accountid } = props;
	const [edit, setEdit] = useState(false);
	const [date, setDate] = useState(props.date)
	const [vendor, setVendor] = useState(props.vendor)
	const [amount, setAmount] =	useState(props.amount)
	const [category, setCategory] = useState(props.category)
	const [status, setStatus] = useState(props.status);

	function getFormattedDate(date) {
		const d = new Date(date);

		const year = d.getFullYear();
		const month = (d.getMonth() + 1)
		const day = d.getDate() + 1;
	  
	  return month + '-' + day + '-' + year;
	}

	function getStingDate(date) {
		const d = new Date(date);

		const year = d.getFullYear();
		let month = (d.getMonth() + 1)
		let day = d.getDate();

		month < 10 ? month = `0${month}` : month = `${month}`
		day < 10 ? day = `0${day}` : day = `${day}`;
	  
	  return `${year}-${month}-${day}`;
	}

	const handelStatus = (transaction_id, status, vendor) => {
		fetch(`${props.host}updateStatus`, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			  "transaction_id": transaction_id,
			  "accountid": accountid
			})
		})
			.then(response => response.json())
			.catch(console.log)
		status === 'Cleared' ? setStatus('Pending') :	setStatus('Cleared')
		props.onChange()
		// console.log(transaction_id, vendor)

	}

	const handelEdit = (transaction_id) => {
		setEdit(!edit)
	}

	const onDateChange = (event) => {
		setDate(event.target.value)
	}

	const onVendorChange = (event) => {
		setVendor(event.target.value)
	}

	const onAmountChange = (event) => {
		setAmount(event.target.value)
	}

	const onCategoryChange = (event) => {
		setCategory(event)
	}

	const onUpdateTransaction = () => {
		fetch(props.host+'update', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			  "date": date,
			  "vendor": vendor,
			  "category": category,
			  "status": props.status,
			  "amount": amount,
			  "transaction_id": transaction_id
			})
		})
			.then(response => response.json())
			.catch(console.log)
		setVendor(vendor)
		setDate(stringDate)
		setAmount(amount)
		setCategory(category)
		handelEdit(transaction_id)
		props.onChange()

	}

	const formatedDate = getFormattedDate(date)
	const stringDate = getStingDate(date)
	// const removeTransactions = handelRemove(id)
	return (
		<div className='outline'>
		{ !edit
		? <div className="flex justify-left">
			<p className="date transaction">{formatedDate}</p> 
			<p className="vendor transaction">{vendor}</p> 
			<p className='dollar transaction'>$</p>
			<p className="amount transaction">{amount}</p> 
			<p className="status transaction"
				onClick={() => handelStatus(transaction_id, status, vendor)}
			>{status}
			</p> 
			<p className="category transaction">{category}</p>
			<p 
				className="edit transaction" 
				onClick={() => handelEdit(transaction_id)}>edit
			</p>
		</div>
		: 	<div className="flex justify-center">
				<p className="fl w-10 tc">{transaction_id}</p> 
				<input 
					className= 'f4 pa2 w-60 center' 
					type='date' 
					id='date'
					name='date'
					value={stringDate}
					onChange={onDateChange}
				/>
				<input 
					className= 'f4 pa2 w-70 center' 
					type= 'text' 
					placeholder="Vendor"
					id='Vendor'
					name='Vendor'
					value={vendor}
					onChange={onVendorChange}
				/>
				<input 
					className= 'f4 pa2 w-70 center' 
					type= 'double' 
					placeholder="Amount"
					id='Amount'
					name='Amount'
					value={amount}
					onChange={onAmountChange}
				/>
				<Search 
					onChange={onCategoryChange}
				/>
				<button onClick={handelEdit}>Cancel </button>
				<button onClick={onUpdateTransaction}>Update </button>
				{/*	<button onClick={removeTransactions}>Del </button>*/}		
			</div>
		}
		</div>

		);

}

export default Transaction;