import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			firstname: '',
			lastname: ''
		}
	}

	onFirstNameChange = (event) => {
		this.setState({firstname: event.target.value})
	}

	onLastNameChange = (event) => {
		this.setState({lastname: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitRegister = () => {
		fetch(this.props.host+'register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				firstname: this.state.firstname,
				lastname: this.state.lastname
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user) {
					if (user.user_id) {
					// this.props.loadUser(user)
					this.props.onChange();
					} 
				}
			})
	}

	render() {
		const { onRegisterChange } = this.props;
		return (
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">First Name</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text" 
				        	name="firstname" 
				        	id="firstname" 
				        	onChange={this.onFirstNameChange}
				        	required
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Last Name</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text" 
				        	name="lastname" 
				        	id="lastname" 
				        	onChange={this.onLastNameChange}
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address" 
				        	id="email-address" 
				        	onChange={this.onEmailChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password" 
				        	id="password" 
				        	onChange={this.onPasswordChange}
				        />
				      </div>
				      <label className="pa0 ma0 lh-copy f6 pointer">
				      </label>
				    </fieldset>
				    <div className="">
				      <input 
				      	onClick={this.onSubmitRegister}
					    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					    type="submit" 
					    value="Register" 
					  />
				    </div>
				    <div className='lh-copy mt3'>
				      <p onClick={() => onRegisterChange('signin')} className='f6 link dim black db pointer'>Sign In</p>
				    </div>
				  </div>
				</main>
			</article>
		);
	}

}

export default Register;