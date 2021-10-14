import React, { useState, useEffect } from 'react';
import Account from './Account.js'
import './Account.css'

const AccountList = (props) => {
	const [accounts, setAccounts] = useState([]);
	
	const handelLoadAccount = (account_id) => {
		props.onChange(account_id)
	}

	useEffect(() => {
		fetch(`${props.host}accounts`, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			  "user_id": props.user_id
			})
		})
		.then(response => response.json())
      	.then(data => {setAccounts(data)});

	},[props.host, props.user_id, props.submit])

	return (
		<div>
			<div className="flex justify-center">
				<h2 className="Account">Accounts </h2> 
			</div>
			{
			accounts.map((data, i) => {
				return (
					<div>						
						<Account 
						className="Account"
						key={accounts[i].account_id + accounts[i].user_id}
						account_id={accounts[i].account_id} 
						user_id={accounts[i].account_id}
						account_name={accounts[i].account_name}
						account_type={accounts[i].account_type}
						onChange={handelLoadAccount}
						host={props.host}
						submit={props.submit}
						/>
					</div>
				);
			})
			}
		</div>
		);
}

export default AccountList;