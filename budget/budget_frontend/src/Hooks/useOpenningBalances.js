import { useState, useEffect } from 'react';

export default function useOpenningBalances(account_id, host) {
	const [open_balance, setOpenBalance] = useState()

	useEffect(() => {
		fetch(`${host}openningbalance`, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				"account_id": account_id
			})
		})
		.then(response => response.json())
		.then(data => setOpenBalance(data[0].openningbalance));
	}, [account_id])
	
	return open_balance;
}
