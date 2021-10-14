import React from 'react';
import AccountBalance from '../AccountBalance/AccountBalance.js';
import './Account.css';
import useBalance from '../../Hooks/useBalance.js'
// import Search from '../Search/Search.js'

// const getStingDate = require('./Functions/getStingDate');

const Card = (props) => {
	const { account_id, account_name, account_type } = props;
	const [balance, balanceColor] = useBalance(account_id, props.host, 'sumCleared', props.submit);


	const handelLoadAccount = () => {
		props.onChange(account_id)
	}

	return (
		<div id = "Accounts" onClick={() => handelLoadAccount()}>
			<p className="Account">{account_name + " " + account_type}</p>
			<p className="Account">{balance}</p>
		</div>

		);



}

export default Card;