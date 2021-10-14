import React, { useState } from 'react';

const NewAccount = (props) => {
	const [account_type, setAccountType] = useState('')
	const [account_name, setAccountName] = useState('')
	const [open_balance, setOpenBalance] = useState('')

	const onAccountTypeChange = (event) => {
		setAccountType(event.target.value)
	}

	const onAccountNameChange = (event) => {
		setAccountName(event.target.value)
	}

	const onBalanceChange = (event) => {
		setOpenBalance(event.target.value)
	}

	const createNewAccount = () => {
		fetch(props.host+'newaccount', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			    "account_name": account_name,
			    "account_type": account_type,
			    "openningbalance": open_balance,
			    "user_id": props.user_id
			})
		})
			.then(response => response.json())
			.catch(console.log)
	}

	return (
		<div >
			<div className='form center pa4 br3 shadow-5'>
				<input 
					className= 'f4 pa2 w-25 center' 
					type='text' 
					placeholder="Account Name"
					id='account_name'
					name='account_name'
					value={account_name}
					onChange={onAccountNameChange}
				/>
				<input 
					className= 'f4 pa2 w-25 center' 
					type='text' 
					placeholder="Account Type"
					id='account_type'
					name='account_type'
					value={account_type}
					onChange={onAccountTypeChange}
				/>
				<input 
					className= 'f4 pa2 w-25 center' 
					type= 'double' 
					placeholder="Openning Balance"
					id='open_balance'
					name='open_balance'
					value={open_balance}
					onChange={onBalanceChange}
				/>
				<button onClick={() => createNewAccount()}>New Account</button>
			</div>
		</div>
	);
};

export default NewAccount;
