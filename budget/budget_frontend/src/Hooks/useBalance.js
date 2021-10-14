import { useState, useEffect } from 'react'

export default function useBalance(account_id, host, address, submit) {
	const [total, setTotal] = useState();
	const [color, setColor] = useState('black');
	useEffect(() => {
		if (account_id) {
			try {
				fetch(`${host}${address}`, {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					  "account_id": account_id
					})
				})
					.then(response => response.json())
			      	.then(data => setTotal(data[0].sum));

			} catch (error) {
				console.error(error)
			} 		
			if (total < 0) {
				setColor('red')
			}else {setColor('black')}
		}

	},[account_id, total, host, submit])	

	return [total, color];
}