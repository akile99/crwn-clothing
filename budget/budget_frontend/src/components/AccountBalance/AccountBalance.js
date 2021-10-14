import React, { useState } from 'react';
import useBalance from '../../Hooks/useBalance.js';
import './AccountBalance.css';

const AccountBalance = (props) => {
	const address = 'sumCleared';
	// const [balance, balanceColor] = useBalance(
	// 	props.account_id, props.host, address, props.submit);
	// const [balanceColor, setBalanceColor] = useState('black')

	return (
	  	<p className={props.balanceColor}>{`$ ${props.balance}`} </p>	
	);
}

export default AccountBalance;
















