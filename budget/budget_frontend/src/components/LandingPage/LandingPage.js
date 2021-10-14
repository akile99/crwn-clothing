import React, { useState } from 'react';
// import AccountHeading from '../AccountHeading/AccountHeading.js';

// import SideBar from '../SideBar/SideBar.js';
import UpcomingBills from '../UpcomingBills/UpcomingBills.js';
import InputTransaction from '../InputTransaction/InputTransaction.js';
import Scroll from '../Scroll/Scroll.js';
// import InsertBill from '../UpcomingBills/InsertBill.js';
// import CardList from '../Transactions/CardList.js';
// import AccountList from '../Accounts/AccountList.js';
import NewAccount from '../NewAccount/NewAccount.js';
import Navigation from '../Navigation/Navigation.js';

const LandingPage = (props) => {
	// const [submit, setSubmit] = useState(false);
	const [insert, setInsert] = useState(false);
	// const [insertNewBill, setinsertNewBill] = useState(false);
	// const [account_id, setAccountid] = useState();
	const [createAccount, setCreateAccount] = useState(false)
	// const [sideBarOpen, setSideBarOpen] = useState(false)
	const [searchDate, setSearchDate] = useState(false)
	const [billsPage, setBillsPage] = useState(true)
	// const d = new Date()
	// d.setDate(d.getDate() - 60)
	// const [from_date, setFrom_Date] = useState(d.toISOString().split('T')[0])
	// const [to_date, setTo_Date] = useState(new Date().toISOString().split('T')[0])


	// const handleInputChange = () => {
	// 	setSubmit(!submit)
	// }

	const handleInsertChange = () => {
		setInsert(!insert);
	}

	const handleSearchDate = () => {
		setSearchDate(!searchDate);
	}

	// const handelLoadAccount = (account_id) => {
	// 	setAccountid(account_id)
	// 	handelBillChange()
	// }

	const handelBillChange = (account_id) => {
		setBillsPage(!billsPage)
	}

	const handelNewAccount = () => {
		setCreateAccount(!createAccount)
	}

	// const handelSideBarOpenClose = () => {
	// 	setSideBarOpen(!sideBarOpen)
	// }

	const onFrom_DateChange = (event) => {
		setFrom_Date(event.target.value)
	}

	const onTo_DateChange = (event) => {
		setTo_Date(event.target.value)
	}



	return (
		<div>
			{ createAccount 
				? <div>
					<NewAccount host={props.host} user_id={props.user_id}/>
					<button onClick={handelNewAccount}>exit</button>
					</div>
				: <div></div>
			}
			<div>
			{ searchDate 
				? <div>
					<h3>From: </h3>
					<input 
						className= 'f4 pa2 w-25 center' 
						type='date' 
						id='from_date'
						name='from_dateate'
						value={from_date}
						onChange={onFrom_DateChange}
					/>
					<h3>To: </h3>
					<input 
						className= 'f4 pa2 w-25 center' 
						type='date' 
						id='to_date'
						name='to_date'
						value={to_date}
						onChange={onTo_DateChange}
					/>
					<button onClick={handleSearchDate}>Search Dates</button>
					</div>
				: <button onClick={handleSearchDate}>Search Dates</button>
			}

			</div>
			<div className="flex flex-row no-wrap center">
				<div className="outline w-90 pa1 mr1">
				  	<div>
						{ insert === true 
				  		?	
					  		<div>
						      	<InputTransaction account_id={props.account_id} host={props.host} submit={submit} onChange={handleInputChange} />
								<button onClick={handleInsertChange}> Exit </button>
							</div>
						:
							<button onClick={handleInsertChange}> Insert </button>
						}
					</div>
					{ /*billsPage
						? <Scroll> 
							<UpcomingBills key={props.user_id} host={props.host} user_id={props.user_id}/>
							</Scroll>
						:
						<Scroll>
							<CardList key={props.account_id} account_id={props.account_id} host={props.host} submit={submit} onChange={handleInputChange} from_date={from_date} to_date={to_date}/>
						</Scroll>
					*/}

				</div>

			</div>
		</div>
	);
}

export default LandingPage;