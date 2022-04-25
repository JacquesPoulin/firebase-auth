import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../utils/firebase.config';

const Login = () => {
	const loginEmail = useRef();
	const loginPassword = useRef();

	const [error, setError] = useState(false);

	const loginHandler = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail.current.value,
				loginPassword.current.value
			);
			console.log(user);
		} catch (error) {
			console.log(error.message);
			setError(true);
		}
	};

	return (
		<div className='login-container'>
			<div className='login'>
				<h3>LOGIN</h3>
				<form className='form-login' onSubmit={loginHandler}>
					<input type='email' placeholder='Email' required ref={loginEmail} />
					<input
						type='password'
						placeholder='Password'
						required
						ref={loginPassword}
					/>
					<input type='submit' value='login' />
					<span>{error && 'Wrong ID or Password'}</span>
				</form>
			</div>
		</div>
	);
};

export default Login;
