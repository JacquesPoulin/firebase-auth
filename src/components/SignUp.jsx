import React, { useRef, useState } from 'react';
import { auth } from '../utils/firebase.config';

const SignUp = () => {
	const registerEmail = useRef();
	const registerPassword = useRef();
	const [displayName, setDisplayName] = useState();

	const pseudoInfoHandler = (e) => {
		setDisplayName(e.target.value);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		try {
			auth
				.createUserWithEmailAndPassword(
					registerEmail.current.value,
					registerPassword.current.value
				)
				.then(async (userAuth) => {
					await userAuth.user.updateProfile({
						displayName,
					});
					console.log(userAuth);
				});
		} catch (error) {
			console.log(error.message);
		}

		console.log(registerEmail.current.value, registerPassword.current.value);
	};

	return (
		<div className='signup-container'>
			<div className='signup'>
				<h3>SIGN UP</h3>
				<form onSubmit={handleRegister}>
					<input
						type='text'
						placeholder='Pseudo'
						required
						onChange={pseudoInfoHandler}
					/>
					<input
						type='email'
						placeholder='Email'
						required
						ref={registerEmail}
					/>
					<input
						type='password'
						placeholder='Password'
						required
						ref={registerPassword}
					/>
					<input type='submit' value='Submit' />
				</form>
			</div>
		</div>
	);
};

export default SignUp;
