import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

const ConnectModal = () => {
	const [signUp, setSetSignUp] = useState(true);

	const signUpTrueHandler = () => {
		setSetSignUp(true);
	};
	const signUpFalseHandler = () => {
		setSetSignUp(false);
	};

	return (
		<div className='connect-modal'>
			<div className='header-btn'>
				<button
					style={{
						background: signUp ? 'rgb(28, 28, 28)' : 'rgb(83, 83, 83)',
					}}
					onClick={signUpTrueHandler}>
					Sign up
				</button>
				<button
					style={{
						background: signUp ? 'rgb(83, 83, 83)' : 'rgb(28, 28, 28)',
					}}
					onClick={signUpFalseHandler}>
					Login
				</button>
			</div>
			{signUp ? <SignUp /> : <Login />}
		</div>
	);
};

export default ConnectModal;
