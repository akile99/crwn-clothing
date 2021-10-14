import { useState, useEffect } from 'react'

export default function useBalance(account_id, host, address, submit) {
	const [total, setTotal] = useState();
	const [color, setColor] = useState('black');
	useEffect(() => {
		if (account_id) {
			async function getTotalBalance() {
				await fetch(`${host}${address}`, {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					  "account_id": account_id
					})
				})
					.then(response => response.json())
				  	.then(data => setTotal(data[0].sum));
			}

			if (total < 0) {
				setColor('red')
			}else {setColor('black')}

			getTotalBalance();
		}

	},[account_id, total, host, submit, address])	

	return [total, color];
}