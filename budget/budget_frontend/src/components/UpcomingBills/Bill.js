import React, { useState } from 'react';

function Bill(props) {
	const { bill_id, bill_name, bill_website, due_date} = props;
	const [edit, setEdit] = useState(false);
	const [amount, setAmount] = useState(props.amount)
	const [website, setWebsite] = useState(bill_website)
	const [name, setName] = useState(bill_name)
	// const date = props.due_date

	function getDay(date) {
		const d = new Date(date);
		const day = d.getDate();
		const month = (d.getMonth() + 1)
	  
	  return month + '/' + day;
	}

	const formatedDay = getDay(due_date)

	const goToWebPage = () => {
		window.open(
              bill_website, "_blank");
	}

	const handelEdit = () => {
		setEdit(!edit)
	}

	const onNameChange = (event) => {
		setName(event.target.value)
	}

	const onAmountChange = (event) => {
		setAmount(event.target.value)
	}

	const onWebsiteChange = (event) => {
		setWebsite(event.target.value)
	}

	const onUpdateBill = () => {

		fetch(`${props.host}update_bill`, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				"bill_id": bill_id,
				"bill_name": name, 
				"amount": amount, 
				"bill_website": website
			})
		})
		.then(response => response.json())
		.catch(console.log)
		handelEdit()
	}

	return (
		<div>
		{ !edit
			? 	<div className='billDiv'>					
					<p className="bill">{formatedDay}</p>
					<p className="vendor">{name}</p> 
					<p className="bill">{amount}</p> 
					<p className="bill paybill" onClick={goToWebPage}>Pay</p>
					<p className="bill editbill paybill" onClick={handelEdit}>Edit</p>
				</div>
			:
				<div>
					<input 
					className= 'fl w-25 pa1 tc ml1' 
					type='text' 
					id='name'
					name='name'
					value={bill_name}
					onChange={onNameChange}
					/>
					<input 
					className= 'fl w-25 pa1 tc ml1' 
					type='double' 
					id='amount'
					name='amount'
					value={amount}
					onChange={onAmountChange}
					/>
					<input 
					className= 'fl w-25 pa1 tc ml1' 
					type='text' 
					id='website'
					name='website'
					value={website}
					onChange={onWebsiteChange}
					/>
					<button className= 'fl w-10 pa1 tc ml1' onClick={onUpdateBill}>Update </button>
				</div>
		}
		</div>

		);

}

export default Bill;
