import React, { useState, useEffect } from 'react';
import useBalance from '../../Hooks/useBalance.js';
import './AccountBalance.css'

const AccountPending = (props) => {
	const address = 'sumPending';
	const [pendingBalance, pendingColor] = useBalance(
		props.account_id, props.host, address, props.submit);

	return (
	  	<p className={pendingColor}>{`$ ${pendingBalance}`} </p>
	);
}

export default AccountPending;
















