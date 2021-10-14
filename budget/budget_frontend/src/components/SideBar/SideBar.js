import React, { useState }from 'react';
// import UpcomingBills from '../UpcomingBills/UpcomingBills.js';
import AccountList from '../Accounts/AccountList.js';
import up_collapse from './up_collapse.png'

const SideBar = (props) => {
	const [sideBar, setSideBar] = useState(true)

	const handleLoadAccount = (account_id) => {
		props.onChange(account_id)
	}

	const handleNewAccountClick = () => {
		props.account()
	}

	const handleBillsClick = () => {
		props.bills()
	}

	const handleClose = () => {
		props.sideBarOpen(setSideBar(false))
	}

	return (
		<div className= 'w-25 pa2 mr2 ml2'>
			<img src={up_collapse} alt='Collapse' onClick={handleClose}/>
{/*			<h3>Actions</h3>
			<button onClick={handleBillsClick}>Bills</button>
			<button onClick={handleNewAccountClick}>New Account</button>*/}
			<AccountList 
				key={props.userid} 
				user_id={props.user_id} 
				host={props.host} o
				onChange={handleLoadAccount}
				submit={props.submit}/>
		</div>
	);
};

export default SideBar;