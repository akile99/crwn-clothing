import React, { useState } from 'react';

const InsertBill = (props) => {
	const [date, setDate] = useState('')
	const [vendor, setVendor] = useState('')
	const [amount, setAmount] =	useState('')

	const onDateChange = (event) => {
		setDate(event.target.value)
	}

	const onVendorChange = (event) => {
		setVendor(event.target.value)
	}

	const onAmountChange = (event) => {
		setAmount(event.target.value)
	}

	const onCommitTransaction = () => {
		fetch(props.host+'newBill', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			  "dueday": date,
			  "billname": vendor,
			  "amount": amount
			})
		})
			.then(response => response.json())
			.catch(console.log)
		setVendor('')
		setDate('')
		setAmount('')
	}

	return (
		<div className='center'>
			<div className='form center pa4 br3 shadow-5'>
				<input 
					className= 'f4 pa2 w-70 center' 
					type='date' 
					id='date'
					name='date'
					value={date}
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
				<button 
					className= 'w-30 grow f4 link ph3 pv2 dib white bg-light-blue' 
					id='CommitTransactionBTN'
					onClick={onCommitTransaction}
				>
				Enter
				</button>
			</div>
		</div>
	);
}

export default InsertBill;